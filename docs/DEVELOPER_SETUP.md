# Developer Setup Guide

This guide will help you set up the Learn PR development environment on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/phildass/learn-pr.git
cd learn-pr
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and Supabase client.

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Learn PR
NEXT_PUBLIC_DOMAIN=learn-pr.iiskills.cloud

# Email Configuration (for production)
EMAIL_FROM=no-reply@iiskill.in
EMAIL_PROVIDER_API_KEY=your-email-api-key

# Payment Configuration (for production)
UPI_PAYMENT_ID=your-upi-id
PAYMENT_GATEWAY_API_KEY=your-payment-api-key

# News API (optional, for live news)
NEWS_API_KEY=your-news-api-key

# Jobs API (optional, for live jobs)
JOBS_API_KEY=your-jobs-api-key
```

### 4. Set Up Supabase

#### Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Create a new project
4. Wait for the project to be provisioned

#### Run Database Migrations

1. Copy the contents of `database/schema.sql`
2. In your Supabase project dashboard, go to the SQL Editor
3. Paste the schema and run it
4. Verify that all tables were created successfully

#### Get Your Credentials

1. Go to Project Settings > API
2. Copy the Project URL → use for `NEXT_PUBLIC_SUPABASE_URL`
3. Copy the anon/public key → use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copy the service_role key → use for `SUPABASE_SERVICE_ROLE_KEY`

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Development Workflow

### File Structure

```
learn-pr/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── modules/           # Course modules
│   │   ├── lessons/           # Lesson pages
│   │   ├── login/             # Authentication
│   │   ├── register/          # Registration
│   │   ├── news/              # PR News
│   │   ├── jobs/              # Job listings
│   │   ├── support/           # Support tickets
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── shared/           # Header, Footer
│   │   ├── ui/               # UI components
│   │   └── ...
│   ├── lib/                   # Utilities
│   │   ├── supabase/         # Supabase client
│   │   └── utils/            # Helper functions
│   ├── types/                 # TypeScript types
│   └── data/                  # Static data
├── public/                    # Static assets
├── database/                  # Database schemas
└── docs/                      # Documentation
```

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit files in `src/` directory
   - Follow existing code style and conventions
   - Use TypeScript for type safety

3. **Test your changes**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Test all affected pages and features

4. **Lint your code**
   ```bash
   npm run lint
   ```

5. **Build the application**
   ```bash
   npm run build
   ```
   - Ensure no build errors
   - Fix any TypeScript or build issues

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

7. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Common Development Tasks

### Adding a New Page

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component
4. Add navigation links in Header component

Example:
```tsx
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

### Adding a New Component

1. Create component in `src/components/`
2. Use TypeScript for props
3. Export the component

Example:
```tsx
// src/components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
```

### Creating API Routes

1. Create file in `src/app/api/`
2. Export async functions for HTTP methods

Example:
```tsx
// src/app/api/example/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello' });
}
```

### Working with Supabase

```tsx
import { supabase } from '@/lib/supabase/client';

// Query data
const { data, error } = await supabase
  .from('modules')
  .select('*')
  .order('order_num');

// Insert data
const { data, error } = await supabase
  .from('support_tickets')
  .insert({ subject: 'Help', message: 'Need assistance' });
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
npx kill-port 3000
# or
npm run dev -- -p 3001
```

### Module Not Found Errors

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Check TypeScript configuration:
```bash
npx tsc --noEmit
```

### Build Errors

1. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```

2. Rebuild:
   ```bash
   npm run build
   ```

## VS Code Extensions

Recommended extensions for better development experience:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier**
- **TypeScript and JavaScript Language Features**

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Getting Help

If you encounter issues:

1. Check this documentation
2. Search existing issues on GitHub
3. Create a new issue with detailed description
4. Contact the development team

---

Happy coding! 🚀
