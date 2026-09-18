import { pagesContext, profileContext } from "../../context/appContext";
import { useContext, useState } from "react";
import { motion } from "motion/react";

function ProfilePhoto({ src, alt }) {
    const [missing, setMissing] = useState(false);

    return (
        <motion.div
            className="w-[180px] shrink-0 sm:w-[220px]"
            initial={{ opacity: 0, scale: 0.9, x: 36 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
            {missing ? (
                <div className="flex aspect-[3/4] w-full items-center justify-center bg-highlight font-serif text-4xl text-text-secondary">
                    SP
                </div>
            ) : (
                <motion.img
                    src={src}
                    alt={alt}
                    width={220}
                    height={293}
                    onError={() => setMissing(true)}
                    className="aspect-[3/4] w-full object-cover object-top"
                    initial={false}
                    whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
                    transition={{ type: "spring", stiffness: 210, damping: 20 }}
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
            className="page-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="font-sans tracking-wide uppercase font-semibold text-text"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {section.title}
            </motion.h1>

            <motion.div
                className="mt-8 flex min-w-0 flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex min-w-0 max-w-xl flex-col"
                    initial={{ opacity: 0, x: -36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <p className="font-semibold text-xs text-muted">Ciao, sono</p>
                    <h2 className="font-serif text-6xl font-semibold leading-[0.95] sm:text-8xl">
                        <span className="block text-text-secondary">{profile.lastName}</span>
                        <span className="block text-text">{profile.firstName}</span>
                    </h2>
                    <p className="mt-6 rounded-md bg-highlight p-3 text-text-secondary italic">
                        {profile.role}
                    </p>
                    <p className="mt-3 text-sm text-muted">{profile.bio}</p>
                    <p className="mt-2 text-xs text-muted">
                        {profile.location} · {profile.languages.join(" · ")}
                    </p>
                </motion.div>

                <ProfilePhoto
                    src={profile.photo}
                    alt={`${profile.firstName} ${profile.lastName}`}
                />
            </motion.div>
        </motion.section>
    );
}
