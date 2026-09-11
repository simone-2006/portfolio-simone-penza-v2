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
                className="mt-8 flex min-w-0 flex-col gap-12 lg:flex-row lg:justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="flex min-w-0 flex-1 flex-col"
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <p className="font-semibold text-muted text-xs">Scrivimi</p>
                    <h2 className="mb-5 font-serif text-4xl font-semibold text-text sm:text-5xl">
                        Un messaggio
                    </h2>

                    <ContactForm />

                    {contact && (
                        <motion.div
                            className="mt-5 rounded-md bg-highlight p-3 text-text-secondary"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div
                                className="flex flex-col gap-2"
                                variants={listVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                            >
                                <motion.a
                                    variants={itemVariants}
                                    href={`tel:${contact.contatti.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-2 text-base text-muted transition-colors hover:text-text-secondary"
                                >
                                    <Phone size={18} />
                                    <span className="font-medium">{contact.contatti.phone}</span>
                                </motion.a>
                                <motion.a
                                    variants={itemVariants}
                                    href={`mailto:${contact.contatti.mail}`}
                                    className="flex items-center gap-2 text-base text-muted transition-colors hover:text-text-secondary"
                                >
                                    <Mail size={18} />
                                    <span className="font-medium break-all">{contact.contatti.mail}</span>
                                </motion.a>
                            </motion.div>

                            <motion.div
                                className="mt-3 flex flex-wrap items-center gap-3"
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
                                            className="flex items-center gap-2 text-base text-muted transition-colors hover:text-text-secondary"
                                            title={social.label}
                                        >
                                            {Icon && <Icon size={18} />}
                                            <span className="font-medium">{social.username}</span>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    className="flex min-w-0 flex-1 flex-col"
                    initial={{ opacity: 0, scale: 0.9, x: 36 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                    <p className="font-semibold text-muted text-xs">Curriculum</p>
                    <h2 className="mb-5 font-serif text-4xl font-semibold text-text sm:text-5xl">
                        Il mio CV
                    </h2>
                    <div className="flex min-w-0 flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <a href="/CV_penza_simone.pdf" className="block w-full max-w-[240px] shrink-0">
                            <motion.img
                                src="CV_anteprima.png"
                                alt="Anteprima del CV"
                                className="h-auto w-full"
                                initial={false}
                                whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                            />
                        </a>
                        <motion.div
                            className="flex min-w-0 flex-col gap-3"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-sm text-muted">
                                PDF, una pagina.
                            </p>
                            <motion.a
                                href="/CV_penza_simone.pdf"
                                download="CV_penza_simone.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                                className="inline-flex cursor-pointer items-center gap-2 self-start rounded bg-text px-5 py-2 font-semibold text-primary transition hover:opacity-80"
                            >
                                <Download size={18} />
                                Scarica
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
