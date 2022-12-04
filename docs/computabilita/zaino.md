---
sidebar_position: 5
---

# Problema dello zaino

Il **problema dello zaino**, o in inglese _Knapsack problem_, è un problema di _ottimizzazione combinatoria_ che si pone il seguente problema: 

>data una lista di oggetti, ognuno con un certo valore e un certo peso, e una capacità massima di peso, trovare la combinazione di oggetti che massimizza il valore senza superare la capacità massima di peso.

Questo problema è detto np-completo, in quanto:

- non è risolvibile in tempo polinomiale
- è possibile trovare una soluzione ottima in tempo esponenziale
- dato un input, è possibile verificarlo in tempo polinomiale

Il tempo di trovare la risposta è pari a `O(2^n)`, dove `n` è il numero di oggetti, ovvero quello di valutare tutti i sottoinsiemi.

## Esempio di problema dello zaino

Dato uno zaino con capacità massima _10kg_, e una lista di oggetti con peso e valore:

| oggetto  | peso  | valore |
|----------|-------|--------|
| Computer | 2kg   | 300€   |
| Quaderni | 3kg   | 8€     |
| Merenda  | 0.5kg | 2€     |
| Tablet   | 1kg   | 225€   |
| Libri    | 5kg   | 70€    |

Qual è la combinazione di oggetti che massimizza il valore senza superare la capacità massima di peso? Per trovare la risposta sarebbe necessario verificare tutti i sottoinsiemi di oggetti, ma questo è impossibile in tempo polinomiale.
