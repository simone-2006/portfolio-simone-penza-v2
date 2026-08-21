import { pagesContext, contactsContext } from "../../context/appContext";
import { useContext } from "react";
import { Download, Phone, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import ContactForm from "../ui/ContactForm";


const viewportOnce = { once: true, amount: 0.25 };

const listVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const fieldClass =
    "mt-1 px-3 py-2 rounded border border-border-color bg-surface text-text focus:outline-none focus:ring-2 focus:ring-muted transition";

export default function Contatti() {
    const navbarElements = useContext(pagesContext);
    const contacts = useContext(contactsContext);
    const reduceMotion = useReducedMotion();
    const contact = contacts?.[0];

    return (
        <motion.section
            key={navbarElements[3].id}
            id={navbarElements[3].id}
            className="page-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="font-sans tracking-wide uppercase font-semibold text-text"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {navbarElements[3].title}
            </motion.h1>

            <motion.div
                className="flex flex-col justify-between gap-8 p-4 lg:flex-row"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-semibold text-muted text-xs"
                    >
                        Scrivimi
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="font-serif text-6xl text-text font-semibold mb-6"
                    >
                        Contattami
                    </motion.h2>

                    <ContactForm />

                    {contact && (
                        <motion.div
                            className="bg-highlight p-3 rounded-md text-text-secondary mt-4"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >

                            <motion.div
                                className="flex flex-col justify-start gap-2"
                                variants={listVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                            >
                                <motion.a
                                    variants={itemVariants}
                                    href={`tel:${contact.contatti.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-2 text-base text-muted hover:text-text-secondary transition-all"
                                >
                                    <Phone size={20} />
                                    <span className="font-medium">{contact.contatti.phone}</span>
                                </motion.a>
                                <motion.a
                                    variants={itemVariants}
                                    href={`mailto:${contact.contatti.mail}`}
                                    className="flex items-center gap-2 text-base text-muted hover:text-text-secondary transition-all"
                                >
                                    <Mail size={20} />
                                    <span className="font-medium break-all">{contact.contatti.mail}</span>
                                </motion.a>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap items-center gap-3 mt-2"
                                variants={listVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                            >
                                {Object.entries(contact.social).map(([key, social]) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            href={social.url}
                                            key={key}
                                            variants={itemVariants}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-base text-muted hover:text-text-secondary transition-all"
                                            title={social.label}
                                        >
                                            {Icon && <Icon size={20} />}
                                            <span className="font-medium">{social.username}</span>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}



                </motion.div>

                <motion.div
                    className="flex flex-col justify-start items-start"
                    initial={{ opacity: 0, scale: 0.9, x: 36 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="font-semibold text-muted text-xs"
                    >
                        Curriculum
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="font-serif text-6xl text-text font-semibold mb-6"
                    >
                        Scarica il mio CV
                    </motion.h2>
                    <div className="w-full flex items-center gap-8">
                        <a href="CV_penza_simone.pdf">
                            <motion.img
                                // src="https://placehold.co/310x438"
                                src="CV_anteprima.png"
                                alt="CV anteprima"
                                className="transition-all"
                                initial={false}
                                whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                            />
                        </a>
                        <motion.div
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-muted text-sm">
                                Scarica il PDF del mio CV per conoscermi meglio!
                            </p>
                            <motion.a
                                href="/CV_penza_simone.pdf"
                                download="CV_penza_simone.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                                className="mt-2 flex items-center gap-2 rounded bg-text px-5 py-2 font-semibold text-primary shadow hover:bg-muted-secondary transition cursor-pointer"
                            >
                                <Download />
                                Scarica
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
