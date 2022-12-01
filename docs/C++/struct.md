---
sidebar_position: 10
---
# Strutture (struct)

Le strutture, solitamente chiamate `struct`, consentono il raggruppamento di più informazioni all'interno di un solo contenitore. 

:::tip Consiglio

Puoi pensare a una struct come a una scatola con scompartimenti, in cui ogni scompartimento può contenere a sua volta altri oggetti.

:::

## Sintassi

Per realizzare una struttura è sufficiente utilizzare la keyword `struct` seguita dalle `{}`; al loro interno andremo a mettere le variabili che faranno parte della nostra struttura.

```c++
struct {           	 // dichiarazione della struttura
	int  contenuto1; // membro (variabile int)
	char contenuto2; // membro (variabile char)
	// ...
} nomeStruttura;     // nome con cui verrà richiamata
```


## Accedere ai membri

Per accedere a una variabile membro della struttura si utilizza il nome della variabile seguita dal carattere `.`.

```c++
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

