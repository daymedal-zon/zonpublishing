# Zon Publishing - Deployment Guide

## Environment Variables

Your deployment platform needs these environment variables configured:

```
VITE_SUPABASE_URL=https://nufzjchowddayatbbvuk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZnpqY2hvd2RkYXlhdGJidnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODQyMTksImV4cCI6MjA5MDQ2MDIxOX0.ifVOOvJadEHxTufRIbMmgCQzaGBotQZOj6ZG30eDfH4
```

## Deployment Instructions

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy - the `netlify.toml` file will handle redirects automatically

### Vercel
1. Import your repository in Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables in Vercel dashboard
6. Deploy - the `vercel.json` file will handle redirects automatically

### Other Static Hosts
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder
3. Configure your host to redirect all routes to `index.html` (SPA routing)
4. Set environment variables if supported

## Build Command
```bash
npm run build
```

## Build Output
The production build will be in the `dist` folder.

## Contact Form
The contact form submits to Supabase. Ensure environment variables are set correctly in production.

## Analytics
Analytics are initialized and tracking page views. To integrate a third-party service:
1. Edit `src/lib/analytics.ts`
2. Add your analytics provider's SDK
3. Update the tracking methods

## Database
The Supabase database has been configured with:
- `contact_submissions` table with Row Level Security
- Public insert policy (anyone can submit)
- Authenticated read policy (for future admin dashboard)
