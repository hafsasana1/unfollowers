# Instagram Followers Tracker

## Overview

This is a full-stack web application that helps users analyze their Instagram followers and discover who has unfollowed them. The application provides a secure, privacy-focused approach where users upload their Instagram data export (ZIP file) to get detailed insights about their followers, unfollowers, and account statistics. The tool emphasizes security by not requiring Instagram login credentials and processing data locally without permanent storage.

## Recent Updates (August 17, 2025)

- **Hero Section Redesigned**: Reduced from full-screen to normal height for better UX
- **Live Demo Component**: Added animated celebrity profile mockups showing real-time stat changes
- **Legal Pages Added**: Created comprehensive Privacy Policy, Terms of Service, Cookie Policy, and Help Center
- **Navigation Enhanced**: All footer links now connect to proper legal pages
- **Removed Video Tutorial**: Simplified how-it-works section by removing video placeholder
- **Modern Design**: All pages now feature beautiful hero sections with Instagram-inspired gradients

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client is built with **React** and **TypeScript**, utilizing modern development patterns:

- **Framework**: React with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Styling**: Tailwind CSS with custom Instagram-inspired design tokens
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Build Tool**: Vite for fast development and optimized builds

The application follows a component-based architecture with clear separation between pages, reusable components, and UI primitives. The design emphasizes user experience with responsive layouts, smooth animations, and Instagram-brand visual elements.

### Backend Architecture

The server is built with **Express.js** and **TypeScript**:

- **Framework**: Express.js for RESTful API endpoints
- **File Upload**: Multer middleware for handling ZIP file uploads (50MB limit)
- **Data Processing**: Server-side analysis of Instagram data exports
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Custom Vite integration for seamless full-stack development

The backend uses a clean architecture pattern with separated route handlers, storage interfaces, and business logic. The design allows for easy extension and database integration.

### Data Storage Solutions

Currently implements **in-memory storage** with a well-defined interface pattern:

- **Storage Interface**: Abstract storage layer supporting user management and analysis data
- **Memory Implementation**: Development-focused in-memory storage
- **Database Ready**: Drizzle ORM configuration prepared for PostgreSQL integration
- **Schema Design**: Structured tables for users and Instagram analysis results

The storage layer is designed for easy migration to persistent databases while maintaining clean separation of concerns.

### Authentication and Authorization

The application currently operates in a **privacy-first, no-login mode**:

- **No Authentication Required**: Users can analyze data without creating accounts
- **Session-Based Architecture**: Infrastructure prepared for future user sessions
- **Privacy Focus**: No permanent storage of user data or Instagram credentials
- **Secure Processing**: File uploads processed and discarded after analysis

This approach prioritizes user privacy while maintaining the flexibility to add user accounts and data persistence in the future.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript support
- **Development Tools**: Vite, ESBuild, PostCSS, Autoprefixer
- **Routing**: Wouter for lightweight client-side navigation

### UI and Styling
- **Design System**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React for consistent iconography
- **Component Library**: shadcn/ui component system

### Data Management
- **API Layer**: TanStack React Query for server state management
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type validation and schema validation
- **Forms**: React Hook Form with Hookform Resolvers

### File Processing
- **Upload Handling**: Multer for multipart form data processing
- **File Type Validation**: ZIP file validation and size limits
- **Data Processing**: Custom Instagram data export parsing

### Database Integration
- **Database Provider**: Neon Database (PostgreSQL) configured via Drizzle
- **Session Storage**: PostgreSQL session store (connect-pg-simple) ready for implementation
- **Migration Tools**: Drizzle Kit for database schema management

### Development and Deployment
- **Runtime**: Node.js with ESM module support
- **Process Management**: tsx for TypeScript execution in development
- **Error Handling**: Replit-specific development tools and error overlays
- **Environment**: Configured for Replit deployment with cartographer integration