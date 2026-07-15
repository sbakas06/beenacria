# Beenacria Showcase

Sito vetrina premium per Beenacria, micro attività siciliana di apicoltura artigianale a Caltanissetta.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Framer Motion
- Lucide React

## Avvio

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Scelte tecniche

- Home one-page con sezioni indicizzabili e navigazione ad ancore.
- Animazioni Framer Motion per reveal, parallax, loader, CTA, lightbox e microinterazioni.
- Texture miele, pattern honeycomb, logo SVG animabile e gallery placeholder generati via CSS.
- Supporto `prefers-reduced-motion` per accessibilita.
- Metadata Next, Open Graph, `robots.txt`, `sitemap.xml`, schema `Organization` e `LocalBusiness`.
- Contenuti in `data/content.ts` per modifica rapida.

## Prossimi step

- Sostituire telefono, WhatsApp ed email placeholder.
- Aggiungere foto reali in `public/assets/gallery`.
- Collegare il form a un servizio come Formspree, Resend o API route.
- Aggiornare `metadataBase` con il dominio definitivo se diverso da `beenacria.it`.
