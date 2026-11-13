import { useEffect } from "react";

const SDK_SRC = "https://contra.com/static/embed/sdk.js";

// "Hire Me on Contra" badge. The SDK scans the page for
// .contra-hire-me-button when it loads, so it is injected after mount.
const ContraButton = ({ theme = "light" }) => {
  useEffect(() => {
    // Load the SDK only once: a second copy renders a second button
    // (React StrictMode runs effects twice in development).
    if (document.querySelector(`script[src="${SDK_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SDK_SRC;
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="contra-hire-me-button"
      data-analyticsuserid="a6c624c8-1922-4387-a7ee-3ce6a245cb89"
      data-theme={theme}
      data-username="kenil_vaghasiya6108"
    ></div>
  );
};

export default ContraButton;
