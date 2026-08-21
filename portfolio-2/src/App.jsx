import Navbar from "./components/layout/Navbar";
import Navbar, { navbarElements } from "./components/layout/Navbar";
import { motion } from "framer-motion";

import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";
import Contatti from "./components/layout/Contatti";
import FluidCursor from "./components/ui/FluidCursor";

export default function App() {
  return (
    <div className="relative isolate min-h-svh bg-primary">
      <div className="relative z-10">
        <Navbar />
        <AboutMe />
        <Skills />
        <Experience />
        <Contatti />
      </div>
    </div>
  );
}
