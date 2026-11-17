import { useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import NavbarButton from "../ui/NavbarButton";
import { pagesContext } from "../../context/appContext";
import { motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";

import { useTheme } from "../../hooks/theme";


export default function Navbar({ hideSections = false, onHome }) {
    const { theme, toggleTheme } = useTheme();
    const navbarElements = useContext(pagesContext);
    const mobileNavId = useId();
    const [activeId, setActiveId] = useState(() => {
        const hash = window.location.hash.slice(1);
        if (!hash || hash === "privacy" || hash === "accessibilita") return navbarElements[0].id;
        return hash;
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);
    const mobileNavRef = useRef(null);
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

        const menu = mobileNavRef.current;
        const focusable = menu?.querySelectorAll("a[href], button:not([disabled])");
        focusable?.[0]?.focus();

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
                return;
            }

            if (event.key !== "Tab" || !focusable?.length) return;

            const items = Array.from(focusable);
            const first = items[0];
            const last = items[items.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
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
        if (ignoreScrollRef.current || hideSections) return;

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
    }, [hideSections, navbarElements]);

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
            if (hideSections) {
                onHome?.(id);
                setMenuOpen(false);
                return;
            }

            const element = document.getElementById(id);
            if (!element) return;

            ignoreScrollRef.current = true;
            setActiveId(id);
            setMenuOpen(false);

            if (updateHash && window.location.hash !== `#${id}`) {
                history.pushState(null, "", `#${id}`);
            }

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            element.scrollIntoView({
                behavior: reduceMotion ? "auto" : behavior,
                block: "start",
            });

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
        [hideSections, onHome, releaseScrollLock],
    );

    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (!id || id === "privacy" || id === "accessibilita" || !navbarElements.some((item) => item.id === id)) return;

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
            const id = window.location.hash.slice(1);
            if (id === "privacy" || id === "accessibilita") return;
            scrollToSection(id || navbarElements[0].id, { updateHash: false });
        };

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, [navbarElements, scrollToSection]);

    return (
        <nav
            ref={navRef}
            aria-label="Navigazione principale"
            className="page-gutter sticky top-0 z-50 flex items-center justify-between border-b border-accent bg-primary/80 py-5 backdrop-blur-sm"
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
                <div className="hidden lg:flex items-center gap-5">
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
                    aria-pressed={theme === "dark"}
                    className="font-sans text-sm font-medium transition-colors text-muted hover:text-text p-2 -m-2 min-h-11 min-w-11 inline-flex items-center justify-center cursor-pointer"
                >
                    {theme === "light" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </button>
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="lg:hidden p-2 -m-2 min-h-11 min-w-11 inline-flex items-center justify-center text-muted hover:text-text"
                    aria-expanded={menuOpen}
                    aria-controls={mobileNavId}
                    aria-haspopup="true"
                    aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
                </button>
            </div>
            {menuOpen ? (
                <div
                    id={mobileNavId}
                    ref={mobileNavRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu di navigazione"
                    className="absolute left-0 right-0 top-full z-50 flex flex-col gap-3 border-b border-accent bg-primary/95 p-4 backdrop-blur-sm lg:hidden"
                >
                    {navbarElements.map((navbarElement) => (
                        <NavbarButton
                            key={navbarElement.id}
                            href={`#${navbarElement.id}`}
                            active={activeId === navbarElement.id}
                            className="w-fit py-2"
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
