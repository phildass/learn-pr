# Deployment Guide - Learn PR

This guide covers deploying Learn PR to production on learn-pr.iiskills.cloud subdomain.

## Deployment Options

Learn PR can be deployed to various platforms. We recommend Vercel for optimal Next.js performance.

## Option 1: Vercel (Recommended)

### Prerequisites

- GitHub repository access
- Vercel account ([Sign up](https://vercel.com))
- Domain access to iiskills.cloud

### Steps

1. **Connect GitHub Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import the learn-pr repository
   - Select the main branch

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set Environment Variables**

   Add all production environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-production-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_APP_URL=https://learn-pr.iiskills.cloud
   NEXT_PUBLIC_APP_NAME=Learn PR
   NEXT_PUBLIC_DOMAIN=learn-pr.iiskills.cloud
   EMAIL_FROM=no-reply@iiskill.in
   EMAIL_PROVIDER_API_KEY=your-email-api-key
   UPI_PAYMENT_ID=your-upi-id
   PAYMENT_GATEWAY_API_KEY=your-payment-api-key
   NEWS_API_KEY=your-news-api-key
   JOBS_API_KEY=your-jobs-api-key
   ADMIN_SECRET=your-admin-secret
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Vercel will provide a deployment URL

5. **Configure Custom Domain**

   In Vercel project settings:
   - Go to "Domains"
   - Add `learn-pr.iiskills.cloud`
   - Follow DNS configuration instructions

### DNS Configuration

Add the following DNS records to iiskills.cloud:

```
Type: CNAME
Name: learn-pr
Value: cname.vercel-dns.com
TTL: 3600
```

Alternative (if using Vercel DNS):
```
Type: A
Name: learn-pr
Value: 76.76.21.21
TTL: 3600
```

### SSL Certificate

- Vercel automatically provisions SSL certificates
- Your site will be accessible via HTTPS
- Certificate auto-renews

## Option 2: Netlify

### Steps

1. **Connect Repository**
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select learn-pr

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Add all required variables in Site Settings → Environment Variables

4. **Custom Domain**
   - Go to Domain Settings
   - Add custom domain: `learn-pr.iiskills.cloud`
   - Configure DNS as instructed

## Option 3: Custom Server (VPS)

### Requirements

- Ubuntu 20.04+ or similar Linux server
- Node.js 18+ installed
- nginx or similar web server
- PM2 for process management

### Setup Steps

1. **Prepare Server**

   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install nginx
   sudo apt install -y nginx
   ```

2. **Clone Repository**

   ```bash
   cd /var/www
   sudo git clone https://github.com/phildass/learn-pr.git
   cd learn-pr
   sudo npm install
   ```

3. **Environment Variables**

   ```bash
   sudo nano .env.production
   # Add all environment variables
   ```

4. **Build Application**

   ```bash
   sudo npm run build
   ```

5. **Start with PM2**

   ```bash
   sudo pm2 start npm --name "learn-pr" -- start
   sudo pm2 save
   sudo pm2 startup
   ```

6. **Configure nginx**

   Create nginx config:
   ```bash
   sudo nano /etc/nginx/sites-available/learn-pr
   ```

   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name learn-pr.iiskills.cloud;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/learn-pr /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **SSL with Let's Encrypt**

   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d learn-pr.iiskills.cloud
   ```

## Production Checklist

Before going live, ensure:

- [ ] All environment variables are set correctly
- [ ] Supabase database is properly configured
- [ ] RLS policies are enabled and tested
- [ ] Email service is configured (no-reply@iiskill.in)
- [ ] Payment gateway is set up and tested
- [ ] SSL certificate is active
- [ ] DNS records are propagated
- [ ] Custom domain is working
- [ ] All pages load correctly
- [ ] Authentication flow works
- [ ] Admin panel is accessible
- [ ] Error pages are styled
- [ ] Analytics are configured (if needed)
- [ ] Backup strategy is in place

## Post-Deployment

### Monitoring

1. **Set up monitoring**
   - Use Vercel Analytics (if on Vercel)
   - Configure Supabase monitoring
   - Set up error tracking (e.g., Sentry)

2. **Performance**
   - Run Lighthouse tests
   - Check Core Web Vitals
   - Optimize images if needed

3. **Security**
   - Regular security updates
   - Monitor Supabase logs
   - Review authentication flows

### Continuous Deployment

With Vercel:
- Automatic deploys on push to main
- Preview deployments for PRs
- Rollback capability

With custom server:
- Set up GitHub Actions
- Automate deployment pipeline
- Configure health checks

## Updating the Application

### Vercel
```bash
git push origin main
# Automatic deployment triggered
```

### Custom Server
```bash
cd /var/www/learn-pr
sudo git pull origin main
sudo npm install
sudo npm run build
sudo pm2 restart learn-pr
```

## Backup Strategy

### Database Backups (Supabase)
- Enable automatic backups in Supabase dashboard
- Daily backups recommended
- Store backups securely

### Code Backups
- GitHub repository serves as primary backup
- Consider weekly full backups
- Document recovery procedures

## Rollback Procedure

### Vercel
- Go to Deployments
- Select previous successful deployment
- Click "Promote to Production"

### Custom Server
```bash
cd /var/www/learn-pr
sudo git log --oneline
sudo git checkout <previous-commit-hash>
sudo npm install
sudo npm run build
sudo pm2 restart learn-pr
```

## Troubleshooting

### Build Failures
- Check build logs
- Verify environment variables
- Ensure all dependencies are listed

### Performance Issues
- Enable Next.js caching
- Optimize images with next/image
- Use CDN for static assets

### Database Connection Issues
- Verify Supabase credentials
- Check RLS policies
- Review connection pooling

## Support

For deployment issues:
- Check Vercel/Netlify status page
- Review deployment logs
- Contact hosting support
- Refer to platform documentation

---

**Production URL**: https://learn-pr.iiskills.cloud

Last updated: January 2026
