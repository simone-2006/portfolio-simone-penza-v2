import { useId, useState } from "react";
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
    "mt-2.5 px-4 py-3 rounded border border-border-color bg-surface text-base text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition";

function RequiredMark() {
    return (
        <>
            <span aria-hidden="true" className="text-xs text-muted">
                *
            </span>
            <span className="sr-only"> (obbligatorio)</span>
        </>
    );
}

export default function ContactForm() {
    const reduceMotion = useReducedMotion();
    const statusId = useId();
    const privacyNoteId = useId();

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
            className="flex w-full min-w-0 max-w-md flex-col gap-6"
            name="contatto"
            noValidate={false}
            onSubmit={handleSubmit}
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            aria-describedby={privacyNoteId}
        >
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                <span className="flex items-center gap-1">
                    Nome
                    <RequiredMark />
                </span>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    name="nome"
                    autoComplete="name"
                    required
                    aria-required="true"
                    className={fieldClass}
                    placeholder="Il tuo nome"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                Azienda
                <span className="sr-only"> (opzionale)</span>
                <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    name="company"
                    autoComplete="organization"
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
                    <RequiredMark />
                </span>
                <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-required="true"
                    className={fieldClass}
                    placeholder="example@email.com"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col font-medium text-text-secondary"
            >
                <span className="flex items-center gap-1">
                    Messaggio
                    <RequiredMark />
                </span>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="messaggio"
                    autoComplete="off"
                    required
                    aria-required="true"
                    rows={4}
                    className={`${fieldClass} resize-none`}
                    placeholder="Il tuo messaggio"
                />
            </motion.label>

            <motion.p
                id={privacyNoteId}
                variants={itemVariants}
                className="text-xs leading-relaxed text-muted"
            >
                Inviando il messaggio accetti che i dati siano usati solo per risponderti, come descritto
                nell’{" "}
                <a href="#privacy" className="underline underline-offset-2 hover:text-text">
                    informativa privacy
                </a>
                . Il sito usa Vercel Web Analytics (cookieless) e non usa cookie di profilazione.
            </motion.p>

            <motion.button
                type="submit"
                disabled={sending}
                aria-busy={sending || undefined}
                variants={itemVariants}
                whileTap={reduceMotion || sending ? undefined : { scale: 0.94 }}
                className="mt-1 inline-block min-h-11 cursor-pointer self-start rounded bg-text px-5 py-2.5 font-semibold text-primary transition hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
            >
                {sending ? "Invio…" : "Invia"}
            </motion.button>

            <div
                id={statusId}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="min-h-5"
            >
                {status === "ok" ? (
                    <p className="text-sm text-text-secondary">Arrivato, ti rispondo io.</p>
                ) : null}
                {status === "error" ? (
                    <p className="text-sm text-muted" role="alert">
                        Qualcosa è andato storto. Riprova o scrivimi via mail.
                    </p>
                ) : null}
            </div>
        </motion.form>
    );
}
