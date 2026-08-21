export default function Footer() {
  return (
    <footer className="w-full border-t border-accent bg-primary py-6 text-center text-xs text-text">
      <span>
        © {new Date().getFullYear()} Simone Penza &middot; Tutti i diritti riservati
      </span>
    </footer>
  );
}