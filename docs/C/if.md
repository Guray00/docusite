# if

In C, l'istruzione if è utilizzata per eseguire un blocco di codice solo se una determinata condizione è vera.

Esempio:

```c
if (condizione) {
  // blocco di codice da eseguire se la condizione è vera
}
```

In questo esempio, il blocco di codice all'interno delle parentesi graffe verrà eseguito solo se la condizione specificata tra parentesi è vera. Ad esempio:

```c
int x = 5;
if (x > 3) {
  printf("x è maggiore di 3\n");
}
```

In questo caso, il codice all'interno del blocco if verrà eseguito poiché la variabile x è effettivamente maggiore di 3.

È anche possibile utilizzare l'istruzione else per eseguire un blocco di codice diverso se la condizione non è vera:

```c
int x = 5;
if (x > 3) {
  printf("x è maggiore di 3\n");
} else {
  printf("x è minore o uguale a 3\n");
}
```

In questo caso, il codice all'interno del blocco else non verrà eseguito poiché la variabile x è effettivamente maggiore di 3. Tuttavia, se la variabile x fosse stata minore o uguale a 3, il codice all'interno del blocco else sarebbe stato eseguito.

È inoltre possibile utilizzare più istruzioni if e else per creare una catena di condizioni:

```c
int x = 5;
if (x > 5) {
  printf("x è maggiore di 5\n");
} else if (x > 3) {
  printf("x è maggiore di 3 ma minore o uguale a 5\n");
} else {
  printf("x è minore o uguale a 3\n");
}
```

In questo caso, il codice all'interno del primo blocco if non verrà eseguito poiché la variabile x non è maggiore di 5. Tuttavia, il codice all'interno del secondo blocco else if verrà eseguito poiché la variabile x è effettivamente maggiore di 3 ma minore o uguale a 5.