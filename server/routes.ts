import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import { insertAnalysisSchema } from "@shared/schema";
import { z } from "zod";

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
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
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

  const httpServer = createServer(app);
  return httpServer;
}
