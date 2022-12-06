# Problema dell'arresto

Nella teoria della computabilità, il **problema dell'arresto** (in inglese _halting problem_) si pone il problema di determinare, dato un _programma_ e un _input_, se questo terminerà in un tempo finito o continuerà per sempre. E' stato Alan Turing, nel 1936, a dimostrare che non è possibile avere un algoritmo generale per risolvere questo problema.

## Dimostrazione

Si supponga per assurdo che esista un algoritmo, che, preso in ingresso un qualsiasi algoritmo `A` avente un input `I` ed è in grado di stabilire se a termina in tempo finito (restituendo `true`) o se non termina (restituendo `false`).

```pseudo
// halts() restituisce true se il suo input termina, false altrimenti
boolean halts(programma, input):
	if(programma termina):
		return true
	else:
		return false

// algoritmo P1
boolean P1(a, d):
    return halts(a(d));
```

Visto che per `P1` sia il parametro `A` che il parametro `I` sono solo delle sequenze di simboli _(non conoscendo differenza tra programmi e dati)_, possiamo richiamare `P1` fornendo `A` sia come algoritmo che come input: `P1(A, A)`. Prendiamo ora un'altra funzione `P2` a cui viene passato `A` come argomento e tale che:

- se `P1(A, A)` non termina, restituisce `true`
- se `P1(A, A)` termina, prosegue all'infinito in quanto esegue `while(true);`

```pseudo
boolean P2(A):
  // se P1 termina, prosegue all'infinito
  if P1(A,A) while(true);

  // se non termina, restituisce true
  else
	return true;
```

Se passiamo a `P2` come parametro il risultato stesso di `P2`, dunque `P2(P2)`, ricadiamo nei seguenti casi:

- se `P2` termina, `P2(P2)` non termina perché entra nel `while(true);`
- se `P2` non termina, `P2(P2)` termina perché entra nel `else`

Ricadiamo allora in un assurdo, perché per avere come risultato `true` è necessario che `P2` non termini, ma allo stesso tempo se sta fornendo un risultato è terminato!

:::note
**Nota:** Un algoritmo per assurdo ha una logica simile alla frase _"io mento"_, in quanto si basa sul presupposto che se l'affermazione è vera, per assurdo, è anche falsa.
:::

:::note
**Nota**: Per un computer non è possibile stabilire la differenza tra un dato e un algoritmo. Quando eseguiamo i programmi non si fa altro che cercare di "eseguire" dei dati, ma non sono intrinsecamente diversi.
:::

