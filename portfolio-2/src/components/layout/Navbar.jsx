import { useCallback, useContext, useEffect, useRef, useState } from "react";
import NavbarButton from "../ui/NavbarButton";
import { pagesContext } from "../../context/appContext";
import { motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { useTheme } from "../../hooks/theme";


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const navbarElements = useContext(pagesContext);
    const [activeId, setActiveId] = useState(
        () => window.location.hash.slice(1) || navbarElements[0].id,
    );
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const ignoreScrollRef = useRef(false);
    const ignoreTimeoutRef = useRef(0);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const syncHeaderHeight = () => {
            document.documentElement.style.setProperty(
                "--header-height",
                `${nav.offsetHeight}px`,
            );
        };

        syncHeaderHeight();
        const observer = new ResizeObserver(syncHeaderHeight);
        observer.observe(nav);
        return () => observer.disconnect();
    }, [menuOpen]);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");
        const closeOnDesktop = (event) => {
            if (event.matches) setMenuOpen(false);
        };
        media.addEventListener("change", closeOnDesktop);
        return () => media.removeEventListener("change", closeOnDesktop);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        const onPointerDown = (event) => {
            if (!navRef.current?.contains(event.target)) setMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("pointerdown", onPointerDown);
        };
    }, [menuOpen]);

    const updateActive = useCallback(() => {
        if (ignoreScrollRef.current) return;

        const header = navRef.current?.offsetHeight ?? 56;
        const probe = header + 1;
        let current = navbarElements[0].id;

        for (const item of navbarElements) {
            const element = document.getElementById(item.id);
            if (!element) continue;
            if (element.getBoundingClientRect().top <= probe) {
                current = item.id;
            }
        }

        const atBottom =
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 2;

        if (atBottom) {
            current = navbarElements[navbarElements.length - 1].id;
        }

        setActiveId(current);
    }, [navbarElements]);

    useEffect(() => {
        let frame = 0;
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateActive);
        };

        updateActive();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [updateActive]);

    const releaseScrollLock = useCallback(() => {
        ignoreScrollRef.current = false;
        updateActive();
    }, [updateActive]);

    const scrollToSection = useCallback(
        (id, { updateHash = true, behavior = "smooth" } = {}) => {
            const element = document.getElementById(id);
            if (!element) return;

            ignoreScrollRef.current = true;
            setActiveId(id);
            setMenuOpen(false);

            if (updateHash && window.location.hash !== `#${id}`) {
                history.pushState(null, "", `#${id}`);
            }

            element.scrollIntoView({ behavior, block: "start" });

            const unlock = () => {
                window.removeEventListener("scrollend", unlock);
                window.clearTimeout(ignoreTimeoutRef.current);
                if (!ignoreScrollRef.current) return;
                releaseScrollLock();
            };

            window.clearTimeout(ignoreTimeoutRef.current);
            window.addEventListener("scrollend", unlock, { once: true });
            ignoreTimeoutRef.current = window.setTimeout(unlock, 1200);
        },
        [releaseScrollLock],
    );

    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (!id || !navbarElements.some((item) => item.id === id)) return;

        const frame = requestAnimationFrame(() => {
            const element = document.getElementById(id);
            if (!element) return;
            element.scrollIntoView({ behavior: "auto", block: "start" });
            setActiveId(id);
        });
        return () => cancelAnimationFrame(frame);
    }, [navbarElements]);

    useEffect(() => {
        const onPopState = () => {
            const id = window.location.hash.slice(1) || navbarElements[0].id;
            scrollToSection(id, { updateHash: false });
        };

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, [navbarElements, scrollToSection]);

    return (
        <nav
            ref={navRef}
            aria-label="Primary"
            className="sticky top-0 z-50 relative border-b border-accent p-4 flex justify-between items-center backdrop-blur-sm bg-primary/80"
        >
            <motion.a href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("about");
                }}
            >
                <p className="text-sm tracking-wide uppercase font-semibold text-text">
                    Simone Penza
                </p>
            </motion.a>
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
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
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={theme === "light" ? "Attiva tema scuro" : "Attiva tema chiaro"}
                    className="font-sans text-sm font-medium transition-colors text-muted hover:text-text p-2 -m-2"
                >
                    {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                    type="button"
                    className="lg:hidden p-2 -m-2 text-muted hover:text-text"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>
            {menuOpen ? (
                <div
                    id="mobile-nav"
                    className="absolute left-0 right-0 top-full z-50 flex flex-col gap-3 border-b border-accent bg-primary/95 p-4 backdrop-blur-sm lg:hidden"
                >
                    {navbarElements.map((navbarElement) => (
                        <NavbarButton
                            key={navbarElement.id}
                            href={`#${navbarElement.id}`}
                            active={activeId === navbarElement.id}
                            className="w-fit py-1"
                            onClick={() => scrollToSection(navbarElement.id)}
                        >
                            {navbarElement.title}
                        </NavbarButton>
                    ))}
                </div>
            ) : null}
        </nav>
    );
}
