import { createContext } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const pages = [
    { id: "about", title: "Chi sono" },
    { id: "skills", title: "Skills e progetti" },
    { id: "experience", title: "Esperienza" },
    { id: "contacts", title: "Contatti & CV" },
]

export const pagesContext = createContext(pages);

const experiences = [
    {
        period: "2020 - 2025",
        title: "Studente di informatica presso ITIS Pino Hensemberger (Monza MB)",
        description: "Durante il mio percorso scolastico ho imparato le basi dell'informatica e della programmazione, sviluppando progetti in vari linguaggi come C++, Python e Java. Ho acquisito anche competenze in ambito web, realizzando siti e applicazioni semplici con HTML, CSS e backend PHP con database MySQL. Questa esperienza mi ha fornito una solida base teorica e pratica, stimolando la mia passione per lo sviluppo software e spingendomi a esplorare ulteriormente il mondo della programmazione."
    },
    {
        period: "Set 2025",
        title: "Sviluppatore Web (stage) (Brugherio MB)",
        description: "Durante il mio stage presso Voome Srl, ho sviluppato un'applicazione web integrata con un database, che consentiva agli utenti di inserire ed eseguire comandi JavaScript in tempo reale con un sistema di gestione utenti. Questa esperienza mi ha permesso di consolidare le competenze acquisite durante il percorso scolastico, applicandole in un contesto professionale reale, oltre ad apprendere nuove metodologie di sviluppo e best practice del settore. Stack tecnologico: HTML, JavaScript, PHP, CSS e MySQL."
    },
    {
        period: "Ott 2025 - now",
        title: "IT Technician e Sviluppatore Web (Desio MB)",
        description: "Presso Greenchemicals SRL ricopro il ruolo di IT Technician e Web Developer, contribuendo attivamente alla crescita dell'azienda nel settore informatico. Mi occupo della gestione e del supporto tecnico completo ai dipendenti, intervenendo su problematiche hardware, software e configurazioni di rete, oltre alla configurazione e manutenzione delle infrastrutture IT aziendali. Parallelamente, sono responsabile dello sviluppo di un sistema CRM interno avanzato, progettato per ottimizzare la gestione dei processi aziendali. Il gestionale consente una gestione completa dei clienti, la tracciatura delle visite commerciali con visualizzazione geolocalizzata, un sistema di reminder intelligenti e una sezione dedicata alla ricerca prodotti. Quest'ultima integra dati provenienti dal gestionale aziendale, tra cui quotazioni aggiornate, disponibilita di magazzino, ordini pendenti e stato delle commesse. Lo stack tecnologico utilizzato comprende HTML, PHP, JavaScript, Node.js, Tailwind CSS, SQL Server e Docker. Questa esperienza mi sta permettendo di approfondire concretamente il mondo della programmazione professionale, portandomi a esplorare tecnologie e framework moderni come React e Vite.js. In prospettiva, il mio obiettivo e guidare l'evoluzione del CRM verso un'architettura piu moderna e scalabile, attraverso lo sviluppo di un frontend reattivo e performante basato su React e Vite.js, e l'integrazione di Supabase per una gestione del database piu moderna, sicura ed elegante. Questo rappresenterebbe un significativo miglioramento in termini di performance, manutenibilita e qualita complessiva del sistema."
    },
]

export const experiencesContext = createContext(experiences)

const contacts = [
    {
        contatti: {
            mail: "simone.penza06@gmail.com",
            phone: "+39 370 136 4070",
        },
        social: {
            linkedin: {
                url: "https://www.linkedin.com/in/simone-penza-604031388/",
                icon: FaLinkedin,
                username: "Simone Penza",
                label: "LinkedIn",
            },
            github: {
                url: "https://github.com/simone-2006",
                icon: FaGithub,
                username: "simone-2006",
                label: "GitHub",
            },
            instagram: {
                url: "https://www.instagram.com/simone.penzaa/",
                icon: FaInstagram,
                username: "simone.penzaa",
                label: "Instagram",
            },
        },
    }
]

export const contactsContext = createContext(contacts)


export const themeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});
