# Puntatori

I puntatori sono una caratteristica fondamentale del linguaggio di programmazione C++. Sono variabili che contengono indirizzi di memoria di altre variabili. In altre parole, un puntatore "punta" a un'altra variabile e ne permette l'accesso.

Ad esempio, supponiamo di avere una variabile intera chiamata `x` che contiene il valore 10. L'indirizzo di memoria di questa variabile è, ad esempio, `0x7ffc34aa2b10`. Se si vuole creare un puntatore che punti a `x`, si può fare in questo modo:

```cpp
int x = 10;
int *ptr = &x;
```

In questo caso, ptr è un puntatore alla variabile `x`. L'operatore `&` viene utilizzato per ottenere l'indirizzo di memoria della variabile x e assegnarlo al puntatore ptr. A questo punto, ptr contiene l'indirizzo di memoria di `x`, cioè `0x7ffc34aa2b10`.

Per accedere al valore contenuto nella variabile a cui punta un puntatore, si utilizza l'operatore di **dereferenziazione** `*`. Ad esempio, per stampare il valore di x tramite il puntatore ptr, si può usare il seguente codice:

```cpp
std::cout << *ptr;  // Stampa il valore di x, cioè 10
```

I puntatori sono uno strumento molto potente in C++, ma devono essere utilizzati con attenzione per evitare errori e problemi di memoria. 

:::danger
**Ricorda**: è importante ricordarsi di gestire correttamente l'allocazione e la liberazione della memoria quando si lavora con puntatori.
:::

## Riferimenti

I riferimenti in C++ sono una caratteristica della linguaggio che consente di creare un alias per una variabile esistente. In pratica, quando si crea un riferimento per una variabile, si sta creando un nuovo nome per quella variabile. Questo può essere utile in diverse situazioni, ad esempio per evitare di dover passare grandi strutture di dati per valore a una funzione, o per creare un alias per una variabile globale all'interno di una funzione.

Per creare un riferimento in C++, si utilizza l'operatore di riferimento '&' quando si dichiara la variabile. Ad esempio:

```cpp
int x = 5;
int &y = x;
```

In questo esempio, y è un riferimento per x. Questo significa che qualsiasi cambiamento apportato a y sarà automaticamente applicato anche a x, e viceversa. Ad esempio, se si assegna un nuovo valore a y, come nell'esempio seguente:

```cpp
y = 10;
```

Il valore di x verrà automaticamente aggiornato a 10, poiché y è un alias per x.

I riferimenti possono essere utilizzati in diverse situazioni, ad esempio come parametri di funzione o come valori di ritorno. Ad esempio, si può definire una funzione che accetta un riferimento a una variabile come parametro, come nell'esempio seguente:

```cpp
void increment(int &value) {
  value++;
}
```

In questo caso, la funzione `increment` accetta un riferimento a una variabile di tipo int e incrementa il suo valore di 1. Se si passa una variabile per valore a questa funzione, il suo valore verrà modificato all'interno della funzione, ma non verrà modificato una volta che la funzione terminerà. Invece, se si passa una variabile per riferimento (come nell'esempio), il suo valore verrà modificato anche una volta che la funzione terminerà.

### Caratteristiche

I riferimenti in C++ hanno diverse caratteristiche interessanti:

- Un riferimento deve essere inizializzato con una variabile esistente al momento della sua creazione, e non può essere modificato successivamente. In altre parole, una volta creato un riferimento, non è possibile associarlo ad un'altra variabile.
- Un riferimento può essere utilizzato come una qualsiasi altra variabile, ad esempio per essere passato come parametro ad una funzione o per essere utilizzato in un'espressione.
- I riferimenti hanno lo stesso tipo della variabile a cui sono associati. Ad esempio, se si crea un riferimento per una variabile di tipo int, il riferimento avrà lo stesso tipo di quella variabile.