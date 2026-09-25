# Zon Publishing Website

A modern, professional publishing house website built with React, TypeScript, and Supabase.

## Features

- **Multi-page application** with Home, About, Services, Authors, and Contact pages
- **Working contact form** with database integration
- **Analytics tracking** for page views and events
- **Responsive design** optimized for all devices
- **Professional UI** with smooth animations and transitions
- **Supabase backend** for form submissions and data storage

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Authors.tsx
│   └── Contact.tsx
├── lib/             # Utilities and services
│   ├── supabase.ts
│   └── analytics.ts
├── hooks/           # Custom React hooks
│   └── useAnalytics.ts
└── App.tsx          # Main app component
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

**Netlify:**
```bash
npm run build
# Connect repo to Netlify, it will use netlify.toml automatically
```

**Vercel:**
```bash
npm run build
# Import repo in Vercel, it will use vercel.json automatically
```

## Environment Variables

Required environment variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

The application uses Supabase with the following table:

### contact_submissions

| Column     | Type      | Description                    |
|------------|-----------|--------------------------------|
| id         | uuid      | Primary key                    |
| name       | text      | Submitter's name              |
| email      | text      | Submitter's email             |
| message    | text      | Message content               |
| status     | text      | new/read/responded            |
| created_at | timestamp | Submission timestamp          |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Testing

To test the Supabase connection, open `test-supabase.html` in a browser.

## Contact Information

- **Email:** cam@zonpublishing.co.uk
- **Phone:** +44 7960 740 227

## License

All rights reserved © 2024 Zon Publishing
