import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const siteMeta = {
    url: "https://www.simonepenza.cloud",
    title: "Simone Penza — Tecnico IT e sviluppatore web a Lissone (MB)",
    description:
        "Sono Simone Penza, tecnico IT e sviluppatore web a Lissone (MB). Mi occupo di applicazioni web, database SQL, supporto informatico e infrastruttura per aziende in Brianza e Monza.",
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
        "Sono un tecnico IT e sviluppatore web a Lissone (MB). Mi occupo di applicazioni web, database SQL, supporto informatico e infrastruttura IT per aziende in Brianza e Monza.",
    bio: "Lavoro su applicazioni web e CRM interni, database SQL, postazioni di lavoro, Microsoft 365, reti e manutenzione infrastruttura. Ho sede a Lissone; esperienza recente a Milano, Desio e Brugherio.",
    languages: ["Italiano", "Inglese"],
    updatedAt: "2026-11-18",
};

export const faqs = [
    {
        question: "Chi sono?",
        answer:
            "Sono un tecnico IT e sviluppatore web con sede a Lissone (Monza e Brianza). Sviluppo applicazioni web, gestisco database SQL e offro supporto informatico e infrastruttura IT alle aziende.",
    },
    {
        question: "Dove lavoro?",
        answer:
            "Ho sede a Lissone (MB) e attualmente lavoro come tecnico informatico e siti web presso Infopad S.r.l. a Milano. Opero in Brianza, Monza e nell’area milanese.",
    },
    {
        question: "Quali servizi IT e web offro?",
        answer:
            "Sviluppo e mantengo applicazioni web e CRM, progetto database SQL, offro assistenza hardware e software, Microsoft 365, WordPress, reti, VPN e infrastruttura IT.",
    },
    {
        question: "Come contattarmi?",
        answer:
            "Via email a simone.penza06@gmail.com, telefono +39 370 136 4070, LinkedIn, GitHub o dal form nella sezione Contatti del sito.",
    },
];

export const experiences = [
    {
        period: "Ott 2026 — ora",
        kind: "Lavoro",
        title: "Tecnico informatico e siti web",
        company: "Infopad S.r.l.",
        location: "Milano (MI)",
        sections: [
            {
                title: "IT support & assistenza tecnica",
                text: "Supporto gli utenti e le aziende: diagnostico e risolvo problemi hardware e software. Installo, configuro e mantengo PC, software e postazioni di lavoro.",
            },
            {
                title: "Sistemi & servizi IT",
                text: "Supporto la gestione di ambienti Microsoft 365 e account aziendali. Gestisco e mantengo siti web WordPress e servizi di hosting.",
            },
            {
                title: "Reti & infrastruttura",
                text: "Supporto la configurazione e la gestione di reti informatiche, connettività e dispositivi di rete.",
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
                text: "Ho sviluppato e mantenuto applicazioni web e il CRM aziendale interno, con PHP, JavaScript, Node.js, HTML, Tailwind CSS e Docker.",
            },
            {
                title: "Database & processi aziendali",
                text: "Ho gestito e integrato database SQL Server per quotazioni, ordini, magazzino e commesse.",
            },
            {
                title: "Supporto IT",
                text: "Ho assistito i dipendenti, configurato PC e software, e supportato Microsoft 365, SharePoint e reti aziendali.",
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
                text: "Ho realizzato un’applicazione web per l’esecuzione di codice JavaScript in tempo reale, con gestione degli utenti e database MySQL.",
            },
            {
                title: "Full stack & database",
                text: "Mi sono occupato di interfaccia, logica applicativa e integrazione con MySQL, in un contesto di lavoro reale.",
            },
            {
                title: "Esperienza professionale",
                text: "Ho applicato le competenze scolastiche in azienda, con metodologie di sviluppo e best practice.",
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
                text: "Ho sviluppato applicazioni software e web con Java, C++, PHP, JavaScript, HTML e CSS.",
            },
            {
                title: "Database",
                text: "Ho progettato, gestito e interrogato database relazionali con SQL.",
            },
            {
                title: "Sistemi & reti",
                text: "Ho configurato e gestito reti e sistemi informatici, analizzando e risolvendo problemi tecnici.",
            },
            {
                title: "Progettazione",
                text: "Ho analizzato i requisiti, progettato soluzioni informatiche e gestito progetti.",
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
        blurb: "Il mio portfolio: quello che stai guardando. React, Vite e Tailwind.",
        status: "Online",
        github: "https://github.com/simone-2006/portfolio-simone-penza-v2",
        image: "portfolio_anteprima.png",
    },
    {
        id: "react-task",
        index: "02",
        title: "React task",
        blurb: "Organizzo le attività in tre colonne: Todo, Doing, Done.",
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
        blurb: "Gestisco scadenze e parco macchine aziendale su database SQL con Docker.",
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
        blurb: "Monitoro la LAN: dispositivi, ping, latenza e storico up/down.",
        status: "Locale",
        github: "https://github.com/simone-2006/NMS26",
        image: "NMS26_anteprima.png",
    },
    {
        id: "ollama-chatbot",
        index: "07",
        title: "Ollama chatbot",
        blurb: "Chatto con un modello Ollama in locale. React e Vite.",
        status: "Locale",
        github: "https://github.com/simone-2006/ollama-chatbot",
    },
    {
        id: "contacts-simone",
        index: "08",
        title: "Contacts Simone",
        blurb: "Ho creato una pagina contatti collegata a un QR code, da aprire al volo.",
        status: "Online",
        github: "https://github.com/simone-2006/contacts-simone",
    },
    {
        id: "ticketing-easy",
        index: "09",
        title: "Ticketing Easy",
        blurb: "Trasformo le email in ticket di help desk. React, TypeScript ed Express.",
        status: "Demo",
        github: "https://github.com/simone-2006/ticketing-easy",
    },
    {
        id: "nexo-erp",
        index: "10",
        title: "Nexo ERP",
        blurb: "Sto costruendo una piattaforma operativa: CRM, ordini, magazzino e acquisti. Next.js e PostgreSQL.",
        status: "In sviluppo",
        github: "https://github.com/simone-2006/Nexo-ERP",
    },
    {
        id: "family-plan",
        index: "11",
        title: "Family Plan",
        blurb: "Ho realizzato un planner di famiglia: calendario, attività e liste condivise. PWA senza account.",
        status: "Demo",
        github: "https://github.com/simone-2006/family-plan",
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
