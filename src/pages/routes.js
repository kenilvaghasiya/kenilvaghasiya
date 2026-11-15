import { lazy } from "react";

// Each page is its own chunk, so the home page does not download the others up front.
const loaders = {
  about: () => import("./AboutPage"),
  portfolio: () => import("./PortfolioPage"),
  contact: () => import("./ContactPage")
};

export const AboutPage = lazy(loaders.about);
export const PortfolioPage = lazy(loaders.portfolio);
export const ContactPage = lazy(loaders.contact);

export const preloadPages = () => Object.values(loaders).forEach((load) => load().catch(() => {}));
