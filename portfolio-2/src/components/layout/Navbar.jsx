import { useCallback, useContext, useEffect, useRef, useState } from "react";
import NavbarButton from "../ui/NavbarButton";
import { pagesContext } from "../../context/appContext";

export default function Navbar() {
    const navbarElements = useContext(pagesContext);
    const [activeId, setActiveId] = useState(
        () => window.location.hash.slice(1) || navbarElements[0].id,
    );
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
    }, []);

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
            className="sticky top-0 z-50 border-b border-accent p-4 flex justify-between items-center backdrop-blur-sm bg-primary/80"
        >
            <p className="text-sm tracking-wide uppercase font-semibold">Simone Penza</p>

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
