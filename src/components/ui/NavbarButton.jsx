import { cn } from "../../lib/utils";

export default function NavbarButton({ active, href, onClick, children, className }) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
      aria-current={active ? "true" : undefined}
      className={cn(
        "font-sans text-sm font-medium border-b pb-0.5 transition-colors",
        active
          ? "text-text border-signal"
          : "text-muted border-transparent hover:text-text-secondary hover:border-signal/60",
        className,
      )}
    >
      {children}
    </a>
  );
}
