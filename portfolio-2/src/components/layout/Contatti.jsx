import { pagesContext } from "../../context/appContext";
import { useContext } from "react";


import { motion } from "motion/react";

const viewportOnce = { once: true, amount: 0.25 };

export default function Contatti() {
    const navbarElements = useContext(pagesContext)

    return (
        <motion.section
            key={navbarElements[3].id}
            id={navbarElements[3].id}
            className="page-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="font-sans tracking-wide uppercase font-semibold"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {navbarElements[3].title}
            </motion.h1>
        </motion.section>

    );
}