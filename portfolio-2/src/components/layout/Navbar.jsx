import { useEffect, useRef, useState } from "react";
import NavbarButton from "../ui/NavbarButton";
import { pagesContext } from "../../context/appContext";
import { motion, useInView } from 'framer-motion';

export default function Navbar() {
    const [activeId, setActiveId] = useState(navbarElements[0].id);
    const ignoreScrollRef = useRef(false);

    useEffect(() => {
        const updateActive = () => {
            if (ignoreScrollRef.current) return;

            const offset = 72;
            let current = navbarElements[0].id;

            for (const item of navbarElements) {
                const element = document.getElementById(item.id);
                if (!element) continue;
                if (element.getBoundingClientRect().top <= offset) {
                    current = item.id;
                }
            }

            setActiveId(current);
        };

        updateActive();
        window.addEventListener("scroll", updateActive, { passive: true });
        return () => window.removeEventListener("scroll", updateActive);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        ignoreScrollRef.current = true;
        setActiveId(id);
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        window.setTimeout(() => {
            ignoreScrollRef.current = false;
        }, 800);
    };

    return (
        <nav
            aria-label="Primary"
            className="sticky top-0 z-50 border-b border-accent p-4 flex justify-between items-center backdrop-blur-sm bg-primary/80"
        >
            <motion.a href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p className="text-sm tracking-wide uppercase font-semibold">
                    Simone Penza
                </p>
            </motion.a>
            <div className="flex items-center gap-4">
                {navbarElements.map((navbarElement) => (
                    <NavbarButton
                        key={navbarElement.id}
                        href={`#${navbarElement.id}`}
                        active={activeId === navbarElement.id}
                        onClick={() => scrollToSection(navbarElement.id)}
                    >
                        {navbarElement.title}
                    </NavbarButton>
                ))}
            </div>
        </nav>
    );
}
