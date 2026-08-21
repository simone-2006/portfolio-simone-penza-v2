import { pagesContext } from "../../context/appContext";
import { useContext } from "react";


import { motion } from "motion/react";

export default function AboutMe() {
    const navbarElements = useContext(pagesContext)

    return (
        <motion.section
            key={navbarElements[0].id}
            id={navbarElements[0].id}
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
                {navbarElements[0].title}
            </motion.h1>

            <motion.div
                className="flex flex-col justify-between gap-6 p-4 min-w-0 lg:flex-row lg:items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex min-w-0 flex-col justify-center"
                    initial={{ opacity: 0, x: -36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-semibold text-xs text-muted"
                    >
                        Ciao, sono
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="font-serif text-6xl sm:text-8xl text-text-secondary font-semibold"
                    >
                        Penza
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="font-serif text-6xl sm:text-8xl text-text font-semibold"
                    >
                        Simone
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="min-w-0 w-full max-w-[400px] shrink-0 lg:w-auto"
                    initial={{ opacity: 0, scale: 0.9, x: 36 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                    {/* <motion.img
                        src="https://placehold.co/400x400"
                        alt=""
                        width={400}
                        height={400}
                        className="h-auto w-full max-w-[400px] transition-all"
                        initial={false}
                        whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
                        transition={{ type: "spring", stiffness: 210, damping: 20 }}
                    /> */}
                </motion.div>
            </motion.div>

            <motion.div
                className="flex w-full max-w-none justify-end lg:max-w-[50%]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
                <motion.div
                    className="w-full max-w-none bg-highlight p-3 rounded-md text-text-secondary lg:max-w-[80%]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
                >
                    <motion.p
                        className="italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1.5 }}
                    >
                        Realizzo soluzioni digitali con un approccio moderno e concreto. Mi appassiona scrivere codice elegante, creare interfacce intuitive e puntare sempre alle massime performance.
                        Mi piace tenermi informato su tutte le novità nel mondo dell'informatica e della programmazione.
                    </motion.p>
                </motion.div>
            </motion.div>

        </motion.section>

    );
}