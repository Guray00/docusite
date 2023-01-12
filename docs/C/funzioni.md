# funzioni

In C, una funzione è una porzione di codice che viene eseguita in risposta a una determinata richiesta. Le funzioni sono utilizzate per suddividere il codice in blocchi riutilizzabili che possono essere richiamati da altre parti del programma.

Per dichiarare una funzione in C, devi specificare il tipo di dati del valore restituito dalla funzione, seguito dal nome della funzione e dai suoi argomenti tra parentesi:

```c
int somma(int x, int y) {
    // Codice della funzione
    return x + y;
}
```

In questo esempio, la funzione somma riceve due argomenti di tipo int (x e y) e restituisce un valore di tipo int che rappresenta la somma di x e y.

Per richiamare una funzione in C, devi semplicemente usare il suo nome seguito dai suoi argomenti tra parentesi:

```c
int main() {
    int a = 5, b = 7;
    int risultato = somma(a, b); // Richiama la funzione somma
    printf("La somma di %d e %d è %d\n", a, b, risultato);
    return 0;
}
```

Questo codice stamperà:

```text
La somma di 5 e 7 è 12
```

Come puoi vedere, la funzione somma viene dichiarata all'inizio del codice, specificando il tipo di dati del valore restituito (int) e i suoi argomenti (due interi chiamati x e y). Il codice all'interno delle parentesi graffe {} rappresenta il corpo della funzione, che viene eseguito quando la funzione viene richiamata.

Nel main(), la funzione somma viene richiamata passando come argomenti i valori di a e b. La funzione esegue il suo codice, che in questo caso consiste nella somma di x e y e nella restituzione del risultato, che viene assegnato alla variabile risultato. Quindi, il valore di risultato viene stampato a schermo.