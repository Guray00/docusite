# Ricorsione

Le funzioni ricorsive in C sono funzioni che si richiamano da sole, ovvero una funzione richiama se stessa all'interno del proprio corpo.

In pratica, il funzionamento è il seguente: la funzione esegue una determinata operazione su un input, dopodiché si richiama passando come input una versione modificata dell'input originale. Questa operazione si ripete finché non si raggiunge una condizione di terminazione, ovvero un caso base che impedisce alla funzione di richiamarsi ulteriormente.

Ogni funzione ricorsiva è composta da due componenti principali:

- **Caso base**: condizione che impedisce alla funzione di richiamarsi ulteriormente. Se non viene specificata, la funzione si richiamerà all'infinito.
- **Caso ricorsivo**: chiamata ricorsiva della funzione, che passa come input una versione modificata dell'input originale.

Per esempio, consideriamo la funzione fattoriale:

```c
int fattoriale(int n) {
    if (n == 0) {  // caso base
        return 1;
    } else {
        return n * fattoriale(n-1);  // chiamata ricorsiva
    }
}
```

In questo caso, se n è uguale a 0, la funzione ritorna 1, altrimenti ritorna n moltiplicato per il fattoriale di n-1, ovvero la stessa funzione chiamata con un input diverso. Questo processo si ripete finché non si raggiunge il caso base, ovvero n = 0.

Un altro esempio potrebbe essere la funzione Fibonacci:

```c
int fibonacci(int n) {
    if (n == 0 || n == 1) {  // casi base
        return n;
    }
	
	else {
        return fibonacci(n-1) + fibonacci(n-2);  // chiamate ricorsive
    }
}
```

In questo caso, se n è uguale a 0 o 1, la funzione ritorna direttamente n, altrimenti ritorna la somma dei due numeri di Fibonacci precedenti, ovvero la stessa funzione chiamata con n-1 e n-2. Anche qui, il processo si ripete finché non si raggiunge un caso base.

Tuttavia, è importante notare che le funzioni ricorsive possono portare a problemi di memoria se non gestite correttamente. Ogni volta che una funzione si richiama, viene creata una nuova istanza della funzione, che viene mantenuta in memoria fino alla fine della chiamata ricorsiva. Se la ricorsione è troppo profonda o se la funzione richiede molta memoria, si può arrivare a un esaurimento della memoria disponibile (stack overflow).

Quindi, è importante assicurarsi che la ricorsione termini in modo appropriato e che non ci siano chiamate ricorsive infinite o troppo profonde. Inoltre, in alcuni casi, le funzioni iterative possono essere più efficienti e meno rischiose delle funzioni ricorsive.
