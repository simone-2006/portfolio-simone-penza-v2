export default function Footer({ onPrivacyClick }) {
  return (
    <footer className="page-gutter flex w-full flex-col items-center gap-2 border-t border-accent bg-primary pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
      <p>© {new Date().getFullYear()} Simone Penza</p>
      <nav aria-label="Legale" className="flex items-center gap-3">
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
      </nav>
    </footer>
  );
}
