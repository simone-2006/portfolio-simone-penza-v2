import Navbar from "./components/layout/Navbar";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import Experience from "./components/layout/Experience";
import Contatti from "./components/layout/Contatti";

export default function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <Contatti />
    </div>
  );
}
