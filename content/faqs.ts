import { placeholders } from "./placeholders";

const policy = placeholders.policies;

export const faqs = [
  { question: "What kinds of websites can you build?", answer: "Website design and development for business sites, landing pages, personal or portfolio sites, and online stores. We’ll agree the pages and features before I quote." },
  { question: "How long does a website take?", answer: "Timing depends on the scope, content and integrations. I’ll give you a project timeline before we start; we won’t begin until you’ve agreed it." },
  { question: "How many revision rounds are included?", answer: policy.revisionPolicy || "The number of review rounds and what counts as a revision will be written into your project scope before kickoff." },
  { question: "Do I need to buy a domain and hosting?", answer: "A domain and hosting provider may have separate charges. The project scope will state what setup help is included and which accounts or costs you’ll need." },
  { question: "Who owns the finished website and code?", answer: policy.ownershipAndHandover || "Ownership, any third-party licences and the handover of files or access will be stated in the project agreement before work begins." },
  { question: "Do you offer ongoing maintenance?", answer: "Maintenance can be discussed as a separate, agreed scope. It isn’t assumed to be included after launch unless it appears in your quote." },
  { question: "Can you help write my website copy?", answer: "Copywriting or help shaping your page content can be scoped as an add-on. If you provide the copy, I’ll tell you what content is needed for each page." },
  { question: "Does SEO setup guarantee that I’ll rank on Google?", answer: "No. Website projects can include on-page and technical SEO basics such as clear page titles, headings and crawlable pages. Search rankings depend on many factors, and ongoing SEO campaigns are not included." },
  { question: "What are the payment terms?", answer: policy.paymentTerms || "The payment schedule and any applicable tax or invoice details will be confirmed in writing before work begins." },
  { question: "What technology will my website use?", answer: placeholders.owner.tools.length ? `Tools I currently list include ${placeholders.owner.tools.join(", ")}. The right platform and any ongoing costs will be agreed for your project.` : "The tools and platform are chosen for the project requirements and agreed before development starts." },
  { question: "Can you build an online store?", answer: "Online-store projects can be discussed. Product count, payment provider, shipping rules, platform fees and required features all affect the scope and quote." },
  { question: "Can my website be in Hindi or another language?", answer: "Tell me which languages you need. Page structure, font support and language versions can be scoped; translation and supplied copy must be agreed separately." },
  { question: "What do you need from me to get started?", answer: "A short brief about your business, goals, audience, pages, any examples you like, and your ideal launch date. You can send the first details over WhatsApp." },
  { question: "What happens if we disagree during a project?", answer: policy.disagreementPlan || "We’ll refer to the agreed scope, pause on any disputed work, and discuss options before adding cost or changing direction." },
  { question: "What happens after the website launches?", answer: policy.maintenanceAndSupport || "Your quote will say what handover and post-launch support are included. Ongoing maintenance is arranged separately unless it is listed in the agreed scope." },
];
