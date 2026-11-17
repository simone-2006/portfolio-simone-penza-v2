import { useCallback, useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";
import Contatti from "./components/layout/Contatti";
import Faq from "./components/layout/Faq";
import Footer from "./components/layout/Footer";
import BootScreen from "./components/layout/BootScreen";
import Privacy from "./components/layout/Privacy";
import Accessibilita from "./components/layout/Accessibilita";
import BackToTop from "./components/ui/BackToTop";
import { ThemeProvider } from "./hooks/theme";

const LEGAL_HASHES = new Set(["privacy", "accessibilita"]);

function currentLegalHash() {
  const hash = window.location.hash.slice(1);
  return LEGAL_HASHES.has(hash) ? hash : null;
}

export default function App() {
  const [booting, setBooting] = useState(() => !currentLegalHash());
  const [legalPage, setLegalPage] = useState(currentLegalHash);
  const mainRef = useRef(null);

  const dismissBoot = useCallback(() => {
    setBooting(false);
    requestAnimationFrame(() => {
      mainRef.current?.focus({ preventScroll: true });
    });
  }, []);

  useEffect(() => {
    const syncLegal = () => {
      const page = currentLegalHash();
      setLegalPage(page);
      if (page) {
        setBooting(false);
        window.scrollTo({ top: 0, behavior: "auto" });
        requestAnimationFrame(() => {
          document.getElementById(page)?.focus({ preventScroll: true });
        });
      }
    };

    window.addEventListener("hashchange", syncLegal);
    window.addEventListener("popstate", syncLegal);
    return () => {
      window.removeEventListener("hashchange", syncLegal);
      window.removeEventListener("popstate", syncLegal);
    };
  }, []);

  useEffect(() => {
    const base = "Simone Penza — Tecnico IT e sviluppatore web a Lissone (MB)";
    if (legalPage === "privacy") {
      document.title = `Privacy e cookie — ${base}`;
    } else if (legalPage === "accessibilita") {
      document.title = `Accessibilità — ${base}`;
    } else {
      document.title = base;
    }
  }, [legalPage]);

  const openLegal = useCallback((page) => {
    if (!LEGAL_HASHES.has(page)) return;
    if (window.location.hash !== `#${page}`) {
      history.pushState(null, "", `#${page}`);
    }
    setLegalPage(page);
    setBooting(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      document.getElementById(page)?.focus({ preventScroll: true });
    });
  }, []);

  const closeLegal = useCallback((targetId = "about") => {
    const id = typeof targetId === "string" ? targetId : "about";
    history.pushState(null, "", `#${id}`);
    setLegalPage(null);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      document.getElementById(id)?.focus({ preventScroll: true });
    });
  }, []);

  const showLegal = Boolean(legalPage);

  return (
    <ThemeProvider>
      <a
        href={legalPage ? `#${legalPage}` : "#main-content"}
        className="skip-link"
      >
        Vai al contenuto
      </a>
      <div className="min-w-0 overflow-x-clip bg-primary" inert={booting || undefined}>
        <Navbar
          hideSections={showLegal}
          onHome={closeLegal}
        />
        {legalPage === "privacy" ? (
          <Privacy onBack={closeLegal} />
        ) : legalPage === "accessibilita" ? (
          <Accessibilita onBack={closeLegal} />
        ) : (
          <main id="main-content" ref={mainRef} tabIndex={-1} className="outline-none">
            <AboutMe />
            <Skills />
            <Experience />
            <Faq />
            <Contatti />
          </main>
        )}
        <Footer
          onPrivacyClick={() => openLegal("privacy")}
          onAccessibilityClick={() => openLegal("accessibilita")}
        />
      </div>
      {booting ? <BootScreen onDone={dismissBoot} /> : null}
      {!showLegal ? <BackToTop /> : null}
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
