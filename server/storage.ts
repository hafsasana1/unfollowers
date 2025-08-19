import { type User, type InsertUser, type InstagramAnalysis, type InsertAnalysis } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAnalysis(analysis: InsertAnalysis): Promise<InstagramAnalysis>;
  getAnalysis(id: string): Promise<InstagramAnalysis | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private analyses: Map<string, InstagramAnalysis>;

  constructor() {
    this.users = new Map();
    this.analyses = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAnalysis(insertAnalysis: InsertAnalysis): Promise<InstagramAnalysis> {
    const id = randomUUID();
    const analysis: InstagramAnalysis = { 
      ...insertAnalysis, 
      id, 
      userId: insertAnalysis.userId || null,
      createdAt: new Date() 
    };
    this.analyses.set(id, analysis);
    return analysis;
  }

  async getAnalysis(id: string): Promise<InstagramAnalysis | undefined> {
    return this.analyses.get(id);
  }
}

export const storage = new MemStorage();
