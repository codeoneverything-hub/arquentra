export type Concept = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  brief: string;
  audience: string;
  decisions: string[];
  pages: string[];
  mobile: string[];
  realVersion: string[];
  palette: string[];
};

export const concepts: Concept[] = [
  {
    slug: "soft-goods",
    name: "Soft Goods",
    kind: "Imagined homewares store",
    summary: "A quiet, product-first storefront concept for homewares made to be kept.",
    brief: "Explore how an independent homewares label could use a calm online store to introduce its point of view, make a short collection easy to browse and move visitors toward a product decision.",
    audience: "People furnishing a home slowly, looking for useful objects with a considered material and story.",
    decisions: ["Warm paper and clay colours give the objects room to lead.", "Short product names and clear prices keep scanning easy.", "A small collection keeps the choice focused.", "Shop and product details stay close to the main navigation."],
    pages: ["Home with a clear collection entry", "Shop collection with product cards", "Product detail with price, material and care notes", "Our story and contact"],
    mobile: ["Single-column cards with full-width product taps", "Persistent, compact bag count", "Readable price and product details without hover states"],
    realVersion: ["Confirm real products, stock, prices, shipping and return terms.", "Choose a store platform and payment provider; confirm their fees.", "Supply product photography, descriptions and legal policies.", "Test a real order, confirmation email and mobile checkout before launch."],
    palette: ["#f5f2e9", "#d5b18c", "#244832", "#c9f264"],
  },
  {
    slug: "good-ritual",
    name: "Good Ritual",
    kind: "Imagined daily-care brand site",
    summary: "An editorial landing page concept for a small, everyday ritual brand.",
    brief: "Show how a focused landing page could explain one simple product idea, establish a visual mood and guide a visitor to explore the routine.",
    audience: "People looking for a simple, approachable daily-care routine and clear product information.",
    decisions: ["Large, editorial type creates a memorable first impression.", "A single featured item limits distraction.", "Warm peach and garden green give the imaginary brand a gentle, optimistic feel.", "The product explanation and next step stay in one short scroll."],
    pages: ["Single landing page with introduction", "Featured product and ingredient information", "Routine steps and frequently asked questions", "Contact and policy links"],
    mobile: ["Headline and product story stack vertically", "High-contrast action button spans the content width", "Accordion questions use native keyboard-accessible details"],
    realVersion: ["Confirm actual products, ingredients, claims and product photography.", "Review all health and product wording with the business owner before publishing.", "Add verified prices, inventory, legal policies and checkout only after scope is agreed.", "Connect analytics and email capture only after choosing and configuring the provider."],
    palette: ["#f5f2e9", "#e9b48b", "#244832", "#f1d4a5"],
  },
];
