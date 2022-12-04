# do-while
La costruzione do-while in C è un tipo di ciclo che viene utilizzato per eseguire un blocco di codice ripetutamente finché una determinata condizione è verificata. A differenza della costruzione while, che esegue il blocco di codice solo se la condizione è verificata, il ciclo do-while esegue sempre almeno una volta il blocco di codice prima di verificare la condizione.

La sintassi di un ciclo do-while in C è la seguente:

```c
do {
    // Codice da eseguire ripetutamente
} while (condizione);
```

Ecco un esempio di codice do while:

```c
int i = 0;
do {
    // Codice da eseguire ripetutamente
    printf("%d\n", i);
    i++;
} while (i < 5);
```

Questo codice stamperà:

```text
0
1
2
3
4
```

Come puoi vedere, il ciclo do-while esegue il blocco di codice all'interno delle parentesi graffe {} almeno una volta, quindi verifica la condizione (i < 5) alla fine di ogni iterazione del ciclo. Se la condizione è verificata, il ciclo viene eseguito di nuovo; altrimenti, il ciclo viene interrotto e il programma prosegue con l'esecuzione del codice successivo.