import { useEffect } from "react";

const SITE = "https://kenilvaghasiya.com";

// Title, description and address that search engines should use for each page.
// The home page values match the ones already written in public/index.html.
const pages = {
  "/": {
    title: "Kenil Vaghasiya | Full Stack, Framer & SaaS Developer for Hire",
    description:
      "Hire Kenil Vaghasiya, a full stack developer, Framer developer and SaaS software developer with 4+ years of experience building products in React, Next.js, Node.js, .NET and Azure."
  },
  "/portfolio": {
    title: "Portfolio & Latest Work | Kenil Vaghasiya, Web Developer",
    description:
      "Recent work by Kenil Vaghasiya: Framer and Next.js websites, brand identities and SaaS products, each with a case study. Available for hire."
  },
  "/about": {
    title: "About Kenil Vaghasiya | Full Stack & Framer Developer",
    description:
      "Kenil Vaghasiya is a full stack developer with 4+ years of experience in React, Next.js, Node.js, .NET and Azure. Experience, skills and education."
  },
  "/contact": {
    title: "Contact Kenil Vaghasiya | Hire a Full Stack & Framer Developer",
    description:
      "Get in touch with Kenil Vaghasiya about a website, Framer build, SaaS product or MVP, or a Software Engineer or Full-Stack role."
  }
};

const setContent = (selector, value) => {
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute("content", value);
};

/* Keeps the browser tab title, description, canonical link and share tags in step with the page being shown. */
export const usePageSeo = (pathname) => {
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path] || pages["/"];
    const url = SITE + (pages[path] ? path : "/");

    document.title = page.title;
    setContent('meta[name="description"]', page.description);
    setContent('meta[property="og:title"]', page.title);
    setContent('meta[property="og:description"]', page.description);
    setContent('meta[property="og:url"]', url);
    setContent('meta[name="twitter:title"]', page.title);
    setContent('meta[name="twitter:description"]', page.description);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [pathname]);
};
