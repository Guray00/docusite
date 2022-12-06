# Problema dello zaino

Il **problema dello zaino**, o in inglese _Knapsack problem_, è un problema di _ottimizzazione combinatoria_ che si pone il seguente problema: 

>data una lista di oggetti, ognuno con un certo valore e un certo peso, e una capacità massima di peso, trovare la combinazione di oggetti che massimizza il valore senza superare la capacità massima di peso.

Questo problema è detto np-completo, in quanto:

- non è risolvibile in tempo polinomiale
- è possibile trovare una soluzione ottima in tempo esponenziale
- dato un input, è possibile verificarlo in tempo polinomiale

Il tempo di trovare la risposta è pari a `O(2^n)`, dove `n` è il numero di oggetti, ovvero quello di valutare tutti i sottoinsiemi.

Il problema dello zaino può essere risolto in modo efficiente utilizzando un algoritmo di **programmazione dinamica**. Tuttavia, poiché il problema dello zaino è un problema **NP-completo**, non esiste un algoritmo noto per risolverlo in tempo polinomiale per un numero arbitrario di oggetti e di capacità dello zaino.

## Esempio

Ad esempio, immaginiamo di avere a disposizione uno zaino con una capacità di _20 chilogrammi_ e di dover scegliere tra i seguenti oggetti:

| oggetto              | peso | valore   |
|----------------------|------|----------|
| Libro                | 1kg  | 10 euro  |
| Lampada              | 3kg  | 20 euro  |
| Computer             | 5kg  | 100 euro |
| Materasso gonfiabile | 8kg  | 40 euro  |


Una possibile soluzione al problema dello zaino per questa situazione sarebbe scegliere di inserire nel nostro zaino il libro, la lampada e il computer portatile, poiché questi oggetti hanno un valore totale di `130` euro e un peso totale di `9 kg`, che è inferiore alla capacità massima dello zaino.
