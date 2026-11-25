# Details to add before publishing

The site intentionally hides empty profile, testimonial, policy, pricing and trust details. Edit `content/placeholders.ts` only with accurate information you approve for public use.

## Personal profile

- Your public name, portrait and accessible image description.
- A short first-person bio, city/region if you want to share it, and real skills/tools you use.
- Booking and social profile links you control.

## Services, pricing and delivery

- Starting prices for Starter, Business and Custom packages; add-on prices; and realistic timelines.
- Timelines for discovery, planning, build and launch.
- Your revision limit, ownership/handover terms, payment terms, invoice/GST details, support/maintenance terms and response-time commitment.
- Any first-project offer, including its actual conditions and expiry. Leave blank unless you intend to honor it.

## Trust and local search

- Client quotes, client names and business names only with permission. No testimonials are published now.
- A public business address only if you choose to publish it. Without a real address, the site does not emit ProfessionalService local-address structured data.
- Real city-specific service information and a corresponding route before creating location pages. No city landing pages are live or listed in the sitemap.
- Do not claim client outcomes, certifications or rankings without evidence.

## Contact and measurement

- Resend: verify your sending domain, then set `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `ENQUIRY_TO_EMAIL` in Vercel. Without these, WhatsApp remains available and the email form offers a prepared-email fallback.
- Optional Plausible: create a site for `arquentra.in`, then set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in Vercel.
- Optional booking link: add the URL to `ownerProfile.bookingUrl` only after confirming it works.

Website concept pages are fictional self-initiated work, not client projects. The current city-pages data shape is reserved for future work; it does not create routes by itself.
