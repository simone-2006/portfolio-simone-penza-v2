import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import emailjs from "@emailjs/browser";

function inviaEmail(nome, mail, message, company) {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    return emailjs.send(
        serviceID,
        templateID,
        {
            nome,
            mail,
            message,
            company,
            to_email: "simone.penza06@gmail.com",
        },
        publicKey,
    ).then(() => true).catch(() => false);
}

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
    "mt-1 px-3 py-2 rounded border border-border-color bg-surface text-base text-text focus:outline-none focus:ring-2 focus:ring-muted transition";

export default function ContactForm() {
    const reduceMotion = useReducedMotion();

    const [nome, setNome] = useState("");
    const [company, setCompany] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!nome || !mail || !message || sending) return;

        setSending(true);
        setStatus(null);
        const ok = await inviaEmail(nome, mail, message, company);
        setSending(false);

        if (ok) {
            setNome("");
            setCompany("");
            setMail("");
            setMessage("");
            setStatus("ok");
        } else {
            setStatus("error");
        }
    };

    return (
        <motion.form
            className="flex w-full min-w-0 max-w-md flex-col gap-4"
            name="contatto"
            autoComplete="off"
            onSubmit={handleSubmit}
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
        >
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                <span className="flex items-center gap-1">
                    Nome
                    <span className="text-xs text-muted">*</span>
                </span>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    name="nome"
                    required
                    className={fieldClass}
                    placeholder="Mario Rossi"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                Azienda
                <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    name="company"
                    className={fieldClass}
                    placeholder="Opzionale"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                <span className="flex items-center gap-1">
                    Email
                    <span className="text-xs text-muted">*</span>
                </span>
                <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    name="email"
                    required
                    className={fieldClass}
                    placeholder="mario@email.it"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                <span className="flex items-center gap-1">
                    Messaggio
                    <span className="text-xs text-muted">*</span>
                </span>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="messaggio"
                    required
                    rows={4}
                    className={`${fieldClass} resize-none`}
                    placeholder="Il tuo messaggio"
                />
            </motion.label>

            <motion.button
                type="submit"
                disabled={sending}
                variants={itemVariants}
                whileTap={reduceMotion || sending ? undefined : { scale: 0.94 }}
                className="mt-1 inline-block cursor-pointer self-start rounded bg-text px-5 py-2 font-semibold text-primary transition hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
            >
                {sending ? "Invio…" : "Invia"}
            </motion.button>

            {status === "ok" ? (
                <p className="text-sm text-text-secondary">Arrivato, ti rispondo io.</p>
            ) : null}
            {status === "error" ? (
                <p className="text-sm text-muted">Qualcosa è andato storto. Riprova o scrivimi via mail.</p>
            ) : null}
        </motion.form>
    );
}
