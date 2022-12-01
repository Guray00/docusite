---
sidebar_position: 6
---

# For

Il ciclo `for` viene utilizzato quando si conosce il numero di iterazioni da compiere. Il ciclo `for` è composto da tre parti:

- **inizializzazione**: viene inizializzato un contatore
- **verifica**: viene verificata la condizione di uscita dal ciclo
- **passo**: viene incrementato il contatore

## Sintassi

La sintassi di `for` è la seguente:

```cpp
for (inizializzazione; verifica; passo){
	// codice eseguito
}
```

::: note
**Nota**: spesso si utilizza il contatore `i` per indicare il numero di iterazioni.
:::

### Esempio

Esempio di esercizio che stampa i numeri da 1 a 5 (escluso):

```cpp
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
```

## Cicli annidati

E' possibile inserire un `for` all'interno di un'altro `for` (senza limiti di volte), ottenendo un ciclo annidato. In questo caso, il ciclo esterno viene eseguito prima del ciclo interno.

### Esempio

```cpp
// ciclo esterno
for (int i = 1; i <= 2; ++i) {
  cout << "Outer: " << i << "\n"; // Eseguito 2 volte

  // Inner loop
  for (int j = 1; j <= 3; ++j) {
    cout << " Inner: " << j << "\n"; // Eseguito 6 volte (2 * 3)
  }
}
```

## Esercitazione
_Dato una numero mostrato a schermo, mostrarne la tabellina._

**esempio di output**:

```text
Quale tabellina vorrestri mostrare? 5
5 * 1   =  5
5 * 2   =  10
5 * 3   =  15
5 * 4   =  20
5 * 5   =  25
5 * 6   =  30
5 * 7   =  35
5 * 8   =  40
5 * 9   =  45
5 * 10  =  50
```

```cpp
#include <iostream>
using namespace std;

int main(){

	// creiamo la variabile per salvare la tabellina
	int numero;
	
	cout<<"Quale tabellina vorrestri mostrare? ";

	// facciamo inserire all'utente il numero
	cin>>numero;

	// vogliamo fare una azione ripetuta
	// partena -> 1
	// arrivo  -> 10 (incluso)
	for(int cont=1; cont <= 10; cont = cont+1){

		// stiamo mostrando qualcosa a schermo:
		// numero " * " cont " = " prodotto
		int prodotto= numero*cont;
		
		// 5 * 1   =  5
		cout<<numero<<" * "<<cont<< " = "<<prodotto<<endl;
	}

	return 0;
}
```