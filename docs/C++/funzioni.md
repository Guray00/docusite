# Funzioni

In C++, una funzione è un blocco di codice che può essere riutilizzato più volte in un programma. Una funzione può accettare input in forma di argomenti e può restituire un valore di output.

Per dichiarare una funzione in C++, si utilizza la sintassi seguente:

```cpp
tipoRestituito nomeFunzione(listaArgomenti) {
    // codice della funzione
}
```

Ad esempio, per dichiarare una funzione di nome moltiplica che accetta due numeri interi e restituisce il loro prodotto, potremmo scrivere:

```cpp
int moltiplica(int x, int y) {
    return x * y;
}
```

Per utilizzare una funzione, si chiama la funzione specificando il nome e gli argomenti appropriati. Ad esempio, per utilizzare la funzione moltiplica per moltiplicare i numeri 3 e 4, potremmo scrivere:

```cpp
int risultato = moltiplica(3, 4);
```

In questo caso, la variabile risultato conterrà il valore 12.