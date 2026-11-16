import { motion } from "motion/react";

export default function SectionHeading({ children, delay = 0.1, animate = "view" }) {
  const motionProps =
    animate === "mount"
      ? {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: "easeOut" },
        }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.65, delay, ease: "easeOut" },
        };

  return (
    <motion.div {...motionProps} className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 shrink-0 bg-signal"
      />
      <h1 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {children}
      </h1>
    </motion.div>
  );
}
