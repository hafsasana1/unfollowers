import { type Request, type Response, type NextFunction } from "express";
// import jwt from "jsonwebtoken"; // Will install later
import { storage } from "./storage";
import { type Admin } from "@shared/schema";

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";

export interface AuthRequest extends Request {
  admin?: Admin;
}

export const generateToken = (admin: Admin): string => {
  return jwt_impl.sign(
    { 
      adminId: admin.id, 
      username: admin.username, 
      email: admin.email 
    }, 
    JWT_SECRET, 
    { expiresIn: "7d" }
  );
};

export const verifyToken = (token: string): any => {
  try {
    return jwt_impl.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const authenticateAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.adminToken || req.headers.authorization?.replace("Bearer ", "");
    
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token." });
    }

    const admin = await storage.getAdmin(decoded.adminId);
    if (!admin || !admin.isActive) {
      return res.status(401).json({ message: "Admin not found or inactive." });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error during authentication." });
  }
};

// Mock JWT implementation until we can install the real package
const mockJwt = {
  sign: (payload: any, secret: string, options?: any) => {
    return btoa(JSON.stringify({ ...payload, exp: Date.now() + (7 * 24 * 60 * 60 * 1000) }));
  },
  verify: (token: string, secret: string) => {
    try {
      const decoded = JSON.parse(atob(token));
      if (decoded.exp < Date.now()) throw new Error("Token expired");
      return decoded;
    } catch {
      throw new Error("Invalid token");
    }
  }
};

// Use mock JWT for now
const jwt_impl = typeof jwt !== "undefined" ? jwt : mockJwt;