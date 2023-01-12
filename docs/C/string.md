# stringhe

In C, una stringa è una sequenza di caratteri che può essere manipolata come un'unica entità.

Esempio:

```c
char nome[50] = "Mario Rossi";
```

In questo esempio, abbiamo dichiarato una variabile di tipo char chiamata nome che può contenere una stringa di al massimo 50 caratteri. Abbiamo quindi assegnato alla variabile nome la stringa "Mario Rossi".

Possiamo utilizzare le funzioni della libreria string.h per manipolare le stringhe in C. Ad esempio, la funzione strlen può essere utilizzata per determinare la lunghezza di una stringa:

```c
int lunghezza = strlen(nome); // lunghezza sarà uguale a 11
```

In questo caso, abbiamo utilizzato la funzione strlen per determinare la lunghezza della stringa contenuta nella variabile nome. La variabile lunghezza conterrà quindi il valore 11, poiché la stringa "Mario Rossi" è composta da 11 caratteri.

È anche possibile utilizzare la funzione strcpy per copiare una stringa in un'altra variabile:

```c
char nome_copia[50];
strcpy(nome_copia, nome); // nome_copia conterrà "Mario Rossi"
```
In questo caso, abbiamo utilizzato la funzione strcpy per copiare la stringa contenuta nella variabile nome nella variabile nome_copia. La variabile nome_copia conterrà quindi la stringa "Mario Rossi".

È inoltre possibile utilizzare la funzione strcat per concatenare due stringhe:

```c
char cognome[50] = "Bianchi";
strcat(nome, cognome); // nome conterrà "Mario Rossi Bianchi"
```

In questo caso, abbiamo utilizzato la funzione strcat per concatenare la stringa contenuta nella variabile cognome alla fine della stringa contenuta nella variabile nome. La variabile nome conterrà quindi la stringa "Mario Rossi Bianchi".

Le stringhe sono un tipo di dati molto utile in C poiché permettono di manipolare facilmente sequenze di caratteri. Tuttavia, è importante ricordare di allocare sempre abbastanza spazio nella memoria per le stringhe utilizzate nel nostro programma per evitare errori o crash.