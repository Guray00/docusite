---
sidebar_position: 6
---

# Problema del commesso viaggiatore

Il **problema del commesso viaggiatore**, o dall'inglese **TSP** _(Traveling Salesman Problem)_ è il seguente: dato un insieme di città, e note le distanze tra ciascuna coppia di esse, trovare il tragitto di minima percorrenza che un commesso viaggiatore deve seguire per visitare tutte le città una ed una sola volta e ritornare alla città di partenza.

Non esistono algoritmi efficienti per la risoluzione del TSP, l'unico metodo di risoluzione è rappresentato dall'**enumerazione totale**, ovvero nell'elaborazione di tutti i possibili cammini sul grafo per la successiva scelta di quello migliore. Per tale motivo la versione decisionale del problema è **np-completo**.

Il problema del commesso viaggiatore può essere risolto in modo efficiente utilizzando un algoritmo di **programmazione dinamica** o un algoritmo di **ricerca esaustiva**, come l'algoritmo di **Branch and Bound**. Tuttavia, poiché il problema del commesso viaggiatore è un problema NP-completo, non esiste un algoritmo noto per risolverlo in tempo polinomiale per un numero arbitrario di città da visitare.

## Esempio

Immaginiamo che un commesso viaggiatore debba visitare le seguenti città:

- New York
- Chicago
- Los Angeles
- Miami
- Dallas

e che la distanza tra ogni coppia di città sia la seguente:

| Città       | New York | Chicago | Los Angeles | Miami | Dallas |
|-------------|----------|---------|-------------|-------|--------|
| New York    | 0        | 1,000   | 2,000       | 500   | 1,200  |
| Chicago     | 1,000    | 0       | 1,800       | 600   | 1,400  |
| Los Angeles | 2,000    | 1,800   | 0           | 1,500 | 1,600  |
| Miami       | 500      | 600     | 1,500       | 0     | 1,100  |
| Dallas      | 1,200    | 1,400   | 1,600       | 1,100 | 0      |

In questo caso, una possibile soluzione al problema del commesso viaggiatore sarebbe il seguente percorso:

**New York -> Chicago -> Los Angeles -> Miami -> Dallas -> New York**

che ha una distanza totale di 6,300 km.


--

## Bibliografia

- [Problema del commesso viaggiatore](https://it.wikipedia.org/wiki/Problema_del_commesso_viaggiatore#Definizione)