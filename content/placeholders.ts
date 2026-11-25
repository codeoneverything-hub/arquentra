/**
 * Replace these empty values only with details Arquentra has verified and approved.
 * Empty values are deliberately hidden from the public site.
 */
export const placeholders = {
  owner: {
    name: "",
    photo: "",
    photoAlt: "",
    bio: "",
    city: "",
    skills: [] as string[],
    tools: [] as string[],
  },
  testimonials: [] as Array<{
    quote: string;
    clientName: string;
    business: string;
    permissionToPublish: boolean;
  }>,
  pricing: {
    starterFromINR: null as number | null,
    businessFromINR: null as number | null,
    customFromINR: null as number | null,
    starterTimeline: "",
    businessTimeline: "",
    customTimeline: "",
    addOnPrices: {
      extraPages: null,
      copywriting: null,
      seoSetup: null,
      maintenance: null,
      bookingPayments: null,
    } as Record<string, number | null>,
  },
  policies: {
    revisionPolicy: "",
    ownershipAndHandover: "",
    disagreementPlan: "",
    responseTimePromise: "",
    gstInvoiceDetails: "",
    paymentTerms: "",
    maintenanceAndSupport: "",
  },
  processTimelines: {
    discovery: "",
    planning: "",
    build: "",
    launch: "",
  },
  firstProjectOffer: "",
  ownerProfile: {
    bookingUrl: "",
    socialLinks: [] as string[],
    cityPages: [] as Array<{
      city: string;
      headline: string;
      introduction: string;
      localConsiderations: string[];
      usefulDetails: string[];
    }>,
    publicAddress: {
      streetAddress: "",
      city: "",
      region: "",
      postalCode: "",
      country: "India",
    },
  },
  emailDelivery: {
    resendApiKeyEnvironmentVariable: "RESEND_API_KEY",
    resendFromEnvironmentVariable: "RESEND_FROM_EMAIL",
    recipientEnvironmentVariable: "ENQUIRY_TO_EMAIL",
    turnstileSiteKeyEnvironmentVariable: "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    turnstileSecretEnvironmentVariable: "TURNSTILE_SECRET_KEY",
  },
  analytics: {
    plausibleDomainEnvironmentVariable: "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
  },
} as const;
