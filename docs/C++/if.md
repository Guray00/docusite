---
sidebar_position: 5
---

# if

Il costrutto `if` consente di verificare se una condizione è verificata ed eseguire un blocco di codice in base al risultato. L'esito è sempre di tipo **booleano**, ovvero può essere solo `true` o `false`.

## Sintassi

La sintassi di `if` è la seguente:

```cpp
if (condizione1){
    // codice eseguito se la condizione è vera
}

else if(condizione2){
    // codice eseguito se la condizione1 non è vera
    // ma è vera condizione2
}

else{
    // codice eseguito se nessuna delle condizioni è vera
}
```

:::caution
**Attenzione:** Il blocco di codice che segue `else if` ed `else` è opzionale. Se non viene specificato nessun blocco di codice, il programma non esegue alcuna operazione. Inoltre è importante scrivere le keyword con caratteri minuscoli, in caso contrario si avrà errore
:::

:::tip
**Suggerimento:** Non utilizzare `else if` ed `else` se non è necessario, in quanto possono rendere il codice meno leggibile.
:::

### Esempio

```cpp
int a = 5;
int b = 6;

if (b > a){
	cout<<"b è maggiore di a";
}

else if (a == b){
	cout<<"a e b sono uguali";
}

else{
	cout<<"a è maggiore di b";
}
```

:::tip
Puoi trovare a questo link alcuni esercizi su `if`:
https://esercizi.mlampis.dev/book.php?langs=cpp
:::

### Esercitazione
> Verificare se un numero inserito in input è pari.


```cpp
#include <iostream>
using namespace std;


int main(){

  // dichiariamo una variabile
  int a;

  // invitiamo l'utente a inserire un valore
  cout<<"Inserisci un numero: ";

  // lo facciamo inserire
  cin >> a;

  // verifichiamo se un numero è pari
  if (a%2 == 0){
    cout<<"Numero pari";
  }

  else {
    cout<<"Numero dispari";
  }
	
	return 0;
}
```