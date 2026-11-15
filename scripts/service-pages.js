/*
 * Content for the service pages under /services/.
 * Each entry becomes public/services/<slug>/index.html when you run `npm run pages`.
 *
 * The wording follows how clients search: they type "freelance web developer",
 * "web designer", "logo designer" and "Framer expert" far more often than
 * "full stack" or "front end", so each page uses both.
 *
 * Keep every claim true. `price` lines show your real Contra rates; change them if they change.
 */

module.exports = [
  {
    slug: "full-stack-development",
    nav: "Full stack development",
    title: "Freelance Full Stack Web Developer for Hire | Kenil Vaghasiya",
    h1: "Freelance full stack web developer for web apps, SaaS products and MVPs",
    description:
      "Hire a freelance full stack web developer with 4+ years of experience. React, Next.js, Node.js and .NET web apps, SaaS products and MVPs, from idea to launch.",
    serviceType: "Full stack web development",
    cardText: "Web apps, SaaS products and MVPs built end to end with React, Next.js, Node.js and .NET.",
    lead:
      "I am a freelance full stack web developer with 4+ years of experience building web applications across the front end, the back end and the cloud. If you need a web app, a SaaS product or an MVP built by one person who can take it from idea to launch, this is what I do.",
    price: { amount: "From $55 per hour", note: "Next.js and React work is $55/hr, backend API work $58/hr and AI integrations $60/hr. For SaaS and MVP projects I send a quote after we talk through the scope." },
    includes: [
      ["Web applications", "Dashboards, portals, booking systems and internal tools built with React or Next.js on the front end and Node.js or ASP.NET Core on the back end."],
      ["SaaS products and MVPs", "Sign-up, login, subscriptions, the core feature and an admin view: the smallest version that real users can pay for, then improved release by release."],
      ["APIs and integrations", "REST and GraphQL APIs, payments, email, authentication and third-party services connected to your product."],
      ["Databases and cloud", "PostgreSQL, SQL Server and MongoDB, deployed on Azure or AWS with automated builds and releases."],
      ["AI features", "Chat, search and summaries inside your product using large language models and your own data."],
      ["Fixing and speeding up existing apps", "Slow pages, slow APIs and code that has become hard to change."]
    ],
    audience: [
      "Founders who have an idea and need a first version built",
      "Small businesses that need a web app or customer portal, not only a website",
      "Agencies and teams that need an extra developer who can work across the whole stack"
    ],
    process: [
      ["Discovery", "We talk through the problem, the users and what the first release must do."],
      ["Plan", "I write down the features, the architecture and the milestones, with a cost estimate."],
      ["Design", "Wireframes and a clickable prototype for the main screens, so you can approve the flow before code is written."],
      ["Build", "Short sprints. You get a working version to open and test at each review."],
      ["Test and launch", "Functionality, security and speed are checked, then the product goes live."],
      ["Improve", "Feedback from real users decides what gets built next."]
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "ASP.NET Core", ".NET", "REST APIs", "GraphQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "Azure", "AWS", "Docker", "CI/CD"],
    proof: [
      ["40%", "faster full-stack performance in production"],
      ["60%", "lower API latency under concurrent load"],
      ["90%+", "automated test coverage"]
    ],
    work: ["saas-mvp-development-process", "saas-idea-to-brand-and-product", "caldiors"],
    faq: [
      ["What does a full stack developer do?", "A full stack developer builds both parts of a web product: the front end that people see and use, and the back end that stores data, handles logins and payments and connects to other services. Hiring one full stack developer means one person is responsible for the whole product."],
      ["Can you build my whole product on your own?", "For an MVP or a small to mid-sized web app, yes. I cover design of the main screens, front end, back end, database, deployment and launch. For larger products I work as part of your team."],
      ["How much does it cost to hire you?", "My rates start at $55 per hour. The total depends on the scope, so I send an estimate after a first conversation. Building a smaller first version is the most reliable way to keep the cost down."],
      ["Do you work with clients in the USA and Europe?", "Yes. I work remotely from Surat, India (UTC+5:30). I studied and worked in the United States for several years, and my working day overlaps with the European working day. Project communication is in English."],
      ["Can you take over an existing project?", "Yes. I start by reading the code and listing what is working, what is risky and what should be fixed first."]
    ],
    related: ["front-end-development", "ui-ux-design", "framer-development"]
  },

  {
    slug: "front-end-development",
    nav: "Front end development",
    title: "Freelance Front End Developer for Hire | React & Next.js",
    h1: "Freelance front end developer for React and Next.js websites and web apps",
    description:
      "Hire a freelance front end developer and web designer. Fast, responsive React and Next.js websites and interfaces, built from your Figma design or designed by me.",
    serviceType: "Front end web development",
    cardText: "Fast, responsive React and Next.js websites and interfaces, from Figma design to launch.",
    lead:
      "I am a freelance front end developer who builds websites and web app interfaces with React and Next.js. Send me a Figma design and I turn it into a fast, responsive site, or I design it and build it. If you are looking for a freelance web designer who also writes the code, that is the same job.",
    price: { amount: "$55 per hour", note: "This is my rate for Next.js website design and development. For a defined set of pages I can estimate the total before we start." },
    includes: [
      ["Business and brand websites", "Marketing sites, landing pages and brand sites built with Next.js, so they load quickly and search engines can read them."],
      ["Figma to code", "Your designs built as they were drawn, on phone, tablet and desktop."],
      ["Web app interfaces", "Dashboards, forms, tables and complex screens in React and TypeScript, connected to your API."],
      ["Website redesign", "A slow or dated site rebuilt with a cleaner layout and faster pages, keeping the content that already works."],
      ["Animation and interaction", "Scroll and hover motion that supports the content and respects reduced-motion settings."],
      ["Speed and accessibility", "Optimised images and fonts, keyboard access and readable contrast."]
    ],
    audience: [
      "Small businesses that need a professional website designed and built",
      "Startups with a Figma design and no one to build it",
      "Agencies and product teams that need a front end developer for a project"
    ],
    process: [
      ["Brief", "You tell me what the site has to do and show me any designs or examples you like."],
      ["Design", "If there is no design yet, I design the key pages in Figma for you to approve."],
      ["Build", "I build the pages in Next.js or React and share a preview link you can open on any device."],
      ["Review", "You send changes, I apply them."],
      ["Launch", "The site goes live on your domain and I check it on real devices."]
    ],
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux", "Framer Motion", "Figma", "Responsive design"],
    work: ["caldiors", "moriva-matcha-house", "axiom-architecture-website-concept"],
    faq: [
      ["What is the difference between a web designer and a front end developer?", "A web designer decides how a site looks and how people move through it. A front end developer writes the code that makes that design work in a browser. I do both, so the site you approve in the design is the site that gets built."],
      ["How much does a website cost?", "It depends on the number of pages and how much is custom. My rate for Next.js website work is $55 per hour, and I give you an estimate for the whole site before starting."],
      ["Can you build from my Figma file?", "Yes. I build the design as it is drawn and tell you early if something will not work well on small screens."],
      ["Will my site work on phones?", "Yes. Every page is built and tested for phone, tablet and desktop."],
      ["Next.js or Framer: which should I choose?", "Choose Framer if the site is mostly marketing pages and you want to edit it yourself. Choose Next.js if you need custom features, logins or a shop. I build in both and can tell you which fits after a short conversation."]
    ],
    related: ["framer-development", "ui-ux-design", "full-stack-development"]
  },

  {
    slug: "framer-development",
    nav: "Framer development",
    title: "Framer Developer & Expert for Hire | Framer Website Design",
    h1: "Freelance Framer developer and designer for websites that are easy to run",
    description:
      "Hire a freelance Framer developer and designer. Responsive, animated Framer websites taken from Figma design to a published site you can edit yourself.",
    serviceType: "Framer website design and development",
    cardText: "Responsive, animated Framer websites, from Figma design to a published site you can edit.",
    lead:
      "I am a freelance Framer developer and designer. I design websites in Figma and build them in Framer: responsive, animated marketing sites that you can update yourself once they are live, without calling a developer for every change.",
    price: { amount: "Quoted per project", note: "Framer sites are priced by the number of pages and the amount of custom design and animation. I send a fixed quote after a short call." },
    includes: [
      ["Framer website design and build", "Home, about, services, pricing, contact and any other pages you need, designed and built in Framer."],
      ["Figma to Framer", "Your existing Figma design rebuilt in Framer with proper responsive layouts, not a pasted copy."],
      ["Landing pages", "A single focused page for a product, launch or campaign."],
      ["Animation", "Scroll effects, page transitions and hover states, paced so they support the content."],
      ["CMS", "Blog, projects or case studies set up in the Framer CMS so you can add entries yourself."],
      ["Launch and handover", "Your domain connected, page titles and descriptions set, and a walkthrough of how to edit the site."]
    ],
    audience: [
      "Startups and SaaS companies that need a marketing site or landing page",
      "Studios, cafés, restaurants and local businesses that want a site with character",
      "Designers and agencies who have a Figma file and need it built in Framer"
    ],
    process: [
      ["Brief", "A short call about your business, your audience and the pages you need."],
      ["Design", "I design the site in Figma, starting with the home page, and you approve the direction."],
      ["Build in Framer", "Responsive layouts for desktop, tablet and phone, then animation."],
      ["Review", "You get a preview link and send changes."],
      ["Publish", "The site goes live on your domain and I show you how to edit it."]
    ],
    tools: ["Framer", "Figma", "Framer CMS", "Responsive design", "Animation", "SEO settings"],
    work: ["velor-coffee-house", "orven", "moriva-matcha-house"],
    faq: [
      ["What is Framer?", "Framer is a tool for designing and publishing websites without hand-written code. The designer builds the site visually, Framer hosts it, and you can edit text, images and CMS content yourself afterwards."],
      ["What does a Framer developer do?", "A Framer developer turns a design into a working Framer site: responsive layouts for every screen size, animation, CMS collections, forms and the settings search engines need. A Framer expert, Framer designer and Framer developer are usually the same person doing the same job."],
      ["Can you convert my Figma design to Framer?", "Yes. I rebuild it in Framer with real responsive layouts so it works on every screen size."],
      ["Framer or Webflow?", "Both publish sites without custom code. Framer is quicker to design in and strong on animation, which suits marketing sites and landing pages. I build in Framer and, for sites that need custom features, in Next.js. I do not offer Webflow builds."],
      ["Can I edit the site myself afterwards?", "Yes. That is one of the main reasons to choose Framer. I show you how to change text, images and CMS entries."],
      ["Do I need to pay Framer as well?", "Yes. Framer charges its own subscription for hosting a site on your domain. That is paid to Framer directly and is separate from my fee."]
    ],
    related: ["brand-design", "ui-ux-design", "front-end-development"]
  },

  {
    slug: "ui-ux-design",
    nav: "UI/UX design",
    title: "Freelance UI/UX Designer for Hire | Web App & SaaS Design",
    h1: "Freelance UI/UX designer for websites, web apps and SaaS products",
    description:
      "Hire a freelance UI/UX designer who also builds. User flows, wireframes, interface design and clickable Figma prototypes for websites, web apps and SaaS products.",
    serviceType: "UI/UX design",
    cardText: "User flows, wireframes, interface design and clickable Figma prototypes for web and SaaS products.",
    lead:
      "I am a freelance UI/UX designer who is also a developer. I design websites, web apps and SaaS products in Figma, from the first user flow to a clickable prototype, and because I build software too, what I design can be built as drawn.",
    price: { amount: "Quoted per project", note: "Priced by the number of screens and flows. I send a quote after a short call about the product." },
    includes: [
      ["User flows", "The steps a person takes to sign up, complete the main task and come back, mapped before any screen is drawn."],
      ["Wireframes", "Simple layouts of each screen, so the structure is agreed before the visual design starts."],
      ["Interface design", "The finished look of every screen in Figma: layout, type, colour, components and states."],
      ["Clickable prototypes", "A prototype you can click through and put in front of users or investors before development starts."],
      ["Design systems", "Reusable buttons, forms, tables and colours, so new screens stay consistent."],
      ["Developer handover", "Figma files organised so a developer can build from them, or I build it myself."]
    ],
    audience: [
      "Founders who need their product designed before it is built",
      "Teams with a working product that is hard to use",
      "Businesses that need a website or dashboard designed by someone who understands how it will be coded"
    ],
    process: [
      ["Understand", "Who the users are, what they need to get done and what the business needs from them."],
      ["Map", "User journeys for onboarding, navigation, the core task, subscriptions and account settings."],
      ["Wireframe", "Low-detail layouts of every key screen for you to review."],
      ["Design", "The visual interface, built from reusable components."],
      ["Prototype and test", "A clickable prototype to test with real users, then changes based on what they do."],
      ["Handover or build", "Files ready for your developers, or I build the front end."]
    ],
    tools: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design systems", "Responsive design", "Framer"],
    credentials: ["Google: Foundations of User Experience (UX) Design"],
    work: ["saas-idea-to-brand-and-product", "axiom-architecture-website-concept", "orven"],
    faq: [
      ["What is the difference between UI and UX design?", "UX (user experience) design decides how a product works: the steps, the structure and what goes on each screen. UI (user interface) design decides how it looks: layout, type, colour and components. A product needs both, and I do both."],
      ["Do you also build what you design?", "Yes. I am a full stack developer as well, so I can hand the design to your team or build it myself. Either way the design takes real technical limits into account."],
      ["What do I get at the end?", "A Figma file with every screen, the reusable components and a clickable prototype of the main flows."],
      ["Can you redesign an existing product?", "Yes. I start by using the product, listing where people get stuck, and redesigning those flows first."],
      ["Do I need a design before development starts?", "You need agreed wireframes and a prototype for the main flow. Changing a screen in Figma takes minutes. Changing it after it is built takes much longer."]
    ],
    related: ["brand-design", "front-end-development", "full-stack-development"]
  },

  {
    slug: "brand-design",
    nav: "Brand design",
    title: "Freelance Brand Designer | Logo & Brand Identity Design",
    h1: "Freelance brand designer for logos and brand identity design",
    description:
      "Hire a freelance brand designer for logo design and brand identity: wordmark, colour palette, typography, packaging mockups and a website that matches.",
    serviceType: "Brand identity and logo design",
    cardText: "Logo, colour palette, typography, packaging mockups and a website that matches the brand.",
    lead:
      "I am a freelance brand designer. I design logos and complete brand identities for new businesses and for businesses that have outgrown their old look, and I build the website too, so the brand is the same on the sign, the packaging and the screen.",
    price: { amount: "Quoted per project", note: "Priced by what you need: a logo only, a full identity, or identity plus website. I send a quote after a short call." },
    includes: [
      ["Logo design", "A wordmark or symbol with the variations you need for signs, social profiles and small sizes."],
      ["Colour palette", "A small set of colours with a clear job for each."],
      ["Typography", "Typefaces for headlines and body text, and rules for using them."],
      ["Brand applications", "Mockups of the brand in use: packaging, cups, signage, apparel, stationery."],
      ["Brand guidelines", "A short document covering logo usage, colour, typography and tone, so the brand stays consistent as more people work on it."],
      ["Matching website", "The same identity carried into a Framer or Next.js website."]
    ],
    audience: [
      "New businesses that need a name, a logo and a look before they launch",
      "Cafés, restaurants, studios and shops that want a brand people recognise",
      "Startups and SaaS founders who need a brand and a product designed together"
    ],
    process: [
      ["Discovery", "Your business, your customers, your competitors and what you want people to feel."],
      ["Strategy", "The brand's purpose, personality and tone of voice, in a page or two."],
      ["Logo directions", "A few distinct directions for you to choose between."],
      ["Identity", "The chosen logo developed into a full system: colour, type and graphic elements."],
      ["Applications", "The brand shown on the things your customers will see."],
      ["Guidelines and files", "Final logo files in every format you need, plus the guidelines."]
    ],
    tools: ["Figma", "Adobe XD", "Logo design", "Typography", "Colour systems", "Packaging mockups", "Framer"],
    work: ["velor-coffee-house", "moriva-matcha-house", "saas-idea-to-brand-and-product"],
    faq: [
      ["What is the difference between a logo and a brand identity?", "A logo is one mark. A brand identity is the whole system around it: colours, typefaces, the way photos and packaging look, and the rules that keep them consistent. A logo on its own is enough to start with, and a full identity is what makes a business recognisable everywhere."],
      ["What files do I get?", "Your logo in vector and image formats for print and screen, in every colour variation, plus the palette, typefaces and guidelines."],
      ["Can you design the brand and the website together?", "Yes, and it usually gives a better result. The Velor Coffee House and MORIVA Matcha House projects were both done that way."],
      ["Do you work with businesses outside India?", "Yes. I work remotely with clients in the USA, the UK and Europe. Everything is shared online and communication is in English."],
      ["Do you use AI in your design work?", "I use AI tools to produce some presentation mockups, such as a logo shown on a storefront or a cup, and I say so where a project is a concept. The logo, palette and typography are designed by me."]
    ],
    related: ["framer-development", "ui-ux-design", "front-end-development"]
  }
];
