# Main

In C, la funzione main è la funzione principale di un programma e viene eseguita quando il programma viene avviato.

Esempio:

```c
int main() {
  // codice del programma
  return 0;
}
```

In questo esempio, abbiamo definito la funzione main che non accetta alcun argomento e restituisce un valore di tipo int. All'interno del corpo della funzione, possiamo inserire il codice del nostro programma. La funzione main termina con l'istruzione return 0, che indica che il programma è stato eseguito con successo.

La funzione main può anche accettare argomenti dalla riga di comando:

```c
int main(int argc, char *argv[]) {
  // codice del programma
  return 0;
}
```

In questo esempio, la funzione main accetta due argomenti: argc e argv. Il primo argomento, argc, è un intero che indica il numero di argomenti passati alla riga di comando. Il secondo argomento, argv, è un array di stringhe che contiene i valori degli argomenti passati alla riga di comando.

Possiamo quindi utilizzare gli argomenti argc e argv all'interno del nostro codice per manipolare e utilizzare gli argomenti passati alla riga di comando. Ad esempio, possiamo utilizzare il valore di argc per determinare se sono stati passati argomenti alla riga di comando:

```c
if (argc > 1) {
  // codice da eseguire se sono stati passati argomenti alla riga di comando
} else {
  // codice da eseguire se non sono stati passati argomenti alla riga di comando
}
```

In questo caso, il codice all'interno del blocco dell'istruzione if verrà eseguito se sono stati passati argomenti alla riga di comando, altrimenti verrà eseguito il codice all'interno del blocco dell'istruzione else.

La funzione main è una parte fondamentale di ogni programma in C poiché viene eseguita quando il programma viene avviato. È importante assicurarsi di definire la funzione main nel nostro codice e di utilizzarla per inserire il codice principale del nostro programma.
