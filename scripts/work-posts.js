/*
 * Content for the case-study / blog pages under /work/.
 * Each entry becomes public/work/<slug>/index.html when you run:
 *
 *   npm run work
 *
 * To add a post: copy an entry, change the slug and text, add the same slug
 * to the matching card in src/component/ContraWork/ContraWork.jsx, run the command.
 *
 * `body` is plain HTML. Keep it to facts about the project: no invented
 * client names, numbers or results.
 */

const CONTRA = "https://contra.com/kenil_vaghasiya6108";

module.exports = [
  {
    slug: "velor-coffee-house",
    title: "Coffee Shop Branding & Framer Website | Velor Case Study",
    h1: "Velor Coffee House: coffee shop branding and a Framer website",
    description:
      "How I designed the Velor Coffee House brand and built its website in Framer: a retro wordmark, a sage and terracotta palette, packaging, signage and apparel.",
    cardTitle: "Velor Coffee House: brand identity and Framer website",
    cardText: "A retro wordmark, a sage and terracotta palette, packaging, signage and a responsive Framer site for a neighbourhood coffee house.",
    kind: "Case study",
    published: "2026-11-15",
    image: { src: "/images/work/velor-poster.webp", width: 1120, height: 644, alt: "Velor Coffee House website hero: a roasted coffee bean above a glass server with the headline Good things. Take their time." },
    video: { src: "/videos/velor.mp4", width: 1120, height: 644, seconds: 21, uploaded: "2026-11-15", name: "Velor Coffee House Framer website walkthrough" },
    tags: ["Framer", "Figma", "Brand Design", "Logo Design"],
    keywords: ["coffee shop branding", "cafe website design", "Framer developer", "coffee shop logo design", "Framer website for cafe"],
    facts: [
      ["Project", "Brand identity and website"],
      ["Industry", "Food and beverage"],
      ["My role", "Brand design, logo design, web design, Framer build"],
      ["Tools", "Figma, Framer"]
    ],
    links: [
      { label: "Open the live Framer site", href: "https://velordemo.framer.website" },
      { label: "View the project on Contra", href: "https://contra.com/p/NNAOcUlk-velor-coffee-house-brand-identity-and-website" }
    ],
    body: `
<p class="lead">Velor is a cosy neighbourhood coffee house. I created its full brand identity in Figma and designed and built its website in Framer. The aim was a look that feels friendly, earthy and easy to remember.</p>

<h2>The brief: a coffee shop people remember</h2>
<p>A neighbourhood coffee house competes with every other café on the same street. The brand has to do two jobs at once: look warm enough that people want to sit down, and be distinct enough that they recognise the cup in someone else's hand. That shaped every decision on Velor, from the logo to the last section of the website.</p>

<h2>The logo: a coffee bean hidden in the "O"</h2>
<p>The Velor logo is a soft, rounded retro wordmark. The detail that makes it stick is in the letter "O", which holds a coffee bean. It is small enough that the wordmark still reads cleanly on a sign across the road, and clear enough that it works as a mark on its own on a cup lid or a sticker.</p>

<h2>The colour palette: sage, terracotta, cream and espresso</h2>
<p>The palette has four colours:</p>
<ul>
  <li><strong>Sage green</strong>, the calm base colour used on signage and apparel</li>
  <li><strong>Terracotta</strong>, the warm accent</li>
  <li><strong>Cream</strong>, for backgrounds and packaging</li>
  <li><strong>Deep espresso brown</strong>, for type and contrast</li>
</ul>
<p>These are earthy colours that sit well next to wood, plants and coffee itself, so the brand looks at home inside the shop and not only on a screen.</p>

<h2>The brand in the real world</h2>
<p>A café brand is seen far more often on a cup than on a website, so the identity was designed across the things customers touch: storefront signage, staff apparel, takeaway cups and coffee bag packaging.</p>
<div class="gallery">
  <figure><img src="/images/work/velor-1.webp" alt="Velor Coffee House storefront signage in sage and terracotta" width="720" height="480" loading="lazy" decoding="async" /><figcaption>Storefront signage</figcaption></figure>
  <figure><img src="/images/work/velor-2.webp" alt="Barista wearing a sage Velor Coffee House T-shirt" width="720" height="480" loading="lazy" decoding="async" /><figcaption>Staff apparel</figcaption></figure>
  <figure><img src="/images/work/velor-3.webp" alt="Velor Coffee House takeaway cups and coffee bag packaging" width="720" height="480" loading="lazy" decoding="async" /><figcaption>Cups and coffee packaging</figcaption></figure>
</div>

<h2>The website, built in Framer</h2>
<p>The site opens on a single roasted coffee bean above a glass server, with the line "Good things. Take their time." and a short promise underneath: thoughtfully roasted coffee for the moments you want to stay in. A small "Scroll to savour" prompt invites visitors down the page, and the navigation stays out of the way.</p>
<p>I built it in Framer because it suits this kind of site well. The design goes from Figma to a published, responsive website without a long hand-off, the animation is part of the build and not an add-on, and the owner can change text and images later without calling a developer.</p>

<h2>What was delivered</h2>
<ul>
  <li>Logo and wordmark</li>
  <li>Colour palette and typography</li>
  <li>Takeaway cup and coffee bag packaging design</li>
  <li>Staff apparel and storefront signage</li>
  <li>A responsive website built in Framer</li>
</ul>

<h2>Need branding or a website for a café or food brand?</h2>
<p>I take on brand identity and Framer website projects for coffee shops, restaurants and food and beverage brands. You get one person covering the logo, the palette, the packaging mockups and the published site, so everything matches.</p>
`
  },

  {
    slug: "moriva-matcha-house",
    title: "Matcha Brand Identity & Website Design | MORIVA Case Study",
    h1: "MORIVA Matcha House: brand identity and website design",
    description:
      "A brand and website concept for a matcha house: a classic logo, serif typography, warm colours and a scroll-led site that follows the matcha ritual.",
    cardTitle: "MORIVA Matcha House: brand identity and website",
    cardText: "A brand and website concept with a classic logo, serif type, warm colours and scroll animations that follow the matcha ritual.",
    kind: "Case study",
    published: "2026-11-15",
    image: { src: "/images/work/moriva-poster.webp", width: 1120, height: 644, alt: "MORIVA Matcha House website hero with a glass of ice and the headline A little green. A little ritual." },
    video: { src: "/videos/moriva.mp4", width: 1120, height: 644, seconds: 15, uploaded: "2026-11-15", name: "MORIVA Matcha House website walkthrough" },
    tags: ["Next.js", "Figma", "Brand Design", "Web Design"],
    keywords: ["matcha brand identity", "tea brand website design", "food and beverage web design", "scroll animation website", "Next.js website design"],
    facts: [
      ["Project", "Brand and website concept"],
      ["Industry", "Food and beverage"],
      ["My role", "Brand design, web design, full stack development"],
      ["Tools", "Figma, Next.js"]
    ],
    links: [
      { label: "View the project on Contra", href: "https://contra.com/p/MZgrcll7-moriva-matcha-house-or-brand-identity-and-website-design" }
    ],
    body: `
<p class="lead">MORIVA Matcha House is a complete brand and website concept: a classic logo, elegant serif typography, warm colours and smooth scroll animations that bring the ritual of making matcha to life.</p>

<h2>The idea: sell the ritual, not only the drink</h2>
<p>Matcha is as much about how it is made as how it tastes. So the website does not open with a product grid. It opens with a glass of ice and two lines: "A little green. A little ritual." Underneath: "Matcha, milk, and a moment to yourself. Some things are better taken slowly." The whole brand is built on that slower pace.</p>

<h2>Brand identity</h2>
<ul>
  <li><strong>Logo:</strong> a classic mark paired with a widely spaced MORIVA wordmark, centred in the navigation</li>
  <li><strong>Typography:</strong> a tall, elegant serif for headlines, with italics used for emphasis on words like "ritual"</li>
  <li><strong>Colour:</strong> deep matcha green type on warm cream and sand backgrounds</li>
</ul>
<p>Together they give the brand a calm, premium feel that carries from the logo through to the website.</p>

<h2>A website that follows the ritual</h2>
<p>As visitors scroll, the page walks through the making of the drink in numbered moments. The first is "01, The soft beginning: a little milk, a little anticipation." The scroll animations are smooth, so reading the page feels close to watching the drink being made.</p>
<p>The practical parts are still easy to reach. The navigation links to the collection, the ritual and the brand story, there is a "Watch our film" link, a cart, and a clear "Find your matcha" button in the first screen, so a visitor who already knows what they want is one click from the products.</p>

<h2>Why scroll animation suits a brand like this</h2>
<p>Motion is easy to overdo. Here it has one job: pace. The animation slows the visitor down to match the product. It is tied to the scroll position, so the visitor stays in control and nothing plays that they did not ask for.</p>

<h2>What the concept includes</h2>
<ul>
  <li>Logo and wordmark</li>
  <li>Typography and colour system</li>
  <li>A responsive website design with scroll-led animation</li>
  <li>A consistent look from brand identity to website</li>
</ul>
<p>MORIVA is a concept project, made to show how I approach a food and beverage brand from the first logo sketch to a working, responsive website.</p>

<h2>Launching a brand, or giving one a full makeover?</h2>
<p>I can take it from branding and logo design through UI/UX to website development, so the brand and the site are designed together and not stitched together afterwards.</p>
`
  },

  {
    slug: "caldiors",
    title: "Baby Care Brand Website in Next.js | Caldiors Case Study",
    h1: "Caldiors: a premium baby-care brand website built with Next.js",
    description:
      "How I designed and built caldiors.com, the website for a premium baby-care brand, with Next.js and React: clean design, a launch waitlist and a premium feel.",
    cardTitle: "Caldiors: website for a premium baby-care brand",
    cardText: "Clean design, thoughtful details and a pre-launch waitlist for a premium baby diaper brand, built with Next.js and React.",
    kind: "Case study",
    published: "2026-11-15",
    image: { src: "/images/work/caldiors.webp", width: 1280, height: 853, alt: "Caldiors website home page with a sleeping baby and the headline Premium care for every little moment" },
    video: { src: "/videos/caldiors.mp4", width: 1280, height: 854, seconds: 12, uploaded: "2026-11-13", name: "Caldiors website walkthrough" },
    tags: ["Next.js", "React", "CSS3", "Brand Design"],
    keywords: ["baby brand website design", "Next.js developer", "pre-launch waitlist website", "D2C brand website", "hire Next.js developer"],
    facts: [
      ["Project", "Brand website, live at caldiors.com"],
      ["Industry", "Baby care"],
      ["My role", "Design, full stack development, launch"],
      ["Tools", "Next.js, React, CSS3"]
    ],
    links: [
      { label: "Visit caldiors.com", href: "https://caldiors.com" },
      { label: "View the project on Contra", href: "https://contra.com/p/POlFEscZ-a-little-care-a-beautiful" }
    ],
    body: `
<p class="lead">Caldiors is a premium baby-care brand preparing to launch pant-style baby diapers in India. I designed and built its website with Next.js and React, from the first design through to launch. The site is live at <a href="https://caldiors.com" rel="noopener">caldiors.com</a>.</p>

<h2>The goal: earn a parent's trust before the product is on sale</h2>
<p>Parents are careful buyers. A baby-care brand has to look trustworthy in the first few seconds, and Caldiors had an extra challenge: the product was not yet on sale. The website needed to introduce the brand, explain what is coming, and give interested parents a reason to leave their email.</p>

<h2>The design: calm, soft and premium</h2>
<p>The home page opens with a sleeping baby and one line: "Premium care for every little moment." The layout is mostly white space, with a classic serif logo, quiet typography and a single strong blue used only for actions. Nothing competes with the message.</p>
<p>The copy stays specific. The first screen says what the product is (premium pant-style baby diapers), where it is launching (India) and what it focuses on: absorption, softness and a comfortable fit.</p>

<h2>A waitlist that gives something back</h2>
<p>The main action on the page is an email field with a "Notify me" button. It comes with a first-customer offer: join the list and get 10% off the first Caldiors order. The same offer is repeated in the navigation, so it is always one click away. For a brand that has not launched yet, that list is the most valuable thing the site can produce.</p>

<h2>More than a landing page</h2>
<p>The site also has the pages a careful parent looks for:</p>
<ul>
  <li><strong>Journal</strong>, for articles from the brand</li>
  <li><strong>About</strong>, for the story behind Caldiors</li>
  <li><strong>Size guide</strong>, so parents can choose the right fit</li>
  <li><strong>Contact</strong></li>
</ul>

<h2>Why Next.js and React</h2>
<p>I built Caldiors with Next.js, React and CSS3. For a brand site that will grow into a shop, that stack has clear advantages: pages load fast, search engines can read the content easily, and the same codebase can later take on products, checkout and customer accounts without starting again.</p>

<h2>What I handled</h2>
<ul>
  <li>Website design</li>
  <li>Front-end and back-end development in Next.js and React</li>
  <li>Responsive layouts for phone, tablet and desktop</li>
  <li>Launch on the caldiors.com domain</li>
</ul>

<h2>Have a brand that needs a website like this?</h2>
<p>I build custom websites, e-commerce stores and web applications, and I can take a business idea from design through development to launch.</p>
`
  },

  {
    slug: "orven",
    title: "Interior Design Website Built in Framer | ORVEN Case Study",
    h1: "ORVEN: an interior design studio website built in Framer",
    description:
      "ORVEN is an interior design studio website I designed and built in Framer: warm walnut and travertine tones, image-led layouts and paced motion.",
    cardTitle: "ORVEN: interior design website built in Framer",
    cardText: "Warm walnut, travertine and ivory tones, an arch-inspired logo, image-led layouts and paced motion, built in Framer.",
    kind: "Case study",
    published: "2026-11-15",
    image: { src: "/images/work/orven-poster.webp", width: 1120, height: 644, alt: "ORVEN interior design studio website home page built in Framer" },
    video: { src: "/videos/orven.mp4", width: 1120, height: 644, seconds: 15, uploaded: "2026-11-13", name: "ORVEN interior design website walkthrough" },
    tags: ["Framer", "Figma", "Web Design"],
    keywords: ["interior design website", "Framer developer", "Framer website design", "interior designer website design", "hire Framer developer"],
    facts: [
      ["Project", "Studio website demonstration"],
      ["Industry", "Interior design"],
      ["My role", "Web design, UI design, Framer development"],
      ["Tools", "Figma, Framer"]
    ],
    links: [
      { label: "View the project on Contra", href: "https://contra.com/p/vXQvqZle-orven-interior-design-website-built-in-framer" }
    ],
    body: `
<p class="lead">A website should feel as considered as the spaces it showcases. ORVEN brings the atmosphere of an interior design studio online, with warm walnut, travertine and ivory tones and an arch-inspired logo. I designed and built it in Framer.</p>

<h2>The goal</h2>
<p>An interior design studio's website has four jobs: present the studio's work, explain its approach, let visitors explore projects, and start a conversation. Every section of ORVEN is there to do one of those four things.</p>

<h2>The design</h2>
<p>The home page opens with one large interior photograph, the headline "Your vision, beautifully realized" and a single action: book a consultation. From there the page follows the order a potential client thinks in:</p>
<ol>
  <li>It introduces the studio</li>
  <li>It presents selected projects</li>
  <li>It shares journal content</li>
  <li>It answers common questions</li>
  <li>It leads into contact</li>
</ol>
<p>The layouts are image-led. Interior design is sold through photography, so the pictures get the space and the text stays short.</p>
<figure class="wide"><img src="/images/work/orven.webp" alt="ORVEN logo with the website shown on a laptop and a phone" width="960" height="720" loading="lazy" decoding="async" /><figcaption>The ORVEN logo, with the home page on desktop and mobile</figcaption></figure>

<h2>Framer and motion</h2>
<p>The site is built in Framer, with the focus on three things: page flow, responsive layouts and paced motion. The motion is deliberately paced, so the site feels calm without holding anyone up. The same layouts adapt from desktop down to a phone, where the navigation collapses into a menu and the consultation button stays in the first screen.</p>

<h2>Brand presentation</h2>
<p>Alongside the website, the project includes the ORVEN logo, a palette presentation, a stationery mockup, a capture of the live home page and a laptop video. The mockups are presentation assets. They show the visual direction and do not stand for extra shipped pages.</p>

<h2>Deliverables</h2>
<ul>
  <li>ORVEN logo and visual presentation</li>
  <li>Framer website</li>
  <li>Responsive web layouts</li>
  <li>Page flow and animation direction</li>
  <li>Portfolio cover, brand mockup and website detail image</li>
  <li>A short website showcase video</li>
</ul>

<h2>Project status</h2>
<p>ORVEN is a studio website demonstration. Some of the studio copy and project figures on the site are placeholders, and I do not claim any client results or performance numbers for it. It shows how I would design and build a site for a real interior design studio.</p>

<h2>Want a Framer website with a clear path for visitors?</h2>
<p>I design and build Framer websites for studios and service businesses, from the Figma design to the published site.</p>
`
  },

  {
    slug: "axiom-architecture-website-concept",
    title: "Architecture Website Design Concept | AXIOM Case Study",
    h1: "AXIOM: an architecture studio brand and website design concept",
    description:
      "AXIOM is a brand and website design concept for an architecture studio: a geometric logo, editorial typography, monochrome imagery, desktop and mobile layouts.",
    cardTitle: "AXIOM: architecture brand and website concept",
    cardText: "A geometric logo, editorial typography and monochrome desktop and mobile home page designs for an architecture studio.",
    kind: "Design concept",
    published: "2026-11-15",
    image: { src: "/images/work/axiom.webp", width: 960, height: 720, alt: "AXIOM architecture studio logo with the website concept shown on a laptop and a phone" },
    tags: ["Brand Design", "Web Design", "UI Design"],
    keywords: ["architecture website design", "architect website design", "architecture studio branding", "minimal website design", "website design concept"],
    facts: [
      ["Project", "Brand and website design concept"],
      ["Industry", "Architecture"],
      ["My role", "Brand design, web design"],
      ["Status", "Concept, not a live website"]
    ],
    links: [
      { label: "View the project on Contra", href: "https://contra.com/p/cORkYE72-axiom-architecture-brand-and-website-design-concept" }
    ],
    body: `
<p class="lead">An architecture website should give the work room to speak. AXIOM is a visual exploration of how an architecture studio can present its identity and its projects, with a minimal logo, expressive typography and monochrome imagery.</p>

<h2>The idea</h2>
<p>Architects are judged on their buildings, so the website's job is to get out of the way. AXIOM uses generous spacing to keep the layout calm, and a clear hierarchy that guides a visitor from the studio introduction straight to featured work.</p>

<h2>Brand identity</h2>
<ul>
  <li><strong>Logo:</strong> a geometric letter "A" drawn from a few straight lines, above a widely spaced wordmark</li>
  <li><strong>Colour:</strong> black and white only, so the photography supplies all the tone</li>
  <li><strong>Typography:</strong> a large editorial serif for the headline, "Space, considered.", with a quiet sans serif for navigation and details</li>
</ul>

<h2>The desktop home page</h2>
<p>The desktop layout gives project photography the most prominent place. Above it sits a short statement, "Architecture shaped around the way we live", and a link to discover the studio. Below, the first selected project is labelled plainly with its number, name, type and year, the way an architect would caption a drawing.</p>

<h2>The mobile version</h2>
<p>The mobile concept is not a shrunken desktop page. It uses a simpler stacked layout: logo and menu, headline, statement, one project image, then the project name with a clear "View project" link. Many people will first open a studio's site on a phone from a social profile or a referral, so that screen has to stand on its own.</p>

<h2>What the presentation includes</h2>
<ul>
  <li>A geometric logo and wordmark</li>
  <li>A black-and-white visual identity</li>
  <li>A desktop home page concept</li>
  <li>A matching mobile website concept</li>
  <li>Device mockups showing the full direction</li>
</ul>

<h2>About this concept</h2>
<p>AXIOM is a design concept, presented through AI-assisted mockups. It is not a live website, and the architecture studio is fictional. I made it to show the direction I would take for a real studio, and I can build a direction like this as a working site in Next.js or Framer.</p>

<h2>Want a distinctive website for your studio or business?</h2>
<p>Send me a message with a few lines about your business and we can set up a quick call.</p>
`
  },

  {
    slug: "saas-idea-to-brand-and-product",
    title: "How to Turn a SaaS Idea Into a Brand and Product: 8 Steps",
    h1: "From zero to hero: turning a SaaS idea into a brand and a product in 8 steps",
    description:
      "The 8-step process I use to turn a SaaS idea into a brand and digital product, from discovery and naming to MVP development, launch and brand guidelines.",
    cardTitle: "From zero to hero: SaaS idea to brand and product",
    cardText: "My 8-step process, from discovery and naming to MVP, launch and brand guidelines.",
    kind: "Process guide",
    published: "2026-11-15",
    image: { src: "/images/work/saasbrand.webp", width: 960, height: 640, alt: "Brand packaging mockup: an embossed gift box, a shopping bag and a card carrying the same wordmark" },
    tags: ["Brand Design", "UI Design", "React"],
    keywords: ["SaaS branding", "SaaS product development process", "turn SaaS idea into product", "SaaS brand strategy", "hire SaaS developer"],
    facts: [
      ["Type", "Process guide"],
      ["Covers", "Brand strategy, UI/UX design, MVP development"],
      ["My role", "Brand design, UI design, web development"],
      ["Tools", "Figma, Adobe XD, React"]
    ],
    links: [
      { label: "View the project on Contra", href: "https://contra.com/p/QFUgeq77-from-zero-to-heroturning-a" }
    ],
    body: `
<p class="lead">Most SaaS ideas start as a sentence. Turning that sentence into a product people recognise and pay for takes two things built together: a brand and the software. This is the 8-step process I use, combining brand strategy, design thinking and Agile development.</p>

<nav class="toc" aria-label="Steps in this guide">
  <ol>
    <li><a href="#discovery">Discovery and research</a></li>
    <li><a href="#strategy">Brand strategy and positioning</a></li>
    <li><a href="#naming">Naming and messaging</a></li>
    <li><a href="#identity">Visual identity</a></li>
    <li><a href="#ux">UI/UX design and prototyping</a></li>
    <li><a href="#mvp">MVP development using Agile</a></li>
    <li><a href="#launch">Testing and launch preparation</a></li>
    <li><a href="#guidelines">Brand guidelines and ongoing improvement</a></li>
  </ol>
</nav>

<h2 id="discovery">1. Discovery and research</h2>
<p>Before any design, I work to understand the idea, the audience, the problems those customers have and what the business needs to achieve. I also study competitors: what they promise, how they price and where they leave people frustrated. The output is a short, shared description of who the product is for and why they would switch to it.</p>

<h2 id="strategy">2. Brand strategy and positioning</h2>
<p>Next comes the brand's purpose, personality, value proposition and tone of voice. In plain terms: what the product stands for, how it should sound, and the one reason someone should choose it over the alternatives. Every later decision, from the logo to the wording of an error message, is checked against this.</p>

<h2 id="naming">3. Naming and messaging</h2>
<p>With the positioning agreed, I develop naming directions, taglines, product descriptions and key messages. A good SaaS name is easy to say, easy to spell and available as a domain. The key messages become the headlines on the landing page later, so this step saves time at launch.</p>

<h2 id="identity">4. Visual identity</h2>
<p>This is where the brand becomes visible: the logo and its variations, the colour palette, typography, icons and graphic elements. For software, the identity has to work at very small sizes, such as a browser tab icon or an app icon, as well as on a landing page.</p>

<h2 id="ux">5. UI/UX design and prototyping</h2>
<p>I map the user journeys, then move through wireframes to interface designs and interactive prototypes. For a SaaS product that covers onboarding, navigation, dashboards, subscriptions and account management. A clickable prototype lets you put the product in front of real users before any code is written, when changes are still cheap.</p>

<h2 id="mvp">6. MVP development using Agile</h2>
<p>Development starts with the core features only. I prioritise what the first users need and build in short sprints with regular reviews, so you see working software at each review and can change direction early. Anything that is not needed for the first release goes on a list for later.</p>

<h2 id="launch">7. Testing and launch preparation</h2>
<p>Before launch I check functionality, usability, responsive layouts, accessibility, performance and security. In parallel, the launch material gets prepared: the landing page, onboarding content and launch visuals, all using the identity and messages from the earlier steps.</p>

<h2 id="guidelines">8. Brand guidelines and ongoing improvement</h2>
<p>The last step is writing things down: logo usage, colours, typography, messaging and interface patterns. Guidelines keep the brand consistent when more people start working on it. After launch, user feedback and product data guide what gets improved next.</p>

<h2>Why build the brand and the product together</h2>
<p>When branding and development are done by separate teams at separate times, the product often ends up with a logo on top of an interface that does not match it. Doing both in one process means the name, the look, the words and the software all come from the same decisions. It also means one person is accountable from the first conversation to the launch.</p>

<h2>Your vision. A clear identity. A product built step by step.</h2>
<p>I offer brand creation, UI/UX design and software development, from first concept to launch. If you have a SaaS idea and want it taken through these eight steps, get in touch.</p>
`
  },

  {
    slug: "saas-mvp-development-process",
    title: "SaaS MVP Development Process: 6 Stages, Idea to Launch",
    h1: "Building a new SaaS product? My MVP-first process in 6 stages",
    description:
      "An Agile, MVP-first way to build a SaaS product in six stages: discovery, planning, UI/UX design, development, testing and launch, then steady improvement.",
    cardTitle: "Building a new SaaS product: an MVP-first process",
    cardText: "Six stages: discovery, planning, UI/UX design, development, testing, then launch and improvement.",
    kind: "Process guide",
    published: "2026-11-15",
    image: { src: "/images/work/saasmvp.webp", width: 960, height: 698, alt: "Scholar World web app landing page shown on a desktop monitor" },
    tags: ["Next.js", ".NET", "Supabase"],
    keywords: ["SaaS MVP development", "MVP development process", "how to build a SaaS MVP", "hire MVP developer", "Agile SaaS development"],
    facts: [
      ["Type", "Process guide"],
      ["Approach", "Agile, MVP-first"],
      ["My role", "Full stack engineering, UI/UX"],
      ["Tools", "Next.js, .NET, Supabase"]
    ],
    links: [
      { label: "SaaS and MVP development service", href: "https://contra.com/s/essYOqOs-saa-s-and-mvp-development" },
      { label: "View the project on Contra", href: "https://contra.com/p/RPWcRgov-building-a-new-saa-s-product" }
    ],
    body: `
<p class="lead">The safest way to build a new SaaS product is to build less of it first. I use an Agile, MVP-first approach: build the product in small stages, put it in front of real users, and improve it using their feedback. Here are the six stages.</p>

<h2>What "MVP-first" means</h2>
<p>An MVP, or minimum viable product, is the smallest version of your product that solves the main problem for real users. It is not a prototype and it is not a half-finished product. It does one thing properly. Starting there means you spend less before you learn whether people want it, and what you learn decides what gets built next.</p>

<div class="tableWrap">
<table>
  <thead><tr><th>Stage</th><th>What happens</th><th>What you get</th></tr></thead>
  <tbody>
    <tr><td>1. Discovery</td><td>Understand the problem, the users and the business goals</td><td>A clear problem statement and target user</td></tr>
    <tr><td>2. Planning</td><td>Define core features, architecture and milestones</td><td>A feature list, a technical plan and a timeline</td></tr>
    <tr><td>3. UI/UX design</td><td>Create wireframes and interactive prototypes</td><td>A clickable prototype to test and approve</td></tr>
    <tr><td>4. Development</td><td>Build the MVP in short, focused sprints</td><td>Working software at the end of each sprint</td></tr>
    <tr><td>5. Testing</td><td>Check functionality, usability, security and performance</td><td>A release that is ready for real users</td></tr>
    <tr><td>6. Launch</td><td>Deploy, monitor and collect real user feedback</td><td>A live product and a list of what to improve</td></tr>
  </tbody>
</table>
</div>

<h2>1. Discovery</h2>
<p>We start with the problem, not the feature list. Who has this problem, how do they deal with it today, and what does the business need the product to achieve? If the answers are vague, this is the cheapest place to find out.</p>

<h2>2. Planning</h2>
<p>Here the idea becomes a plan: the core features for the first release, the architecture, and milestones. The most useful thing this stage produces is a list of what is <em>not</em> in the MVP. Every feature moved to "later" brings the launch closer.</p>

<h2>3. UI/UX design</h2>
<p>I create wireframes first, then interactive prototypes you can click through. You can show these to potential users and investors before development starts. Changing a screen at this stage takes minutes. Changing it after it is built takes much longer.</p>

<h2>4. Development</h2>
<p>The MVP is built in short, focused sprints. Each sprint ends with something you can open and use, so progress is visible and feedback is regular. My usual stack for SaaS work is Next.js on the front end, .NET or Node.js for the back end, and a managed database and authentication service such as Supabase, which removes weeks of setup from a first release.</p>

<h2>5. Testing</h2>
<p>Before release I check four things: that every feature works, that people can use it without help, that accounts and data are secure, and that it stays fast under load. Problems found here cost far less than problems found by your first customers.</p>

<h2>6. Launch, then improvement</h2>
<p>Launch means deploying the product, monitoring it and collecting feedback from real users. That feedback starts the next cycle: refine the features people use, fix what confuses them and grow the product in the direction the data points. The MVP is the first release, not the last one.</p>

<h2>Common questions</h2>
<h3>What should be in a SaaS MVP?</h3>
<p>Sign-up and login, the one core feature that solves the main problem, and a way to hear from users. Payments belong in the MVP only if charging is part of what you need to test. Most other things can wait.</p>
<h3>Do I need a finished design before development starts?</h3>
<p>No. You need agreed wireframes and a prototype for the core flow. The visual polish can be refined sprint by sprint.</p>
<h3>Can you handle both design and development?</h3>
<p>Yes. I cover UI/UX design, front end, back end, deployment and launch, so you do not have to coordinate separate freelancers.</p>

<h2>From zero to hero, concept to launch</h2>
<p>If you are planning a new SaaS product and want it designed and built this way, tell me about the idea and I will reply with how I would approach the first release.</p>
`
  }
];

module.exports.CONTRA = CONTRA;
