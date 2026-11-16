import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Database, Network, Server } from "lucide-react";
import { pagesContext, projectsContext } from "../../context/appContext";
import SectionHeading from "../ui/SectionHeading";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaPython, FaDocker, FaGitAlt, FaJava, FaWindows, FaMicrosoft } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiOpenaiFill } from "react-icons/ri";
import { DiMysql, DiVisualstudio } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
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
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={20} />, color: "#06B6D4" },
    // { name: "Bootstrap", icon: <FaBootstrap size={20} />, color: "#7952B3" },
    { name: "Node.js", icon: <FaNodeJs size={20} />, color: "#339933" },
    { name: "PHP", icon: <FaPhp size={20} />, color: "#777BB4" },
    { name: "Python", icon: <FaPython size={20} />, color: "#3776AB" },
    { name: "Java", icon: <FaJava size={20} />, color: "#007396" },
    { name: "C++", icon: <SiCplusplus size={20} />, color: "#00599C" },
    { name: "SQL", icon: <Database size={20} />, color: "" },
    { name: "MySQL", icon: <DiMysql size={20} />, color: "#2496ED" },
    { name: "SQL Server", icon: <Server size={20} />, color: "#CC2927" },
    { name: "Windows", icon: <FaWindows size={20} />, color: "#0078D6" },
    { name: "Reti", icon: <Network size={20} />, color: "#1f8a7a" },
    { name: "Docker", icon: <FaDocker size={20} />, color: "#2496ED" },
    { name: "Git", icon: <FaGitAlt size={20} />, color: "#F05033" },
    { name: "Microsoft 365", icon: <FaMicrosoft size={20} />, color: "#D83B01" },
    { name: "Visual Studio Code", icon: <DiVisualstudio size={20} />, color: "#007ACC" },
    { name: "Cursor", icon: <CursorIcon />, color: "#000000" },
    { name: "ChatGPT", icon: <RiOpenaiFill size={20} />, color: "#000000" },
    { name: "Claude", icon: <BsClaude size={20} />, color: "#FF6600" },
    { name: "GitHub Copilot", icon: <GoCopilot size={20} />, color: "#181717" },
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

const AUTOPLAY_MS = 4500;

function ProjectCarousel({ projects }) {
    const reduceMotion = useReducedMotion();
    const [[index, direction], setPage] = useState([0, 0]);
    const [paused, setPaused] = useState(false);
    const project = projects[index];
    const variants = reduceMotion ? fadeSlideVariants : slideVariants;
    const totalLabel = String(projects.length).padStart(2, "0");

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

    useEffect(() => {
        if (reduceMotion || paused || projects.length < 2) return;

        const timer = window.setInterval(() => {
            setPage(([current]) => [
                (current + 1) % projects.length,
                1,
            ]);
        }, AUTOPLAY_MS);

        return () => window.clearInterval(timer);
    }, [reduceMotion, paused, index, projects.length]);

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

    if (!project) {
        return (
            <div className="w-full min-w-0 max-w-xl">
                <p className="font-semibold text-xs uppercase tracking-wide text-muted">
                    Progetti
                </p>
                <p className="mt-3 text-sm text-muted">Nessun progetto</p>
            </div>
        );
    }

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Progetti"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setPaused(false);
                }
            }}
            className="w-full min-w-0 max-w-xl outline-none touch-pan-y"
        >
            <div className="mb-3 flex items-end justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Progetti
                </p>
                <p className="font-sans text-xs tabular-nums text-muted" aria-live="polite">
                    {project.index} / {totalLabel}
                </p>
            </div>

            <div className="relative overflow-hidden border border-border-color bg-surface/80">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.article
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
                        className="cursor-grab active:cursor-grabbing"
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {project.image ? (
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    draggable={false}
                                    className="aspect-video w-full object-cover"
                                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 210, damping: 20 }}
                                />
                            ) : (
                                <div className="flex aspect-video w-full items-center justify-center bg-highlight font-display text-2xl font-semibold text-text-secondary">
                                    {project.title}
                                </div>
                            )}
                            <div className="flex items-start justify-between gap-4 border-t border-border-color px-4 py-3">
                                <div className="min-w-0">
                                    <p className="font-display text-2xl font-semibold tracking-tight text-text">
                                        {project.title}
                                    </p>
                                    <p className="mt-1 text-sm text-muted">{project.blurb}</p>
                                </div>
                                <span className="shrink-0 border border-border-color px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                                    {project.status}
                                </span>
                            </div>
                        </a>
                    </motion.article>
                </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5" role="tablist" aria-label="Seleziona progetto">
                    {projects.map((item, itemIndex) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-label={`Vai a ${item.title}`}
                            aria-selected={itemIndex === index}
                            onClick={() => goTo(itemIndex)}
                            className={`h-1.5 transition-all ${itemIndex === index ? "w-6 bg-signal" : "w-1.5 bg-secondary hover:bg-accent"}`}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <motion.button
                        type="button"
                        aria-label="Progetto precedente"
                        onClick={() => paginate(-1)}
                        whileTap={{ scale: 0.94 }}
                        className="flex size-10 items-center justify-center border border-border-color bg-surface text-text-secondary hover:border-signal hover:text-text"
                    >
                        <ChevronLeft size={18} />
                    </motion.button>
                    <motion.button
                        type="button"
                        aria-label="Progetto successivo"
                        onClick={() => paginate(1)}
                        whileTap={{ scale: 0.94 }}
                        className="flex size-10 items-center justify-center border border-border-color bg-surface text-text-secondary hover:border-signal hover:text-text"
                    >
                        <ChevronRight size={18} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const navbarElements = useContext(pagesContext);
    const projects = useContext(projectsContext);
    const section = navbarElements[1];

    return (
        <motion.section
            key={section.id}
            id={section.id}
            className="page-section overflow-x-clip"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="page-shell">
                <SectionHeading>{section.title}</SectionHeading>

                <motion.div
                    className="relative my-8 overflow-hidden border-y border-border-color/70 py-4"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-primary to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-primary to-transparent" />
                    <div className="flex w-max animate-marquee">
                        <SkillRow />
                        <SkillRow hidden />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-2 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex min-w-0 flex-col justify-center"
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                            Lavoro su
                        </p>
                        <h2 className="mt-2 flex min-w-0 flex-col gap-1 border-b border-border-color pb-3">
                            {[
                                { word: "Sviluppo.", colClass: "text-text text-[clamp(2.4rem,7vw,3.75rem)]" },
                                { word: "Database.", colClass: "text-text-secondary text-[clamp(2rem,6vw,3.1rem)]" },
                                { word: "Supporto IT.", colClass: "text-muted text-[clamp(1.6rem,5vw,2.5rem)]" },
                            ].map(({ word, colClass }, idx) => (
                                <motion.span
                                    key={word}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportOnce}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + idx * 0.12,
                                    }}
                                    className={`font-display font-bold tracking-tight whitespace-nowrap ${colClass}`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>
                    </motion.div>

                    <motion.div
                        className="w-full min-w-0 lg:max-w-xl"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                    >
                        <ProjectCarousel projects={projects} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
