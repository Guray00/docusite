# switch

In C, l'istruzione switch è utilizzata per eseguire un blocco di codice diverso in base al valore di una variabile.

Esempio:

```c
int x = 2;
switch (x) {
  case 1:
    // blocco di codice da eseguire se x è uguale a 1
    break;
  case 2:
    // blocco di codice da eseguire se x è uguale a 2
    break;
  default:
    // blocco di codice da eseguire se x non è uguale a nessuno dei valori specificati nei casi precedenti
    break;
}
```

In questo esempio, il blocco di codice all'interno del caso case 2 verrà eseguito poiché la variabile x è effettivamente uguale a 2. È importante notare che ogni caso deve terminare con l'istruzione break per interrompere l'esecuzione del codice e passare al codice successivo dopo l'istruzione switch. Inoltre, il blocco default viene eseguito se nessun altro caso è vero.

È anche possibile utilizzare l'istruzione switch per confrontare stringhe:

```c
char nome[50] = "Mario Rossi";
switch (nome) {
  case "Mario Rossi":
    // blocco di codice da eseguire se nome è uguale a "Mario Rossi"
    break;
  case "Luca Bianchi":
    // blocco di codice da eseguire se nome è uguale a "Luca Bianchi"
    break;
  default:
    // blocco di codice da eseguire se nome non è uguale a nessuno dei valori specificati nei casi precedenti
    break;
}
```

In questo caso, il blocco di codice all'interno del caso case "Mario Rossi" verrà eseguito poiché la stringa contenuta nella variabile nome è effettivamente uguale a "Mario Rossi".

L'istruzione switch può essere uno strumento molto utile in C per eseguire codice in base al valore di una variabile. Tuttavia, è importante assicurarsi di utilizzare l'istruzione break in ogni caso per evitare che il codice venga eseguito in modo imprevisto.
