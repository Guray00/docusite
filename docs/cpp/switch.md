# switch

Il costrutto switch è una struttura di controllo che viene utilizzata nei linguaggi di programmazione per eseguire uno specifico blocco di codice in base al valore di una variabile o di un'espressione.

La sintassi del costrutto switch in C++ è la seguente:

```cpp
switch (espressione) {
  case valore1:
    codice da eseguire se espressione == valore1
    break;
  case valore2:
    codice da eseguire se espressione == valore2
    break;
  ...
  default:
    codice da eseguire se nessun altro caso viene soddisfatto
}
```

La sezione `case` specifica un valore per il quale il codice nel blocco viene eseguito, mentre la sezione `default` viene eseguita se nessun altro caso viene soddisfatto.

Ecco un esempio di utilizzo del costrutto `switch` in C++:

```cpp
int x = 2;
switch (x) {
  case 1:
    cout << "x è 1" << endl;
    break;
  case 2:
    cout << "x è 2" << endl;
    break;
  default:
    cout << "x non è 1 né 2" << endl;
}
```

In questo caso, il codice nel secondo caso viene eseguito, stampando "x è 2".