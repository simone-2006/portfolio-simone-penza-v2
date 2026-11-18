import { motion } from "motion/react";
import { contact, profile, siteMeta } from "../../data/site";

const sections = [
    {
        id: "titolare",
        title: "1. Titolare del trattamento",
        body: (
            <>
                <p>
                    Il titolare del trattamento dei dati è{" "}
                    <strong>
                        {profile.firstName} {profile.lastName}
                    </strong>
                    , con sede operativa a {profile.location} (Italia).
                </p>
                <p>
                    Contatti:{" "}
                    <a href={`mailto:${contact.mail}`} className="underline underline-offset-2 hover:text-text">
                        {contact.mail}
                    </a>
                    {" · "}
                    <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="underline underline-offset-2 hover:text-text">
                        {contact.phone}
                    </a>
                </p>
            </>
        ),
    },
    {
        id: "dati",
        title: "2. Dati raccolti",
        body: (
            <>
                <p>Questo sito tratta dati in due contesti:</p>
                <p>
                    <strong>Form contatti.</strong> Se invii un messaggio, vengono raccolti:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>nome</li>
                    <li>indirizzo email</li>
                    <li>azienda (opzionale)</li>
                    <li>contenuto del messaggio</li>
                </ul>
                <p>
                    <strong>Statistiche di navigazione.</strong> È attivo{" "}
                    <a
                        href="https://vercel.com/docs/analytics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-text"
                    >
                        Vercel Web Analytics
                    </a>
                    , uno strumento cookieless che registra in forma aggregata/anonimizzata
                    informazioni di utilizzo del sito (ad esempio pagine visitate, referrer,
                    tipo di dispositivo, browser, sistema operativo e paese). Non usa pixel
                    pubblicitari né profilazione commerciale.
                </p>
            </>
        ),
    },
    {
        id: "finalita",
        title: "3. Finalità e base giuridica",
        body: (
            <>
                <p>
                    I dati del form sono trattati esclusivamente per rispondere alla tua richiesta
                    (art. 6.1.b GDPR — esecuzione di misure precontrattuali su richiesta dell’interessato)
                    e, se necessario, per legittimo interesse a gestire la comunicazione professionale
                    (art. 6.1.f GDPR).
                </p>
                <p>
                    I dati di Vercel Web Analytics sono trattati per misurare il traffico e migliorare
                    il sito, sulla base del legittimo interesse del titolare (art. 6.1.f GDPR).
                    Non sono usati per marketing automatico né per pubblicità personalizzata.
                </p>
            </>
        ),
    },
    {
        id: "cookie",
        title: "4. Cookie e tecnologie simili",
        body: (
            <>
                <p>
                    Questo sito <strong>non usa cookie di profilazione o pubblicità</strong>.
                    Non vengono impostati cookie di terze parti al caricamento della pagina.
                </p>
                <p>
                    Vercel Web Analytics è cookieless: non richiede cookie né un banner di consenso
                    per funzionare. Lo script di misurazione è servito dallo stesso dominio del sito
                    (`/_vercel/insights/`).
                </p>
                <p>
                    Il tema chiaro/scuro segue la preferenza del sistema operativo e resta solo in memoria
                    durante la sessione (nessun cookie e nessun salvataggio permanente sul dispositivo).
                </p>
                <p>
                    I font tipografici sono ospitati sullo stesso dominio del sito: non vengono richieste
                    risorse a Google Fonts o ad altri CDN di terze parti.
                </p>
            </>
        ),
    },
    {
        id: "terzi",
        title: "5. Destinatari e servizi terzi",
        body: (
            <>
                <p>
                    L’invio del form contatti avviene tramite{" "}
                    <a
                        href="https://www.emailjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-text"
                    >
                        EmailJS
                    </a>
                    , che agisce come responsabile del trattamento tecnico per la consegna del messaggio
                    all’indirizzo email del titolare. I dati trasmessi sono quelli che inserisci nel form.
                </p>
                <p>
                    Il sito è ospitato su{" "}
                    <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-text"
                    >
                        Vercel
                    </a>
                    , che fornisce anche Web Analytics. Possono essere generati log tecnici di server
                    (indirizzo IP, user-agent, orario) necessari al funzionamento e alla sicurezza del
                    servizio, oltre alle metriche aggregate di navigazione.
                </p>
            </>
        ),
    },
    {
        id: "conservazione",
        title: "6. Conservazione",
        body: (
            <>
                <p>
                    I messaggi ricevuti via form sono conservati nella casella di posta del titolare per il tempo
                    necessario a gestire la richiesta e gli eventuali follow-up, salvo obblighi di legge diversi.
                </p>
                <p>
                    I dati analitici aggregati sono conservati secondo le policy di conservazione di Vercel
                    Web Analytics e restano disponibili nel pannello Analytics del progetto finché il servizio
                    rimane attivo.
                </p>
            </>
        ),
    },
    {
        id: "diritti",
        title: "7. Diritti dell’interessato",
        body: (
            <>
                <p>
                    Puoi esercitare i diritti previsti dagli artt. 15–22 GDPR (accesso, rettifica, cancellazione,
                    limitazione, opposizione, portabilità) scrivendo a{" "}
                    <a href={`mailto:${contact.mail}`} className="underline underline-offset-2 hover:text-text">
                        {contact.mail}
                    </a>
                    .
                </p>
                <p>
                    Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali
                    (
                    <a
                        href="https://www.garanteprivacy.it/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-text"
                    >
                        garanteprivacy.it
                    </a>
                    ).
                </p>
            </>
        ),
    },
    {
        id: "aggiornamenti",
        title: "8. Aggiornamenti",
        body: (
            <p>
                Questa informativa può essere aggiornata per riflettere modifiche al sito o alla normativa.
                Ultimo aggiornamento: 17 novembre 2026. Versione pubblicata su {siteMeta.url}.
            </p>
        ),
    },
];

export default function Privacy({ onBack }) {
    return (
        <motion.main
            id="privacy"
            className="page-section mx-auto min-h-[70vh] max-w-3xl outline-none"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            tabIndex={-1}
        >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Informativa</p>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-text sm:text-5xl">
                Privacy e cookie
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
                Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR)
                e sulla gestione dei cookie di questo sito.
            </p>

            <div className="mt-14 space-y-12 text-sm leading-relaxed text-text-secondary">
                {sections.map((section) => (
                    <section key={section.id} aria-labelledby={`privacy-${section.id}`}>
                        <h2
                            id={`privacy-${section.id}`}
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
