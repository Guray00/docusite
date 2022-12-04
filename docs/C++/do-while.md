# Do while

In C++, il costrutto do-while è una variante del costrutto while che esegue il codice contenuto nel suo blocco almeno una volta, indipendentemente dal valore della condizione di uscita. In altre parole, il codice all'interno del blocco do viene eseguito almeno una volta, quindi la condizione viene verificata e, se risulta vera, il codice viene eseguito nuovamente. Questo processo continua finché la condizione resta vera.

Ecco un esempio di come si può utilizzare il costrutto do-while in C++ per stampare una sequenza di numeri fino a quando l'utente non inserisce il numero 0:

```cpp
#include <iostream> // Include l'header per utilizzare std::cin e std::cout

int main()
{
    int num;

    do
    {
        // Chiede all'utente di inserire un numero
        std::cout << "Inserisci un numero (0 per uscire): ";
        std::cin >> num;

        // Stampa il numero inserito
        std::cout << "Hai inserito: " << num << std::endl;
    }
    while (num != 0); // Continua a eseguire il blocco finché num non è 0

    return 0;
}
```