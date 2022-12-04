# Vector

In C++, un vettore è una struttura di dati che rappresenta una sequenza di elementi di uno stesso tipo. I vettori sono molto utili quando si ha bisogno di lavorare con una serie di dati di uno stesso tipo, ad esempio per memorizzare le informazioni di un gruppo di studenti o per gestire un elenco di numeri.

Per utilizzare i vettori in C++, è necessario includere l'header `<vector>` e creare un oggetto vettore utilizzando il tipo std::vector. Una volta creato l'oggetto vettore, è possibile utilizzare i vari metodi e funzioni forniti dalla libreria per gestire la sequenza di elementi.

Ecco un esempio di come si può utilizzare un vettore in C++ per memorizzare le informazioni di un gruppo di studenti:

```cpp
#include <vector> // Include l'header per utilizzare i vettori
#include <string> // Include l'header per utilizzare le stringhe

int main()
{
    // Crea un vettore di stringhe per memorizzare i nomi degli studenti
    std::vector<std::string> studenti;

    // Aggiunge alcuni studenti al vettore
    studenti.push_back("Mario Rossi");
    studenti.push_back("Luigi Bianchi");
    studenti.push_back("Chiara Verdi");

    // Stampa il numero di studenti nel vettore
    std::cout << "Numero di studenti: " << studenti.size() << std::endl;

    // Stampa il nome di ogni studente
    for (int i = 0; i < studenti.size(); i++)
    {
        std::cout << "Nome studente: " << studenti[i] << std::endl;
    }

    return 0;
}
```