import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const LAST_NAME = "Penza";
const FIRST_NAME = "Simone";
const NAME_LENGTH = LAST_NAME.length + FIRST_NAME.length;

const STEPS = [
    { at: 10, label: "utente", value: "spenza" },
    { at: 40, label: "tech", value: "react · vite · tailwindcss" },
    { at: 70, label: "modalità", value: "portfolio" },
];

function statusFor(progress) {
    if (progress < 42) return "Sessione";
    if (progress < 74) return "Interfaccia";
    if (progress < 100) return "Contenuti";
    return "Pronto";
}

function NameLine({ word, filled, active, tone, className = "" }) {
    const count = Math.max(0, Math.min(word.length, filled));
    const restTone = tone === "soft" ? "text-text-secondary/25" : "text-text/15";
    const fullTone = tone === "soft" ? "text-text-secondary" : "text-text";

    return (
        <span className={`block ${fullTone} ${className}`.trim()}>
            {word.slice(0, count)}
            {active ? (
                <span
                    aria-hidden="true"
                    className="boot-caret mx-px inline-block h-[0.72em] w-0.5 translate-y-[0.08em] bg-accent"
                />
            ) : null}
            <span className={restTone}>{word.slice(count)}</span>
        </span>
    );
}

export default function BootScreen({ onDone }) {
    const reduceMotion = useReducedMotion();
    const [progress, setProgress] = useState(reduceMotion ? 100 : 0);
    const [leaving, setLeaving] = useState(false);
    const finished = useRef(false);
    const onDoneRef = useRef(onDone);
    const skipRef = useRef(null);

    useEffect(() => {
        onDoneRef.current = onDone;
    }, [onDone]);

    useEffect(() => {
        skipRef.current?.focus({ preventScroll: true });
    }, []);

    const finish = useCallback(() => {
        if (finished.current) return;
        finished.current = true;
        onDoneRef.current();
    }, []);

    const skip = useCallback(() => {
        if (finished.current) return;
        setProgress(100);
        setLeaving(true);
        window.setTimeout(finish, 280);
    }, [finish]);

    useEffect(() => {
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape" || event.key === "Enter") {
                event.preventDefault();
                skip();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [skip]);

    useEffect(() => {
        if (reduceMotion) {
            const leave = window.setTimeout(() => setLeaving(true), 280);
            const done = window.setTimeout(finish, 620);
            return () => {
                window.clearTimeout(leave);
                window.clearTimeout(done);
            };
        }

        const start = performance.now();
        const duration = 2100;
        let frame = 0;
        const tick = (now) => {
            const next = Math.min(100, ((now - start) / duration) * 100);
            setProgress(next);
            if (next < 100) {
                frame = requestAnimationFrame(tick);
            }
        };
        frame = requestAnimationFrame(tick);

        const leave = window.setTimeout(() => setLeaving(true), 2300);
        const done = window.setTimeout(finish, 2750);
        return () => {
            cancelAnimationFrame(frame);
            window.clearTimeout(leave);
            window.clearTimeout(done);
        };
    }, [finish, reduceMotion]);

    const shown = Math.round(progress);
    const filled = Math.round((progress / 100) * NAME_LENGTH);
    const writingLast = filled < LAST_NAME.length;

    return (
        <motion.div
            className={`page-gutter fixed inset-0 z-[80] flex flex-col bg-primary py-8 ${leaving ? "pointer-events-none" : ""}`}
            initial={false}
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="boot-title"
            aria-describedby="boot-progress"
        >
            <div className="flex items-center justify-between">
                <p id="boot-title" className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Avvio
                </p>
                <p
                    id="boot-progress"
                    className="text-xs tabular-nums tracking-wide text-text-secondary"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {String(shown).padStart(3, "0")}
                    <span className="sr-only"> per cento</span>
                </p>
            </div>

            <div className="mt-10 flex flex-col gap-3" aria-hidden="true">
                {STEPS.map((step) => {
                    const ready = progress >= step.at;
                    return (
                        <div
                            key={step.label}
                            className="grid grid-cols-[0.5rem_4.5rem_minmax(0,1fr)_2rem] items-center gap-3 text-sm"
                        >
                            <span
                                className={`size-2 rounded-full ${ready ? "bg-[#2f9e62]" : "bg-[#d64545]"}`}
                            />
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                                {step.label}
                            </span>
                            <span className={ready ? "truncate text-text-secondary" : "truncate text-text/20"}>
                                {step.value}
                            </span>
                            <span className="text-right text-xs uppercase tracking-wide text-text-secondary">
                                {ready ? "ok" : "…"}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-1 flex-col justify-center py-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    {statusFor(progress)}
                </p>
                <p className="font-serif text-6xl font-semibold leading-[1.02] sm:text-8xl" aria-hidden="true">
                    <NameLine
                        word={LAST_NAME}
                        filled={filled}
                        active={writingLast}
                        tone="soft"
                    />
                    <NameLine
                        word={FIRST_NAME}
                        filled={filled - LAST_NAME.length}
                        active={!writingLast}
                        tone="strong"
                        className="mt-1"
                    />
                </p>
                <p className="sr-only">Simone Penza</p>
            </div>

            <div>
                <div
                    className="h-px bg-border-color"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={shown}
                    aria-label="Caricamento portfolio"
                >
                    <div className="h-px bg-accent" style={{ width: `${shown}%` }} />
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-wide text-muted">Portfolio</p>
                    <button
                        ref={skipRef}
                        type="button"
                        onClick={skip}
                        className="min-h-11 px-2 text-xs font-semibold uppercase tracking-wide text-muted hover:text-text"
                    >
                        Salta introduzione
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
