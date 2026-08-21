import { useContext } from "react";

import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";

import { pagesContext } from "./context/appContext";

export default function App() {
  const navbarElements = useContext(pagesContext);

  return (
    <div className="bg-primary">
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <section
        key={navbarElements[3].id}
        id={navbarElements[3].id}
        className="page-section"
      >
        <h1 className="font-sans tracking-wide uppercase font-semibold">
          {navbarElements[3].title}
        </h1>
      </section>
    </div>
  );
}
