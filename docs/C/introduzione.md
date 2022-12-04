# Introduzione

C è un linguaggio di programmazione procedurale a basso livello e general-purpose sviluppato da Dennis Ritchie negli anni '70 per sistemi operativi di tipo UNIX. È stato successivamente adottato da molti altri sistemi operativi e platforme hardware e, a partire dagli anni '80, è stato utilizzato come linguaggio di riferimento per lo sviluppo di altri linguaggi, come C++ e Java.

Uno dei principali punti di forza di C è la sua efficienza e la sua capacità di controllo diretto delle risorse hardware del sistema. Queste caratteristiche lo rendono un linguaggio adatto allo sviluppo di sistemi operativi, driver di dispositivi e altri tipi di codice che richiedono prestazioni elevate e un livello di controllo accurato.

# Caratteristiche del linguaggio C
C è un linguaggio di programmazione procedurale, il che significa che i programmi sono suddivisi in funzioni che vengono eseguite in sequenza per completare un compito specifico.
C è un linguaggio a basso livello, il che significa che fornisce un livello di controllo diretto sulla memoria e sulle risorse hardware del sistema.
C è un linguaggio general-purpose, il che significa che può essere utilizzato per sviluppare una vasta gamma di applicazioni, dai sistemi operativi ai giochi.
C è un linguaggio compilato, il che significa che il codice sorgente viene convertito in codice binario eseguibile dal compilatore prima di essere eseguito dal sistema.
Esempio di codice in C
Ecco un semplice esempio di codice in C che stampa una stringa di testo a schermo:

```c
#include <stdio.h> // Importa la libreria standard di input/output

int main() { // Dichiara la funzione main, che rappresenta il punto di ingresso del programma
    printf("Ciao, mondo!\n"); // Stampa la stringa "Ciao, mondo!" a schermo
    return 0; // Restituisce 0 come codice di uscita del programma
}
```

Questo codice stamperà:

```text
Ciao, mondo!
```

Come puoi vedere, il codice include una libreria standard di input/output (stdio.h) per poter utilizzare la funzione printf(), che viene usata per stampare la stringa "Ciao, mondo!" a schermo. 

La sintassi della funzione main() è la seguente:

```c
int main() {
    // Codice del programma
    return 0;
}
```

Come puoi vedere, la funzione main() ha il tipo di dati int (che significa che restituisce un valore intero) e non accetta argomenti. Il codice del programma viene inserito all'interno delle parentesi graffe {} e, alla fine del codice, viene restituito il valore 0 per indicare che il programma è terminato correttamente.
