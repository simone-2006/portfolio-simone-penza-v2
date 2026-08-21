import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Database } from "lucide-react";
import { pagesContext } from "../../context/appContext";
import { useContext } from "react";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaPython, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeJsx } from "react-icons/bs";
import { RiTailwindCssFill, RiOpenaiFill } from "react-icons/ri";
import { DiMysql, DiVisualstudio } from "react-icons/di";
import { SiXampp, SiPostman } from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { BsClaude } from "react-icons/bs";

function CursorIcon() {
    return (
        <img
            src="/cursor-icon.svg"
            alt=""
            width={20}
            height={20}
            className="size-5 shrink-0"
        />
    );
}

const allSkills = [
    { name: "HTML", icon: <FaHtml5 size={20} />, color: "orange" },
    { name: "CSS", icon: <FaCss3Alt size={20} />, color: "lightblue" },
    { name: "JavaScript", icon: <IoLogoJavascript size={20} />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact size={20} />, color: "#61DAFB" },
    { name: "JSX", icon: <BsFiletypeJsx size={20} />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={20} />, color: "#06B6D4" },
    { name: "Node.js", icon: <FaNodeJs size={20} />, color: "#339933" },
    { name: "PHP", icon: <FaPhp size={20} />, color: "#777BB4" },
    { name: "Python", icon: <FaPython size={20} />, color: "#3776AB" },
    { name: "SQL", icon: <Database size={20} />, color: "" },
    { name: "MySQL", icon: <DiMysql size={20} />, color: "#2496ED" },
    { name: "Docker", icon: <FaDocker size={20} />, color: "#2496ED" },
    { name: "Git", icon: <FaGitAlt size={20} />, color: "#F05033" },
    { name: "GitHub", icon: <FaGithub size={20} />, color: "#181717" },
    { name: "Xampp", icon: <SiXampp size={20} />, color: "#F37623" },
    { name: "Visual Studio Code", icon: <DiVisualstudio size={20} />, color: "#007ACC" },
    { name: "Postman", icon: <SiPostman size={20} />, color: "#FF6C37" },
    { name: "Cursor", icon: <CursorIcon />, color: "#000000" },
    { name: "ChatGPT", icon: <RiOpenaiFill size={20} />, color: "#000000" },
    { name: "Claude", icon: <BsClaude size={20} />, color: "#FF6600" },
    { name: "GitHub Copilot", icon: <GoCopilot size={20} />, color: "#181717" },
];

const projects = [
    {
        id: "portfolio",
        index: "01",
        title: "Questo sito portfolio",
        blurb: "Sito portfolio relizzato interamente con React Vite + Tailwind css. Clicca sull'immagine per aprire la repository GitHub e visualizzare il codice!",
        status: "Online",
        github: "https://github.com/simone-2006/portfolio-simone-penza-v2",
        image: "https://placehold.co/720x420/ece7dc/23211e?text=01",
    },
    {
        id: "react-task",
        index: "02",
        title: "React task",
        blurb: "Un semplice progetto React per la gestione delle attività, organizzate in tre stati: Todo, Doing e Done.",
        status: "ONLINE",
        github: "https://github.com/simone-2006/react-task",
        image: "https://placehold.co/720x420/e3e2dc/23211e?text=02",
    },
    {
        id: "flowboard",
        index: "03",
        title: "Flowboard - in sviluppo",
        blurb: "Coming soon...",
        status: "Developing",
        github: "https://github.com/simone-2006/flowboard",
        image: "https://placehold.co/720x420/ece7dc/111111?text=03",
    },
];

const viewportOnce = { once: true, amount: 0.25 };

const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 72 : -72, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -72 : 72, opacity: 0 }),
};

const fadeSlideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
};

function SkillChip({ skill }) {
    return (
        <span className="flex shrink-0 items-center gap-2 text-text-secondary hover:text-text transition-colors">
            <span style={{ color: skill.color }}>{skill.icon}</span>
            <span>{skill.name}</span>
        </span>
    );
}

function SkillRow({ hidden }) {
    return (
        <div
            className="flex shrink-0 items-center gap-8 pr-8"
            aria-hidden={hidden || undefined}
        >
            {allSkills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
            ))}
        </div>
    );
}

function ProjectCarousel() {
    const reduceMotion = useReducedMotion();
    const [[index, direction], setPage] = useState([0, 0]);
    const project = projects[index];
    const variants = reduceMotion ? fadeSlideVariants : slideVariants;

    const paginate = (delta) => {
        setPage(([current]) => [
            (current + delta + projects.length) % projects.length,
            delta,
        ]);
    };

    const goTo = (nextIndex) => {
        if (nextIndex === index) return;
        setPage([nextIndex, nextIndex > index ? 1 : -1]);
    };

    const onDragEnd = (_, info) => {
        const swipe = info.offset.x + info.velocity.x * 0.2;
        if (swipe < -80) paginate(1);
        else if (swipe > 80) paginate(-1);
    };

    const onKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            paginate(1);
        }
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            paginate(-1);
        }
    };

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Progetti"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="w-full max-w-xl outline-none touch-pan-y"
        >
            <div className="mb-3 flex items-end justify-between gap-4">
                <p className="font-semibold text-muted text-xs uppercase tracking-wide">
                    Progetti
                </p>
                <p className="font-sans text-xs text-muted" aria-live="polite">
                    {project.index} / 0{projects.length}
                </p>
            </div>

            <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.article
                        onClick={() => window.open(project.github, "_blank")}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag={reduceMotion ? false : "x"}
                        dragDirectionLock
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.18}
                        dragMomentum={false}
                        onDragEnd={onDragEnd}
                        transition={{ type: "spring", bounce: 0.12, visualDuration: 0.4 }}
                        className="bg-surface"
                    >
                        <motion.img
                            src={project.image}
                            alt=""
                            draggable={false}
                            className="aspect-video w-full object-cover"
                            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 210, damping: 20 }}
                        />
                        <div className="flex items-start justify-between gap-4 p-3">
                            <div>
                                <p className="font-serif text-2xl text-text">{project.title}</p>
                                <p className="mt-1 text-sm text-muted">{project.blurb}</p>
                            </div>
                            <span className="shrink-0 border border-border-color px-2 py-1 text-[11px] uppercase tracking-wide text-text-secondary">
                                {project.status}
                            </span>
                        </div>
                    </motion.article>
                </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <motion.button
                        type="button"
                        aria-label="Progetto precedente"
                        onClick={() => paginate(-1)}
                        whileTap={{ scale: 0.94 }}
                        className="flex size-10 items-center justify-center border border-border-color bg-surface text-text-secondary hover:text-text"
                    >
                        <ChevronLeft size={18} />
                    </motion.button>
                    <motion.button
                        type="button"
                        aria-label="Progetto successivo"
                        onClick={() => paginate(1)}
                        whileTap={{ scale: 0.94 }}
                        className="flex size-10 items-center justify-center border border-border-color bg-surface text-text-secondary hover:text-text"
                    >
                        <ChevronRight size={18} />
                    </motion.button>
                </div>

                <div className="flex items-center gap-2" role="tablist" aria-label="Seleziona progetto">
                    {projects.map((item, itemIndex) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-label={`Vai a ${item.title}`}
                            aria-selected={itemIndex === index}
                            onClick={() => goTo(itemIndex)}
                            className={`h-1.5 rounded-full transition-all ${itemIndex === index ? "w-6 bg-text" : "w-1.5 bg-secondary hover:bg-accent"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {

    const navbarElements = useContext(pagesContext)

    return (
        <motion.section
            key={navbarElements[1].id}
            id={navbarElements[1].id}
            className="page-section overflow-x-clip"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="font-sans tracking-wide uppercase font-semibold text-text"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                {navbarElements[1].title}
            </motion.h1>

            <motion.div
                className="relative my-8 overflow-hidden"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-primary to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-primary to-transparent" />
                <div className="flex w-max animate-marquee">
                    <SkillRow />
                    <SkillRow hidden />
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col justify-between gap-8 p-4 lg:flex-row"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
                <motion.div
                    className="flex min-w-0 flex-col justify-center"
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-semibold text-muted text-xs"
                    >
                        Curiosità
                    </motion.p>
                    {/* Parole che compaiono una per volta con effetto */}
                    <div className="flex min-w-0 flex-row flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border-color pb-0.5">
                        {[
                            { word: "Frontend.", colClass: "text-text text-[60px]" },
                            { word: "Backend.", colClass: "text-text-secondary text-[50px]" },
                            { word: "Database.", colClass: "text-muted text-[40px]" },
                        ].map(({ word, colClass }, idx) => (
                            <motion.h2
                                key={word}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportOnce}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.55 + idx * 0.5,
                                }}
                                className={`font-serif text-6xl whitespace-nowrap ${colClass}`}
                            >
                                {word}
                            </motion.h2>
                        ))}
                    </div>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 36 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                    <ProjectCarousel />
                </motion.div>
            </motion.div>

            <motion.div
                className="flex max-w-[50%] justify-end"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
                <motion.div
                    className="max-w-[80%] bg-highlight p-3 rounded-md text-text-secondary"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
                >
                    <motion.p
                        className="italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.7, delay: 1.2 }}
                    >
                        Sempre curioso e aperto a imparare cose nuove: mi piace sperimentare, scoprire tecnologie diverse e crescere continuamente.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
