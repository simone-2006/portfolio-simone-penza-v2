import { pagesContext, profileContext } from "../../context/appContext";
import { useContext } from "react";
import { motion } from "motion/react";

export default function AboutMe() {
    const navbarElements = useContext(pagesContext);
    const profile = useContext(profileContext);
    const section = navbarElements.find((item) => item.id === "about");

    if (!section || !profile) return null;

    return (
        <motion.section
            key={section.id}
            id={section.id}
            className="page-section outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-labelledby="about-heading"
            tabIndex={-1}
        >
            <motion.p
                className="font-sans text-sm font-semibold uppercase tracking-wide text-text"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {section.title}
            </motion.p>

            <motion.div
                className="mt-8 flex min-w-0 flex-col gap-8 sm:mt-12 sm:gap-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex min-w-0 max-w-3xl flex-col gap-6 sm:gap-8"
                    initial={{ opacity: 0, x: -36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            Ciao, sono
                        </p>
                        <h1
                            id="about-heading"
                            className="display-name font-serif font-semibold"
                        >
                            <span className="block text-text-secondary">{profile.lastName}</span>
                            <span className="mt-1.5 block text-text sm:mt-3">{profile.firstName}</span>
                        </h1>
                    </div>

                    <p className="text-base leading-relaxed text-text-secondary sm:text-[1.05rem]">
                        {profile.answerFirst}
                    </p>

                    <p className="rounded-md bg-highlight px-4 py-4 text-base leading-relaxed text-text-secondary italic sm:px-5 sm:py-5 sm:text-[1.05rem]">
                        {profile.role}
                    </p>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                            {profile.bio}
                        </p>
                        <p className="text-xs leading-relaxed text-muted">
                            {profile.location} · {profile.languages.join(" · ")}
                            {profile.updatedAt ? ` · Aggiornato ${profile.updatedAt}` : null}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
