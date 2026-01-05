# Learn PR - Public Relations Learning Platform

Learn PR is a comprehensive Public Relations learning platform integrated with the iiskills-cloud ecosystem, specifically designed for the Indian market. This platform provides a complete curriculum system with modules, lessons, quizzes, and professional development tracking.

## 🌟 Features

### Core Learning System
- **100 Lessons**: 10 modules with 10 lessons each
- **English Communication Module**: Specialized communication skills training
- **Interactive Quizzes**: Assessment and knowledge validation
- **Progress Tracking**: Monitor your learning journey
- **Level System**: Beginner to Advanced progression with test gates

### Indian PR Focus
- **Localized Content**: Tailored for the Indian Public Relations industry
- **Industry Insights**: Real-world scenarios and case studies
- **Skills Outcome**: Clear learning objectives and career pathways
- **Live News Monitor**: Dynamic Indian PR sector news feed with search and pagination

### User Features
- **Secure Authentication**: Supabase-powered authentication system
- **Role-Based Access Control**: Student and Admin roles
- **Personal Dashboard**: Track progress and achievements
- **Support System**: "Write to Counselor" ticket system
- **Jobs Aggregation**: Live PR job opportunities
- **Community Forum**: Peer interaction (initially disabled)

### Registration & Payment
- **UPI Payment Integration**: Seamless Indian payment experience
- **Email/Phone Collection**: User data collection
- **Email Confirmation**: Automated access code delivery via no-reply@iiskill.in
- **Account Verification**: Secure access management

### Admin Panel
- **Analytics Dashboard**: User statistics and insights
- **Lesson Management**: Create, edit, and organize content
- **User Management**: Handle user accounts and permissions
- **Support Tickets**: Manage counselor requests
- **Community Moderation**: Forum management tools
- **Password Reset**: Administrative password management

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Supabase account
- Email service provider account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/phildass/learn-pr.git
   cd learn-pr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual configuration values.

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the database migrations (see Database Schema section)
   - Copy your project URL and anon key to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
learn-pr/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (dashboard)/       # User dashboard
│   │   ├── (admin)/           # Admin panel
│   │   ├── lessons/           # Lesson pages
│   │   ├── modules/           # Module pages
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── ui/               # UI components
│   │   ├── shared/           # Shared components (Header, Footer)
│   │   ├── landing/          # Landing page components
│   │   ├── lessons/          # Lesson components
│   │   └── admin/            # Admin components
│   ├── lib/                   # Utility functions
│   │   ├── supabase/         # Supabase client
│   │   ├── auth/             # Authentication utilities
│   │   └── utils/            # Helper functions
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # Global styles
├── public/                    # Static assets
├── docs/                      # Documentation
└── database/                  # Database schemas and migrations
```

## 💾 Database Schema

The platform uses Supabase (PostgreSQL) with the following main tables:

- **users**: User profiles and authentication
- **modules**: Course modules
- **lessons**: Individual lessons
- **quizzes**: Quiz content
- **user_progress**: Learning progress tracking
- **user_quiz_attempts**: Quiz attempt history
- **support_tickets**: Counselor support requests
- **jobs**: PR job listings
- **news_items**: Cached news articles
- **community_posts**: Forum posts
- **community_comments**: Forum comments

See `/database/schema.sql` for complete schema definition.

## 🎨 Design System

### Color Theme (iiskills-cloud compatible)
- Primary: `#1e40af` (Blue)
- Secondary: `#7c3aed` (Purple)
- Accent: `#f59e0b` (Amber)
- Success: `#10b981` (Green)
- Warning: `#f97316` (Orange)
- Error: `#ef4444` (Red)

### Typography
- Font Family: Inter (sans-serif)
- Headings: Bold, various sizes
- Body: Regular, 16px base

## 🔒 Authentication & Authorization

### User Roles
- **Student**: Access to learning content and user features
- **Admin**: Full access to admin panel and content management

### Authentication Flow
1. User registers with name, email/phone
2. Payment via UPI link
3. Email confirmation with access code
4. Account activation
5. Login and access to platform

## 🌐 Deployment

### Subdomain Setup (learn-pr.iiskills.cloud)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting provider**
   - Vercel (recommended)
   - Netlify
   - Custom server

3. **Configure DNS**
   - Point `learn-pr.iiskills.cloud` to your deployment
   - Set up SSL certificate

4. **Set environment variables**
   - Configure all production environment variables
   - Update `NEXT_PUBLIC_DOMAIN` to `learn-pr.iiskills.cloud`

### Environment Variables for Production
See `.env.example` for all required variables.

## 📚 API Documentation

### Public Endpoints
- `GET /api/modules` - List all modules
- `GET /api/modules/[id]` - Get module details
- `GET /api/lessons/[id]` - Get lesson content
- `GET /api/news` - Get PR news feed
- `GET /api/jobs` - Get job listings

### Protected Endpoints (Authenticated)
- `POST /api/progress` - Update learning progress
- `POST /api/quizzes/submit` - Submit quiz answers
- `POST /api/support` - Create support ticket
- `GET /api/user/progress` - Get user progress

### Admin Endpoints (Admin only)
- `POST /api/admin/lessons` - Create/update lessons
- `GET /api/admin/stats` - Get platform statistics
- `GET /api/admin/users` - Manage users
- `GET /api/admin/tickets` - Manage support tickets

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🤝 Contributing

This is a private educational platform. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Wait for review and approval

## 📄 License

Proprietary - All rights reserved by iiskills.cloud

## 📞 Support

For technical issues or questions:
- Email: support@iiskills.cloud
- Documentation: See `/docs` folder

## 🗺️ Roadmap

- [x] Initial project setup
- [x] Basic Next.js structure
- [ ] Supabase integration
- [ ] Authentication system
- [ ] Landing page
- [ ] Curriculum system (10 modules x 10 lessons)
- [ ] Quiz system
- [ ] Admin panel
- [ ] Payment integration
- [ ] News aggregation
- [ ] Jobs aggregation
- [ ] Community forum
- [ ] Production deployment

## 🔗 Related Projects

- learn-math.iiskills.cloud
- learn-data-science.iiskills.cloud
- learnwinning.iiskills.cloud

---

**Learn PR** - Empowering Public Relations professionals in India 🇮🇳
