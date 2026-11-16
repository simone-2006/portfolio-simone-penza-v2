import { pagesContext, profileContext } from "../../context/appContext";
import { useContext, useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";

function ProfilePhoto({ src, alt }) {
    const [missing, setMissing] = useState(false);

    return (
        <motion.div
            className="relative w-full max-w-[240px] shrink-0 sm:max-w-[280px]"
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
        >
            <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 bg-linear-to-br from-signal/25 via-transparent to-accent/10 blur-2xl"
            />
            {missing ? (
                <div className="flex aspect-[3/4] w-full items-center justify-center border border-border-color bg-highlight font-display text-4xl font-semibold text-text-secondary">
                    SP
                </div>
            ) : (
                <motion.img
                    src={src}
                    alt={alt}
                    width={280}
                    height={373}
                    onError={() => setMissing(true)}
                    className="aspect-[3/4] w-full border border-border-color object-cover object-top"
                    initial={false}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                />
            )}
        </motion.div>
    );
}

export default function AboutMe() {
    const navbarElements = useContext(pagesContext);
    const profile = useContext(profileContext);
    const section = navbarElements[0];

    if (!section || !profile) return null;

    return (
        <motion.section
            key={section.id}
            id={section.id}
            className="page-section min-h-[calc(100svh-var(--header-height))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="page-shell flex min-h-[inherit] flex-col justify-center">
                <SectionHeading animate="mount">{section.title}</SectionHeading>

                <div className="mt-8 flex min-w-0 flex-col gap-10 lg:mt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
                    <motion.div
                        className="flex min-w-0 max-w-2xl flex-col"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Ciao, sono
                        </p>
                        <h2 className="mt-3 font-display text-[clamp(3.2rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight">
                            <span className="block text-text-secondary/80">{profile.lastName}</span>
                            <span className="block text-text">{profile.firstName}</span>
                        </h2>

                        <p className="mt-7 max-w-md border-l-2 border-signal pl-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                            {profile.role}
                        </p>
                        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                            {profile.bio}
                        </p>
                        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
                            {profile.location} · {profile.languages.join(" · ")}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#experience"
                                className="inline-flex items-center bg-text px-5 py-2.5 text-sm font-semibold text-primary transition hover:opacity-85"
                            >
                                Esperienza
                            </a>
                            <a
                                href="#contacts"
                                className="inline-flex items-center border border-border-color bg-surface/80 px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-signal hover:text-text"
                            >
                                Contatti & CV
                            </a>
                        </div>
                    </motion.div>

                    <ProfilePhoto
                        src={profile.photo}
                        alt={`${profile.firstName} ${profile.lastName}`}
                    />
                </div>
            </div>
        </motion.section>
    );
}
