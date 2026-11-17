export default function Footer({ onPrivacyClick, onAccessibilityClick }) {
  return (
    <footer className="page-gutter flex w-full flex-col items-center gap-3 border-t border-accent bg-primary pt-9 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
      <p>© {new Date().getFullYear()} Simone Penza</p>
      <nav aria-label="Legale" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <a
          href="#privacy"
          onClick={(event) => {
            event.preventDefault();
            onPrivacyClick?.();
          }}
          className="transition-colors hover:text-text"
        >
          Privacy e cookie
        </a>
        <span aria-hidden="true" className="text-border-color">
          ·
        </span>
        <a
          href="#accessibilita"
          onClick={(event) => {
            event.preventDefault();
            onAccessibilityClick?.();
          }}
          className="transition-colors hover:text-text"
        >
          Accessibilità
        </a>
      </nav>
    </footer>
  );
}
