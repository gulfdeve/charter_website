# Copilot Instructions for Centaurus Charter

This file helps GitHub Copilot understand the codebase structure, conventions, and best practices for this Next.js 15 yacht charter booking platform.

## Quick Start Commands

```bash
npm run dev              # Development server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run format:check     # Check Prettier compliance
```

## Architecture Overview

### Project Structure

- **App Router Architecture** (Next.js 15): All routes under `/app`
- **Locale-prefixed routing**: Routes structure is `/[locale]/[feature]/page`
- **Server Components by default**: Only use `'use client'` when necessary (hooks, browser APIs, context consumption)
- **Mixed TypeScript/JavaScript**: `.tsx` for new components, `.js` for API routes, existing files kept as-is

### Core Directory Layout

```
app/
├── [locale]/              # Locale-prefixed pages (en, ar, ru, zh)
├── api/                   # API route handlers
├── components/            # Shared React components
├── context/               # Global state (DataContext, LanguageContext, FareHarborContext)
├── i18n/                  # i18n config (routing.ts, request.ts)
├── lib/                   # Server-side utilities (fetchData, etc.)
└── utils/                 # Client/shared utilities

messages/                  # Translation files (en.json, ar.json, ru.json, zh.json)
```

### Key Dependencies

- **Next.js 15** with App Router
- **React 19** (RC version)
- **next-intl** (3.26.3) for internationalization
- **Tailwind CSS** with custom theme
- **Third-party**: FareHarbor (booking), Nodemailer (email), react-phone-input-2, date-fns

## Critical Patterns

### Import Conventions

```typescript
// ✅ CORRECT: Always use @/ alias
import { Link, useRouter, usePathname } from '@/app/i18n/routing';
import Navbar from '@/app/components/Navbar';
import { fetchData } from '@/app/lib/fetchData';

// ❌ INCORRECT: Never use next/link directly for navigation
import Link from 'next/link';
```

### i18n-Aware Navigation

```typescript
// Use routing from app/i18n/routing (locale-aware)
import { Link, useRouter } from '@/app/i18n/routing';

// When changing locales
const router = useRouter();
router.replace(pathname, { locale: 'ar' });
```

### Server vs Client Components

```typescript
// Server Component (default)
export default async function Page({ params }) {
  const { locale } = await params;  // Always await params in Next.js 15
  const data = await fetchData();
  return <div>{data.title}</div>;
}

// Client Component (only when needed)
'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations();
  const [state, setState] = useState(false);
  return <div>{t('key')}</div>;
}
```

### Data Fetching Pattern

```typescript
import { fetchData } from '@/app/lib/fetchData';

// In server components:
const data = await fetchData();  // Returns settings, yachts, offers, events, etc.

// This data is cached and revalidated via:
// 1. Automatic 24-hour revalidation
// 2. On-demand via: curl "https://domain.com/api/revalidate?secret=YOUR_SECRET"
```

### Translations (All User-Facing Text)

```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations();
return <h1>{t('page.title')}</h1>;  // No hardcoded strings!

// Server-side (for metadata):
import { getTranslations } from 'next-intl/server';
const t = await getTranslations({ locale });
```

### Images

```typescript
import Image from 'next/image';

<Image
  src="/images/example.webp"
  alt="Descriptive text"
  width={150}
  height={150}
  priority={true}  // For above-fold images
  className="w-full"
/>
```

## Code Style

### Formatting

- **Prettier config**: 2 spaces, single quotes, 80 char line width, semicolons always, LF line endings
- **ESLint enforces**: `const` over `let`, arrow functions, object shorthand, no unused vars

### Run Tools

```bash
npm run lint              # Check ESLint compliance
npm run format            # Auto-format with Prettier
npm run format:check      # Verify Prettier compliance (CI)
```

## Styling with Tailwind

### Custom Theme Colors

```javascript
'primary-blue': '#003057'
'primary-blue-light': '#E8F1FF'
'primary-red': '#8A1538'
'primary-red-light': '#FFE3E2'
'primary-yellow': '#F7CE03'
'primary-grey': '#575757'
'primary-black': '#1D1D1D'
'text-primary-white': '#ababab'
'text-primary-black': '#212529'
```

### Custom Breakpoints

```
xxs: 320px,   xs: 375px,   s: 425px,    sm: 640px,
md: 768px,    lg: 1200px,  xl: 1280px,  2xl: 1310px
```

### Common Custom Classes

- `red-solid-button`: Standard call-to-action button
- Mobile-first responsive design is standard

## Global State Management

```typescript
// Three main context providers:
import { useData } from '@/app/context/DataContext';           // API data
import { LanguageProvider } from '@/app/context/LanguageContext';
import { FareHarborProvider } from '@/app/context/FareHarborContext';

// Usage example:
const { data, loading, error } = useData();
if (loading) return <div>Loading...</div>;
return <div>{data.settings[0].site_title}</div>;
```

## API Routes

All API routes are in `app/api/` directory. Common endpoints:

- `/api/send-email` - Email sending via Nodemailer
- `/api/payment` - Payment processing
- `/api/subscribe` - Newsletter subscriptions
- `/api/get-data` - Fetch yacht data
- `/api/revalidate` - On-demand cache revalidation (requires secret)

Standard response format:

```typescript
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.email) {
      return Response.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    const result = await processData(body);
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
```

## Domain-Specific Concepts

### Yacht Charter Entities

- **Yacht Rentals**: Private yacht bookings
- **Yacht Trips**: Shared tours/experiences  
- **Offers**: Special promotions/packages
- **Events**: F1 racing, New Year, special occasions
- **Water Sports**: Additional activities
- **Yachts for Sale**: Sales listings

### Booking Flow

1. Browse yachts/trips
2. View details with image carousel
3. Check availability via FareHarbor
4. Fill booking form (Modal/Modal2/Modal3)
5. Payment processing
6. Confirmation email

### Contact Methods

All contact info comes from settings API:
- WhatsApp (primary) - Format: `https://wa.link/[code]`
- Contact form (secondary)
- Phone number link
- Email link

### Form Validation

- Phone: Use `react-phone-input-2` + `libphonenumber-js` validation
- Dates: Use `react-date-range` or `react-multi-date-picker`
- Email: Standard email format
- Show loading states during submission
- Display success/error messages

## Landing Pages vs Regular Pages

```typescript
// Detection pattern for landing pages:
const isLandingPage = currentPath?.includes('landing-') || false;

{isLandingPage ? <LandingNavbar /> : <Navbar />}
{isLandingPage ? null : <FirstFooter />}

// Landing pages use different navbar and no footer
```

## On-Demand Revalidation

When API data changes, trigger cache revalidation:

```bash
# Revalidate all pages
curl "https://domain.com/api/revalidate?secret=YOUR_SECRET"

# Revalidate specific page
curl "https://domain.com/api/revalidate?secret=YOUR_SECRET&path=/offers"

# In your backend:
await fetch(`https://domain.com/api/revalidate?secret=${process.env.REVALIDATION_SECRET}`);
```

See `REVALIDATION_GUIDE.md` for complete webhook/automation setup.

## Important Constraints

### DO NOT

- Remove `'use client'` from existing client components
- Use `next/link` directly (use `@/app/i18n/routing` instead)
- Hardcode user-facing text (use translations)
- Use inline styles (use Tailwind classes)
- Modify .prettierrc or eslint.config.js without reason
- Remove existing custom Tailwind classes
- Override WhatsApp/contact info (must come from settings API)

### ALWAYS

- Await `params` in Server Components (Next.js 15 requirement)
- Test changes with all 4 locales: en, ar, ru, zh
- Use TypeScript types in `.tsx` files
- Optimize images with Next.js Image component
- Handle loading and error states
- Validate user inputs
- Use semantic HTML and proper alt text
- Use `@/` alias for all imports

## Testing Changes

Before committing:

```bash
npm run lint          # Verify ESLint passes
npm run format:check  # Verify formatting
npm run build         # Test production build
```

Test with multiple locales by visiting:
- `http://localhost:3000/en/...`
- `http://localhost:3000/ar/...`
- `http://localhost:3000/ru/...`
- `http://localhost:3000/zh/...`

## Reference Files

- **Conventions**: `.cursorrules` (comprehensive style guide)
- **Setup**: `QUICK_SETUP.md` (environment setup)
- **Revalidation**: `REVALIDATION_GUIDE.md` (cache refresh details)
- **Config**: `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`
