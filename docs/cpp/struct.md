# struct

Le strutture, solitamente chiamate `struct`, consentono il raggruppamento di più informazioni all'interno di un solo contenitore.

:::tip
Puoi pensare a una struct come a una scatola con scompartimenti, in cui ogni scompartimento può contenere a sua volta altri oggetti.
:::

## Sintassi

Per realizzare una struttura è sufficiente utilizzare la keyword `struct` seguita dalle `{}`; al loro interno andremo a mettere le variabili che faranno parte della nostra struttura.

```cpp
struct {           	 // dichiarazione della struttura
	int  contenuto1; // membro (variabile int)
	char contenuto2; // membro (variabile char)
	// ...
} nomeStruttura;     // nome con cui verrà richiamata
```


## Accedere ai membri

Per accedere a una variabile membro della struttura si utilizza il nome della variabile seguita dal carattere `.`.

```cpp
// dichiarazione della struttura
struct {           	 
	int  contenuto1; // membro (variabile int)
	char contenuto2; // membro (variabile char)
	// ...
} nomeStruttura;     // nome con cui verrà richiamata

// istanzio una struttura
nomeStruttura st1;

// ne assegno i valori
st1.contenuto1 = 1;
st1.contenuto2 = 'A';
```

## Esercitazione

Costruire un record **Prodotto** con:

- nome
- marca
- prezzo unitario
- data scadenza
- quantità in magazzino

Fare l'input e l'output di un prodotto, stampare poi il valore totale del prodotto accantonato in magazzino.

```cpp
#include <stdio.h>
#include <stdlib.h>

// definiamo il valore massimo di caratteri in una stringa
#define size 20

// creazione della struttura per l'inserimento della data
struct data{
    int giorno;
    int mese;
    int anno;
};

// creazione della struttura per il prodotto
struct prodotto{
  char nome[size];
  char marca[size];
  float prezzo_unitario;
  struct data scadenza;
  int quantita;
};


int main(){

  // creaimo una variabile per salvare 
  // le informazioni del prodotto
  struct prodotto pippo;

  // chiediamo di inserire il nome
  printf("Inserire il nome del prodotto: ");
  scanf("%s", pippo.nome);

  // chiediamo di inserire la marca
  printf("Inserire la marca del prodotto: ");
  scanf("%s", pippo.marca);

  // chiediamo di inserire il prezzo unitario
  printf("Inserire il prezzo unitario: ");
  scanf("%f", &pippo.prezzo_unitario);

  // chiediamo la scadenza del prodotto
  printf("Inserire il giorno di scadenza: ");
  scanf("%d", &pippo.scadenza.giorno);

  printf("Inserire il mese di scadenza: ");
  scanf("%d", &pippo.scadenza.mese);
  
  printf("Inserire l'anno di scadenza: ");
  scanf("%d", &pippo.scadenza.anno);

  // inseriamo la quantità dei prodotti
  printf("Inserire la quantità di prodotto: ");
  scanf("%d", &pippo.quantita);


  printf("Il prodotto %s ha le seguenti caratteristiche: \n", pippo.nome);
  printf("- nome: %s\n", pippo.nome);
  printf("- marca: %s\n", pippo.marca);
  printf("- prezzo unitario: %f\n",pippo.prezzo_unitario);
  printf("- scadenza: %d-%d-%d\n", pippo.scadenza.anno, pippo.scadenza.mese, pippo.scadenza.giorno);
  printf("- quantita': %d\n", pippo.quantita);

  float valore_totale;
  valore_totale = pippo.prezzo_unitario* pippo.quantita;

  printf("Il valore totale e' di %.2f euro", valore_totale);
  
  return 0;
}
```
