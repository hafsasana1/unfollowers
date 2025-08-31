import express, { type Request, Response, NextFunction } from "express";
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { seedAdminUser } from "./seed-admin.js";

const app = express();

// Rate limiting to prevent server overload - more lenient for search crawlers
const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => {
    // Be more lenient with known search crawlers
    const userAgent = req.headers['user-agent']?.toLowerCase() || '';
    if (userAgent.includes('googlebot') || userAgent.includes('bingbot') || userAgent.includes('slurp')) {
      return `crawler:${req.ip || 'unknown'}`;
    }
    return `user:${req.ip || 'unknown'}`;
  },
  points: 200, // High limit for all requests to prevent blocking legitimate traffic
  duration: 60, // 1 minute window
  blockDuration: 30, // Block for 30 seconds if limit exceeded
});

// Apply rate limiting only to API routes in production, exempt SEO-critical paths
app.use(async (req, res, next) => {
  // Skip rate limiting for SEO-critical endpoints, development, and static assets
  if (process.env.NODE_ENV !== 'production' || 
      req.url.includes('.js') || req.url.includes('.css') || 
      req.url.includes('.png') || req.url.includes('.jpg') ||
      req.url.includes('@') || req.url.includes('src/') ||
      req.url === '/robots.txt' || req.url === '/sitemap.xml' ||
      req.url === '/health' || req.url === '/ping' || req.url === '/status') {
    return next();
  }

  try {
    await rateLimiter.consume(req.ip || 'unknown');
    next();
  } catch (rejRes: any) {
    log(`Rate limit exceeded for ${req.ip} - ${req.method} ${req.url}`);
    res.status(429).json({ 
      message: 'Too Many Requests', 
      retryAfter: Math.round(rejRes.msBeforeNext) || 30000 
    });
  }
});

// Server timeout configurations for better connectivity
app.use((req, res, next) => {
  // Set server response timeout to 30 seconds
  res.setTimeout(30000, () => {
    log(`Request timeout: ${req.method} ${req.url}`);
    if (!res.headersSent) {
      res.status(504).json({ message: "Request timeout" });
    }
  });
  
  // Set request timeout to 10 seconds
  req.setTimeout(10000, () => {
    log(`Request body timeout: ${req.method} ${req.url}`);
    if (!res.headersSent) {
      res.status(408).json({ message: "Request timeout" });
    }
  });
  
  next();
});

// Security and performance middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development with Vite HMR
  crossOriginEmbedderPolicy: false
}));
app.use(compression({
  level: 6, // Balanced compression
  threshold: 1024, // Only compress files larger than 1KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://instaunfollowerstracker.com', 'https://unfollowers-tracker.replit.app'] 
    : true,
  credentials: true
}));

// HTTPS and www redirect middleware - CRITICAL FOR SEO
app.use((req, res, next) => {
  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && req.header('x-forwarded-proto') !== 'https') {
    return res.redirect(301, `https://${req.header('host')}${req.url}`);
  }
  
  // Force non-www domain
  if (req.headers.host && req.headers.host.startsWith('www.')) {
    const protocol = req.header('x-forwarded-proto') || 'https';
    const newHost = req.headers.host.replace(/^www\./, '');
    return res.redirect(301, `${protocol}://${newHost}${req.url}`);
  }
  
  next();
});

// Add caching headers for static assets
app.use((req, res, next) => {
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|woff|ttf|eot)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
  } else if (req.url.match(/\.(html)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour
  }
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Seed the admin user on startup - don't let this fail the server
  try {
    await seedAdminUser();
    log('Admin user seeded successfully');
  } catch (error) {
    log('Failed to seed admin user, continuing anyway...');
    console.error('Admin seed error:', error);
  }
  
  // Add comprehensive health check endpoints for Google Search Console
  app.get('/health', (_req, res) => {
    const memUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    res.status(200).json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      uptime: Math.floor(uptime),
      memory: {
        rss: Math.round(memUsage.rss / 1024 / 1024) + 'MB',
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + 'MB',
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + 'MB'
      },
      nodeVersion: process.version,
      platform: process.platform
    });
  });

  // Lightweight ping endpoint for quick connectivity checks
  app.get('/ping', (_req, res) => {
    res.status(200).send('pong');
  });

  // Status endpoint with server metrics
  app.get('/status', (_req, res) => {
    res.status(200).json({
      server: 'Instagram Unfollowers Tracker',
      status: 'operational',
      version: '2.0.0',
      timestamp: new Date().toISOString()
    });
  });

  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain');
    res.sendFile('robots.txt', { root: './public' }, (err) => {
      if (err) {
        res.status(404).send('User-agent: *\nAllow: /');
      }
    });
  });

  app.get('/sitemap.xml', (_req, res) => {
    res.type('application/xml');
    res.sendFile('sitemap.xml', { root: './public' }, (err) => {
      if (err) {
        res.status(404).send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
      }
    });
  });

  const server = await registerRoutes(app);

  // Global error handler - DO NOT throw errors, handle gracefully
  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    // Log error for debugging but don't crash the server
    log(`Error ${status}: ${message} - ${req.method} ${req.url}`);
    console.error('Server error:', err);

    // Send error response if not already sent
    if (!res.headersSent) {
      res.status(status).json({ message, path: req.url, method: req.method });
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  
  // Configure server with proper settings for stability
  server.keepAliveTimeout = 65000; // Keep connections alive
  server.headersTimeout = 66000; // Headers timeout slightly higher than keepAlive
  server.requestTimeout = 30000; // Request timeout
  server.timeout = 30000; // Server timeout
  
  const serverInstance = server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });

  // Graceful shutdown handling
  const gracefulShutdown = (signal: string) => {
    log(`Received ${signal}, shutting down gracefully...`);
    serverInstance.close((err) => {
      if (err) {
        log(`Error during shutdown: ${err.message}`);
        process.exit(1);
      }
      log('Server closed successfully');
      process.exit(0);
    });
    
    // Force shutdown after 10 seconds
    setTimeout(() => {
      log('Forcing shutdown...');
      process.exit(1);
    }, 10000);
  };

  // Memory monitoring to prevent crashes
  const memoryMonitor = setInterval(() => {
    const memUsage = process.memoryUsage();
    const heapUsedMB = memUsage.heapUsed / 1024 / 1024;
    
    // Log warning if memory usage is high
    if (heapUsedMB > 200) {
      log(`High memory usage: ${Math.round(heapUsedMB)}MB`);
    }
    
    // Force garbage collection if available and memory is very high
    if (heapUsedMB > 400 && global.gc) {
      log('Forcing garbage collection due to high memory usage');
      global.gc();
    }
  }, 30000); // Check every 30 seconds

  // Handle shutdown signals
  process.on('SIGTERM', () => {
    clearInterval(memoryMonitor);
    gracefulShutdown('SIGTERM');
  });
  process.on('SIGINT', () => {
    clearInterval(memoryMonitor);
    gracefulShutdown('SIGINT');
  });
  
  // Handle uncaught exceptions and rejections - don't crash immediately
  process.on('uncaughtException', (err) => {
    log(`Uncaught Exception: ${err.message}`);
    console.error('Uncaught Exception:', err);
    // Don't shutdown immediately for uncaught exceptions
    // Log and continue to serve other requests
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    log(`Unhandled Rejection at: ${promise} reason: ${reason}`);
    console.error('Unhandled Rejection:', reason);
    // Don't shutdown for unhandled rejections
    // Log and continue serving
  });
})().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
