# algoritmi di ordinamento

Gli algoritmi di ordinamento vengono utilizzati per ordinare il contenuto di un vettore a seconda di un qualche criterio (ad esempio in modo crescente, decrescente ecc).

Esistono più algoritmi che consentono di fare ciò, con differenti livelli di complessità e velocità. In questo capitolo vedremo alcuni di questi algoritmi.

## Selection Sort

Il **Selection Sort** è un algoritmo di ordinamento in cui si cerca il valore minimo (o massimo) dell'array e lo si scambia con il primo elemento dell'array, poi si cerca il valore minimo tra i restanti elementi dell'array e lo si scambia con il secondo elemento dell'array, e così via, fino a quando l'intero array è ordinato.

L'algoritmo _Selection Sort_ ha una complessità computazionale di $O(n^2)$ nel caso peggiore e medio, dove n è la dimensione dell'array, poiché per ogni elemento dell'array vengono eseguiti n-1 confronti.

Ecco un esempio di implementazione del Selection Sort in linguaggio C:

```c
#include <stdio.h>

void selection_sort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    for (i = 0; i < n-1; i++) {
        min_idx = i; // assume che il valore minimo sia il primo elemento non ordinato
        for (j = i+1; j < n; j++) {
            // cerca il valore minimo tra gli elementi non ordinati
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // scambia il valore minimo con il primo elemento non ordinato
        temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Array non ordinato: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    selection_sort(arr, n);
    
    printf("\nArray ordinato: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    return 0;
}
```

In questo esempio, l'array `{64, 25, 12, 22, 11}` viene ordinato in ordine crescente utilizzando l'algoritmo Selection Sort. Il ciclo esterno for attraversa l'array e seleziona un elemento alla volta. Il ciclo interno for cerca il valore minimo tra gli elementi non ordinati dell'array. Se viene trovato un valore minimo, il valore minimo viene scambiato con il primo elemento non ordinato. Alla fine del ciclo esterno, l'array sarà ordinato in ordine crescente.

## bubbleSort

Il **Bubble Sort** è un algoritmo di ordinamento molto semplice da implementare e comprendere, ma non è il più efficiente per grandi insiemi di dati. Tuttavia, è comunque utile per scopi didattici e per ordinare piccoli insiemi di dati.

In pratica, il Bubble Sort confronta ripetutamente coppie di elementi adiacenti nell'array da ordinare, e se la coppia non è ordinata, scambia i due elementi. Questo processo viene ripetuto finché non si verificano più scambi, ovvero l'array è stato completamente ordinato.

Di seguito riporto un esempio di implementazione del Bubble Sort in C:

```c
#include <stdio.h>

void bubble_sort(int array[], int n) {
    int temp, i, j;
    for(i = 0; i < n - 1; i++) {
        for(j = 0; j < n - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                // Scambia gli elementi
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

int main() {
    int array[] = {10, 2, 5, 8, 1};
    int n = sizeof(array) / sizeof(int);
    
    printf("Array non ordinato: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    bubble_sort(array, n);
    
    printf("\nArray ordinato: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    return 0;
}
```

Nell'esempio sopra, la funzione `bubble_sort()` prende come argomenti l'array da ordinare e la sua dimensione n. All'interno della funzione, due cicli for vengono utilizzati per scorrere l'array e confrontare le coppie di elementi adiacenti. Se la coppia non è ordinata, gli elementi vengono scambiati.

Nella funzione `main()`, viene creato un array di interi non ordinato e la sua dimensione viene calcolata utilizzando l'operatore `sizeof()`. L'array viene poi stampato prima dell'ordinamento, e dopo aver chiamato la funzione bubble_sort(), viene stampato l'array ordinato.

Ecco il risultato dell'esecuzione del programma:

```text
Array non ordinato: 10 2 5 8 1 
Array ordinato: 1 2 5 8 10
```

 la versione ottimizzata del Bubble Sort con sentinella è un'altra variante dell'algoritmo che può migliorare le prestazioni del Bubble Sort. Invece di confrontare tutti gli elementi adiacenti in ogni iterazione, questa variante utilizza una sentinella, ovvero un valore di controllo che viene inserito alla fine dell'array e viene utilizzato per interrompere il ciclo for interno quando non ci sono più scambi da fare.

L'utilizzo della sentinella può ridurre il numero di confronti effettuati e quindi migliorare le prestazioni del Bubble Sort. Ecco un esempio di implementazione del Bubble Sort con sentinella in C:

```c
#include <stdio.h>

void bubble_sort_sentinel(int array[], int n) {
    int i = 0, j, temp;
    int scambiati = 1;
    
    while(i < n - 1 && scambiati) {
        scambiati = 0;
        for(j = 0; j < n - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                // Scambia gli elementi
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                scambiati = 1;
            }
        }
        i++;
    }
}

int main() {
    int array[] = {10, 2, 5, 8, 1};
    int n = sizeof(array) / sizeof(int);
    
    printf("Array non ordinato: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    bubble_sort_sentinel(array, n);
    
    printf("\nArray ordinato: ");
    for(int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    return 0;
}
```

In questa implementazione, la funzione `bubble_sort_sentinel()` prende come argomenti l'array da ordinare e la sua dimensione n. La variabile i viene utilizzata per tenere traccia del numero di passaggi fatti nell'array, mentre la variabile scambiati viene utilizzata per verificare se ci sono stati scambi nell'ultimo passaggio. La sentinella viene aggiunta alla fine dell'array utilizzando n - 1 come indice.

All'interno del ciclo while, viene eseguito il ciclo for interno solo se ci sono stati scambi nell'ultimo passaggio e se non si è ancora raggiunto la fine dell'array. Se non ci sono stati scambi nell'ultimo passaggio, la variabile scambiati viene impostata su 0 e il ciclo while termina.

Nella funzione main(), viene creato un array di interi non ordinato e la sua dimensione viene calcolata utilizzando l'operatore `sizeof()`. L'array viene poi stampato prima dell'ordinamento, e dopo aver chiamato la funzione `bubble_sort_sentinel()`, viene stampato l'array ordinato.
