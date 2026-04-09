# MOREPLAY™ — Streetwear Paraguay

## Description
Next.js 15 storefront for MOREPLAY™, a streetwear brand from Paraguay.
Sales via WhatsApp only. No cart, no checkout, no payment integration.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 3.4
- @supabase/supabase-js v2

## Visual Identity
- Background: #000000 | Text: #FFFFFF
- Font: "Helvetica Neue", Helvetica, Arial, sans-serif — always, no exceptions
- No gradients, no blur, no glassmorphism, no box-shadows
- Aggressive uppercase typography, negative space aesthetic
- TM mark always rendered as: <sup style="font-size:0.3em; vertical-align:super">™</sup>

## Key File Structure
```
src/
  app/
    globals.css       — CSS variables, base font, scrollbar reset
    layout.tsx        — HTML shell, lang="es", page metadata
    page.tsx          — Client page, fetches Supabase on mount (useEffect)
  components/
    Hero.tsx          — Brand typographic hero, no images
    ProductGrid.tsx   — 2-col mobile / 4-col desktop grid
    ProductCard.tsx   — Scroll-snap image carousel + WhatsApp CTA
    Footer.tsx        — Copyright + developer credit
  lib/
    supabase.ts       — Supabase client singleton + Product type
```

## Supabase Table: products
Columns: id (uuid), name (text), price (text), description (text), images (text[]), sold (boolean), created_at (timestamptz)

Default query (page.tsx):
```ts
supabase.from("products").select("*").eq("sold", false).order("created_at", { ascending: false })
```

On error: sets empty array, no hardcoded fallback data.

## Product Images
`images[]` contains full Cloudinary URLs (e.g. `https://res.cloudinary.com/...`).
Rendered as plain `<img>` tags with `object-cover`. No Next.js `<Image>` component needed.

## WhatsApp Integration
Button opens: `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Me interesa: " + name)}`
Phone number must be digits only with country code, no `+` or spaces (e.g. `595991234567`).

## Environment Variables
Set in `.env.local` (development) and Vercel dashboard (production):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```
See `.env.example` for reference.

## Vercel Deployment
Standard Vercel deployment — no `vercel.json` required.
Next.js App Router is auto-detected.
Set the three env vars above in the Vercel project settings before deploying.

## Commands
```bash
npm run dev      # development server (localhost:3000)
npm run build    # production build
npm run start    # production server
npm run lint     # ESLint
```
