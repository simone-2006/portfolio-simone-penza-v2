export default function Footer() {
  return (
    <footer className="page-gutter w-full border-t border-accent bg-primary pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-muted">
      © {new Date().getFullYear()} Simone Penza
    </footer>
  );
}
