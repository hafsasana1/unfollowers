# Instagram Unfollowers Tracker - Production Hosting Guide

This guide will help you deploy your Instagram Unfollowers Tracker application to a production server.

## Prerequisites

Before hosting, ensure you have:
- Node.js 18+ installed
- PostgreSQL database access
- SSL certificate (for HTTPS)
- Domain name (optional but recommended)

## Environment Variables Required

Create a `.env` file with these variables:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database
PGHOST=your-postgres-host
PGPORT=5432
PGUSER=your-postgres-user
PGPASSWORD=your-postgres-password
PGDATABASE=your-database-name

# Application
NODE_ENV=production
PORT=5000

# Security (Generate random values)
JWT_SECRET=your-super-secure-jwt-secret-here
SESSION_SECRET=your-super-secure-session-secret-here
```

## Hosting Platform Options

### 1. Replit (Easiest - Already Configured)

Your app is already running on Replit! To deploy:

1. Click the "Deploy" button in your Replit project
2. Choose your deployment tier
3. Configure your custom domain (optional)
4. Your app will be available at `your-project-name.replit.app`

**Benefits:**
- Zero configuration required
- Automatic SSL certificates
- Built-in database hosting
- Easy scaling options

### 2. Railway (Recommended for Production)

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Initialize:**
   ```bash
   railway login
   railway init
   ```

3. **Add PostgreSQL:**
   ```bash
   railway add postgresql
   ```

4. **Deploy:**
   ```bash
   railway up
   ```

5. **Set Environment Variables:**
   - Go to Railway dashboard
   - Add all environment variables from above
   - Railway will auto-generate DATABASE_URL

### 3. Vercel + Neon Database

1. **Create Neon Database:**
   - Go to https://neon.tech
   - Create new project
   - Copy connection string

2. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Configure Environment Variables:**
   - Go to Vercel dashboard
   - Add environment variables in Settings
   - Redeploy

### 4. VPS/Dedicated Server (Advanced)

#### Server Setup (Ubuntu/Debian):

1. **Update System:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PostgreSQL:**
   ```bash
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql
   sudo systemctl enable postgresql
   ```

4. **Setup Database:**
   ```bash
   sudo -u postgres createuser --interactive
   sudo -u postgres createdb instagram_tracker
   ```

5. **Clone and Setup Application:**
   ```bash
   git clone your-repository
   cd instagram-unfollowers-tracker
   npm install
   npm run build
   ```

6. **Setup PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   pm2 start server/index.ts --name "instagram-tracker"
   pm2 startup
   pm2 save
   ```

7. **Setup Nginx Reverse Proxy:**
   ```bash
   sudo apt install nginx
   ```

   Create `/etc/nginx/sites-available/instagram-tracker`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable Site and SSL:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/instagram-tracker /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   
   # Install Certbot for SSL
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Database Setup

### Initialize Schema:

```bash
npm run db:push
```

### Create Admin User:

```bash
npm run seed:admin
```

Default admin credentials:
- Username: `admin`
- Password: `Ub@!d4690`

**⚠️ IMPORTANT: Change default password immediately in production!**

## Security Checklist

- [ ] Change default admin password
- [ ] Use strong JWT and session secrets
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Configure rate limiting
- [ ] Enable security headers
- [ ] Set up monitoring and logging

## Performance Optimization

1. **Enable Gzip Compression:**
   ```javascript
   app.use(compression());
   ```

2. **Add Redis Caching:**
   ```bash
   npm install redis
   ```

3. **Database Optimization:**
   - Add indexes for frequently queried columns
   - Set up connection pooling
   - Regular maintenance and vacuuming

4. **CDN Setup:**
   - Use Cloudflare for static assets
   - Enable browser caching

## Monitoring and Maintenance

### Health Checks:
```bash
# Check application status
curl https://your-domain.com/health

# Monitor logs
pm2 logs instagram-tracker
```

### Database Backups:
```bash
# Daily backup script
pg_dump -h localhost -U username instagram_tracker > backup_$(date +%Y%m%d).sql
```

### Updates:
```bash
git pull origin main
npm install
npm run build
pm2 restart instagram-tracker
```

## Support and Troubleshooting

### Common Issues:

1. **Database Connection Errors:**
   - Check DATABASE_URL format
   - Verify firewall settings
   - Ensure PostgreSQL is running

2. **Port Already in Use:**
   ```bash
   sudo lsof -i :5000
   sudo kill -9 PID
   ```

3. **Permission Errors:**
   ```bash
   sudo chown -R $USER:$USER /path/to/app
   ```

### Getting Help:
- Check application logs: `pm2 logs`
- Monitor system resources: `htop`
- Database logs: `sudo tail -f /var/log/postgresql/postgresql-*.log`

## Scaling Considerations

For high traffic applications:
- Use load balancers (nginx, HAProxy)
- Database read replicas
- Redis session store
- Horizontal scaling with Docker/Kubernetes
- CDN for static assets

---

## Quick Start Commands

```bash
# For Railway
railway add postgresql
railway up

# For Vercel + Neon
vercel --prod

# For VPS
pm2 start server/index.ts --name "instagram-tracker"
sudo nginx -t && sudo systemctl reload nginx
```

Your Instagram Unfollowers Tracker is now ready for production! 🚀