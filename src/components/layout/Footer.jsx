export default function Footer() {
  return (
    <footer className="page-gutter w-full border-t border-border-color bg-transparent pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-muted">
      <div className="page-shell">
        © {new Date().getFullYear()} Simone Penza
      </div>
    </footer>
  );
}
