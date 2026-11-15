/*
 * Builds the case-study / blog pages and the sitemap.
 *
 *   npm run work        (also runs automatically before `npm run build`)
 *
 * Reads scripts/work-posts.js and writes:
 *   public/work/index.html              list of all posts
 *   public/work/<slug>/index.html       one page per post
 *   public/sitemap.xml
 *
 * The pages are plain HTML files, so search engines and link previews can read
 * them without running JavaScript.
 */
const fs = require("fs");
const path = require("path");
const posts = require("./work-posts");

const SITE = "https://kenilvaghasiya.com";
const NAME = "Kenil Vaghasiya";
const EMAIL = "kenilvaghasiya66@gmail.com";
const CONTRA = posts.CONTRA;
const PUBLIC = path.join(__dirname, "..", "public");
const TODAY = new Date().toISOString().slice(0, 10);

const esc = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (url) => (url.startsWith("http") ? url : SITE + url);
const longDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const words = (html) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
const jsonLd = (data) =>
  `<script type="application/ld+json">\n${JSON.stringify(data, null, 2).replace(/</g, "\\u003c")}\n    </script>`;
const mailto = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const person = { "@type": "Person", "@id": `${SITE}/#person`, name: NAME, url: `${SITE}/` };

const head = ({ title, description, url, image, type, extraMeta = "", schema }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="author" content="${NAME}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#000000" />
    <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="/work/work.css" />

    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="${NAME}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${abs(image.src)}" />
    <meta property="og:image:width" content="${image.width}" />
    <meta property="og:image:height" content="${image.height}" />
    <meta property="og:image:alt" content="${esc(image.alt)}" />${extraMeta}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${abs(image.src)}" />
    <meta name="twitter:image:alt" content="${esc(image.alt)}" />

    ${jsonLd(schema)}
  </head>
  <body>
    <header class="top">
      <div class="topIn">
        <a class="brand" href="/">${NAME}</a>
        <nav class="topNav" aria-label="Main">
          <a class="hideSm" href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/work/"${type === "website" ? ' aria-current="page"' : ""}>Blog</a>
          <a class="btn primary" href="/contact">Hire me</a>
        </nav>
      </div>
    </header>
`;

const foot = `
    <footer class="foot">
      <div class="footIn">
        <span>&copy; ${TODAY.slice(0, 4)} ${NAME}. Full stack, Framer and SaaS developer.</span>
        <nav aria-label="Footer">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/work/">Blog</a>
          <a href="/contact">Contact</a>
          <a href="${CONTRA}" rel="noopener">Contra</a>
          <a href="https://www.linkedin.com/in/kenil704/" rel="noopener">LinkedIn</a>
          <a href="https://github.com/kenilvaghasiya" rel="noopener">GitHub</a>
        </nav>
      </div>
    </footer>
  </body>
</html>
`;

const card = (post, heading) => `
          <li>
            <a class="card" href="/work/${post.slug}/">
              <img src="${post.image.src}" alt="${esc(post.image.alt)}" width="${post.image.width}" height="${post.image.height}" loading="lazy" decoding="async" />
              <div class="cardBody">
                <span class="cardKind">${post.kind}</span>
                <${heading}>${esc(post.cardTitle)}</${heading}>
                <p>${esc(post.cardText)}</p>
                <span class="cardGo">Read the ${post.kind.toLowerCase()} &rarr;</span>
              </div>
            </a>
          </li>`;

const postPage = (post, index) => {
  const url = `${SITE}/work/${post.slug}/`;
  const minutes = Math.max(2, Math.round(words(post.body) / 200));
  const related = [1, 2, 3].map((step) => posts[(index + step) % posts.length]);

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.h1,
    description: post.description,
    image: [abs(post.image.src)],
    datePublished: `${post.published}T09:00:00+05:30`,
    dateModified: `${post.modified || post.published}T09:00:00+05:30`,
    author: person,
    publisher: { "@id": `${SITE}/#person` },
    mainEntityOfPage: { "@id": url },
    isPartOf: { "@id": `${SITE}/work/#blog` },
    articleSection: post.kind,
    keywords: post.keywords.join(", "),
    wordCount: words(post.body),
    inLanguage: "en"
  };
  const graph = [
    blogPosting,
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: post.title,
      description: post.description,
      isPartOf: { "@id": `${SITE}/#website` },
      primaryImageOfPage: abs(post.image.src),
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: NAME, item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Work and case studies", item: `${SITE}/work/` },
        { "@type": "ListItem", position: 3, name: post.cardTitle, item: url }
      ]
    }
  ];

  let extraMeta = `
    <meta property="article:published_time" content="${post.published}" />
    <meta property="article:author" content="${NAME}" />`;
  let hero = `<img src="${post.image.src}" alt="${esc(post.image.alt)}" width="${post.image.width}" height="${post.image.height}" fetchpriority="high" decoding="async" />`;

  if (post.video) {
    const video = post.video;
    blogPosting.video = { "@id": `${url}#video` };
    graph.push({
      "@type": "VideoObject",
      "@id": `${url}#video`,
      name: video.name,
      description: post.description,
      thumbnailUrl: [abs(post.image.src)],
      uploadDate: `${video.uploaded}T12:00:00+05:30`,
      duration: `PT${video.seconds}S`,
      contentUrl: abs(video.src),
      embedUrl: url,
      width: video.width,
      height: video.height,
      inLanguage: "en",
      isFamilyFriendly: true,
      creator: person
    });
    extraMeta += `
    <meta property="og:video" content="${abs(video.src)}" />
    <meta property="og:video:type" content="video/mp4" />
    <meta property="og:video:width" content="${video.width}" />
    <meta property="og:video:height" content="${video.height}" />`;
    hero = `<video controls playsinline muted loop preload="metadata" poster="${post.image.src}" width="${video.width}" height="${video.height}" title="${esc(video.name)}">
            <source src="${video.src}" type="video/mp4" />
            Your browser cannot play this video. <a href="${video.src}">Download the walkthrough video</a>.
          </video>`;
  }

  return `${head({
    title: post.title,
    description: post.description,
    url,
    image: post.image,
    type: "article",
    extraMeta,
    schema: { "@context": "https://schema.org", "@graph": graph }
  })}
    <main class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/work/">Work</a></li>
          <li aria-current="page">${esc(post.cardTitle)}</li>
        </ol>
      </nav>

      <article>
        <p class="kind">${post.kind}</p>
        <h1>${esc(post.h1)}</h1>
        <div class="byline">
          <img src="/images/kenilVaghasiya.webp" alt="${NAME}" width="44" height="44" decoding="async" />
          <span>By <a href="/about" rel="author">${NAME}</a> &middot; <time datetime="${post.published}">${longDate(post.published)}</time> &middot; ${minutes} min read</span>
        </div>

        <figure class="hero">
          ${hero}
        </figure>
        <ul class="tags" aria-label="Skills and tools">${post.tags.map((tag) => `<li>${esc(tag)}</li>`).join("")}</ul>

        <div class="cols">
          <div class="post">
${post.body.trim()}

            <aside class="cta" aria-label="Work with me">
              <h2>Have a project like this?</h2>
              <p>Tell me what you are building and I will reply with how I would approach it and what it would take.</p>
              <div class="btns">
                <a class="btn primary" href="${mailto(`Project enquiry (${post.cardTitle.split(":")[0]})`)}">Email me about your project</a>
                <a class="btn" href="${CONTRA}" rel="noopener">Hire me on Contra</a>
                <a class="btn" href="/contact">Contact page</a>
              </div>
              <ul>
                <li><a href="https://contra.com/s/7ZoZYPLB-nextjs-website-design-and-development" rel="noopener">Next.js websites</a></li>
                <li><a href="https://contra.com/s/essYOqOs-saa-s-and-mvp-development" rel="noopener">SaaS and MVP development</a></li>
                <li><a href="https://contra.com/s/3NBqBQmq-backend-api-development-and-integrations" rel="noopener">Backend APIs</a></li>
                <li><a href="https://contra.com/s/6MNbYPQs-ai-integrations-and-workflow-automation" rel="noopener">AI integrations</a></li>
              </ul>
            </aside>

            <div class="about">
              <img src="/images/kenilVaghasiya.webp" alt="${NAME}" width="72" height="72" loading="lazy" decoding="async" />
              <p><strong>About the author.</strong> ${NAME} is a full stack developer, Framer developer and SaaS software developer with 4+ years of experience building web applications with React, Next.js, Node.js, .NET and Azure. <a href="/about">More about me</a> &middot; <a href="/portfolio">See all work</a></p>
            </div>
          </div>

          <aside class="side" aria-label="Project details">
            <div class="panel">
              <h2>At a glance</h2>
              <dl>${post.facts.map(([label, value]) => `
                <div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("")}
              </dl>
              <ul>${post.links.map((link) => `
                <li><a href="${link.href}" rel="noopener">${esc(link.label)} &rarr;</a></li>`).join("")}
              </ul>
            </div>
            <div class="panel hire">
              <h2>Available for hire</h2>
              <p>Websites, Framer builds, SaaS products and MVPs, from design to launch.</p>
              <a class="btn primary" href="${mailto(`Project enquiry (${post.cardTitle.split(":")[0]})`)}">Start a project</a>
              <a class="btn" href="${CONTRA}" rel="noopener">View Contra profile</a>
            </div>
          </aside>
        </div>
      </article>

      <section class="more" aria-label="More work">
        <h2>More work</h2>
        <ul class="cards">${related.map((item) => card(item, "h3")).join("")}
        </ul>
      </section>
    </main>
${foot}`;
};

const indexPage = () => {
  const url = `${SITE}/work/`;
  const title = "Work & Case Studies | Kenil Vaghasiya, Web Developer";
  const description =
    "Case studies and process guides by Kenil Vaghasiya: Framer and Next.js websites, brand identities and how I take a SaaS idea from MVP to launch.";
  const image = { src: "/images/og-kenil-vaghasiya.jpg", width: 1200, height: 630, alt: "Kenil Vaghasiya, full stack, Framer and SaaS developer" };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        url,
        name: "Work and case studies by Kenil Vaghasiya",
        description,
        author: person,
        publisher: { "@id": `${SITE}/#person` },
        isPartOf: { "@id": `${SITE}/#website` },
        inLanguage: "en",
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${SITE}/work/${post.slug}/#article`,
          headline: post.h1,
          url: `${SITE}/work/${post.slug}/`,
          image: abs(post.image.src),
          datePublished: `${post.published}T09:00:00+05:30`,
          author: { "@id": `${SITE}/#person` }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: NAME, item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Work and case studies", item: url }
        ]
      }
    ]
  };

  return `${head({ title, description, url, image, type: "website", schema })}
    <main class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li aria-current="page">Work</li>
        </ol>
      </nav>

      <header class="indexHead">
        <h1>Work and case studies</h1>
        <p>How I design and build websites, brands and SaaS products. Each post walks through one project or one process: what the goal was, what I made and the tools I used. If you need something similar, <a href="/contact">get in touch</a>.</p>
      </header>

      <ul class="cards">${posts.map((post) => card(post, "h2")).join("")}
      </ul>

      <section class="services" aria-label="Services">
        <h2>What you can hire me for</h2>
        <ul>
          <li><strong>Framer website design and development</strong>Responsive, animated marketing sites, from Figma design to a published Framer site.</li>
          <li><strong><a href="https://contra.com/s/7ZoZYPLB-nextjs-website-design-and-development" rel="noopener">Next.js website design and development</a></strong>Fast brand sites and web apps built with Next.js and React.</li>
          <li><strong><a href="https://contra.com/s/essYOqOs-saa-s-and-mvp-development" rel="noopener">SaaS and MVP development</a></strong>From discovery and UI/UX design through development, testing and launch.</li>
          <li><strong><a href="https://contra.com/s/3NBqBQmq-backend-api-development-and-integrations" rel="noopener">Backend APIs and AI integrations</a></strong>REST APIs, third-party integrations and workflow automation.</li>
        </ul>
      </section>

      <aside class="cta" aria-label="Work with me">
        <h2>Have a project in mind?</h2>
        <p>Tell me what you are building and I will reply with how I would approach it and what it would take.</p>
        <div class="btns">
          <a class="btn primary" href="${mailto("Project enquiry")}">Email me about your project</a>
          <a class="btn" href="${CONTRA}" rel="noopener">Hire me on Contra</a>
          <a class="btn" href="/contact">Contact page</a>
        </div>
      </aside>
    </main>
${foot}`;
};

// Images listed under the home page in the sitemap.
const homeImages = [
  "/images/kenil-vaghasiya-square.jpg", "/images/kenil-vaghasiya-4x3.jpg", "/images/kenil-vaghasiya-profile.jpg", "/images/og-kenil-vaghasiya.jpg",
  "/images/work/svc-api.webp", "/images/work/svc-ai.webp", "/images/work/svc-next.webp", "/images/work/svc-saas.webp",
  "/images/al6.webp", "/images/al1.webp", "/images/al5.webp", "/images/al2.webp", "/images/al3.webp", "/images/al4.webp"
];
const imageTag = (src) => `
    <image:image>
      <image:loc>${SITE}${src}</image:loc>
    </image:image>`;
const postImages = (post) => [post.image.src, ...[...post.body.matchAll(/<img src="([^"]+)"/g)].map((match) => match[1])];

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${TODAY}</lastmod>${homeImages.map(imageTag).join("")}
  </url>
  <url>
    <loc>${SITE}/portfolio</loc>
    <lastmod>${TODAY}</lastmod>${posts.map((post) => imageTag(post.image.src)).join("")}
  </url>
  <url>
    <loc>${SITE}/about</loc>
    <lastmod>${TODAY}</lastmod>
  </url>
  <url>
    <loc>${SITE}/contact</loc>
    <lastmod>${TODAY}</lastmod>
  </url>
  <url>
    <loc>${SITE}/work/</loc>
    <lastmod>${TODAY}</lastmod>
  </url>${posts.map((post) => `
  <url>
    <loc>${SITE}/work/${post.slug}/</loc>
    <lastmod>${post.modified || post.published}</lastmod>${postImages(post).map(imageTag).join("")}${post.video ? `
    <video:video>
      <video:thumbnail_loc>${abs(post.image.src)}</video:thumbnail_loc>
      <video:title>${esc(post.video.name)}</video:title>
      <video:description>${esc(post.description)}</video:description>
      <video:content_loc>${abs(post.video.src)}</video:content_loc>
      <video:duration>${post.video.seconds}</video:duration>
      <video:publication_date>${post.video.uploaded}T12:00:00+05:30</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>` : ""}
  </url>`).join("")}
</urlset>
`;

const write = (file, content) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

// Checks that would hurt a page in search results, or point at a missing file.
const problems = [];
posts.forEach((post) => {
  if (post.title.length > 60) problems.push(`${post.slug}: title is ${post.title.length} characters (keep it to 60)`);
  if (post.description.length > 160) problems.push(`${post.slug}: description is ${post.description.length} characters (keep it to 160)`);
  [...postImages(post), ...(post.video ? [post.video.src] : [])].forEach((src) => {
    if (!fs.existsSync(path.join(PUBLIC, src))) problems.push(`${post.slug}: missing file public${src}`);
  });
});
if (new Set(posts.map((post) => post.slug)).size !== posts.length) problems.push("two posts share the same slug");
if (problems.length) {
  console.error("Work pages not built:\n  " + problems.join("\n  "));
  process.exit(1);
}

posts.forEach((post, index) => write(path.join(PUBLIC, "work", post.slug, "index.html"), postPage(post, index)));
write(path.join(PUBLIC, "work", "index.html"), indexPage());
write(path.join(PUBLIC, "sitemap.xml"), sitemap());

console.log(`Built ${posts.length} posts, the /work/ index and sitemap.xml:`);
posts.forEach((post) => console.log(`  /work/${post.slug}/  (${words(post.body)} words)`));
