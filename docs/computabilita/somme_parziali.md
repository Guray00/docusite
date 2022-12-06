# Problema delle somme parziali

Il **problema delle somme parziali** è un problema di ottimizzazione che si riferisce alla possibilità di trovare una sottosequenza di una sequenza di numeri interi in modo tale che la somma dei numeri in questa sottosequenza sia massimale (o un numero scelto). Ad esempio, consideriamo la seguente sequenza di numeri:

```text
4, -5, 8, 11, -3, 7, -2, 3, -20, 9
```

Una possibile soluzione al problema delle somme parziali per questa sequenza di numeri sarebbe la sottosequenza:

```text
8, 11, -3, 7, -2, 3, 9
```

La sequenza di sopra massimizza il risultato, che ha una somma parziale di `25`.

Il problema delle somme parziali può essere risolto in modo efficiente utilizzando un algoritmo di **programmazione dinamica**. Tuttavia, poiché il problema delle somme parziali è un problema NP-completo, non esiste un algoritmo noto per risolverlo in tempo polinomiale per una sequenza di numeri di lunghezza arbitraria.
