import { storage } from "./storage.js";

export async function seedAdminUser() {
  try {
    // Check if admin user already exists
    const existingAdmin = await storage.getAdminByUsername("admin");
    
    if (!existingAdmin) {
      // Create the default admin user
      await storage.createAdmin({
        username: "admin",
        email: "admin@example.com",
        password: "Ub@!d4690", // Will be hashed automatically in storage
        isActive: true,
      });
      
      console.log("✓ Default admin user created successfully");
      console.log("  Username: admin");
      console.log("  Password: Ub@!d4690");
    } else {
      console.log("✓ Admin user already exists");
    }
  } catch (error) {
    console.error("Failed to seed admin user:", error);
  }
}