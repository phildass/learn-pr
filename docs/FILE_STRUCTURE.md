# Learn PR - File Structure & Boilerplate Reference

## Complete Project Structure

```
learn-pr/
├── .git/                           # Git repository
├── .gitignore                      # Git ignore rules
├── .next/                          # Next.js build output (ignored)
├── node_modules/                   # Dependencies (ignored)
│
├── public/                         # Static assets
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/                            # Source code
│   ├── app/                        # Next.js App Router
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── admin/                 # Admin panel (stub)
│   │   ├── community/
│   │   │   └── page.tsx           # Community forum (coming soon)
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact form
│   │   ├── dashboard/             # User dashboard (stub)
│   │   ├── faq/
│   │   │   └── page.tsx           # FAQ page
│   │   ├── jobs/
│   │   │   └── page.tsx           # Jobs board
│   │   ├── lessons/               # Lesson pages (stub)
│   │   ├── login/
│   │   │   └── page.tsx           # Login page
│   │   ├── modules/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx       # Module detail page
│   │   │   └── page.tsx           # Modules listing
│   │   ├── news/
│   │   │   └── page.tsx           # News aggregation
│   │   ├── privacy/
│   │   │   └── page.tsx           # Privacy policy
│   │   ├── refund/
│   │   │   └── page.tsx           # Refund policy
│   │   ├── register/
│   │   │   └── page.tsx           # Registration page
│   │   ├── support/
│   │   │   └── page.tsx           # Support tickets
│   │   ├── terms/
│   │   │   └── page.tsx           # Terms of service
│   │   ├── favicon.ico            # App favicon
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout with Header/Footer
│   │   └── page.tsx               # Landing page
│   │
│   ├── components/                # React components
│   │   ├── admin/                 # Admin components (future)
│   │   ├── landing/               # Landing page components (future)
│   │   ├── lessons/               # Lesson components (future)
│   │   ├── shared/
│   │   │   ├── Footer.tsx         # Shared footer
│   │   │   └── Header.tsx         # Shared header
│   │   └── ui/                    # UI components (future)
│   │
│   ├── data/
│   │   └── curriculum.ts          # Course curriculum data
│   │
│   ├── lib/                       # Utilities and libraries
│   │   ├── auth/                  # Auth utilities (future)
│   │   ├── supabase/
│   │   │   └── client.ts          # Supabase client
│   │   └── utils/
│   │       └── cn.ts              # Tailwind class merge utility
│   │
│   └── types/
│       └── index.ts               # TypeScript type definitions
│
├── database/
│   └── schema.sql                 # Complete database schema
│
├── docs/
│   ├── DEPLOYMENT.md              # Deployment guide
│   ├── DEVELOPER_SETUP.md         # Developer setup guide
│   └── FEATURES.md                # Feature summary
│
├── .env.example                   # Environment variables template
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── next-env.d.ts                  # Next.js TypeScript definitions
├── package.json                   # Project dependencies
├── package-lock.json              # Locked dependency versions
├── postcss.config.mjs             # PostCSS configuration
├── README.md                      # Main project README
├── README.original.md             # Original README backup
└── tsconfig.json                  # TypeScript configuration
```

## Key Files Reference

### Configuration Files

#### package.json
```json
{
  "name": "learn-pr",
  "version": "1.0.0",
  "private": true,
  "description": "Learn Public Relations - iiskills.cloud compatible learning platform",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "@supabase/supabase-js": "^2.39.3",
    "@supabase/auth-helpers-nextjs": "^0.8.7",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### .env.example
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Learn PR
NEXT_PUBLIC_DOMAIN=learn-pr.iiskills.cloud

# Email Configuration
EMAIL_FROM=no-reply@iiskill.in
EMAIL_PROVIDER_API_KEY=your-email-provider-api-key

# Payment Configuration (UPI)
UPI_PAYMENT_ID=your-upi-id
PAYMENT_GATEWAY_API_KEY=your-payment-gateway-api-key

# News API Configuration
NEWS_API_KEY=your-news-api-key

# Jobs API Configuration
JOBS_API_KEY=your-jobs-api-key

# Admin Configuration
ADMIN_SECRET=your-admin-secret
```

## Boilerplate Patterns

### Page Component Template
```tsx
export default function PageName() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Page Title
        </h1>
        {/* Page content */}
      </div>
    </div>
  );
}
```

### Component Template
```tsx
interface ComponentNameProps {
  // Define props
}

export default function ComponentName({ ...props }: ComponentNameProps) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

### API Route Template (Future)
```tsx
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // API logic
    return NextResponse.json({ data: [] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Styling Patterns

### Layout Classes
- Container: `container mx-auto px-4`
- Full height: `min-h-screen`
- Section padding: `py-12` or `py-16`
- Card: `bg-white rounded-lg shadow-md p-6`

### Text Classes
- Heading 1: `text-4xl md:text-5xl font-bold text-gray-900`
- Heading 2: `text-3xl md:text-4xl font-bold text-gray-900`
- Heading 3: `text-2xl font-semibold text-gray-900`
- Body: `text-gray-700` or `text-gray-600`

### Button Classes
- Primary: `bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700`
- Secondary: `border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white`
- Danger: `bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700`

### Form Classes
- Input: `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- Label: `block text-sm font-medium text-gray-700 mb-2`

## Database Schema Reference

### Main Tables
1. **profiles** - User profiles (extends auth.users)
2. **modules** - Course modules
3. **lessons** - Individual lessons
4. **quizzes** - Quiz content
5. **user_progress** - Learning progress tracking
6. **user_quiz_attempts** - Quiz history
7. **support_tickets** - Support requests
8. **jobs** - Job listings
9. **news_items** - News articles
10. **community_posts** - Forum posts
11. **community_comments** - Forum comments

### Row Level Security (RLS)
All tables have RLS enabled with appropriate policies for:
- Public read access (modules, lessons, news, jobs)
- User-specific access (progress, tickets)
- Admin-only access (content management)

## iiskills-cloud Compatibility

### Design Alignment
- Uses blue/purple/amber color scheme
- Consistent header and footer structure
- Same layout patterns as other iiskills subdomains
- Unified typography and spacing

### Branding
- Footer mentions "Part of iiskills.cloud"
- Link to iiskills.cloud network
- Email from no-reply@iiskill.in domain

### Feature Parity
- Course module structure
- Progress tracking system
- Support ticket system
- News aggregation
- Jobs board
- Community forum (planned)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## Git Workflow

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Description"

# Push to remote
git push origin branch-name

# Pull latest changes
git pull origin main
```

---

**Repository**: https://github.com/phildass/learn-pr  
**Production URL**: https://learn-pr.iiskills.cloud (when deployed)  
**Framework**: Next.js 16 with App Router  
**Language**: TypeScript  
**Styling**: Tailwind CSS 4
