---
sidebar_position: 7
---

# SAT

Il problema della soddisfacibilità booleana è il problema della decisione che, data una formula in logica booleana, determina se esiste un insieme di variabili tali da rendere l'esito della formula vera.

Questo problema è molto importante nella teoria della complessità. È stato portato alla luce dal teorema di Cook, che è alla base della teoria della NP-completezza e del problema P = NP.


## Esempi

Alcuni esempi per la formula:

- `X and Y`, sia `X` che `Y` devono essere vere
- `X or Y`, basta che sia `true` una delle due variabili
- `X and not X`, non può essere vero
- `X or not X`, è sempre vero
