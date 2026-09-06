# Horus Desk — Website (horusdesk.com)

Marketing website for **Horus Desk** (Right Space LLC): Horus AI Agent, Managed Teams, and Software Studio.

## Stack

- **Vite 7 + React 19 + TypeScript**, Tailwind CSS v3, react-router 7 (lazy-loaded routes)
- **Vercel** serverless functions in `api/` (booking/newsletter emails via Resend, blog comments/ratings via Supabase PostgREST, bot-only SEO meta prerendering)
- **Supabase** (project `oknqxlmyhmxbzqtnlraq`) — Edge Functions power the chat widget (`public/widget.js`) and email unsubscribe; the `website` schema stores blog comments/ratings

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # typecheck → sitemap generation → vite build
npm run lint     # eslint
npm run preview  # preview production build
```

## Structure

```
api/               Vercel serverless functions (+ lib/ for Supabase/Claude clients)
public/widget.js   Self-contained chat widget (talks to Supabase Edge Functions)
scripts/           Build-time sitemap generator
src/components/    layout / forms / buttons / shared / ui (shadcn: only dropdown-menu)
src/data/          Route meta, blog meta, case studies
src/hooks/         useBooking (context), usePageTracking, useScrollPosition
src/lib/           cn(), SEO schema generators, chat widget opener
src/pages/         Route pages (lazy)
src/sections/      Per-page content sections
```

## Environment variables

See `.env.example` — `RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY` (server-side only).

## Notes

- `src/data/siteRoutes.ts` is the single source of truth for route meta (used by the sitemap script and `api/seo.ts`).
- The `AnnouncementBanner` + `bannerOffset` wiring is temporary — remove after the Founding Five promo ends.
- The Edge Function source for the chat widget backend is kept locally under `inspect-tools/` (gitignored); deploy with the Supabase CLI.
