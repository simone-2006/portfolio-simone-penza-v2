import { useContext } from "react";
import { motion } from "motion/react";
import { faqsContext } from "../../context/appContext";

export default function Faq() {
    const faqs = useContext(faqsContext);

    if (!faqs?.length) return null;

    return (
        <motion.section
            id="faq"
            className="page-section outline-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-labelledby="faq-heading"
            tabIndex={-1}
        >
            <motion.h2
                id="faq-heading"
                className="font-sans text-sm font-semibold uppercase tracking-wide text-text"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                Domande frequenti
            </motion.h2>

            <motion.p
                className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
                Risposte brevi su chi sono, dove lavoro e come contattarmi.
            </motion.p>

            <dl className="mt-12 max-w-3xl space-y-8">
                {faqs.map((item, index) => (
                    <motion.div
                        key={item.question}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.08 + index * 0.06,
                            ease: "easeOut",
                        }}
                    >
                        <dt className="font-serif text-lg font-semibold leading-snug text-text sm:text-2xl">
                            {item.question}
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                            {item.answer}
                        </dd>
                    </motion.div>
                ))}
            </dl>
        </motion.section>
    );
}
