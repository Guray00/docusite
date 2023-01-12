# file

In **C**, come in molti altri linguaggi di programmazione, la gestione dei file viene effettuata tramite delle funzioni specifiche che permettono di aprire, leggere, scrivere e chiudere un file.

:::tip
**Suggerimento**: puoi pensare ai file come dei "pacchi". Prima di utileizzare un pacco, è necessario aprirlo, poi leggere il suo contenuto, scrivere qualcosa all'interno e infine chiuderlo (va sempre chiuso prima di essere spedito!).
:::

## Aprire un file

Per aprire un file, si può utilizzare la funzione `fopen(), che prende come argomenti il nome del file e la modalità di apertura (lettura, scrittura, lettura e scrittura, etc.). Ad esempio, per aprire un file chiamato "test.txt" in modalità di lettura, si può utilizzare il seguente codice:

```c
FILE *file_ptr;
file_ptr = fopen("test.txt", "r");
```

I file possono essere aperti in varie modalità:

- **lettura**: `r`, consente la lettura del file.
- **scrittura**: `w`, consente la scrittura sul file. Se il file esiste già, il suo contenuto viene sovrascritto.
- **append**: `a`, consente la scrittura sul file. Se il file esiste già, il nuovo contenuto viene aggiunto in coda al file.

:::tip
**Analogia**: Hai aperto il pacco per poi utilizzarlo in seguito.
:::

## Leggere un file

Il **C** mette a disposizioni molte funzioni per leggere i dati da un file, di seguito ne sono illustrate alcune.

:::tip
**Analogia**: stai guardando il contenuto del pacco.
:::

### `fread()`

Per leggere il contenuto di un file aperto, si può utilizzare la funzione `fread()`, che prende come argomenti il puntatore al file, la dimensione di ogni elemento da leggere, il numero di elementi da leggere e un puntatore all'area di memoria in cui verranno scritti i dati letti dal file. Ad esempio, per leggere un array di interi dal file "test.txt" aperto in precedenza, si può utilizzare il seguente codice:

```c
int array[100];
fread(array, sizeof(int), 100, file_ptr);
```

### `getline()`

Per leggere il contenuto di un file aperto riga per riga è possibile utilizzare la funzione `getline()`, che prende come argomenti il puntatore all'area di memoria in cui verrà scritta la riga letta, il numero massimo di caratteri da leggere e il puntatore al file da cui leggere. Ad esempio, per leggere il contenuto del file "test.txt" aperto in precedenza riga per riga, si può utilizzare il seguente codice:

```c
char * line = NULL;
size_t len = 0;
ssize_t read;

// fino a quando il file non finisce
while ((read = getline(&line, &len, fp)) != -1) {
        printf("%s", line); // stampa la riga letta
}
```

## Scrivere su un file

Il **C** mette a disposizioni molte funzioni per leggere i dati da un file, di seguito ne sono illustrate alcune.

:::tip
**Analogia**: Stai inserendo delle informazioni all'interno del pacco.
:::

### `fwrite()`

Per scrivere su un file aperto, si può utilizzare la funzione `fwrite()`, che prende come argomenti il puntatore all'area di memoria contenente i dati da scrivere, la dimensione di ogni elemento da scrivere, il numero di elementi da scrivere e un puntatore al file su cui scrivere. Ad esempio, per scrivere l'array di interi precedentemente letto sul file "test.txt", si può utilizzare il seguente codice:

```c
fwrite(array, sizeof(int), 100, file_ptr);
```

### `fprintf()`

Per scrivere su un file aperto, si può utilizzare la funzione `fprintf()`, che prende come argomenti il puntatore al file su cui scrivere e una stringa contenente il testo da scrivere. Ad esempio, per scrivere una stringa sul file "test.txt" aperto in precedenza, si può utilizzare il seguente codice:

```c
fprintf(file_ptr, "Hello World!");
```

## Chiudere un file

Per chiudere un file aperto, si può utilizzare la funzione `fclose()`, che prende come argomento il puntatore al file da chiudere. Ad esempio, per chiudere il file "test.txt" aperto in precedenza, si può utilizzare il seguente codice:

```c
fclose(file_ptr);
```

:::tip
**Analogia**: Stai chiudendo il pacco per poterlo spedire.
:::

:::danger
**Importante:** Ricorda sempre di chiudere un file dopo aver finito di utilizzarlo. Per poterlo riusare sarà poi necessario riaprilo.
:::
