# Next.js Starter Template

A modern, production-ready Next.js starter template with a carefully curated tech stack.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) — App Router, React Server Components, Turbopack
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) — CSS-first configuration, design tokens, dark mode
- **Components**: [shadcn/ui](https://ui.shadcn.com) + [ReUI](https://reui.io) — Accessible components with enterprise-grade patterns
- **Internationalization**: [next-intl](https://next-intl.dev) — Multi-language support (English, Chinese)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) — Light/dark mode switching
- **Linting & Formatting**: [Biome](https://biomejs.dev) — Fast, unified linter and formatter
- **Environment**: [@t3-oss/env-nextjs](https://env.t3.gg) + [Zod](https://zod.dev) — Type-safe environment variables
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) — Built-in analytics integration
- **Git Hooks**: [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged) — Pre-commit quality checks
- **Language**: TypeScript
- **Deployment**: Docker support with standalone output

## Prerequisites

- Node.js >= 22 (see `.nvmrc`)
- pnpm

## Getting Started

```bash
# Switch to correct Node.js version
nvm use

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server (with Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result. You will be redirected to the default locale (`/en`).

## Project Structure

```
src/
├── app/
│   ├── [locale]/               # Locale-based routing
│   │   ├── layout.tsx          # Locale layout (header, footer, theme, analytics)
│   │   ├── page.tsx            # Home page
│   │   ├── loading.tsx         # Loading skeleton
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/page.tsx      # About page
│   │   └── components/page.tsx # Component showcase
│   ├── layout.tsx              # Root layout (fonts, global CSS)
│   ├── globals.css             # Tailwind CSS + shadcn/ui theme tokens
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Robots.txt generation
│   └── manifest.ts             # PWA manifest
├── components/
│   ├── ui/                     # shadcn/ui components (with barrel exports)
│   ├── reui/                   # ReUI enhanced components (with barrel exports)
│   ├── Header.tsx              # Site header with navigation
│   ├── Footer.tsx              # Site footer
│   ├── LocaleSwitcher.tsx      # Language switching dropdown
│   ├── ThemeProvider.tsx       # Dark mode provider
│   └── ThemeToggle.tsx         # Dark mode toggle
├── i18n/
│   ├── navigation.ts           # Locale-aware navigation helpers
│   ├── request.ts              # next-intl request config
│   └── routing.ts              # Locale routing config
├── lib/
│   ├── metadata.ts             # SEO metadata utility (OG, alternates, twitter)
│   └── utils.ts                # Utility functions (cn)
├── env.ts                      # Type-safe environment variables
└── middleware.ts                # Locale detection & redirect
messages/
├── en.json                     # English translations
└── zh.json                     # Chinese translations
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm check` | Lint + format with Biome (auto-fix) |

## Adding Components

```bash
# Add shadcn/ui components
pnpm dlx shadcn@latest add [component-name]

# Add ReUI components
pnpm dlx shadcn@latest add @reui/[component-name]
```

## Adding a New Language

1. Create a new translation file in `messages/` (e.g., `messages/ja.json`)
2. Add the locale to `src/i18n/routing.ts`:
   ```ts
   export const routing = defineRouting({
     locales: ["en", "zh", "ja"],
     defaultLocale: "en",
   });
   ```
3. Add the locale name in `src/components/LocaleSwitcher.tsx`

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_BASE_URL` | Base URL for SEO (sitemap, OG tags) | `https://example.com` |
| `NODE_ENV` | Node environment | `development` |
| `SKIP_ENV_VALIDATION` | Skip env validation (for Docker builds) | — |

## Docker

```bash
# Build image
docker build -t nextjs-starter .

# Run container
docker run -p 3000:3000 nextjs-starter
```

## License

MIT
