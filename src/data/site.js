import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const siteMeta = {
    url: "https://www.simonepenza.cloud",
    title: "Simone Penza — Tecnico IT e sviluppatore web a Lissone (MB)",
    description:
        "Simone Penza, tecnico IT e sviluppatore web a Lissone (MB). Applicazioni web, database SQL, supporto informatico e infrastruttura per aziende in Brianza e Monza.",
    locale: "it_IT",
    geo: {
        locality: "Lissone",
        region: "MB",
        country: "IT",
        latitude: 45.6124,
        longitude: 9.243,
    },
};

export const pages = [
    { id: "about", title: "Chi sono" },
    { id: "skills", title: "Skills e progetti" },
    { id: "experience", title: "Esperienza" },
    { id: "faq", title: "FAQ" },
    { id: "contacts", title: "Contatti & CV" },
];

export const profile = {
    firstName: "Simone",
    lastName: "Penza",
    role: "Tecnico IT e sviluppatore web",
    location: "Lissone, MB",
    /** Prima risposta utile per utenti e motori generativi (answer-first). */
    answerFirst:
        "Simone Penza è un tecnico IT e sviluppatore web a Lissone (MB). Si occupa di applicazioni web, database SQL, supporto informatico e infrastruttura IT per aziende in Brianza e Monza.",
    bio: "Lavora su applicazioni web e CRM interni, database SQL, postazioni di lavoro, Microsoft 365, reti e manutenzione infrastruttura. Sede a Lissone, esperienza recente a Milano, Desio e Brugherio.",
    photo: "/SimonePenzaFoto.png",
    languages: ["Italiano", "Inglese"],
    updatedAt: "2026-11-17",
};

export const faqs = [
    {
        question: "Chi è Simone Penza?",
        answer:
            "Simone Penza è un tecnico IT e sviluppatore web con sede a Lissone (Monza e Brianza). Sviluppa applicazioni web, gestisce database SQL e offre supporto informatico e infrastruttura IT alle aziende.",
    },
    {
        question: "Dove lavora Simone Penza?",
        answer:
            "Ha sede a Lissone (MB) e attualmente lavora come giovane tecnico informatico presso Infopad S.r.l. a Milano. Opera in Brianza, Monza e nell’area milanese.",
    },
    {
        question: "Quali servizi IT e web offre?",
        answer:
            "Sviluppo e manutenzione di applicazioni web e CRM, progettazione database SQL, assistenza hardware e software, Microsoft 365, WordPress, reti, VPN e infrastruttura IT.",
    },
    {
        question: "Come si contatta Simone Penza?",
        answer:
            "Via email a simone.penza06@gmail.com, telefono +39 370 136 4070, LinkedIn, GitHub o dal form nella sezione Contatti del sito.",
    },
];

export const experiences = [
    {
        period: "Ott 2026 — ora",
        kind: "Lavoro",
        title: "Giovane tecnico informatico",
        company: "Infopad S.r.l.",
        location: "Milano (MI)",
        sections: [
            {
                title: "IT support & assistenza tecnica",
                text: "Supporto tecnico agli utenti e alle aziende, con diagnosi e risoluzione di problematiche hardware e software. Installazione, configurazione e manutenzione di PC, software e postazioni di lavoro.",
            },
            {
                title: "Sistemi & servizi IT",
                text: "Supporto nella gestione di ambienti Microsoft 365 e account aziendali. Gestione e manutenzione di siti web WordPress e servizi di hosting.",
            },
            {
                title: "Reti & infrastruttura",
                text: "Supporto nella configurazione e gestione di reti informatiche, connettività e dispositivi di rete.",
            },
        ],
        stack: "Microsoft 365, WordPress, Windows, Reti, VPN",
    },
    {
        period: "Ott 2025 — Ott 2026",
        kind: "Lavoro",
        title: "Tecnico IT e sviluppatore web",
        company: "Greenchemicals SRL",
        location: "Desio (MB)",
        sections: [
            {
                title: "Sviluppo web & software",
                text: "Sviluppo e manutenzione di applicazioni web e del CRM aziendale interno, con PHP, JavaScript, Node.js, HTML, Tailwind CSS e Docker.",
            },
            {
                title: "Database & processi aziendali",
                text: "Gestione e integrazione di database SQL Server per quotazioni, ordini, magazzino e commesse.",
            },
            {
                title: "Supporto IT",
                text: "Assistenza tecnica ai dipendenti, configurazione di PC e software, supporto Microsoft 365, SharePoint e reti aziendali.",
            },
        ],
        stack: "PHP, JavaScript, Node.js, HTML, Tailwind CSS, SQL Server, Docker, React, Vite",
    },
    {
        period: "Set 2024",
        kind: "Lavoro",
        title: "Sviluppatore web",
        company: "Voome SRL",
        location: "Brugherio (MB)",
        sections: [
            {
                title: "Sviluppo web",
                text: "Applicazione web per l'esecuzione di codice JavaScript in tempo reale, con gestione degli utenti e database MySQL.",
            },
            {
                title: "Full stack & database",
                text: "Interfaccia, logica applicativa e integrazione con MySQL, in un contesto di lavoro reale.",
            },
            {
                title: "Esperienza professionale",
                text: "Applicazione delle competenze scolastiche in azienda, con metodologie di sviluppo e best practice.",
            },
        ],
        stack: "HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
        period: "Set 2020 — Giu 2025",
        kind: "Formazione",
        title: "Diploma in informatica",
        company: "ITIS Pino Hensemberger",
        location: "Monza (MB)",
        sections: [
            {
                title: "Programmazione & sviluppo",
                text: "Applicazioni software e web con Java, C++, PHP, JavaScript, HTML e CSS.",
            },
            {
                title: "Database",
                text: "Progettazione, gestione e interrogazione di database relazionali con SQL.",
            },
            {
                title: "Sistemi & reti",
                text: "Configurazione e gestione di reti e sistemi informatici, con analisi e risoluzione di problemi tecnici.",
            },
            {
                title: "Progettazione",
                text: "Analisi dei requisiti, progettazione di soluzioni informatiche e gestione di progetti.",
            },
        ],
        stack: "Java, C++, PHP, JavaScript, HTML, CSS, SQL",
    },
];

export const projects = [
    {
        id: "portfolio",
        index: "01",
        title: "Questo sito",
        blurb: "Il portfolio che stai guardando. React, Vite e Tailwind.",
        status: "Online",
        github: "https://github.com/simone-2006/portfolio-simone-penza-v2",
        image: "portfolio_anteprima.png",
    },
    {
        id: "react-task",
        index: "02",
        title: "React task",
        blurb: "Attività in tre colonne: Todo, Doing, Done.",
        status: "Online",
        github: "https://github.com/simone-2006/react-task",
        image: "react_task_anteprima.png",
    },
    {
        id: "flowmoney",
        index: "03",
        title: "Flowmoney",
        blurb: "Tengo traccia delle uscite. Demo solo frontend. Progetto reale: Database supabase.",
        status: "Demo",
        github: "https://github.com/simone-2006/flowmoney-demo/tree/main",
        image: "flowmoney_anteprima.png",
    },
    {
        id: "demo-dashboard-auto",
        index: "04",
        title: "Dashboard auto",
        blurb: "Parco macchine aziendale: scadenze e gestione su database SQL con Docker.",
        status: "Demo",
        github: "https://github.com/simone-2006/demo-dashboard-auto",
        image: "demo_dashboard_auto_anteprima.png",
    },
    {
        id: "dropeasy",
        index: "05",
        title: "Dropeasy",
        blurb: "Passo file dal telefono al PC. React, Vite e Python.",
        status: "Online",
        github: "https://github.com/simone-2006/dropeasy",
    },
    {
        id: "nms26",
        index: "06",
        title: "NMS26",
        blurb: "Monitor della LAN: dispositivi, ping, latenza e storico up/down.",
        status: "Locale",
        github: "https://github.com/simone-2006/NMS26",
        image: "NMS26_anteprima.png",
    },
    {
        id: "ollama-chatbot",
        index: "07",
        title: "Ollama chatbot",
        blurb: "Chat con un modello Ollama in locale. React e Vite.",
        status: "Locale",
        github: "https://github.com/simone-2006/ollama-chatbot",
    },
];

export const contact = {
    mail: "simone.penza06@gmail.com",
    phone: "+39 370 136 4070",
    location: "Lissone, MB",
    cv: "/CV_penza_simone.pdf",
    cvPreview: "CV_anteprima.png",
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
};
