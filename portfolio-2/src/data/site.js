import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const pages = [
    { id: "about", title: "Chi sono" },
    { id: "skills", title: "Skills e progetti" },
    { id: "experience", title: "Esperienza" },
    { id: "contacts", title: "Contatti & CV" },
];

export const profile = {
    firstName: "Simone",
    lastName: "Penza",
    role: "Tecnico IT e sviluppatore web",
    location: "Lissone, MB",
    bio: "Applicazioni web, database e supporto informatico: postazioni, hardware, software e infrastruttura.",
    photo:" /SimonePenzaFoto.png",
    languages: ["Italiano", "Inglese"],
};

export const experiences = [
    {
        period: "Ott 2025 — ora",
        kind: "Lavoro",
        title: "Tecnico IT e sviluppatore web",
        company: "Greenchemicals SRL",
        location: "Desio (MB)",
        sections: [
            {
                title: "Sviluppo web & software",
                text: "Sviluppo e manutenzione di un CRM interno per clienti, attività commerciali e processi aziendali.",
            },
            {
                title: "Database e integrazione dati",
                text: "Progettazione di database SQL e integrazione con il gestionale: quotazioni, magazzino, ordini e commesse. Database per clienti, visite e scadenze del parco macchine.",
            },
            {
                title: "IT support & infrastruttura",
                text: "Supporto tecnico ai dipendenti, problemi hardware e software, configurazione delle postazioni e manutenzione dell'infrastruttura IT.",
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
                text: "Applicazione web per eseguire codice JavaScript in tempo reale, con gestione utenti.",
            },
            {
                title: "Full stack & database",
                text: "Interfaccia, logica applicativa e integrazione con MySQL, in un contesto di lavoro reale.",
            },
        ],
        stack: "HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
        period: "2020 — 2025",
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
        blurb: "Tengo traccia delle uscite. Per ora solo frontend.",
        status: "Demo",
        github: "https://github.com/simone-2006/flowmoney-demo/tree/main",
        image: "flowmoney_anteprima.png",
    },
    {
        id: "flowboard",
        index: "04",
        title: "Flowboard",
        blurb: "Una board per organizzare il lavoro. Ancora in costruzione.",
        status: "In sviluppo",
        github: "https://github.com/simone-2006/flowboard",
        image: "flowboard_anteprima.png",
    },
    {
        id: "demo-dashboard-auto",
        index: "05",
        title: "Dashboard auto",
        blurb: "Parco macchine aziendale: scadenze e gestione su database SQL con Docker.",
        status: "Demo",
        github: "https://github.com/simone-2006/demo-dashboard-auto",
        image: "demo_dashboard_auto_anteprima.png",
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
