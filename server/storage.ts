import { 
  type User, type InsertUser, type InstagramAnalysis, type InsertAnalysis,
  type Admin, type InsertAdmin, type SiteSettings, type InsertSiteSettings,
  type AdSenseSettings, type InsertAdSenseSettings, type BlogPost, type InsertBlogPost,
  type SiteAnalytics, type InsertAnalytics,
  admins, siteSettings, adSenseSettings, blogPosts, siteAnalytics, users, instagramAnalysis
} from "@shared/schema";
import { db } from "./db";
import { eq, and, gte, desc, asc } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

// Storage interface with all CRUD operations
export interface IStorage {
  // Instagram Analysis (existing)
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAnalysis(analysis: InsertAnalysis): Promise<InstagramAnalysis>;
  getAnalysis(id: string): Promise<InstagramAnalysis | undefined>;
  
  // Admin operations
  getAdmin(id: string): Promise<Admin | undefined>;
  getAdminByUsername(username: string): Promise<Admin | undefined>;
  createAdmin(admin: InsertAdmin): Promise<Admin>;
  verifyAdminPassword(username: string, password: string): Promise<Admin | null>;
  updateAdmin(id: string, admin: Partial<InsertAdmin>): Promise<Admin>;
  
  // Site Settings
  getSiteSettings(): Promise<SiteSettings | undefined>;
  updateSiteSettings(settings: InsertSiteSettings): Promise<SiteSettings>;
  
  // AdSense Settings
  getAdSenseSettings(): Promise<AdSenseSettings | undefined>;
  updateAdSenseSettings(settings: InsertAdSenseSettings): Promise<AdSenseSettings>;
  
  // Blog Posts
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: string): Promise<void>;
  publishBlogPost(id: string): Promise<BlogPost>;
  
  // Analytics
  recordAnalytics(analytics: InsertAnalytics): Promise<SiteAnalytics>;
  getAnalytics(startDate?: Date, endDate?: Date): Promise<SiteAnalytics[]>;
  getAnalyticsSummary(days: number): Promise<{
    pageviews: number;
    uniqueVisitors: number;
    sessions: number;
    avgBounceRate: string;
  }>;
}

export class DatabaseStorage implements IStorage {
  // Instagram Analysis (existing)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createAnalysis(insertAnalysis: InsertAnalysis): Promise<InstagramAnalysis> {
    const [analysis] = await db.insert(instagramAnalysis).values({
      ...insertAnalysis,
      userId: insertAnalysis.userId || null,
    }).returning();
    return analysis;
  }

  async getAnalysis(id: string): Promise<InstagramAnalysis | undefined> {
    const [analysis] = await db.select().from(instagramAnalysis).where(eq(instagramAnalysis.id, id));
    return analysis || undefined;
  }

  // Admin operations
  async getAdmin(id: string): Promise<Admin | undefined> {
    const [admin] = await db.select().from(admins).where(eq(admins.id, id));
    return admin || undefined;
  }

  async getAdminByUsername(username: string): Promise<Admin | undefined> {
    const [admin] = await db.select().from(admins).where(eq(admins.username, username));
    return admin || undefined;
  }

  async createAdmin(insertAdmin: InsertAdmin): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(insertAdmin.password, 10);
    const [admin] = await db.insert(admins).values({
      ...insertAdmin,
      password: hashedPassword,
    }).returning();
    return admin;
  }

  async verifyAdminPassword(username: string, password: string): Promise<Admin | null> {
    const admin = await this.getAdminByUsername(username);
    if (!admin || !admin.isActive) return null;
    
    const isValid = await bcrypt.compare(password, admin.password);
    return isValid ? admin : null;
  }

  async updateAdmin(id: string, updateAdmin: Partial<InsertAdmin>): Promise<Admin> {
    const updateData = { ...updateAdmin };
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    
    const [admin] = await db.update(admins)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(admins.id, id))
      .returning();
    return admin;
  }

  // Site Settings
  async getSiteSettings(): Promise<SiteSettings | undefined> {
    const [settings] = await db.select().from(siteSettings).limit(1);
    return settings || undefined;
  }

  async updateSiteSettings(insertSettings: InsertSiteSettings): Promise<SiteSettings> {
    const existing = await this.getSiteSettings();
    
    if (existing) {
      const [settings] = await db.update(siteSettings)
        .set({ ...insertSettings, updatedAt: new Date() })
        .where(eq(siteSettings.id, existing.id))
        .returning();
      return settings;
    } else {
      const [settings] = await db.insert(siteSettings).values(insertSettings).returning();
      return settings;
    }
  }

  // AdSense Settings
  async getAdSenseSettings(): Promise<AdSenseSettings | undefined> {
    const [settings] = await db.select().from(adSenseSettings).limit(1);
    return settings || undefined;
  }

  async updateAdSenseSettings(insertSettings: InsertAdSenseSettings): Promise<AdSenseSettings> {
    const existing = await this.getAdSenseSettings();
    
    if (existing) {
      const [settings] = await db.update(adSenseSettings)
        .set({ ...insertSettings, updatedAt: new Date() })
        .where(eq(adSenseSettings.id, existing.id))
        .returning();
      return settings;
    } else {
      const [settings] = await db.insert(adSenseSettings).values(insertSettings).returning();
      return settings;
    }
  }

  // Blog Posts
  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    if (published !== undefined) {
      return await db.select().from(blogPosts)
        .where(eq(blogPosts.isPublished, published))
        .orderBy(desc(blogPosts.createdAt));
    }
    
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(insertPost).returning();
    return post;
  }

  async updateBlogPost(id: string, updatePost: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ ...updatePost, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async deleteBlogPost(id: string): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async publishBlogPost(id: string): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ 
        isPublished: true, 
        publishedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  // Analytics
  async recordAnalytics(insertAnalytics: InsertAnalytics): Promise<SiteAnalytics> {
    const [analytics] = await db.insert(siteAnalytics).values(insertAnalytics).returning();
    return analytics;
  }

  async getAnalytics(startDate?: Date, endDate?: Date): Promise<SiteAnalytics[]> {
    if (startDate && endDate) {
      return await db.select().from(siteAnalytics)
        .where(and(
          gte(siteAnalytics.date, startDate),
          gte(siteAnalytics.date, endDate)
        ))
        .orderBy(desc(siteAnalytics.date));
    }
    
    return await db.select().from(siteAnalytics).orderBy(desc(siteAnalytics.date));
  }

  async getAnalyticsSummary(days: number): Promise<{
    pageviews: number;
    uniqueVisitors: number;
    sessions: number;
    avgBounceRate: string;
  }> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const analytics = await this.getAnalytics(startDate, new Date());
    
    const summary = analytics.reduce((acc, curr) => ({
      pageviews: acc.pageviews + (curr.pageviews || 0),
      uniqueVisitors: acc.uniqueVisitors + (curr.uniqueVisitors || 0),
      sessions: acc.sessions + (curr.sessions || 0),
      bounceRateSum: acc.bounceRateSum + parseFloat(curr.bounceRate || '0'),
      count: acc.count + 1,
    }), { pageviews: 0, uniqueVisitors: 0, sessions: 0, bounceRateSum: 0, count: 0 });
    
    return {
      pageviews: summary.pageviews,
      uniqueVisitors: summary.uniqueVisitors,
      sessions: summary.sessions,
      avgBounceRate: summary.count > 0 ? (summary.bounceRateSum / summary.count).toFixed(2) : '0',
    };
  }

  // AdSense sites methods (placeholder for future database implementation)
  async getAdSenseSites(): Promise<any[]> {
    return [];
  }

  async createAdSenseSite(siteData: any): Promise<any> {
    return { 
      id: Math.random().toString(36), 
      ...siteData, 
      status: 'pending', 
      isVerified: false, 
      submittedAt: new Date().toISOString() 
    };
  }

  async verifyAdSenseSite(siteId: string): Promise<any> {
    return { 
      id: siteId, 
      status: 'verified', 
      isVerified: true, 
      verifiedAt: new Date().toISOString() 
    };
  }

  async deleteAdSenseSite(siteId: string): Promise<void> {
    // In a real implementation, this would delete from database
  }
}

export const storage = new DatabaseStorage();
