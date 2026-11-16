import { experiencesContext, pagesContext, contactsContext } from "../../context/appContext";
import { useContext } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const listVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Experience() {
    const navbarElements = useContext(pagesContext);
    const experiences = useContext(experiencesContext);
    const contact = useContext(contactsContext);
    const section = navbarElements[2];
    const linkedin = contact?.social?.linkedin;

    return (
        <motion.section
            key={section.id}
            id={section.id}
            className="page-section section-tone"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="page-shell">
                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <SectionHeading>{section.title}</SectionHeading>
                        <motion.p
                            className="mt-4 max-w-xl text-sm leading-relaxed text-muted"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.55, delay: 0.12 }}
                        >
                            Percorso lavorativo e formativo, allineato al profilo LinkedIn.
                        </motion.p>
                    </div>

                    {linkedin ? (
                        <motion.a
                            href={linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 self-start border border-border-color bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-wide text-text-secondary transition-colors hover:border-signal hover:text-text"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.2 }}
                        >
                            Vedi su LinkedIn
                            <ExternalLink size={14} />
                        </motion.a>
                    ) : null}
                </div>

                <motion.div
                    className="mt-10 w-full min-w-0 max-w-3xl"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.12 }}
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={`${experience.company}-${experience.title}`}
                            variants={itemVariants}
                        >
                            <ExperienceCard
                                period={experience.period}
                                kind={experience.kind}
                                title={experience.title}
                                company={experience.company}
                                location={experience.location}
                                sections={experience.sections}
                                stack={experience.stack}
                                isLast={index === experiences.length - 1}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
