import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import emailjs from '@emailjs/browser';

function inviaEmail(nome, mail, message, company) {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // console.log(serviceID, templateID, publicKey);

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
        publicKey
    ).then((response) => {
        console.log(response);
        return true;
    }).catch((error) => {
        console.log(error);
        return false;
    });
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
    // console.log(nome + mail + message)

    const handleSubmit = () => {
        // console.log(nome + mail + message);
        if (nome && mail && message) {
            if (inviaEmail(nome, mail, message, company)) {
                alert("Messaggio inviato!");
                setNome("");
                setCompany("");
                setMail("");
                setMessage("");
            } else {
                alert("Errore nell'invio del messaggio.");
            }
        } else {
            alert("Per favore, completa tutti i campi.");
        }
    };

    return (
        <motion.form
            className="flex flex-col gap-4 max-w-md w-full min-w-0"
            name="contatto"
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
        >
            <motion.label
                variants={itemVariants}
                className="flex flex-col text-text-secondary font-medium"
            >
                <div className="flex items-center gap-1">
                    Nome
                    <span className="text-xs items-start flex text-muted">*</span>
                </div>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    name="nome"
                    required
                    className={fieldClass}
                    placeholder="Il tuo nome"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col text-text-secondary font-medium"
            >
                <div className="flex items-center gap-1">
                    Azienda
                </div>
                <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    name="company"
                    className={fieldClass}
                    placeholder="La tua azienda"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col text-text-secondary font-medium"
            >
                <div className="flex items-center gap-1">
                    Email
                    <span className="text-xs items-start flex text-muted">*</span>
                </div>
                <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    name="email"
                    required
                    className={fieldClass}
                    placeholder="La tua email"
                />
            </motion.label>
            <motion.label
                variants={itemVariants}
                className="flex flex-col text-text-secondary font-medium"
            >
                <div className="flex items-center gap-1">
                    Messaggio
                    <span className="text-xs items-start flex text-muted">*</span>
                </div>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="messaggio"
                    required
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="Il tuo messaggio"
                />
            </motion.label>

            <motion.button
                type="submit"
                onClick={() => {
                    handleSubmit();
                }}
                variants={itemVariants}
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                className="mt-2 inline-block self-start rounded bg-text px-5 py-2 font-semibold text-primary shadow hover:bg-muted-secondary transition cursor-pointer"
            >
                Invia
            </motion.button>
        </motion.form>

    );
}