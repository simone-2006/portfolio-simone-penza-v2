# Simone Penza

Sito personale di Simone Penza, tecnico IT e sviluppatore web a Lissone (MB). Una pagina sola: chi sono, competenze, progetti, esperienza e contatti.

Repository: [simone-2006/portfolio-simone-penza-v2](https://github.com/simone-2006/portfolio-simone-penza-v2)

## Cosa c’è

| Sezione | Contenuto |
| --- | --- |
| Chi sono | Ruolo, bio e foto |
| Skills e progetti | Competenze e carosello dei progetti, con link al codice |
| Esperienza | Lavoro e formazione |
| Contatti & CV | Mail, telefono, social, form e curriculum in PDF |

All’apertura compare una schermata di avvio. Il tema segue la preferenza di sistema e si può invertire dalla navbar. Le animazioni rispettano `prefers-reduced-motion`.

Testi, progetti, esperienze e link stanno in [`src/data/site.js`](src/data/site.js). Per aggiornare il sito basta modificare quel file.

## Stack

- [React 19](https://react.dev/) e [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) per le animazioni
- [EmailJS](https://www.emailjs.com/) per il form contatti
- [Lucide](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/)

## Avvio in locale

Serve Node.js.

```bash
npm install
cp .env.example .env
npm run dev
```

Su Windows, al posto di `cp`:

```powershell
Copy-Item .env.example .env
```

Vite stampa l’indirizzo locale, di solito `http://localhost:5173`.

| Comando | Cosa fa |
| --- | --- |
| `npm run dev` | Server di sviluppo |
| `npm run build` | Build di produzione in `dist/` |
| `npm run preview` | Anteprima della build |
| `npm run lint` | Controllo con Oxlint |

## Form contatti

Il form usa EmailJS. Copia `.env.example` in `.env` e inserisci i tre valori del tuo account (service, template, public key). Senza queste variabili il sito si avvia comunque, ma l’invio del messaggio fallisce.

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

`.env` è già in `.gitignore`.

## Struttura

```text
public/          immagini, CV e favicon
src/
  data/site.js   contenuti del sito
  components/    sezioni e componenti
  hooks/         tema chiaro/scuro
  context/       dati condivisi tra le sezioni
```
