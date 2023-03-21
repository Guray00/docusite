# stringhe

In linguaggio C, una stringa è una sequenza di caratteri contigui memorizzati in memoria con un carattere terminatore di stringa, il carattere NULL ('\0'). La libreria string.h fornisce funzioni per la manipolazione delle stringhe, tra cui la copia, la concatenazione, la ricerca e la comparazione.

Ecco alcuni esempi di dichiarazione di stringhe in C:

```c
char str1[] = "hello"; // dichiarazione di una stringa inizializzata
char str2[10]; // dichiarazione di una stringa non inizializzata con una lunghezza massima di 10 caratteri
```

Per eseguire operazioni sulle stringhe, è necessario includere la libreria string.h. Ecco alcuni esempi di funzioni fornite dalla libreria:

```c
strcpy(dest, src): copia la stringa src nella stringa dest.
```

```c
char src[] = "hello";
char dest[10];
strcpy(dest, src);
printf("dest: %s\n", dest); // output: dest: hello
strcat(dest, src): concatena la stringa src alla fine della stringa dest.
```

```c
char dest[10] = "hello";
char src[] = "world";
strcat(dest, src);
printf("dest: %s\n", dest); // output: dest: helloworld
```

In particolare, `strlen(str)` restituisce la lunghezza della stringa str, escluso il carattere terminatore di stringa.

```c
char str[] = "hello";
int len = strlen(str);
printf("length: %d\n", len); // output: length: 5
```

`strcmp(str1, str2)`: confronta le due stringhe str1 e str2 e restituisce un valore intero che indica la relazione tra le due stringhe. Restituisce 0 se le stringhe sono uguali, un valore positivo se str1 è maggiore di str2, e un valore negativo se str1 è minore di str2.

```c
char str1[] = "hello";
char str2[] = "world";
int cmp = strcmp(str1, str2);
if (cmp == 0) {
    printf("le stringhe sono uguali\n");
} else if (cmp > 0) {
    printf("str1 è maggiore di str2\n");
} else {
    printf("str1 è minore di str2\n");
}
```

Questi sono solo alcuni esempi delle funzioni fornite dalla libreria string.h in C. Ci sono molte altre funzioni utili per la manipolazione delle stringhe, come strstr() per la ricerca di una sottostringa in una stringa, strtok() per la suddivisione di una stringa in sottostringhe, e strchr() per la ricerca di un carattere in una stringa.
