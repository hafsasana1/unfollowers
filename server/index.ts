import express, { type Request, Response, NextFunction } from "express";
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { seedAdminUser } from "./seed-admin.js";

const app = express();

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
  // Seed the admin user on startup
  await seedAdminUser();
  
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
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
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
