import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const reduceMotion = useReducedMotion();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.6);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const scrollToAbout = () => {
        const about = document.getElementById("about");
        if (!about) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (window.location.hash !== "#about") {
            history.pushState(null, "", "#about");
        }
        about.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
        });
    };

    return (
        <AnimatePresence>
            {visible ? (
                <motion.button
                    type="button"
                    onClick={scrollToAbout}
                    aria-label="Torna su"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.94 }}
                    transition={{ type: "spring", bounce: 0.18, visualDuration: 0.38 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    className="fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex size-10 cursor-pointer items-center justify-center rounded border border-border-color bg-surface text-text-secondary hover:text-text lg:right-10 lg:bottom-8"
                >
                    <ArrowUp size={18} />
                </motion.button>
            ) : null}
        </AnimatePresence>
    );
}
