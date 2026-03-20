# json-ld.org – Documentazione, Specifiche e Playground JSON-LD

## Introduzione

Questo repository contiene un fork del codice sorgente del sito ufficiale dedicato a JSON‑LD opportuamente adattato per le esigenze di <https://schema.gov.it>.

JSON-LD è un formato basato su JSON progettato per rappresentare Linked Data in modo semplice, interoperabile e facilmente integrabile in applicazioni web, API e sistemi distribuiti.  
Il progetto include documentazione, esempi, strumenti interattivi e il Playground, pensato per sperimentare e validare JSON‑LD in tempo reale.

---

## Cosa fa questo repository

Il repository fornisce un Playground consente di:
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

Questa integrazione elimina passaggi manuali e necessità di copia-incolla,
riduce il rischio di errori e rende più immediata la verifica del comportamento
dei data model e dei vocabolari direttamente nel Playground.

---

### 2. Supporto avanzato per YAML/JSON nel Playground

Sono state introdotte funzionalità che permettono di lavorare comodamente con entrambi i formati:

- **selettore YAML/JSON** nelle opzioni dell'app  
- propagazione del flag di formato nei contenuti condivisi tramite URL fragment  
- parsing aggiornato per rispettare il formato indicato  
- supporto completo dell’editor per YAML (linting, syntax highlighting, suggerimenti)  
- aggiornamento del pulsante **Copy as URL** per generare link compatibili con entrambi i formati  

Questa estensione garantisce una user experience coerente e flessibile,
permettendo di condividere e recuperare contenuti senza perdita di formato o funzionalità.

---

### 3. Miglioramento del layout per la visualizzazione dei risultati del Framing

Il layout del Playground è stato riprogettato per evitare continui scroll verticali quando si lavora con operazioni di framing.

Il nuovo design offre:

- pannelli "Frame" e "Frame Result" affiancati  
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

## Utilizzo del Playground
Il Playground è diviso in tre sezioni principali:
1. **Input**: dove si inserisce il JSON‑LD da testare.
2. **Framing**: dove si definisce un elemento che rimappa e/o filtra le proprietà dell'input e produce un output.
3. **Output**: dove si visualizzano i risultati delle operazioni eseguite.

Esempio di utilizzo:
[Esempio 1](https://par-tec.github.io/json-ld.org/future/#json-ld=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%2C%22parent%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3Abroader%22%7D%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22url%22%3A%22%40id%22%2C%22vocab%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3AinScheme%22%7D%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%7D%2C%22%40graph%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22label%22%3A%22Produzioni+vegetali+e+animali%2C+caccia+e+servizi+connessi%22%2C%22label_de%22%3A%22Landwirtschaft%2C+Jagd+und+damit+verbundene+T%C3%A4tigkeiten%22%2C%22label_en%22%3A%22Crop+and+animal+production%2C+hunting+and+related+service+activities%22%2C%22level%22%3A%222%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22url%22%3A%22A%22%7D%5D%2C%22url%22%3A%2201%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201.2%22%2C%22label%22%3A%22Coltivazione+di+colture+agricole+permanenti%22%2C%22label_de%22%3A%22Anbau+mehrj%C3%A4hriger+Pflanzen%22%2C%22label_en%22%3A%22Growing+of+perennial+crops%22%2C%22level%22%3A%223%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22url%22%3A%2201%22%7D%5D%2C%22url%22%3A%22012%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22label%22%3A%22AGRICOLTURA%2C+SILVICOLTURA+E+PESCA%22%2C%22label_de%22%3A%22LAND-+UND+FORSTWIRTSCHAFT%2C+FISCHEREI%22%2C%22label_en%22%3A%22AGRICULTURE%2C+FORESTRY+AND+FISHING%22%2C%22level%22%3A%221%22%2C%22parent%22%3A%5B%5D%2C%22url%22%3A%22A%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%5D%7D&frame=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22url%22%3A%22%40id%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22parent%22%3A%7B%22%40id%22%3A%22skos%3Abroader%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22vocab%22%3A%7B%22%40id%22%3A%22skos%3AinScheme%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%7D%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%2C%22%40omitDefault%22%3Atrue%2C%22%40requireAll%22%3Atrue%2C%22%40type%22%3A%5B%22covapit%3APrivateOrgActivityType%22%5D%2C%22url%22%3A%7B%7D%2C%22id%22%3A%7B%7D%2C%22label_de%22%3A%7B%7D%2C%22label_en%22%3A%7B%7D%2C%22label_it%22%3A%7B%7D%2C%22label%22%3A%7B%22%40language%22%3A%5B%22it%22%2C%22en%22%2C%22de%22%5D%2C%22%40value%22%3A%7B%7D%7D%2C%22level%22%3A%7B%7D%2C%22vocab%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%22%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%7D%5D%2C%22parent%22%3A%5B%7B%22url%22%3A%7B%7D%2C%22id%22%3A%7B%7D%2C%22%40embed%22%3A%22%40always%22%2C%22%40explicit%22%3Atrue%2C%22%40default%22%3A%22%40null%22%2C%22%40requireAll%22%3Afalse%7D%5D%7D&startTab=tab-framed&formatMode=yaml)

rimuovendo dal frame i riferimenti al language "de" è possibile visualizzare come l'output venga filtrato per mostrare solo le label in italiano e inglese:
[Esempio 2](https://par-tec.github.io/json-ld.org/future/#json-ld=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%2C%22parent%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3Abroader%22%7D%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22url%22%3A%22%40id%22%2C%22vocab%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3AinScheme%22%7D%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%7D%2C%22%40graph%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22label%22%3A%22Produzioni+vegetali+e+animali%2C+caccia+e+servizi+connessi%22%2C%22label_de%22%3A%22Landwirtschaft%2C+Jagd+und+damit+verbundene+T%C3%A4tigkeiten%22%2C%22label_en%22%3A%22Crop+and+animal+production%2C+hunting+and+related+service+activities%22%2C%22level%22%3A%222%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22url%22%3A%22A%22%7D%5D%2C%22url%22%3A%2201%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201.2%22%2C%22label%22%3A%22Coltivazione+di+colture+agricole+permanenti%22%2C%22label_de%22%3A%22Anbau+mehrj%C3%A4hriger+Pflanzen%22%2C%22label_en%22%3A%22Growing+of+perennial+crops%22%2C%22level%22%3A%223%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22url%22%3A%2201%22%7D%5D%2C%22url%22%3A%22012%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22label%22%3A%22AGRICOLTURA%2C+SILVICOLTURA+E+PESCA%22%2C%22label_de%22%3A%22LAND-+UND+FORSTWIRTSCHAFT%2C+FISCHEREI%22%2C%22label_en%22%3A%22AGRICULTURE%2C+FORESTRY+AND+FISHING%22%2C%22level%22%3A%221%22%2C%22parent%22%3A%5B%5D%2C%22url%22%3A%22A%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%5D%7D&frame=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22url%22%3A%22%40id%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22parent%22%3A%7B%22%40id%22%3A%22skos%3Abroader%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22vocab%22%3A%7B%22%40id%22%3A%22skos%3AinScheme%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%7D%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%2C%22%40omitDefault%22%3Atrue%2C%22%40requireAll%22%3Atrue%2C%22%40type%22%3A%5B%22covapit%3APrivateOrgActivityType%22%5D%2C%22url%22%3A%7B%7D%2C%22id%22%3A%7B%7D%2C%22label_de%22%3A%7B%7D%2C%22label_en%22%3A%7B%7D%2C%22label_it%22%3A%7B%7D%2C%22label%22%3A%7B%22%40language%22%3A%5B%22it%22%2C%22en%22%5D%2C%22%40value%22%3A%7B%7D%7D%2C%22level%22%3A%7B%7D%2C%22vocab%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%22%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%7D%5D%2C%22parent%22%3A%5B%7B%22url%22%3A%7B%7D%2C%22id%22%3A%7B%7D%2C%22%40embed%22%3A%22%40always%22%2C%22%40explicit%22%3Atrue%2C%22%40default%22%3A%22%40null%22%2C%22%40requireAll%22%3Afalse%7D%5D%7D&startTab=tab-framed&formatMode=yaml)

rimuovento parent nessun riferimento tra parent e child, utile se vuoi un output flat dove la gerarchia non interessa:
[Esempio 3](https://par-tec.github.io/json-ld.org/future/#json-ld=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%2C%22parent%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3Abroader%22%7D%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22url%22%3A%22%40id%22%2C%22vocab%22%3A%7B%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%2C%22%40id%22%3A%22skos%3AinScheme%22%7D%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%7D%2C%22%40graph%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22label%22%3A%22Produzioni+vegetali+e+animali%2C+caccia+e+servizi+connessi%22%2C%22label_de%22%3A%22Landwirtschaft%2C+Jagd+und+damit+verbundene+T%C3%A4tigkeiten%22%2C%22label_en%22%3A%22Crop+and+animal+production%2C+hunting+and+related+service+activities%22%2C%22level%22%3A%222%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22url%22%3A%22A%22%7D%5D%2C%22url%22%3A%2201%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201.2%22%2C%22label%22%3A%22Coltivazione+di+colture+agricole+permanenti%22%2C%22label_de%22%3A%22Anbau+mehrj%C3%A4hriger+Pflanzen%22%2C%22label_en%22%3A%22Growing+of+perennial+crops%22%2C%22level%22%3A%223%22%2C%22parent%22%3A%5B%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%2201%22%2C%22url%22%3A%2201%22%7D%5D%2C%22url%22%3A%22012%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%2C%7B%22%40type%22%3A%5B%22skos%3AConcept%22%2C%22covapit%3APrivateOrgActivityType%22%5D%2C%22id%22%3A%22A%22%2C%22label%22%3A%22AGRICOLTURA%2C+SILVICOLTURA+E+PESCA%22%2C%22label_de%22%3A%22LAND-+UND+FORSTWIRTSCHAFT%2C+FISCHEREI%22%2C%22label_en%22%3A%22AGRICULTURE%2C+FORESTRY+AND+FISHING%22%2C%22level%22%3A%221%22%2C%22parent%22%3A%5B%5D%2C%22url%22%3A%22A%22%2C%22vocab%22%3A%5B%7B%22url%22%3A%22..%2Fateco-2025%22%7D%5D%7D%5D%7D&frame=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%2F%22%2C%22%40vocab%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fwork-accident%2Fcontrolled-vocabulary%2Fadm_serv%2F%22%2C%22dct%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22xkos%22%3A%22http%3A%2F%2Frdf-vocabulary.ddialliance.org%2Fxkos%23%22%2C%22clvapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCLV%2F%22%2C%22xsd%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%22%2C%22covapit%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fonto%2FCOV%2F%22%2C%22url%22%3A%22%40id%22%2C%22id%22%3A%7B%22%40id%22%3A%22skos%3Anotation%22%7D%2C%22label%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_it%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22it%22%7D%2C%22label_en%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22en%22%7D%2C%22label_de%22%3A%7B%22%40id%22%3A%22skos%3AprefLabel%22%2C%22%40language%22%3A%22de%22%7D%2C%22parent%22%3A%7B%22%40id%22%3A%22skos%3Abroader%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22vocab%22%3A%7B%22%40id%22%3A%22skos%3AinScheme%22%2C%22%40container%22%3A%22%40set%22%2C%22%40context%22%3A%7B%22url%22%3A%22%40id%22%7D%7D%2C%22level%22%3A%7B%22%40id%22%3A%22clvapit%3AhasRankOrder%22%2C%22%40type%22%3A%22xsd%3Aint%22%7D%7D%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%2C%22%40omitDefault%22%3Atrue%2C%22%40requireAll%22%3Atrue%2C%22%40type%22%3A%5B%22covapit%3APrivateOrgActivityType%22%5D%2C%22url%22%3A%7B%7D%2C%22id%22%3A%7B%7D%2C%22label_de%22%3A%7B%7D%2C%22label_en%22%3A%7B%7D%2C%22label_it%22%3A%7B%7D%2C%22label%22%3A%7B%22%40language%22%3A%5B%22it%22%2C%22en%22%2C%22de%22%5D%2C%22%40value%22%3A%7B%7D%7D%2C%22level%22%3A%7B%7D%2C%22vocab%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Fw3id.org%2Fitalia%2Fstat%2Fcontrolled-vocabulary%2Feconomy%2Fateco-2025%22%2C%22%40explicit%22%3Atrue%2C%22%40embed%22%3A%22%40never%22%7D%5D%7D&startTab=tab-framed&formatMode=yaml)

---

## Conclusione

Il fork introduce un insieme coordinato di miglioramenti che potenziano l’esperienza d’uso, espandono le funzionalità del Playground e garantiscono maggiore coerenza visiva e operativa.  
Il risultato è uno strumento più accessibile e adatto a casi d’uso avanzati.
