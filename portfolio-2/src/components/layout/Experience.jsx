import { experiencesContext, pagesContext } from "../../context/appContext";
import { useContext } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "motion/react";

const listVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.45,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Experience() {
    const navbarElements = useContext(pagesContext);
    const experiences = useContext(experiencesContext);

    return (
        <motion.section
            key={navbarElements[2].id}
            id={navbarElements[2].id}
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
                {navbarElements[2].title}
            </motion.h1>

            <motion.div
                className="mt-5 w-full min-w-0 lg:w-[75%]"
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {experiences.map((experience) => (
                    <motion.div key={experience.title} variants={itemVariants}>
                        <ExperienceCard
                            period={experience.period}
                            title={experience.title}
                            description={experience.description}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
