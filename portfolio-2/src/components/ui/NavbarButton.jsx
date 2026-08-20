export default function NavbarButton({ active, href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
      aria-current={active ? "true" : undefined}
      className={`font-sans text-sm font-medium border-b pb-0.5 transition-colors ${active
        ? "text-text border-text"
        : "text-muted border-transparent hover:text-text-secondary hover:border-text"
        }`}
    >
      {children}
    </a>
  );
}
