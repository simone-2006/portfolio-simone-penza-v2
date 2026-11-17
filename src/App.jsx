import { useCallback, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";
import Contatti from "./components/layout/Contatti";
import Footer from "./components/layout/Footer";
import BootScreen from "./components/layout/BootScreen";
import Privacy from "./components/layout/Privacy";
import BackToTop from "./components/ui/BackToTop";
import { ThemeProvider } from "./hooks/theme";

function isPrivacyHash() {
  return window.location.hash === "#privacy";
}

export default function App() {
  const [booting, setBooting] = useState(() => !isPrivacyHash());
  const [showPrivacy, setShowPrivacy] = useState(isPrivacyHash);
  const dismissBoot = useCallback(() => setBooting(false), []);

  useEffect(() => {
    const syncPrivacy = () => {
      const privacy = isPrivacyHash();
      setShowPrivacy(privacy);
      if (privacy) {
        setBooting(false);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    window.addEventListener("hashchange", syncPrivacy);
    window.addEventListener("popstate", syncPrivacy);
    return () => {
      window.removeEventListener("hashchange", syncPrivacy);
      window.removeEventListener("popstate", syncPrivacy);
    };
  }, []);

  const openPrivacy = useCallback(() => {
    if (window.location.hash !== "#privacy") {
      history.pushState(null, "", "#privacy");
    }
    setShowPrivacy(true);
    setBooting(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const closePrivacy = useCallback((targetId = "about") => {
    const id = typeof targetId === "string" ? targetId : "about";
    history.pushState(null, "", `#${id}`);
    setShowPrivacy(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-w-0 overflow-x-clip bg-primary">
        <Navbar hideSections={showPrivacy} onHome={closePrivacy} />
        {showPrivacy ? (
          <Privacy onBack={closePrivacy} />
        ) : (
          <>
            <AboutMe />
            <Skills />
            <Experience />
            <Contatti />
          </>
        )}
        <Footer onPrivacyClick={openPrivacy} />
        {booting ? <BootScreen onDone={dismissBoot} /> : null}
      </div>
      {!showPrivacy ? <BackToTop /> : null}
      <Analytics />
    </ThemeProvider>
  );
}
