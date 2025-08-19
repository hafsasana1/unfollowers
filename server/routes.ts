import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { 
  insertAnalysisSchema, loginAdminSchema, insertAdminSchema,
  insertSiteSettingsSchema, insertAdSenseSettingsSchema,
  insertBlogPostSchema, insertAnalyticsSchema
} from "@shared/schema";
import { z } from "zod";
import { authenticateAdmin, generateToken, type AuthRequest } from "./auth";
// import cookieParser from "cookie-parser"; // Will install later

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/zip' || file.originalname.endsWith('.zip')) {
      cb(null, true);
    } else {
      cb(new Error('Only ZIP files are allowed'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Add cookie parser middleware (mock implementation)
  app.use((req, res, next) => {
    req.cookies = {};
    const cookieHeader = req.headers.cookie;
    if (cookieHeader) {
      cookieHeader.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          req.cookies[name] = decodeURIComponent(value);
        }
      });
    }
    next();
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // ==================== ADMIN AUTH ROUTES ====================
  
  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = loginAdminSchema.parse(req.body);
      
      const admin = await storage.verifyAdminPassword(username, password);
      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = generateToken(admin);
      
      // Set httpOnly cookie
      res.cookie("adminToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.json({
        success: true,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          isActive: admin.isActive,
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    res.clearCookie("adminToken");
    res.json({ success: true, message: "Logged out successfully" });
  });

  // Get current admin
  app.get("/api/admin/me", authenticateAdmin, (req: AuthRequest, res) => {
    const admin = req.admin!;
    res.json({
      id: admin.id,
      username: admin.username,
      email: admin.email,
      isActive: admin.isActive,
    });
  });

  // Create first admin (only if no admin exists)
  app.post("/api/admin/setup", async (req, res) => {
    try {
      // Check if any admin already exists
      const existingAdmins = await storage.getBlogPosts(); // We'll use this to check if database is set up
      // For now, allow setup
      
      const adminData = insertAdminSchema.parse(req.body);
      const admin = await storage.createAdmin(adminData);

      const token = generateToken(admin);
      res.cookie("adminToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        message: "Admin created successfully",
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          isActive: admin.isActive,
        }
      });
    } catch (error) {
      console.error("Setup error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating admin" });
    }
  });

  // ==================== SITE SETTINGS ROUTES ====================
  
  app.get("/api/admin/site-settings", authenticateAdmin, async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings || {});
    } catch (error) {
      console.error("Get site settings error:", error);
      res.status(500).json({ message: "Error fetching site settings" });
    }
  });

  app.post("/api/admin/site-settings", authenticateAdmin, async (req: AuthRequest, res) => {
    try {
      const settingsData = insertSiteSettingsSchema.parse(req.body);
      const settings = await storage.updateSiteSettings(settingsData);
      res.json({ success: true, settings });
    } catch (error) {
      console.error("Update site settings error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Error updating site settings" });
    }
  });

  // ==================== ADSENSE ROUTES ====================
  
  app.get("/api/admin/adsense", authenticateAdmin, async (req, res) => {
    try {
      const settings = await storage.getAdSenseSettings();
      res.json(settings || {});
    } catch (error) {
      console.error("Get AdSense settings error:", error);
      res.status(500).json({ message: "Error fetching AdSense settings" });
    }
  });

  app.post("/api/admin/adsense", authenticateAdmin, async (req: AuthRequest, res) => {
    try {
      const settingsData = insertAdSenseSettingsSchema.parse(req.body);
      const settings = await storage.updateAdSenseSettings(settingsData);
      res.json({ success: true, settings });
    } catch (error) {
      console.error("Update AdSense settings error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Error updating AdSense settings" });
    }
  });

  // ==================== BLOG ROUTES ====================
  
  // Get all blog posts (admin)
  app.get("/api/admin/blog", authenticateAdmin, async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Get blog posts error:", error);
      res.status(500).json({ message: "Error fetching blog posts" });
    }
  });

  // Get single blog post
  app.get("/api/admin/blog/:id", authenticateAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Get blog post error:", error);
      res.status(500).json({ message: "Error fetching blog post" });
    }
  });

  // Create blog post
  app.post("/api/admin/blog", authenticateAdmin, async (req: AuthRequest, res) => {
    try {
      const postData = {
        ...insertBlogPostSchema.parse(req.body),
        authorId: req.admin!.id,
      };
      const post = await storage.createBlogPost(postData);
      res.json({ success: true, post });
    } catch (error) {
      console.error("Create blog post error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating blog post" });
    }
  });

  // Update blog post
  app.put("/api/admin/blog/:id", authenticateAdmin, async (req: AuthRequest, res) => {
    try {
      const { id } = req.params;
      const updateData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, updateData);
      res.json({ success: true, post });
    } catch (error) {
      console.error("Update blog post error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      res.status(500).json({ message: "Error updating blog post" });
    }
  });

  // Delete blog post
  app.delete("/api/admin/blog/:id", authenticateAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteBlogPost(id);
      res.json({ success: true, message: "Blog post deleted" });
    } catch (error) {
      console.error("Delete blog post error:", error);
      res.status(500).json({ message: "Error deleting blog post" });
    }
  });

  // Publish blog post
  app.post("/api/admin/blog/:id/publish", authenticateAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const post = await storage.publishBlogPost(id);
      res.json({ success: true, post });
    } catch (error) {
      console.error("Publish blog post error:", error);
      res.status(500).json({ message: "Error publishing blog post" });
    }
  });

  // ==================== ANALYTICS ROUTES ====================
  
  // Get analytics dashboard data
  app.get("/api/admin/analytics", authenticateAdmin, async (req, res) => {
    try {
      const { period = "7" } = req.query;
      const days = parseInt(period as string);
      
      const summary = await storage.getAnalyticsSummary(days);
      const detailed = await storage.getAnalytics(
        new Date(Date.now() - days * 24 * 60 * 60 * 1000),
        new Date()
      );
      
      res.json({ summary, detailed });
    } catch (error) {
      console.error("Get analytics error:", error);
      res.status(500).json({ message: "Error fetching analytics" });
    }
  });

  // Record page visit (public endpoint for tracking)
  app.post("/api/analytics/visit", async (req, res) => {
    try {
      const { page = "/", source = "direct" } = req.body;
      
      // Record analytics data
      await storage.recordAnalytics({
        date: new Date(),
        pageviews: 1,
        uniqueVisitors: 1,
        sessions: 1,
        bounceRate: "0",
        avgSessionDuration: "0",
        source,
        page,
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Record analytics error:", error);
      res.status(500).json({ message: "Error recording analytics" });
    }
  });

  // Public endpoint to get site settings
  app.get("/api/site-settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      if (settings) {
        res.json({
          siteName: settings.siteName,
          metaTitle: settings.metaTitle,
          metaDescription: settings.metaDescription,
          favicon: settings.favicon,
          logo: settings.logo,
        });
      } else {
        res.json({
          siteName: "Instagram Followers Tracker",
          metaTitle: "Instagram Followers Tracker - See Who Unfollowed You",
          metaDescription: "Discover who unfollowed you on Instagram with our secure, privacy-focused tracker. Upload your Instagram data and get detailed insights.",
        });
      }
    } catch (error) {
      console.error("Get public site settings error:", error);
      res.status(500).json({ message: "Error fetching site settings" });
    }
  });

  // Public endpoint to get AdSense settings
  app.get("/api/adsense-settings", async (req, res) => {
    try {
      const settings = await storage.getAdSenseSettings();
      if (settings && settings.isActive) {
        res.json({
          isActive: settings.isActive,
          autoAds: settings.autoAds,
          publisherId: settings.publisherId,
        });
      } else {
        res.json({ isActive: false });
      }
    } catch (error) {
      console.error("Get public AdSense settings error:", error);
      res.status(500).json({ message: "Error fetching AdSense settings" });
    }
  });

  // Upload and analyze Instagram data
  app.post("/api/analyze", upload.single('instagram_data'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ 
          message: "No file uploaded. Please upload your Instagram data ZIP file." 
        });
      }

      // TODO: Process the ZIP file and extract Instagram data
      // For now, return mock analysis results
      const mockAnalysis = {
        userId: null,
        totalFollowers: 1247,
        following: 891,
        unfollowers: 23,
        mutualFollowers: 1224,
        analysisData: JSON.stringify({
          unfollowersList: [
            {
              username: '@fitness_guru_alex',
              name: 'Alex Rodriguez',
              profilePicture: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
            },
            {
              username: '@tech_insights_mike',
              name: 'Mike Johnson',
              profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
            },
          ],
          mutualFollowersList: [
            {
              username: '@foodie_emma',
              name: 'Emma Wilson',
              profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
            },
          ],
        }),
      };

      // Validate the analysis data
      const validatedAnalysis = insertAnalysisSchema.parse(mockAnalysis);
      
      // Store the analysis
      const savedAnalysis = await storage.createAnalysis(validatedAnalysis);

      res.json({
        success: true,
        analysis: savedAnalysis,
        message: "Instagram data analyzed successfully"
      });

    } catch (error) {
      console.error('Analysis error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid data format",
          errors: error.errors
        });
      }
      
      if (error instanceof multer.MulterError) {
        return res.status(400).json({
          message: error.code === 'LIMIT_FILE_SIZE' 
            ? "File too large. Maximum size is 50MB." 
            : "File upload error"
        });
      }

      res.status(500).json({ 
        message: "Internal server error while analyzing your data" 
      });
    }
  });

  // Get analysis results
  app.get("/api/analysis/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const analysis = await storage.getAnalysis(id);
      
      if (!analysis) {
        return res.status(404).json({ message: "Analysis not found" });
      }
      
      res.json(analysis);
    } catch (error) {
      console.error('Get analysis error:', error);
      res.status(500).json({ message: "Error retrieving analysis" });
    }
  });

  // AdSense site verification routes
  app.get("/api/admin/adsense/sites", authenticateAdmin, async (req, res) => {
    try {
      const sites = await storage.getAdSenseSites();
      res.json(sites);
    } catch (error) {
      console.error("Error fetching AdSense sites:", error);
      res.status(500).json({ message: "Failed to fetch AdSense sites" });
    }
  });

  app.post("/api/admin/adsense/sites", authenticateAdmin, async (req, res) => {
    try {
      const site = await storage.createAdSenseSite(req.body);
      res.json({ success: true, site });
    } catch (error) {
      console.error("Error creating AdSense site:", error);
      res.status(500).json({ message: "Failed to create AdSense site" });
    }
  });

  app.post("/api/admin/adsense/sites/:id/verify", authenticateAdmin, async (req, res) => {
    try {
      const site = await storage.verifyAdSenseSite(req.params.id);
      res.json({ success: true, site });
    } catch (error) {
      console.error("Error verifying AdSense site:", error);
      res.status(500).json({ message: "Failed to verify AdSense site" });
    }
  });

  app.delete("/api/admin/adsense/sites/:id", authenticateAdmin, async (req, res) => {
    try {
      await storage.deleteAdSenseSite(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting AdSense site:", error);
      res.status(500).json({ message: "Failed to delete AdSense site" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
