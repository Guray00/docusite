# Ricerca degli zeri di una funzione

Trovare gli zeri di una funzione è un calcolo anch'esso complicato che richiede l'approssimazione delle soluzione per trovarne l'esito.

## Metodo della bisezione

Il **metodo di bisezione** è un algoritmo utilizzato per trovare gli zeri di una funzione in un determinato intervallo. L'idea di base del metodo è quella di dividere continuamente l'intervallo di ricerca in due parti uguali e di determinare in quale metà si trova lo zero.

:::danger
Per utilizzare tale metodo è necessario che:
- la funzione sia **continua**.
- gli estremi siano **discordi**, altrimenti non sarebbe possibile dire con certezza che esiste uno zero _(teorema degli zeri)_.
:::

Per utilizzare il metodo di bisezione, è necessario:

- specificare un intervallo iniziale (ad esempio $[a, b]$) in cui si ritiene che si trovi lo zero della funzione.
- Successivamente, si calcola il punto medio del intervallo ($c = (a+b)/2$).
- A questo punto, si valuta il segno della funzione nel punto medio ($c$) e nel punto iniziale ($a$). Se i segni sono diversi, significa che lo zero della funzione si trova nell'intervallo $[a,c]$, altrimenti si trova in $[c,b]$.

Il processo si può ripetere fino a quando il valore di $c$ non sia sufficientemente vicino allo zero desiderato, o una sua approssimazione.

Si può affermare che il metodo converge allo zero in quanto la formula usata per il calcolo del punto medio $\frac{(b-a)}{2^n}$ con $n$ tentativi che tende ha $+∞$ fa convergere la frazione a $0$.

### Algoritmo

Una versione estesa dell'algoritmo in pseudocodice è la seguente:

```c
var cx;

do {
	var cx = (sx + dx) / 2;

	if( f(sx) * f(cx) < 0)
		dx = cx;

	else {
		if (f(cx)*f(dx) < 0)
			sx = cx;
		
		else
			return cx;
	}
		
} while(dx - sx > precisione);
```
![Algortimo bisezione](../../build/img/calcolo_numerico/alg_bisez.png)
