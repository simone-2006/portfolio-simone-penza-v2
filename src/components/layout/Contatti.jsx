import { pagesContext, contactsContext } from "../../context/appContext";
import { useContext } from "react";
import { Download, Phone, Mail, MapPin } from "lucide-react";
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
    const contact = useContext(contactsContext);
    const reduceMotion = useReducedMotion();
    const section = navbarElements.find((item) => item.id === "contacts");

    return (
        <motion.section
            key={section.id}
            id={section.id}
            className="page-section outline-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-labelledby="contacts-heading"
            tabIndex={-1}
        >
            <motion.h2
                id="contacts-heading"
                className="font-sans text-sm font-semibold uppercase tracking-wide text-text"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {section.title}
            </motion.h2>

            <motion.div
                className="mt-12 flex min-w-0 flex-col gap-16 lg:flex-row lg:justify-between lg:gap-20"
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">Scrivimi</p>
                    <h3 className="mt-4 mb-8 font-serif text-4xl font-semibold leading-tight text-text sm:text-5xl">
                        Un messaggio
                    </h3>

                    <ContactForm />

                    {contact && (
                        <motion.div
                            className="mt-10 rounded-md bg-highlight px-5 py-6 text-text-secondary"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div
                                className="flex flex-col gap-4"
                                variants={listVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                            >
                                <motion.a
                                    variants={itemVariants}
                                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-2.5 text-base text-muted transition-colors hover:text-text-secondary"
                                    aria-label={`Telefono ${contact.phone}`}
                                >
                                    <Phone size={18} aria-hidden="true" />
                                    <span>{contact.phone}</span>
                                </motion.a>
                                <motion.a
                                    variants={itemVariants}
                                    href={`mailto:${contact.mail}`}
                                    className="flex items-center gap-2.5 text-base text-muted transition-colors hover:text-text-secondary"
                                    aria-label={`Email ${contact.mail}`}
                                >
                                    <Mail size={18} aria-hidden="true" />
                                    <span className="break-all">{contact.mail}</span>
                                </motion.a>
                                <motion.p
                                    variants={itemVariants}
                                    className="flex items-center gap-2.5 text-base text-muted"
                                >
                                    <MapPin size={18} aria-hidden="true" />
                                    <span>{contact.location}</span>
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
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
                                            aria-label={`${social.label}: ${social.username} (si apre in una nuova scheda)`}
                                        >
                                            {Icon && <Icon size={18} aria-hidden="true" />}
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">Curriculum</p>
                    <h3 className="mt-4 mb-8 font-serif text-4xl font-semibold leading-tight text-text sm:text-5xl">
                        Il mio CV
                    </h3>
                    <div className="flex min-w-0 flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-10">
                        <a
                            href={contact.cv}
                            className="block w-full max-w-60 shrink-0"
                            aria-label="Apri il curriculum in PDF"
                        >
                            <motion.img
                                src={contact.cvPreview}
                                alt="Anteprima del curriculum di Simone Penza"
                                className="h-auto w-full"
                                initial={false}
                                whileHover={{ scale: 1.03, boxShadow: "0px 10px 40px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                            />
                        </a>
                        <motion.div
                            className="flex min-w-0 flex-col gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-sm leading-relaxed text-muted">
                                PDF, una pagina.
                            </p>
                            <motion.a
                                href={contact.cv}
                                download="CV_penza_simone.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                                className="inline-flex min-h-11 cursor-pointer items-center gap-2 self-start rounded bg-text px-5 py-2 font-semibold text-primary transition hover:opacity-80"
                            >
                                <Download size={18} aria-hidden="true" />
                                Scarica CV
                                <span className="sr-only"> (PDF, si apre in una nuova scheda)</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
