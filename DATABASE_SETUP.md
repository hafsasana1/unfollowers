# Database Setup and Content Guide

This guide explains how to set up and populate your PostgreSQL database for the Instagram Unfollowers Tracker application.

## Database Schema Overview

The application uses the following main tables:

### Core Tables
- **admins** - Admin user accounts for backend management
- **site_settings** - Website configuration and SEO settings
- **adsense_settings** - Google AdSense configuration
- **blog_posts** - Blog content for SEO and user education
- **site_analytics** - Traffic and engagement metrics
- **users** - Public user sessions (for future features)
- **instagram_analysis** - Analysis results storage

## Initial Setup

### 1. Create Database Schema

The schema is automatically created when you run:

```bash
npm run db:push
```

This command reads from `shared/schema.ts` and creates all tables with proper relationships.

### 2. Create Default Admin User

Run the admin seeding script:

```bash
npm run seed:admin
```

**Default Credentials:**
- Username: `admin`
- Password: `Ub@!d4690`

⚠️ **IMPORTANT: Change this password immediately in production!**

### 3. Populate Initial Content

The database has been pre-populated with:

#### Site Settings
- Site name: "Instagram Unfollowers Tracker"
- SEO-optimized meta title and description
- Google Search Console verification placeholder
- Favicon and logo paths

#### Blog Content
- "How to See Who Unfollowed You on Instagram" - Complete privacy guide
- "Ghost Followers on Instagram" - How to find and remove inactive accounts
- Additional SEO-optimized articles for better search rankings

#### Analytics Data
- Sample traffic data for the dashboard
- Realistic pageview and engagement metrics
- Various traffic sources (organic, direct, social)

## Database Management Commands

### View Current Data

```sql
-- Check site settings
SELECT * FROM site_settings;

-- View blog posts
SELECT title, slug, is_published, published_at FROM blog_posts;

-- Check analytics
SELECT date, pageviews, unique_visitors, source FROM site_analytics ORDER BY date DESC;

-- List all admins
SELECT username, email, is_active FROM admins;
```

### Update Site Settings

```sql
-- Update meta information
UPDATE site_settings SET 
  meta_title = 'Your Custom Title',
  meta_description = 'Your custom description'
WHERE id = (SELECT id FROM site_settings LIMIT 1);

-- Add Google Search Console verification
UPDATE site_settings SET 
  google_search_console = 'google1234567890123456.html'
WHERE id = (SELECT id FROM site_settings LIMIT 1);
```

### Manage Blog Posts

```sql
-- Publish a blog post
UPDATE blog_posts SET 
  is_published = true,
  published_at = NOW()
WHERE slug = 'your-post-slug';

-- Create new blog post
INSERT INTO blog_posts (title, slug, content, excerpt, meta_title, meta_description, is_published, author_id)
VALUES (
  'Your Post Title',
  'your-post-slug',
  'Your full content here...',
  'Short excerpt...',
  'SEO Title',
  'SEO Description',
  true,
  (SELECT id FROM admins LIMIT 1)
);
```

### Analytics Tracking

```sql
-- Add daily analytics
INSERT INTO site_analytics (date, pageviews, unique_visitors, sessions, bounce_rate, source, page)
VALUES (
  CURRENT_DATE,
  1500,  -- pageviews
  1200,  -- unique visitors
  1350,  -- sessions
  '42.5%', -- bounce rate
  'organic', -- source
  '/' -- page
);

-- View traffic trends
SELECT 
  date,
  pageviews,
  unique_visitors,
  bounce_rate,
  source
FROM site_analytics 
WHERE date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY date DESC;
```

## Advanced Database Operations

### Backup Database

```bash
# Create backup
pg_dump -h $PGHOST -U $PGUSER -d $PGDATABASE > backup_$(date +%Y%m%d).sql

# Restore from backup
psql -h $PGHOST -U $PGUSER -d $PGDATABASE < backup_20250101.sql
```

### Performance Optimization

```sql
-- Add indexes for better performance
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published, published_at);
CREATE INDEX idx_analytics_date ON site_analytics(date);
CREATE INDEX idx_analytics_page ON site_analytics(page);

-- Analyze table statistics
ANALYZE blog_posts;
ANALYZE site_analytics;
```

### Data Cleanup

```sql
-- Remove old analytics data (keep last 365 days)
DELETE FROM site_analytics 
WHERE date < CURRENT_DATE - INTERVAL '365 days';

-- Clean up unpublished draft posts older than 30 days
DELETE FROM blog_posts 
WHERE is_published = false 
AND created_at < NOW() - INTERVAL '30 days';
```

## Environment Configuration

Ensure these environment variables are set:

```env
DATABASE_URL=postgresql://username:password@host:port/database
PGHOST=your-postgres-host
PGPORT=5432
PGUSER=your-postgres-user
PGPASSWORD=your-postgres-password
PGDATABASE=your-database-name
```

## Security Best Practices

1. **Change Default Passwords**
   ```sql
   UPDATE admins SET password = 'new-hashed-password' WHERE username = 'admin';
   ```

2. **Regular Backups**
   Set up automated daily backups:
   ```bash
   # Add to crontab
   0 2 * * * pg_dump -h $PGHOST -U $PGUSER -d $PGDATABASE > /backups/backup_$(date +\%Y\%m\%d).sql
   ```

3. **Monitor Database Size**
   ```sql
   SELECT 
     table_name,
     pg_size_pretty(pg_total_relation_size(table_name)) as size
   FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```

## Troubleshooting

### Connection Issues
```bash
# Test database connection
psql -h $PGHOST -U $PGUSER -d $PGDATABASE -c "SELECT NOW();"
```

### Schema Issues
```bash
# Reset and recreate schema
npm run db:push --force
npm run seed:admin
```

### Performance Issues
```sql
-- Check slow queries
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements 
ORDER BY total_time DESC 
LIMIT 10;
```

## Sample Content for Testing

The database includes realistic sample data:

- **Site Settings**: Pre-configured for Instagram unfollowers tracking
- **Blog Posts**: 2 comprehensive SEO articles
- **Analytics**: 6 days of sample traffic data
- **Admin User**: Ready-to-use admin account

This provides a complete foundation for your production application while maintaining professional content quality and SEO optimization.

## Next Steps

1. Update admin password
2. Customize site settings for your domain
3. Add your Google AdSense publisher ID
4. Create additional blog content
5. Set up automated backups
6. Monitor analytics and performance

Your database is now ready for production use! 🚀