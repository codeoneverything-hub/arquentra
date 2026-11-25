export type Article = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const articles: Article[] = [
  {
    slug: "business-website-cost-india",
    title: "What affects the cost of a business website in India?",
    description: "A practical guide to the parts of a website brief that affect its quote, recurring costs, and how to compare proposals.",
    intro: "There is no useful single price for every business website. A one-page introduction, a multi-page service site and a store each need different work. A clear quote starts with what the site must do, then lists what is included and what you will need to pay for separately.",
    sections: [
      { heading: "Start with the job the site needs to do", paragraphs: ["Write down the main action you want a visitor to take: enquire, book, call, visit, or buy. That decision helps set the page structure and the integrations the project needs.", "A website brief is easier to scope when it names the audience, services or products, existing website (if any), and the next action you want a visitor to take."] },
      { heading: "The biggest scope factors", paragraphs: ["The amount of design and development work changes with the page count, custom layouts, content, and features. Moving an old site can add content cleanup and redirects. A shop can add products, stock rules, shipping, payments and order notifications."], bullets: ["Number of unique pages and page layouts", "Whether you supply final copy and photos", "Custom forms, booking, payments or store features", "Content migration, redirects and accessibility needs", "Review rounds, testing, and post-launch support"] },
      { heading: "Remember the ongoing costs", paragraphs: ["A project quote may not include domain renewal, hosting, email, paid fonts, stock imagery, plugins, payment processing or a store platform subscription. Ask who pays each provider, when billing starts, and whose account will own it.", "A domain and a website are different things: the domain is the address; hosting is where the website runs. Ask for both renewal amounts and renewal dates before you commit."] },
      { heading: "Compare the written scope, not only the headline price", paragraphs: ["Ask each provider to list the pages, integrations, content responsibilities, number of reviews, testing, handover and support included. If two quotes describe different work, the lower figure may not be the lower total project cost.", "A useful proposal says how changes are handled. New pages or integrations should be discussed before they change the work, price or launch date."] },
      { heading: "Prepare a short request for quote", paragraphs: ["You can help a developer give a more useful estimate by sharing the basics. You do not need a perfect brief to start."], bullets: ["What the business does and who the site is for", "Pages you think you need", "Examples of sites or visual styles you like", "Required features such as booking or payments", "Content you already have and your ideal launch date", "A comfortable budget range, if you have one"] },
    ],
  },
  {
    slug: "what-a-business-website-needs",
    title: "What does a business website need? A practical checklist",
    description: "Plan the pages and content that help a business website explain its offer, answer common questions and make it easy to get in touch.",
    intro: "A business website does not need to be large. It needs to help the right visitor understand what you offer, decide whether it fits, and take a clear next step. Start with those jobs before choosing effects or adding pages.",
    sections: [
      { heading: "A homepage that says what you do", paragraphs: ["Put the business, audience and main offer in plain language near the top. A visitor should not have to decode a slogan before learning whether they are in the right place.", "Use one main next step, such as asking for a quote or booking a call. Repeat it where it makes sense, without turning every section into a pitch."] },
      { heading: "Service or product details", paragraphs: ["Give each important offer enough room to explain what it includes, who it suits, and how a customer can ask a question. For products, useful information can include size, material, care, availability, delivery and return terms.", "Use accurate wording. If a result, credential or feature is not verified, leave it out until you can support it."] },
      { heading: "About, contact and practical details", paragraphs: ["An About page can introduce the person or team, explain how the business works and build confidence with real details. A contact page should show a working route to get help.", "A local or service business may also need service areas, opening hours, address details and accessibility information. Publish location details only if you are comfortable sharing them and they are accurate."] },
      { heading: "Make it work on a phone", paragraphs: ["Check the site on a phone, not only by shrinking a desktop browser. Text should be readable, buttons should be easy to tap, forms should ask for only useful information, and images should not push the main action far down the page.", "Use descriptive headings and links. Keyboard users should be able to reach menus, buttons and form fields and see where focus is."] },
      { heading: "Search basics before launch", paragraphs: ["Give each page a useful title and description, use one clear page heading, write meaningful image alt text, and make links crawlable. Add redirects if an existing page URL changes and keep the sitemap up to date.", "Search setup helps search engines understand pages; it does not guarantee a particular position. Keep the visible content written for people, with accurate information about what the business really offers."] },
      { heading: "A short launch checklist", paragraphs: ["Before launch, test every link and form, check contact details, read the site aloud for clarity, verify the phone layout, review privacy information, and make sure someone knows how to update the domain and hosting."] },
    ],
  },
  {
    slug: "whatsapp-vs-contact-form",
    title: "WhatsApp or a contact form? Choosing the right website enquiry path",
    description: "Compare WhatsApp links and website forms, when each works best, and how to make it easy for customers to ask for help.",
    intro: "A contact route should feel natural for your customers and manageable for you. WhatsApp can start a quick conversation; a form can collect a structured brief. Many business websites can offer both without making a visitor choose between several unclear buttons.",
    sections: [
      { heading: "When WhatsApp is a good fit", paragraphs: ["WhatsApp can work well when customers already use it to ask questions and you can reply there. A prefilled message helps them start with context, such as what they need and when they need it.", "Keep the message editable. Tell visitors that their message opens in WhatsApp and that they still choose whether to send it. Do not imply that clicking the link has sent the message."] },
      { heading: "When a contact form helps", paragraphs: ["A form is useful when you need a name, reply email, budget range or project summary in a consistent format. Keep the number of required fields small, explain what happens after submission, and show a clear success or error message.", "The form needs a real destination: an email service, a connected business inbox or another configured handler. A success message should appear only when that destination confirms receipt."] },
      { heading: "You can offer both", paragraphs: ["Choose one primary call to action and make the alternative secondary. For example, a direct WhatsApp button can be primary, with a short enquiry form for someone who prefers email.", "Do not hide the business email address. A visible fallback is useful if a visitor cannot use a messaging app or the form is unavailable."] },
      { heading: "Ask only for details you will use", paragraphs: ["A first contact form rarely needs a home address, sensitive documents or a long project plan. Ask only for information that helps the next reply. Explain how submitted details will be used and who receives them.", "Protect forms with server-side validation and basic spam controls such as a honeypot and rate limit. If you add a third-party spam service, review what data it receives and include it in the privacy note."] },
      { heading: "Test the complete path", paragraphs: ["Test on a phone and desktop. Verify the WhatsApp number and prefilled text, submit a valid and invalid form, check the confirmation, and make sure the recipient actually receives an email. Also test the fallback when the email service is not configured."] },
    ],
  },
];
