# Componenti Framer valutati

## Metodo

- Data della verifica: 24 luglio 2026.
- Fonte: pagine individuali del Marketplace ufficiale Framer.
- Risultati pertinenti esaminati: 24.
- Raffinamenti della ricerca: 2.
- Componenti completamente verificati: 10.
- Criteri: pertinenza con Beenacria, indicazione esplicita `Free` nella pagina individuale, azione `Copy Component` senza prezzo o acquisto obbligatorio, assenza di servizi esterni obbligatori.

L'ordine privilegia lo storytelling scroll, la gallery, le interazioni editoriali e l'accessibilità. I componenti sono benchmark per un eventuale progetto Framer futuro; il sito corrente mantiene implementazioni native Next.js.

## Riferimento richiesto durante l'implementazione

- Componente: [Flow Marquee](https://www.framer.com/marketplace/components/flow-marquee/) di Yasiru S.
- URL versione indicata: `https://framer.com/m/FlowMarquee-jJ5xQp.js@HeIkAvqBQpDc63dFpKI3`.
- Funzione: flusso fotografico infinito, responsive e a densità adattiva.
- Applicazione: la gallery Beenacria ne riprende il comportamento con un'implementazione nativa React/CSS, mantenendo lightbox, immagini locali, tastiera, pausa su hover/focus e `prefers-reduced-motion`.
- Dipendenze introdotte: nessuna.
- Nota: il modulo Framer non è stato importato nel bundle Next.js perché usa il runtime proprietario Framer; è stato utilizzato come riferimento funzionale e visivo.

## Classifica

### 1. Text Reveal

- Autore: Soyeb.
- Pagina ufficiale: [Text Reveal](https://www.framer.com/community/marketplace/components/text-reveal/).
- Funzione: reveal progressivo di parole o caratteri collegato allo scroll.
- Utilità: alta.
- Area suggerita: capitoli testuali sopra la sequenza animata.
- Motivo: preserva gli stili tipografici globali e supporta uno storytelling cinematico coerente con il redesign.
- Prova di gratuità: il titolo della pagina riporta `Free Typography Component` e l'azione disponibile è `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: testo nativo inserito in uno Stack e collegato al controllo del componente.
- Limitazioni: l'animazione è visibile in Preview/live, non nel canvas; richiede configurazione separata dei breakpoint.
- Servizi esterni: nessuno dichiarato.

### 2. Filterable Gallery

- Autore: Elena K.
- Pagina ufficiale: [Filterable Gallery](https://www.framer.com/community/marketplace/components/filterable-gallery/).
- Funzione: gallery filtrabile responsive con lightbox.
- Utilità: alta.
- Area suggerita: gallery.
- Motivo: combina griglia, reveal e visualizzazione fullscreen per un set fotografico delle dimensioni di Beenacria.
- Prova di gratuità: la pagina mostra `Free Interactions Component`, `Free Code Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: configurazione manuale delle immagini e delle categorie.
- Limitazioni: consigliato per set piccoli o medi, indicativamente 5-20 immagini; non usa CMS.
- Servizi esterni: nessuno dichiarato.

### 3. Scroll Scatter

- Autore: Amr Khalaili.
- Pagina ufficiale: [Scroll Scatter](https://www.framer.com/community/marketplace/components/scroll-scatter/).
- Funzione: dispersione di immagini o componenti guidata dallo scroll.
- Utilità: alta.
- Area suggerita: transizione fra storytelling e contenuti statici.
- Motivo: offre controlli espliciti di inizio/fine, scala e rotazione utili per una narrazione immersiva.
- Prova di gratuità: la pagina mostra `Free Interactions Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: fino a otto contenuti sovrapposti e regolazione manuale della timeline.
- Limitazioni: un'intensità elevata può compromettere leggibilità e responsive; non sostituisce una sequenza frame-by-frame.
- Servizi esterni: nessuno dichiarato.

### 4. Reveal Text On Scroll

- Autore: Ali Themes.
- Pagina ufficiale: [Reveal Text On Scroll](https://www.framer.com/community/marketplace/components/revealtextonscroll/).
- Funzione: reveal di righe, parole o caratteri con trigger scroll o on-load.
- Utilità: alta.
- Area suggerita: hero e titoli di sezione.
- Motivo: mantiene markup semantico configurabile e offre modalità adatte alla gerarchia editoriale.
- Prova di gratuità: la pagina mostra `Free Typography Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: scelta di tag HTML, trigger e preset.
- Limitazioni: i dodici preset richiedono moderazione per non sovraccaricare il motion system.
- Servizi esterni: nessuno dichiarato.

### 5. Service Accordion

- Autore: Pentaclay.
- Pagina ufficiale: [Service Accordion](https://www.framer.com/community/marketplace/components/service-accordion/).
- Funzione: elenco numerato che espande testo e immagine.
- Utilità: alta.
- Area suggerita: processo dal fiore al vasetto.
- Motivo: il linguaggio numerato e l'apertura fotografica si adattano bene ai tre passaggi artigianali.
- Prova di gratuità: la pagina mostra `Free Sections Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: contenuti, immagini e controlli di stile per ciascun elemento.
- Limitazioni: apre un solo elemento alla volta e introduce immagini nel flusso, quindi non sarebbe adatto sopra la sequenza video.
- Servizi esterni: nessuno dichiarato.

### 6. FAQs Accordian

- Autore: Sarthak Verma.
- Pagina ufficiale: [FAQs Accordian](https://www.framer.com/community/marketplace/components/faqs-accordian/).
- Funzione: FAQ responsive con apertura e chiusura animate.
- Utilità: media.
- Area suggerita: FAQ.
- Motivo: struttura semplice, personalizzabile e compatibile con temi chiari o scuri.
- Prova di gratuità: il titolo della pagina riporta `Free Layout Component` e l'azione è `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: inserimento delle domande e delle risposte nel pannello Framer.
- Limitazioni: la pagina non documenta opzioni avanzate di gestione multipla o ricerca.
- Servizi esterni: nessuno dichiarato.

### 7. MagneticButton

- Autore: Spyridon Merkouris.
- Pagina ufficiale: [MagneticButton](https://www.framer.com/community/marketplace/components/magneticbutton/).
- Funzione: CTA magnetica con shine e freccia animata.
- Utilità: media.
- Area suggerita: CTA hero e contatti.
- Motivo: può aggiungere tattilità alle azioni principali senza cambiare la struttura editoriale.
- Prova di gratuità: la pagina è intitolata `Free Buttons Component` e mostra `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: configurazione di link, colori, tipografia e forza magnetica.
- Limitazioni: l'effetto magnetico è utile solo con puntatore; va disattivato o ridotto per motion ridotto e dispositivi touch.
- Servizi esterni: nessuno dichiarato.

### 8. Magnet

- Autore: FunTech.
- Pagina ufficiale: [Magnet](https://www.framer.com/community/marketplace/components/magnet/).
- Funzione: wrapper magnetico applicabile a qualsiasi contenuto.
- Utilità: media.
- Area suggerita: pulsanti e icone social.
- Motivo: è più flessibile di un bottone precostituito e permette di mantenere lo stile del brand.
- Prova di gratuità: la pagina mostra `Free Interactions Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: componente figlio nello slot Content e regolazione dell'intensità.
- Limitazioni: interazione principalmente desktop; un uso diffuso può diventare distraente.
- Servizi esterni: nessuno dichiarato.

### 9. Text Reveal Effect

- Autore: Lera.
- Pagina ufficiale: [Text Reveal Effect](https://www.framer.com/community/marketplace/components/text-reveal-effect/).
- Funzione: reveal word-by-word on-appear con livello ghost.
- Utilità: media.
- Area suggerita: statement “Ogni goccia nasce da un paesaggio”.
- Motivo: adatto a un singolo testo manifesto senza richiedere Scroll Sections.
- Prova di gratuità: la pagina mostra `Free Typography Component` e `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: configurazione di tipografia, colori, stagger e transizione.
- Limitazioni: è legato all'apparizione e non offre la stessa precisione progressiva di uno scrub scroll.
- Servizi esterni: nessuno dichiarato.

### 10. Directional Cursor

- Autore: Soyeb.
- Pagina ufficiale: [Directional Cursor](https://www.framer.com/community/marketplace/components/directional-cursor/).
- Funzione: cursore SVG animato in base a direzione e velocità.
- Utilità: bassa.
- Area suggerita: esperienza desktop globale, solo come enhancement facoltativo.
- Motivo: può rafforzare la sensazione artigianale e organica con un segno personalizzato.
- Prova di gratuità: la pagina è intitolata `Free Interactions Component` e mostra `Copy Component`.
- Dipendenze: ambiente Framer; nessuna dipendenza esterna dichiarata.
- Prerequisiti: posizionamento top-level; Layout Template opzionale per applicazione globale.
- Limitazioni: nasconde o sostituisce il cursore nativo, richiede attenzione ad accessibilità, puntatori testuali e dispositivi touch.
- Servizi esterni: nessuno dichiarato.

## Esclusioni rilevanti

- `LightboxGallery`: escluso perché la pagina individuale mostra `Buy for $10`.
- `Navigation Menu Bar` e `Customizable FAQ`: risultati pertinenti, ma la pagina individuale non è rimasta interrogabile durante la verifica finale; non sono stati usati per completare la classifica.
- Componenti magnetici ridondanti: esclusi quando non aggiungevano un caso d'uso distinto.

## Conferma

Nessun componente Framer è stato installato, copiato o aggiunto al progetto.
