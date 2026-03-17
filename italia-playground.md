# json-ld.org – Documentazione, Specifiche e Playground JSON-LD

## Introduzione

Il repository **json-ld.org** contiene il codice sorgente del sito ufficiale dedicato a JSON‑LD, un formato basato su JSON progettato per rappresentare Linked Data in modo semplice, interoperabile e facilmente integrabile in applicazioni web, API e sistemi distribuiti.  
Il progetto include documentazione, esempi, strumenti interattivi e il Playground, pensato per sperimentare e validare JSON‑LD in tempo reale.

---

## Cosa fa questo repository

Il repository fornisce:

### Playground JSON‑LD

Il Playground consente di:
- scrivere ed eseguire JSON‑LD  
- applicare contesti  
- compattare ed espandere documenti  
- eseguire operazioni di framing  
- validare i dati  
- visualizzare trasformazioni in tempo reale

---

## A cosa serve

Il repository ha l’obiettivo di:

- Supportare l’adozione di JSON‑LD come tecnologia standard del Web Semantico.  
- Fornire uno spazio ufficiale per sperimentare, testare e comprendere le funzionalità di JSON‑LD.  
- Offrire strumenti pronti all’uso per sviluppatori, architetti dei dati e integratori.  
- Promuovere interoperabilità, modellazione semantica e condivisione strutturata delle informazioni.

---

## Modifiche effettuate

Questa sezione descrive le personalizzazioni applicate in questo fork
rispetto a <https://json-ld.org/> per migliorare usabilità, coerenza grafica e funzionalità del Playground.

---

### 1. Integrazione avanzata con la Schema Editor UI

È stata introdotta una funzionalità che collega direttamente la Schema Editor UI al Playground JSON-LD, semplificando il flusso di lavoro tra definizione dello schema e test pratico.

In particolare:

- lo Schema Editor UI permette di definire documenti OpenAPI utilizzando la sintassi JSON-LD.
- è stato aggiunto un pulsante di redirect che apre automaticamente il contenuto corrente nel Playground, pronto per essere testato.
- il Playground riconosce il contenuto e lo collega allo schema di origine, consentendo un passaggio fluido tra definizione teorica e sperimentazione.

Questa integrazione elimina passaggi manuali e copie incollate, riduce il rischio di errori e rende più immediata la verifica del comportamento dei modelli direttamente nel Playground.

---

### 2. Supporto avanzato per YAML/JSON nel Playground

Sono state introdotte funzionalità che permettono di lavorare comodamente con entrambi i formati:

- **selettore YAML/JSON** nelle opzioni dell'app  
- propagazione del flag di formato nei contenuti condivisi tramite URL fragment  
- parsing aggiornato per rispettare il formato indicato  
- supporto completo dell’editor per YAML (linting, syntax highlighting, suggerimenti)  
- aggiornamento del pulsante **Copy as URL** per generare link compatibili con entrambi i formati  

Questa estensione garantisce un’esperienza d’uso coerente e flessibile, permettendo di condividere e recuperare contenuti senza perdita di formato o funzionalità.

---

### 3. Miglioramento del layout per la visualizzazione dei risultati del Framing

Il layout del Playground è stato riprogettato per evitare continui scroll verticali quando si lavora con operazioni di framing.

Il nuovo design offre:

- pannelli “Frame” e “Frame Result” affiancati  
- uso più efficace dello spazio orizzontale  
- maggiore immediatezza nel confronto tra input e output  
- riduzione delle interruzioni nel flusso di lavoro  

Il risultato è una visualizzazione più comoda e produttiva, che facilita la comprensione delle trasformazioni applicate al dataset.

---

### 4. Personalizzazioni UI/UX – Stile Bootstrap Italia

È stato introdotto un sistema di skin che permette di applicare temi grafici senza ricostruire l’applicazione.  
La skin principale utilizza il tema **Bootstrap Italia**, offrendo:

- coerenza estetica con le linee guida istituzionali  
- tipografia e componenti UI uniformati  
- una palette moderno‑istituzionale  
- migliore leggibilità e accessibilità  
- architettura del layout ripensata per favorire personalizzazioni future  

Questa modifica rende l’editor più flessibile, moderno e adattabile a contesti che richiedono linee guida grafiche specifiche.

---

## Conclusione

Il fork introduce un insieme coordinato di miglioramenti che potenziano l’esperienza d’uso, espandono le funzionalità del Playground e garantiscono maggiore coerenza visiva e operativa.  
Il risultato è uno strumento più accessibile e adatto a casi d’uso avanzati.
