# Redesign completo del progetto

## Modalità di esecuzione

Devi analizzare, ridisegnare, implementare e validare questo progetto in un’unica esecuzione, procedendo autonomamente attraverso tutte le fasi indicate nel presente documento.

Non fermarti dopo l’analisi o dopo aver prodotto un piano. Continua fino all’implementazione, alla validazione tecnica, alla validazione visiva, alla ricerca dei componenti Framer e al report finale, salvo il verificarsi di una condizione di arresto obbligatoria definita di seguito.

I checkpoint intermedi devono essere brevi e non richiedono la mia approvazione. Dopo ogni checkpoint continua automaticamente con la fase successiva, salvo una condizione `BLOCKED_*`.

---

# Fonti disponibili

Nel repository sono presenti:

- la configurazione del server MCP per Google Stitch nella cartella `.codex`;
- le skill locali nella cartella `.agents/skills`;
- il documento dei requisiti in `docs/PRD.md`;
- il codice esistente del progetto.

Le skill locali si trovano esclusivamente nella cartella:

```text
.agents/skills
```

Non cercarle in altre directory e non usare skill globali come sostitute, salvo che una skill locale lo richieda esplicitamente.

È già stato generato un design su Google Stitch. Devi individuare e utilizzare quel design esistente.

Non devi generare un nuovo design Stitch.

Se non riesci a trovare o leggere con certezza il design esistente, devi interrompere il lavoro senza inventare un design alternativo.

---

# Obiettivo finale

Completa il redesign del sito rispettando:

1. il design Google Stitch già esistente;
2. i requisiti presenti in `docs/PRD.md`;
3. lo stack, le funzionalità e le convenzioni del progetto esistente;
4. le skill locali pertinenti disponibili nel repository.

Devi inoltre cercare nel Marketplace ufficiale di Framer i 10 migliori componenti potenzialmente utili al progetto.

I componenti Framer devono essere:

- esplicitamente dichiarati gratuiti;
- completamente gratuiti;
- verificati aprendo la pagina individuale del componente;
- privi di pagamenti obbligatori per la funzionalità proposta.

Non installare, copiare, acquistare o aggiungere alcun componente Framer al progetto senza la mia approvazione esplicita.

---

# Ordine di priorità delle fonti

In caso di conflitto tra le fonti, applica questo ordine di priorità:

1. `docs/PRD.md` per requisiti funzionali, contenuti, obiettivi e vincoli di prodotto.
2. Il design Stitch esistente per layout, gerarchia visiva, stile, tipografia, colori, spaziature e direzione estetica.
3. Il comportamento funzionale già presente nel progetto.
4. Le convenzioni tecniche e architetturali del repository.
5. Le skill locali pertinenti.

Non usare il Marketplace Framer come fonte primaria del design.

I componenti trovati nel Marketplace devono essere soltanto suggerimenti opzionali e non devono influenzare automaticamente l’implementazione.

---

# Fase 1: controllo preliminare obbligatorio

Prima di modificare qualsiasi file, completa tutti i controlli seguenti.

## 1. Stato iniziale del repository

Esegui:

```bash
git status
```

Registra:

- branch corrente;
- file modificati;
- file non tracciati;
- eventuali modifiche già presenti;
- eventuali condizioni anomale del repository.

Non sovrascrivere, eliminare o ripristinare modifiche dell’utente già presenti.

## 2. Analisi del progetto

Ispeziona la struttura del repository e identifica:

- framework;
- linguaggio principale;
- package manager;
- versione runtime, se rilevabile;
- comando di installazione;
- comando di sviluppo;
- comando di build;
- comando di lint;
- comando di typecheck;
- test disponibili;
- pagine e route;
- componenti principali;
- struttura dei layout;
- gestione dello stato;
- gestione dei dati;
- design system esistente;
- token di colore, tipografia e spaziatura;
- librerie UI già presenti;
- eventuali strumenti di test visuale o browser automation;
- eventuali file di configurazione rilevanti.

Usa preferibilmente i comandi dichiarati nei file del progetto, come `package.json`, file di configurazione del framework o documentazione locale.

## 3. Analisi del PRD

Leggi integralmente:

```text
docs/PRD.md
```

Estrai almeno:

- obiettivo del prodotto;
- pubblico destinatario;
- requisiti funzionali;
- requisiti non funzionali;
- contenuti richiesti;
- pagine richieste;
- flussi utente;
- vincoli;
- priorità;
- criteri di accettazione;
- elementi esplicitamente esclusi.

Non usare testi segnaposto quando i contenuti necessari sono già disponibili nel PRD o nel progetto.

## 4. Analisi delle skill

Individua tutte le skill presenti in:

```text
.agents/skills
```

Per ogni skill, leggi inizialmente soltanto:

- nome;
- descrizione;
- condizioni di attivazione;
- finalità dichiarata.

Successivamente:

1. seleziona soltanto le skill applicabili alla fase corrente;
2. leggi integralmente soltanto le skill selezionate;
3. applica le istruzioni delle skill selezionate;
4. non leggere integralmente skill non pertinenti;
5. non invocare skill inutili solo per dichiarare di averle usate;
6. non utilizzare skill globali al posto di quelle locali;
7. registra quali skill sono state selezionate e per quale motivo.

## 5. Verifica del server MCP Stitch

Individua la configurazione MCP nella cartella:

```text
.codex
```

Verifica che il server MCP per Google Stitch sia:

- configurato;
- caricato;
- raggiungibile;
- interrogabile.

Interroga il server Stitch e individua il design già generato per questo progetto.

Registra:

- nome del design;
- ID;
- URL, se disponibile;
- progetto o workspace di appartenenza;
- data o altra informazione distintiva, se disponibile;
- criterio utilizzato per determinare che si tratta del design corretto.

Non selezionare automaticamente il primo design disponibile.

Se esistono più design plausibili, confrontali usando informazioni come:

- nome del progetto;
- contenuti del PRD;
- nome del repository;
- pagine presenti;
- testi;
- struttura;
- data di creazione o modifica;
- metadati disponibili.

Non generare, rigenerare o modificare il design Stitch.

## 6. Analisi del design Stitch

Dal design corretto estrai almeno:

- pagine o schermate;
- struttura delle pagine;
- sezioni;
- ordine delle sezioni;
- gerarchia visiva;
- header;
- navigazione;
- hero;
- contenuti principali;
- call to action;
- footer;
- colori;
- gradienti;
- tipografia;
- pesi tipografici;
- dimensioni del testo;
- altezza delle righe;
- spaziature;
- margini;
- padding;
- griglie;
- larghezze massime;
- bordi;
- raggi;
- ombre;
- icone;
- immagini;
- asset;
- componenti ricorrenti;
- stati interattivi visibili;
- varianti responsive;
- differenze tra desktop e mobile.

Se Stitch espone codice o dati strutturati, usali come riferimento, ma adattali allo stack e alle convenzioni del progetto esistente.

Non copiare codice non compatibile senza verificarlo.

## 7. Divieto di modifica durante il preflight

Non modificare il progetto finché non sono stati completati con successo:

- analisi del repository;
- lettura del PRD;
- analisi delle skill;
- verifica del server MCP;
- identificazione certa del design Stitch;
- lettura del contenuto del design.

---

# Condizioni di arresto obbligatorie

Interrompi il lavoro senza modificare file se si verifica una delle condizioni seguenti:

- `docs/PRD.md` non esiste;
- `docs/PRD.md` non è leggibile;
- il server MCP Stitch non è disponibile;
- il server MCP Stitch non è interrogabile;
- il design Stitch esistente non viene trovato;
- vengono trovati più design plausibili e non esiste un criterio affidabile per scegliere quello corretto;
- il contenuto del design Stitch non è accessibile;
- il design Stitch è privo delle informazioni minime necessarie per implementare il redesign;
- il progetto non può essere identificato o analizzato con sufficiente certezza;
- il repository è in uno stato che rende rischioso procedere senza sovrascrivere modifiche dell’utente.

In caso di arresto, restituisci:

1. il codice del blocco;
2. il controllo che è fallito;
3. i tentativi effettuati;
4. i risultati ottenuti;
5. il motivo per cui non è sicuro proseguire;
6. l’informazione o l’intervento preciso necessario per sbloccare il lavoro;
7. la conferma che non sono stati modificati file.

Usa uno dei seguenti codici:

- `BLOCKED_PRD_NOT_FOUND`
- `BLOCKED_PRD_UNREADABLE`
- `BLOCKED_STITCH_MCP_UNAVAILABLE`
- `BLOCKED_STITCH_DESIGN_NOT_FOUND`
- `BLOCKED_STITCH_DESIGN_AMBIGUOUS`
- `BLOCKED_STITCH_DESIGN_UNREADABLE`
- `BLOCKED_STITCH_DESIGN_INSUFFICIENT`
- `BLOCKED_PROJECT_UNREADABLE`
- `BLOCKED_REPOSITORY_STATE`

Non inventare un design alternativo per evitare un blocco.

Non usare un design precedente, globale o non verificato come sostituto.

---

# Regole generali per gli strumenti

## File system e terminale

- Usa prima file, librerie e comandi già presenti nel repository.
- Non cancellare file esistenti senza una necessità concreta e documentabile.
- Non usare comandi distruttivi.
- Non modificare configurazioni globali.
- Non modificare file esterni al repository.
- Non sovrascrivere modifiche dell’utente già presenti.
- Non eseguire `git reset`, `git clean`, checkout distruttivi o comandi equivalenti.
- Non forzare operazioni Git.
- Non creare commit o effettuare push, salvo richiesta esplicita.
- Non modificare segreti, credenziali o file sensibili.
- Non stampare segreti nei log o nel report.
- Non installare dipendenze globali.
- Non cambiare package manager.
- Non aggiornare indiscriminatamente le dipendenze.
- Non modificare lockfile senza una reale necessità.
- Non introdurre nuove dipendenze se il risultato può essere ottenuto con quelle esistenti.
- Se una nuova dipendenza è indispensabile, documenta prima la motivazione in `docs/REDESIGN_STATUS.md`.
- Usa comandi non interattivi quando possibile.
- Evita comandi che rimangono in ascolto indefinitamente.
- Imposta uno scope limitato per test, lint e analisi durante le milestone.
- Usa i controlli completi nella validazione finale.
- Se un comando rimane bloccato, interrompilo e riprovalo con uno scope più limitato o una strategia diversa.
- Non ripetere lo stesso tentativo fallito più di due volte senza cambiare strategia.
- Se un comando fallisce, leggi l’errore prima di ripeterlo.
- Non mascherare errori con flag che disabilitano i controlli.
- Non ignorare errori TypeScript, lint o build introdotti dalle modifiche.

## MCP Stitch

- Usa Stitch esclusivamente per recuperare e analizzare il design già esistente.
- Non creare un nuovo design.
- Non rigenerare il design.
- Non modificare il design.
- Non eliminare il design.
- Non selezionare automaticamente il primo risultato.
- Non proseguire con un design ambiguo.
- Registra l’identificativo del design usato.
- Mantieni il design Stitch come riferimento visivo principale.
- Usa il PRD come riferimento principale per requisiti e contenuti.
- Non dichiarare di aver letto dati Stitch che non sono stati effettivamente recuperati.

## Browser

Usa il browser per:

1. verificare visivamente il sito implementato;
2. verificare il comportamento delle route;
3. controllare la console;
4. verificare responsive e interazioni;
5. cercare componenti nel Marketplace ufficiale di Framer.

Durante la validazione locale:

- usa l’URL del server di sviluppo corretto;
- verifica che la pagina sia completamente caricata;
- controlla gli errori della console;
- controlla richieste fallite rilevanti;
- verifica gli stati interattivi;
- non limitarti a osservare soltanto la homepage se sono state modificate altre route.

Se il browser non è disponibile:

- non bloccare automaticamente l’intero redesign;
- completa l’implementazione e tutte le validazioni tecniche possibili;
- prova una strategia alternativa disponibile nel repository;
- documenta con precisione quali verifiche visive non sono state possibili;
- usa `PARTIALLY_COMPLETED` se non è possibile completare la validazione visiva obbligatoria.

Se Internet o il Marketplace Framer non sono disponibili:

- non bloccare il redesign;
- completa implementazione e validazione locale;
- non inventare componenti Framer;
- non usare risultati non verificati;
- crea comunque `docs/FRAMER_COMPONENTS.md`, indicando il motivo per cui la ricerca non è stata completata;
- termina con `PARTIALLY_COMPLETED`.

---

# Fase 2: piano operativo interno

Dopo aver completato con successo il controllo preliminare:

1. associa ogni requisito del PRD alle pagine, route o componenti coinvolti;
2. confronta il progetto esistente con il design Stitch;
3. identifica gli scostamenti;
4. determina cosa deve essere:
   - preservato;
   - modificato;
   - creato;
   - rimosso;
   - verificato;

5. identifica i rischi tecnici;
6. identifica le dipendenze tra le attività;
7. suddividi il lavoro in milestone;
8. ordina le milestone in modo da ottenere prima una struttura funzionante e successivamente la rifinitura visiva;
9. associa a ogni milestone una verifica tecnica o visiva.

Crea o aggiorna:

```text
docs/REDESIGN_STATUS.md
```

Il file deve contenere almeno:

- stato generale;
- design Stitch utilizzato;
- identificativo del design;
- criterio di selezione del design;
- sintesi del PRD;
- stack rilevato;
- comandi disponibili;
- skill selezionate;
- motivazione della selezione;
- requisiti associati alle pagine;
- milestone;
- stato di ogni milestone;
- decisioni rilevanti;
- dipendenze aggiunte, se presenti;
- file modificati;
- validazioni eseguite;
- errori preesistenti;
- problemi aperti;
- differenze residue rispetto a Stitch.

Usa stati chiari per le milestone:

- `NOT_STARTED`
- `IN_PROGRESS`
- `COMPLETED`
- `BLOCKED`

Non fermarti dopo il piano.

Continua automaticamente con l’implementazione.

---

# Fase 3: implementazione del redesign

Implementa il redesign seguendo queste regole.

## Coerenza con le fonti

- Usa il design Stitch come riferimento visivo.
- Usa il PRD per requisiti, contenuti, pagine e funzionalità.
- Non inventare sezioni non presenti nel PRD o nel design.
- Non inventare funzionalità non richieste.
- Non eliminare funzionalità esistenti senza un requisito esplicito.
- Preserva route, dati e comportamenti esistenti, salvo diversa indicazione del PRD.
- Non modificare il progetto per adattarlo ai componenti Framer trovati successivamente.

## Architettura e componenti

- Riutilizza componenti esistenti quando appropriato.
- Evita duplicazioni.
- Mantieni componenti con responsabilità chiare.
- Evita componenti eccessivamente grandi quando una suddivisione migliora la manutenzione.
- Non creare astrazioni inutili.
- Mantieni le convenzioni del repository.
- Mantieni la struttura dei file coerente con il progetto.
- Riutilizza utility e hook esistenti.
- Non riscrivere l’intero progetto quando è sufficiente intervenire localmente.

## Design system

- Usa token o design system esistenti quando compatibili.
- Se necessario, consolida colori, tipografia, spaziature, raggi e ombre in token riutilizzabili.
- Evita valori arbitrari ripetuti.
- Mantieni coerenza tra pagine e componenti.
- Non introdurre un secondo design system in parallelo senza necessità.

## Responsive design

- Considera almeno desktop e mobile.
- Usa breakpoint coerenti con il progetto.
- Evita larghezze fisse non necessarie.
- Previeni overflow orizzontale.
- Verifica immagini, tabelle, card, form, menu e testi lunghi.
- Assicurati che i controlli interattivi siano utilizzabili su dispositivi touch.
- Implementa un menu mobile funzionante quando richiesto dal design.

## Stati dell’interfaccia

Quando applicabili, implementa e verifica:

- loading;
- empty;
- error;
- success;
- disabled;
- hover;
- focus;
- active;
- selected;
- expanded;
- collapsed;
- validazione dei form;
- invio in corso.

Non aggiungere stati fittizi a componenti che non li richiedono.

## Accessibilità

Mantieni almeno:

- HTML semantico;
- gerarchia corretta dei titoli;
- etichette per i controlli;
- testo alternativo per immagini significative;
- navigazione da tastiera;
- focus visibile;
- contrasto leggibile;
- pulsanti e link distinguibili;
- dimensioni adeguate delle aree cliccabili;
- uso appropriato degli attributi ARIA;
- rispetto delle preferenze di movimento ridotto, quando sono presenti animazioni.

Non usare ARIA per sostituire elementi HTML semantici disponibili.

## Contenuti

- Usa i contenuti disponibili nel PRD o nel progetto.
- Non usare `Lorem ipsum`.
- Non inventare statistiche, testimonianze, clienti, premi o dati aziendali.
- Non inventare link o destinazioni.
- Non introdurre claim non presenti nelle fonti.
- Se un contenuto richiesto manca, usa una soluzione neutra e documenta il dato mancante.

## Asset

- Riutilizza gli asset esistenti quando appropriato.
- Usa gli asset forniti da Stitch se sono accessibili e compatibili.
- Non usare immagini casuali non coerenti.
- Ottimizza dimensioni e caricamento senza degradare la qualità.
- Evita asset remoti instabili se esiste un’alternativa locale.
- Rispetta eventuali regole del framework per immagini e font.

## Componenti Framer

Durante l’implementazione:

- non installare componenti Framer;
- non copiare componenti Framer;
- non importare codice dal Marketplace;
- non acquistare componenti;
- non modificare il sito per adattarlo a un componente Framer;
- non aggiungere dipendenze provenienti da componenti Framer.

---

# Milestone e checkpoint

Dopo ogni milestone:

1. aggiorna `docs/REDESIGN_STATUS.md`;
2. registra i file modificati;
3. esegui il controllo tecnico più pertinente;
4. esegui un controllo visuale, se possibile e utile;
5. correggi gli errori introdotti;
6. registra i risultati;
7. stampa un checkpoint conciso.

Ogni checkpoint deve contenere soltanto:

- milestone completata;
- file principali modificati;
- verifica eseguita;
- risultato della verifica;
- prossimo passo.

Il checkpoint non richiede approvazione.

Dopo averlo stampato, continua automaticamente.

Non fermarti in attesa di una risposta, salvo il verificarsi di una condizione `BLOCKED_*`.

Non restare in esplorazione indefinita.

Se una fase non produce progressi concreti dopo due strategie differenti:

1. registra il problema;
2. limita lo scope;
3. continua sulle parti non bloccate;
4. usa `PARTIALLY_COMPLETED` se il problema impedisce il completamento di un criterio obbligatorio.

---

# Fase 4: ricerca nel Marketplace Framer

Dopo aver analizzato il PRD, il design Stitch e il sito implementato, cerca nel Marketplace ufficiale di Framer i componenti gratuiti più utili al progetto.

## Requisito fondamentale

Ogni componente deve essere:

- presente nel Marketplace ufficiale di Framer;
- dichiarato esplicitamente gratuito;
- completamente gratuito;
- verificato sulla propria pagina individuale;
- utilizzabile senza un acquisto obbligatorio;
- pertinente al progetto.

La presenza in una categoria “Free” o in una pagina di elenco non è sufficiente.

Devi aprire la pagina individuale di ogni componente.

## Esclusioni obbligatorie

Escludi:

- trial;
- freemium;
- demo limitate;
- componenti con prezzo ambiguo;
- componenti con parti essenziali a pagamento;
- componenti che richiedono un piano premium obbligatorio;
- componenti che richiedono un servizio esterno obbligatorio a pagamento;
- template completi non pertinenti;
- componenti senza pagina individuale verificabile;
- risultati provenienti da siti non ufficiali;
- componenti non compatibili con la finalità del progetto;
- componenti la cui gratuità è dedotta ma non dichiarata.

Non considerare sufficiente:

- una descrizione in un motore di ricerca;
- uno snippet;
- un badge visibile soltanto nella pagina di elenco;
- una recensione;
- una dichiarazione di un sito terzo;
- un vecchio prezzo riportato altrove.

## Limiti della ricerca

Termina la ricerca quando:

- hai trovato 10 componenti completamente verificati;
- oppure hai esaminato i risultati pertinenti e raffinato la ricerca al massimo due volte senza trovare altri componenti validi.

Non continuare la ricerca indefinitamente.

Se trovi meno di 10 componenti verificati, restituisci soltanto quelli validi.

Non completare la lista con risultati dubbi.

## Informazioni da raccogliere

Per ogni componente raccogli:

1. posizione in classifica;
2. nome;
3. autore;
4. link diretto alla pagina ufficiale;
5. funzione;
6. motivo per cui è adatto al progetto;
7. pagina o sezione del sito in cui potrebbe essere utilizzato;
8. testo o indicazione visibile che dimostra che è gratuito;
9. data della verifica;
10. dipendenze;
11. prerequisiti;
12. limitazioni;
13. eventuali servizi esterni richiesti;
14. livello di utilità:
    - alto;
    - medio;
    - basso.

Ordina i risultati dal più utile al meno utile.

## File di output

Crea o aggiorna:

```text
docs/FRAMER_COMPONENTS.md
```

Il file deve includere:

- criteri usati per la selezione;
- data della ricerca;
- numero di risultati esaminati;
- numero di componenti verificati;
- tabella o sezioni con i componenti selezionati;
- motivazione dell’ordinamento;
- eventuali componenti esclusi e relativo motivo, quando utile;
- eventuali limiti della ricerca.

Inserisci chiaramente questa dichiarazione:

```text
Nessun componente Framer è stato installato, copiato o aggiunto al progetto.
```

Non modificare il codice o il design per adattarlo ai componenti trovati.

---

# Fase 5: validazione tecnica

Al termine dell’implementazione, esegui una validazione tecnica completa.

## 1. Controllo delle modifiche

Esegui:

```bash
git status
git diff
```

Verifica:

- file modificati;
- file aggiunti;
- file eliminati;
- modifiche non pertinenti;
- modifiche accidentali;
- lockfile modificati;
- configurazioni modificate;
- asset aggiunti;
- eventuali segreti esposti.

Rimuovi soltanto le modifiche accidentali introdotte durante la task.

Non eliminare modifiche preesistenti dell’utente.

## 2. Typecheck

Esegui il comando di typecheck definito dal progetto, se disponibile.

Se non esiste un comando dedicato, usa il controllo equivalente previsto dallo stack, purché non richieda modifiche globali.

## 3. Lint

Esegui il comando di lint definito dal progetto, se disponibile.

Non disabilitare regole per far passare il controllo senza correggere il problema.

## 4. Test

Esegui:

- test unitari pertinenti;
- test di integrazione pertinenti;
- test end-to-end disponibili;
- test specifici per i componenti modificati.

Non eseguire test non configurati inventando infrastrutture inutili.

## 5. Build

Esegui la build di produzione.

La build deve terminare senza errori introdotti dalle modifiche.

## 6. Avvio del progetto

Avvia il progetto usando il comando corretto.

Verifica:

- caricamento dell’applicazione;
- route principali;
- route modificate;
- assenza di crash;
- assenza di errori runtime;
- assenza di errori rilevanti nella console;
- assenza di richieste essenziali fallite.

## 7. Gestione degli errori

Se un controllo fallisce:

1. leggi l’errore completo;
2. individua il file o la causa;
3. determina se l’errore era preesistente;
4. correggi gli errori introdotti;
5. riesegui il controllo;
6. non dichiarare superato un controllo ancora fallito;
7. documenta gli errori preesistenti.

Per ogni errore preesistente registra:

- comando eseguito;
- codice di uscita;
- file coinvolto;
- messaggio rilevante;
- motivo per cui è considerato preesistente;
- impatto sulla task.

Non usare `COMPLETED_WITH_PREEXISTING_ERRORS` per errori introdotti dalle modifiche.

---

# Fase 6: validazione visiva

Usa il browser per confrontare il risultato implementato con il design Stitch.

## Viewport minimi

Verifica almeno:

- una viewport desktop;
- una viewport mobile.

Se il progetto indica breakpoint specifici, usa quelli.

Se utile, verifica anche una viewport tablet.

## Elementi da controllare

Controlla almeno:

- header;
- navigazione;
- logo;
- hero;
- call to action;
- sezioni principali;
- card;
- form;
- tabelle;
- immagini;
- icone;
- footer;
- menu mobile;
- modali;
- dropdown;
- tab;
- accordion;
- caroselli;
- elementi sticky;
- stati vuoti;
- stati di errore;
- stati di caricamento;
- stati di successo.

Verifica soltanto gli elementi effettivamente presenti.

## Aspetti visivi

Controlla:

- corrispondenza della struttura;
- gerarchia visiva;
- larghezze;
- altezze;
- allineamenti;
- griglie;
- margini;
- padding;
- spaziature;
- tipografia;
- dimensioni del testo;
- pesi;
- altezza delle righe;
- colori;
- gradienti;
- bordi;
- raggi;
- ombre;
- immagini;
- proporzioni;
- densità visiva;
- responsive layout;
- overflow orizzontale;
- elementi tagliati;
- sovrapposizioni;
- contenuti che escono dai contenitori;
- salti di layout;
- leggibilità.

## Interazioni

Controlla:

- hover;
- focus;
- active;
- menu mobile;
- navigazione;
- link;
- pulsanti;
- form;
- modali;
- dropdown;
- tab;
- accordion;
- chiusura con tastiera, quando applicabile;
- navigazione da tastiera;
- focus visibile.

## Correzione

Correggi i problemi visibili prima di concludere.

Dopo una correzione rilevante, riesegui almeno il controllo della pagina e della viewport interessata.

Non dichiarare una corrispondenza perfetta se rimangono differenze rilevanti.

Documenta in `docs/REDESIGN_STATUS.md`:

- differenze corrette;
- differenze residue;
- elementi non verificabili;
- motivi tecnici delle eventuali deviazioni.

---

# Criteri di successo

La task può essere dichiarata completata soltanto se tutti i criteri applicabili sono soddisfatti.

## Fonti e preparazione

1. Il design Stitch corretto è stato identificato con certezza.
2. L’identificativo del design è stato registrato.
3. Non è stato generato un nuovo design Stitch.
4. `docs/PRD.md` è stato letto e analizzato.
5. I requisiti del PRD sono stati associati alle parti del sito.
6. Le skill locali pertinenti sono state selezionate correttamente.
7. Le skill non pertinenti non sono state invocate inutilmente.

## Implementazione

8. Il redesign è stato implementato.
9. Il risultato segue il design Stitch.
10. I requisiti funzionali del PRD sono rispettati.
11. Le funzionalità esistenti richieste sono state preservate.
12. Le route necessarie funzionano.
13. Il sito è responsive.
14. Desktop e mobile sono stati considerati.
15. Gli stati UI applicabili sono stati implementati.
16. Non sono state introdotte dipendenze inutili.
17. Non sono state sovrascritte modifiche dell’utente.
18. Non sono stati modificati file estranei alla task.
19. Non sono stati aggiunti contenuti inventati non supportati dalle fonti.

## Qualità tecnica

20. Non ci sono errori runtime introdotti.
21. Il typecheck disponibile è stato eseguito e documentato.
22. Il lint disponibile è stato eseguito e documentato.
23. I test pertinenti disponibili sono stati eseguiti e documentati.
24. La build è stata eseguita e documentata.
25. Gli errori introdotti sono stati corretti.
26. Gli eventuali errori preesistenti sono stati documentati correttamente.

## Verifica visiva

27. Il risultato è stato controllato nel browser, se il browser è disponibile.
28. Sono state verificate almeno una viewport desktop e una mobile.
29. Le route modificate sono state controllate.
30. La console è stata controllata.
31. Le differenze residue rispetto a Stitch sono state documentate.
32. Non è stata dichiarata una corrispondenza perfetta in presenza di differenze rilevanti.

## Documentazione

33. `docs/REDESIGN_STATUS.md` è aggiornato.
34. Le milestone risultano aggiornate.
35. Le skill utilizzate sono indicate con la relativa motivazione.
36. I file modificati sono documentati.
37. Le validazioni eseguite sono documentate.
38. I problemi aperti sono documentati.

## Framer

39. `docs/FRAMER_COMPONENTS.md` è stato creato o aggiornato.
40. Contiene esclusivamente componenti verificati come completamente gratuiti.
41. Ogni componente ha un link diretto alla pagina ufficiale.
42. Ogni componente include una prova visibile della gratuità.
43. Ogni componente è stato verificato sulla propria pagina individuale.
44. Trial, freemium e prezzi ambigui sono stati esclusi.
45. Nessun componente Framer è stato installato.
46. Nessun componente Framer è stato copiato.
47. Nessun componente Framer è stato aggiunto al progetto.
48. Nessun acquisto o abbonamento è stato effettuato.

---

# Divieti

Non:

- inventare un design se Stitch non è disponibile;
- generare un nuovo design Stitch;
- rigenerare o modificare il design Stitch;
- usare un design ambiguo;
- scegliere automaticamente il primo design disponibile;
- dichiarare di aver letto file non letti;
- dichiarare di aver usato skill non usate;
- dichiarare di aver eseguito test non eseguiti;
- dichiarare superato un controllo fallito;
- dichiarare che un componente Framer è gratuito senza averne aperto la pagina;
- considerare gratuito un componente con prezzo ambiguo;
- usare fonti non ufficiali come prova della gratuità;
- installare componenti Framer;
- copiare componenti Framer;
- acquistare componenti o servizi;
- effettuare login o sottoscrizioni per la ricerca;
- modificare il sito per adattarlo ai componenti Framer;
- modificare file non necessari;
- cancellare file senza necessità;
- usare comandi Git distruttivi;
- sovrascrivere modifiche dell’utente;
- modificare configurazioni globali;
- riscrivere l’intero progetto quando è sufficiente intervenire localmente;
- eliminare funzionalità esistenti senza un requisito esplicito;
- aggiungere sezioni arbitrarie;
- aggiungere animazioni arbitrarie;
- aggiungere effetti decorativi non presenti nel design;
- inventare testi, dati, testimonianze, statistiche o clienti;
- introdurre dipendenze inutili;
- ignorare errori introdotti;
- proseguire con tentativi identici dopo due fallimenti;
- rimanere in esplorazione senza produrre progressi;
- fermarti dopo aver prodotto soltanto un piano;
- attendere la mia approvazione dopo i checkpoint;
- dichiarare `COMPLETED` se manca un criterio obbligatorio.

---

# Report finale

Al termine, restituisci un report strutturato con le sezioni seguenti.

## 1. Stato finale

Usa uno dei seguenti stati:

- `COMPLETED`
- `COMPLETED_WITH_PREEXISTING_ERRORS`
- `PARTIALLY_COMPLETED`
- uno dei codici `BLOCKED_*`

Non usare `COMPLETED` se manca anche uno solo dei criteri di successo obbligatori applicabili.

Usa `COMPLETED_WITH_PREEXISTING_ERRORS` soltanto se:

- il redesign è stato completato;
- tutti gli errori introdotti sono stati corretti;
- rimangono esclusivamente errori dimostrabilmente preesistenti;
- tali errori sono stati documentati.

Usa `PARTIALLY_COMPLETED` se:

- una parte del lavoro è stata completata;
- un limite non critico ha impedito uno o più criteri obbligatori;
- il lavoro completato è comunque utilizzabile;
- non si applica una condizione di arresto iniziale `BLOCKED_*`.

## 2. Design Stitch utilizzato

Indica:

- nome;
- ID;
- URL, se disponibile;
- criterio di selezione;
- elementi principali estratti.

## 3. Sintesi del PRD

Indica:

- obiettivo;
- requisiti principali;
- pagine coinvolte;
- vincoli rilevanti.

## 4. Modifiche implementate

Indica:

- pagine modificate;
- componenti modificati;
- componenti creati;
- componenti rimossi;
- funzionalità preservate;
- funzionalità aggiunte;
- miglioramenti responsive;
- miglioramenti di accessibilità.

## 5. Skill utilizzate

Per ogni skill indica:

- nome;
- motivo della selezione;
- fase in cui è stata usata;
- risultato ottenuto.

## 6. File principali modificati

Elenca:

- file modificati;
- file creati;
- file eliminati;
- motivazione delle modifiche principali.

## 7. Dipendenze

Indica:

- dipendenze aggiunte;
- dipendenze rimosse;
- motivazione;
- conferma dell’assenza di nuove dipendenze, se non ne sono state aggiunte.

## 8. Validazioni tecniche

Per ogni comando indica:

- comando;
- risultato;
- codice di uscita, se disponibile;
- errori rilevanti;
- correzioni effettuate.

Includi:

- typecheck;
- lint;
- test;
- build;
- avvio locale;
- smoke test delle route.

## 9. Validazioni browser

Indica:

- route controllate;
- viewport controllate;
- interazioni controllate;
- console;
- errori runtime;
- problemi visivi corretti.

## 10. Differenze rispetto a Stitch

Indica:

- differenze residue;
- motivo;
- impatto;
- eventuale lavoro successivo consigliato.

## 11. Errori preesistenti

Per ogni errore indica:

- comando;
- file;
- messaggio;
- prova che fosse preesistente;
- impatto.

## 12. Componenti Framer

Riporta l’elenco ordinato dei componenti verificati includendo:

- nome;
- autore;
- link;
- funzione;
- motivo della scelta;
- prova della gratuità;
- dipendenze;
- limitazioni;
- posizione suggerita nel sito.

Se sono stati trovati meno di 10 componenti validi, spiega perché.

## 13. Conferma Framer

Includi esattamente questa conferma:

```text
Nessun componente Framer è stato installato, copiato o aggiunto al progetto.
```

## 14. Problemi aperti

Indica:

- problemi non risolti;
- limiti incontrati;
- parti non verificabili;
- azioni eventualmente necessarie.

## 15. Riepilogo conclusivo

Concludi con:

- stato finale;
- risultato ottenuto;
- controlli superati;
- eventuali limitazioni residue.
