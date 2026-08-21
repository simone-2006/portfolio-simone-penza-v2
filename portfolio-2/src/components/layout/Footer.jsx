export default function Footer() {
  return (
    <footer className="w-full border-t border-accent bg-primary px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-xs text-text">
      <span>
        © {new Date().getFullYear()} Simone Penza &middot; Tutti i diritti riservati
      </span>
    </footer>
  );
}