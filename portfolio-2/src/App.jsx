import { useCallback, useState } from "react";
import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";
import Contatti from "./components/layout/Contatti";
import Footer from "./components/layout/Footer";
import BootScreen from "./components/layout/BootScreen";
import BackToTop from "./components/ui/BackToTop";
import { ThemeProvider } from "./hooks/theme";

export default function App() {
  const [booting, setBooting] = useState(true);
  const dismissBoot = useCallback(() => setBooting(false), []);

  return (
    <ThemeProvider>
      <div className="min-w-0 overflow-x-clip bg-primary">
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
        <Contatti />
        <Footer />
        {booting ? <BootScreen onDone={dismissBoot} /> : null}
      </div>
      <BackToTop />
    </ThemeProvider>
  );
}
