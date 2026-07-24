# Beenacria Showcase

Sito vetrina editoriale per Beenacria, micro attività siciliana di apicoltura artigianale a Caltanissetta.

## Stack

- Next.js 15 App Router con export statico
- React 19 e TypeScript strict
- Tailwind CSS 3 e CSS globale
- Framer Motion
- Lucide React

Il progetto non è una PWA e non include e-commerce, carrello, checkout o area amministrativa.

## Avvio

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Verifiche

```bash
npm run typecheck
npm run lint
npm run build
```

La build genera l'export statico nella cartella `out`.

## Sequenza scroll

Le sorgenti originali locali sono nelle cartelle:

- `assets/bg_api_vicio_desktop`
- `assets/bg_api_vicio_mobile`

In produzione il canvas usa direttamente ImageKit:

- `104` frame desktop da `assets/bg_api_vicio_desktop`
- `101` frame visivi mobile da `assets/bg_api_vicio_mobile`; i file esportati
  dal `101` al `240` coincidono con l'ultimo fotogramma

ImageKit converte i PNG in WebP e li ridimensiona alla risoluzione utile. Il canvas carica subito il primo frame, recupera gli altri in piccoli batch e assegna priorità al frame richiesto dallo scroll. La timeline mobile usa i frame `001-101`, distribuendo tutto il movimento lungo lo scroll senza attraversare la coda di fotogrammi duplicati. Lo scroll attraversa hero e tre capitoli testuali; l'ultimo frame rimane fermo e sfuma delicatamente mentre la sezione prodotto entra nel viewport, senza spacer vuoti. Con `prefers-reduced-motion` viene mostrato un frame statico.

Mantieni il naming numerico a tre cifre (`001`, `002`, ...) nella libreria ImageKit.

## Struttura dei contenuti

- `components/HomeExperience.tsx`: esperienza, canvas, navigazione, gallery marquee, FAQ e contatti.
- `data/content.ts`: copy, navigazione, processo, valori e gallery.
- `lib/imagekit.ts`: endpoint CDN e costruzione centralizzata degli URL.
- `app/globals.css`: token, layout, responsive e stati accessibili.
- `assets`: copie sorgente locali; il runtime non le serve.

## Scelte tecniche

- Design “Liquid Gold Editorial” derivato dall'esportazione Stitch locale.
- Sfondi charcoal e ambra, con banda chiara dedicata a persone e territorio.
- Canvas frame-by-frame separato per desktop e mobile, senza nuove dipendenze.
- Immagini, logo e sequenze serviti da ImageKit con trasformazioni di formato, qualità e larghezza.
- Gallery a flusso infinito responsive, ispirata a Flow Marquee, con pausa su hover/focus e fallback statico per reduced motion.
- Lightbox in portal con chiusura fissa, backdrop ed Escape.
- Timeline del processo con rail luminoso responsive e passaggio da orizzontale a verticale.
- Transizioni organiche fra i fondi charcoal e crema.
- OpenStreetMap incorporata realmente nella sezione contatti, con marker e link esterno.
- Menu mobile, FAQ native, focus visibili e navigazione ad ancore.
- Supporto esplicito a `prefers-reduced-motion`.
- Metadata, Open Graph, `robots.txt`, `sitemap.xml` e schema `Organization`/`LocalBusiness`.

## Asset e contatti

Le immagini possono essere sostituite mantenendo gli stessi nomi nella cartella `/assets` della Media Library ImageKit. Facebook e Instagram sono collegati ai canali ufficiali; OpenStreetMap usa un embed reale per `Beenacria, Contrada Fontanelle, 93100 Caltanissetta CL`. Non è presente un form simulato senza endpoint verificato.

## Documentazione

- `docs/PRD.md`: requisiti di prodotto.
- `docs/REDISIGN_TASK.md`: task di redesign.
- `docs/REDESIGN_STATUS.md`: stato, decisioni e validazioni.
- `docs/FRAMER_COMPONENTS.md`: ricerca dei componenti Framer gratuiti.
