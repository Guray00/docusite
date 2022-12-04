# Variabili

In C++, una variabile è un contenitore per memorizzare un valore. Ogni variabile ha un nome e un tipo, che determina il tipo di valore che può contenere. Ad esempio, una variabile di tipo int può contenere un numero intero, mentre una variabile di tipo char può contenere un singolo carattere.

Per dichiarare una variabile in C++, si utilizza la sintassi seguente:

```cpp
tipo nomeVariabile;
```

Ad esempio, per dichiarare una variabile di nome numero di tipo int, potremmo scrivere:

```cpp
int numero;
```

Per assegnare un valore a una variabile, si utilizza l'operatore di assegnamento =, ad esempio:

```cpp
numero = 10;
```

Ecco alcuni tipi di variabili comunemente usati in C++:

int: contiene un numero intero, ad esempio 1, -10, 100.
double: contiene un numero con la virgola, ad esempio 3.14, -0.5, 0.0.
char: contiene un singolo carattere, ad esempio 'A', 'B', '1'.
Ecco un esempio che mostra come dichiarare e utilizzare alcune variabili di diversi tipi:

```cpp
int numeroIntero = 10;
double numeroVirgola = 3.14;
char carattere = 'A';

std::cout << numeroIntero << std::endl; // stamperà 10
std::cout << numeroVirgola << std::endl; // stamperà 3.14
std::cout << carattere << std::endl; // stamperà A
```
