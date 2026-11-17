import { motion } from "motion/react";
import { contact, profile, siteMeta } from "../../data/site";

const sections = [
    {
        id: "impegno",
        title: "1. Impegno",
        body: (
            <>
                <p>
                    Questo sito si impegna a rispettare i requisiti di accessibilità previsti
                    dall’European Accessibility Act (Direttiva UE 2019/882) e dallo standard
                    EN 301 549, allineato a WCAG 2.1 livello AA.
                </p>
                <p>
                    L’obiettivo è rendere i contenuti utilizzabili con tastiera, lettori di schermo,
                    preferenze di movimento ridotto e temi a contrasto adeguato.
                </p>
            </>
        ),
    },
    {
        id: "ambito",
        title: "2. Ambito di applicazione",
        body: (
            <p>
                La dichiarazione riguarda il sito{" "}
                <a href={siteMeta.url} className="underline underline-offset-2 hover:text-text">
                    {siteMeta.url.replace(/^https?:\/\//, "")}
                </a>
                , gestito da {profile.firstName} {profile.lastName}.
            </p>
        ),
    },
    {
        id: "conformita",
        title: "3. Stato di conformità",
        body: (
            <>
                <p>
                    Il sito è progettato per essere <strong>conforme</strong> a WCAG 2.1 livello AA.
                    In particolare sono previsti:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>struttura semantica con landmark e titoli gerarchici</li>
                    <li>navigazione da tastiera e link “Vai al contenuto”</li>
                    <li>etichette e messaggi accessibili nel form di contatto</li>
                    <li>alternative testuali per immagini informative</li>
                    <li>rispetto di <code className="text-text">prefers-reduced-motion</code></li>
                    <li>indicatori di focus visibili e aree cliccabili adeguate</li>
                </ul>
            </>
        ),
    },
    {
        id: "tecnologie",
        title: "4. Tecnologie utilizzate",
        body: (
            <p>
                Il sito è realizzato con HTML, CSS e JavaScript (React). L’accessibilità dipende da
                un browser aggiornato e, se usi tecnologie assistive, da una combinazione
                browser/lettore di schermo supportata dalle rispettive case produttrici.
            </p>
        ),
    },
    {
        id: "segnalazioni",
        title: "5. Segnalazioni e contatti",
        body: (
            <>
                <p>
                    Se riscontri una barriera di accessibilità, segnalala pure: correggo il problema
                    il prima possibile.
                </p>
                <p>
                    Contatti:{" "}
                    <a href={`mailto:${contact.mail}`} className="underline underline-offset-2 hover:text-text">
                        {contact.mail}
                    </a>
                    {" · "}
                    <a
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="underline underline-offset-2 hover:text-text"
                    >
                        {contact.phone}
                    </a>
                </p>
            </>
        ),
    },
    {
        id: "aggiornamento",
        title: "6. Aggiornamento",
        body: (
            <p>
                Questa dichiarazione è stata redatta il 17 novembre 2026 e verrà aggiornata in caso
                di modifiche rilevanti al sito o alla normativa di riferimento.
            </p>
        ),
    },
];

export default function Accessibilita({ onBack }) {
    return (
        <motion.main
            id="accessibilita"
            className="page-section mx-auto min-h-[70vh] max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            tabIndex={-1}
        >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Dichiarazione</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-text sm:text-5xl">
                Accessibilità
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
                Dichiarazione di accessibilità ai sensi dell’European Accessibility Act e delle
                linee guida WCAG 2.1 AA.
            </p>

            <div className="mt-14 space-y-12 text-sm leading-relaxed text-text-secondary">
                {sections.map((section) => (
                    <section key={section.id} aria-labelledby={`a11y-${section.id}`}>
                        <h2
                            id={`a11y-${section.id}`}
                            className="mb-5 font-sans text-base font-semibold text-text"
                        >
                            {section.title}
                        </h2>
                        <div className="space-y-4 text-muted">{section.body}</div>
                    </section>
                ))}
            </div>

            <p className="mt-16">
                <button
                    type="button"
                    onClick={onBack}
                    className="cursor-pointer rounded bg-text px-5 py-2 font-semibold text-primary transition hover:opacity-80"
                >
                    Torna al portfolio
                </button>
            </p>
        </motion.main>
    );
}
