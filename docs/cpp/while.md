# while

Il costrutto `while` è una struttura di controllo che viene utilizzata nei linguaggi di programmazione per eseguire un blocco di codice ripetutamente fino a quando una condizione specificata è vera.

La sintassi del costrutto `while` in C++ è la seguente:

```cpp
while (condizione) {
  codice da eseguire
}
```

La sezione di condizione viene controllata ad ogni iterazione del ciclo. Se la condizione è vera, il codice nel blocco viene eseguito. Se la condizione è falsa, il ciclo viene interrotto e il controllo passa alla linea di codice successiva.

Ecco un esempio di utilizzo del costrutto while in C++:

```cpp
int i = 0;
while (i < 10) {
  cout << i << endl;
  i++;
}
```

In questo caso, il ciclo viene eseguito 10 volte, stampando i numeri da 0 a 9.
