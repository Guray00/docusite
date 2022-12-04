# Stringhe
In C++, una stringa è una sequenza di caratteri che rappresenta un testo. Una stringa può essere dichiarata utilizzando la classe string, che fa parte del namespace std.

Per dichiarare una stringa in C++, si utilizza la sintassi seguente:

```cpp
std::string nomeStringa;
```

Ad esempio, per dichiarare una stringa di nome saluto, potremmo scrivere:

```cpp
std::string saluto;
```
Per assegnare un valore a una stringa, si utilizza l'operatore di assegnazione =, ad esempio:

```cpp
saluto = "Ciao Mondo";
```

Per accedere ai singoli caratteri di una stringa, si utilizza la sintassi seguente:

```cpp
carattere = nomeStringa[indice];
```

Ad esempio, per accedere al primo carattere della stringa saluto, potremmo scrivere:

```cpp
char primoCarattere = saluto[0];
```

In questo caso, la variabile primoCarattere conterrà il valore `C`.