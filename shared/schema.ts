import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Admin users table
export const admins = pgTable("admins", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Website settings table
export const siteSettings = pgTable("site_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  siteName: text("site_name").notNull(),
  metaTitle: text("meta_title").notNull(),
  metaDescription: text("meta_description").notNull(),
  googleSearchConsole: text("google_search_console"),
  bingWebmaster: text("bing_webmaster"),
  yandexWebmaster: text("yandex_webmaster"),
  favicon: text("favicon"),
  logo: text("logo"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Google AdSense settings
export const adSenseSettings = pgTable("adsense_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  publisherId: text("publisher_id"),
  autoAds: boolean("auto_ads").default(false),
  headerAdCode: text("header_ad_code"),
  sidebarAdCode: text("sidebar_ad_code"),
  contentAdCode: text("content_ad_code"),
  footerAdCode: text("footer_ad_code"),
  isActive: boolean("is_active").default(false),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Blog posts table
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  featuredImage: text("featured_image"),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  authorId: varchar("author_id").references(() => admins.id),
});

// Site analytics table
export const siteAnalytics = pgTable("site_analytics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: timestamp("date").notNull(),
  pageviews: integer("pageviews").default(0),
  uniqueVisitors: integer("unique_visitors").default(0),
  sessions: integer("sessions").default(0),
  bounceRate: text("bounce_rate").default("0"),
  avgSessionDuration: text("avg_session_duration").default("0"),
  source: text("source"), // organic, direct, referral, social
  page: text("page").default("/"),
});

// User sessions for public users (Instagram analysis)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const instagramAnalysis = pgTable("instagram_analysis", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id"),
  totalFollowers: integer("total_followers").notNull(),
  following: integer("following").notNull(),
  unfollowers: integer("unfollowers").notNull(),
  mutualFollowers: integer("mutual_followers").notNull(),
  analysisData: text("analysis_data").notNull(), // JSON string
  createdAt: timestamp("created_at").defaultNow(),
});

// Schema validations for admin
export const insertAdminSchema = createInsertSchema(admins).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const loginAdminSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const insertSiteSettingsSchema = createInsertSchema(siteSettings).omit({
  id: true,
  updatedAt: true,
});

export const insertAdSenseSettingsSchema = createInsertSchema(adSenseSettings).omit({
  id: true,
  updatedAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  publishedAt: true,
});

export const insertAnalyticsSchema = createInsertSchema(siteAnalytics).omit({
  id: true,
});

// Original schema validations
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAnalysisSchema = createInsertSchema(instagramAnalysis).omit({
  id: true,
  createdAt: true,
});

// Types
export type Admin = typeof admins.$inferSelect;
export type InsertAdmin = z.infer<typeof insertAdminSchema>;
export type LoginAdmin = z.infer<typeof loginAdminSchema>;
export type SiteSettings = typeof siteSettings.$inferSelect;
export type InsertSiteSettings = z.infer<typeof insertSiteSettingsSchema>;
export type AdSenseSettings = typeof adSenseSettings.$inferSelect;
export type InsertAdSenseSettings = z.infer<typeof insertAdSenseSettingsSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type SiteAnalytics = typeof siteAnalytics.$inferSelect;
export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;

// Original types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;
export type InstagramAnalysis = typeof instagramAnalysis.$inferSelect;
