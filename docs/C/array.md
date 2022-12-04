# Array
In C, un array è una struttura di dati che ti permette di memorizzare una serie di elementi del medesimo tipo in un unico oggetto. Ad esempio, potresti creare un array di interi per memorizzare una serie di numeri interi, oppure un array di caratteri per memorizzare una stringa di testo.

Per dichiarare un array in C, devi specificare il tipo di dati degli elementi che desideri memorizzare, seguito dal nome dell'array e dalle dimensioni dell'array tra parentesi quadre:

```c
int interi[10]; // Dichiara un array di interi di dimensione 10
char stringa[20]; // Dichiara un array di caratteri di dimensione 20
```
Una volta che hai dichiarato un array, puoi accedere ai singoli elementi dell'array usando l'operatore di indice. L'indice di un elemento dell'array inizia sempre da 0, quindi per accedere al primo elemento dell'array interi dichiarato sopra, ad esempio, useresti interi[0].

Ecco un esempio di come potresti utilizzare un array di interi per memorizzare e stampare una serie di numeri:

```c
int interi[10]; // Dichiara un array di interi di dimensione 10

// Assegna alcuni valori all'array
interi[0] = 10;
interi[1] = 20;
interi[2] = 30;

// Stampa gli elementi dell'array
for (int i = 0; i < 10; i++) {
    printf("Elemento %d: %d\n", i, interi[i]);
}
```

Questo codice stamperà:

```text
Elemento 0: 10
Elemento 1: 20
Elemento 2: 30
Elemento 3: 0
Elemento 4: 0
Elemento 5: 0
Elemento 6: 0
Elemento 7: 0
Elemento 8: 0
Elemento 9: 0
```
