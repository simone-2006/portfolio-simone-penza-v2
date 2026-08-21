import Navbar, { navbarElements } from "./components/layout/Navbar";
import { motion } from "framer-motion";

import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";

export default function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <AboutMe></AboutMe>
      <Skills></Skills>
      <section
        key={navbarElements[2].id}
        id={navbarElements[2].id}
        className="h-svh scroll-mt-14 p-4"
      >
          <h1 className="font-sans tracking-wide uppercase font-semibold">{navbarElements[2].title}</h1>
      </section>
      <section
        key={navbarElements[3].id}
        id={navbarElements[3].id}
        className="h-svh scroll-mt-14 p-4"
      >
          <h1 className="font-sans tracking-wide uppercase font-semibold">{navbarElements[3].title}</h1>
      </section>
      <section
        key={navbarElements[4].id}
        id={navbarElements[4].id}
        className="h-svh scroll-mt-14 p-4"
      >
          <h1 className="font-sans tracking-wide uppercase font-semibold">{navbarElements[4].title}</h1>
      </section>
    </div>
  );
}
