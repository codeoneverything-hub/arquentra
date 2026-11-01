# Arquentra — Digital Creative Studio

A mobile-first creative studio website built with Next.js App Router, TypeScript, Framer Motion and Lucide icons. The visual system pairs warm paper and forest green with a lime accent, editorial type and lightweight motion.

## Start locally

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Configuration

- `NEXT_PUBLIC_SITE_URL` — canonical production URL. Defaults to `https://www.arquentra.in`.
- `NEXT_PUBLIC_META_PIXEL_ID` — optional Meta Pixel ID. The integration stays inactive until configured.
- `NEXT_PUBLIC_INSTAGRAM_URL` — optional Arquentra Instagram profile URL. No profile URL was present in the existing project, so none is guessed.

The enquiry form opens WhatsApp at +91 70061 27665 with the visitor's answers prefilled; the visitor reviews and sends it. The email address is arquentra@gmail.com. The responsive hero uses the supplied portrait video on mobile and landscape video on desktop. Video playback respects the visitor's reduced-motion preference; the poster remains visible when motion is reduced.

All work in “Experiments & Concepts” is self-initiated concept work. It does not represent client work, testimonials or business results.
