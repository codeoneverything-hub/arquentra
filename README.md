# Arquentra

A mobile-first website for Arquentra's freelance website design and development service, focused on growing businesses. Built with Next.js App Router, TypeScript and CSS.

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

- `NEXT_PUBLIC_SITE_URL` — canonical URL; defaults to `https://www.arquentra.in`.
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `ENQUIRY_TO_EMAIL` — optional email form delivery. Verify the sender domain with Resend first. Without them, the form provides a prepared email fallback.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — optional Plausible analytics domain.

WhatsApp is the primary enquiry path at +91 70061 27665. Visitors review the prefilled message before sending. The contact email is arquentra@gmail.com.

The website concepts are fictional self-initiated work, not client projects or proof of business results. See [PLACEHOLDERS.md](./PLACEHOLDERS.md) for real details needed to complete the profile and [CHANGELOG.md](./CHANGELOG.md) for this refresh.
