# SAT

Il problema della soddisfacibilità booleana è il problema della decisione che, data una formula in logica booleana, determina se esiste un insieme di variabili tali da rendere l'esito della formula vera.

Questo problema è molto importante nella teoria della complessità. È stato portato alla luce dal teorema di Cook, che è alla base della teoria della NP-completezza e del problema P = NP.

Il problema SAT è un problema NP-completo, il che significa che può essere risolto in modo efficiente (anche se non sempre perfetto) solo se si utilizzano algoritmi appartenenti alla classe NP. Inoltre, poiché il problema SAT è NP-completo, la sua soluzione può essere utilizzata per risolvere un ampio numero di altri problemi di ottimizzazione in modo efficiente.

## Esempi

Esempi di problemi SAT includono:

- Determinare se una serie di clausole logiche può essere soddisfatta utilizzando un insieme di variabili booleane
- Determinare se un grafo può essere colorato con un numero limitato di colori in modo tale che nessun vertice adiacente abbia lo stesso colore
- Determinare se un insieme di numeri interi può essere suddiviso in sottoinsiemi che siano tutti la somma di uno stesso numero (ad esempio, suddividere un insieme di numeri interi in sottoinsiemi tutti la somma di 10)

Mentre una formulazione più rigorosa di quali combinazioni rendono vere le seguenti espressioni:

- `X and Y`, sia `X` che `Y` devono essere vere
- `X or Y`, basta che sia `true` una delle due variabili
- `X and not X`, non può essere vero
- `X or not X`, è sempre vero

