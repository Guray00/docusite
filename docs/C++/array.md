# Array
In C++, un array è una struttura dati che consente di memorizzare più valori di un determinato tipo in un unico contenitore. Gli elementi di un array sono accessibili tramite un indice, ovvero un numero che indica la posizione dell'elemento all'interno dell'array.

Per dichiarare un array in C++, si utilizza la sintassi seguente:

```cpp
tipo nomeArray[dimensione];
```

Ad esempio, per dichiarare un array di 10 elementi di tipo int, potremmo scrivere:

```cpp
int mieiNumeri[10];
```

Per assegnare un valore a un elemento dell'array, si utilizza la sintassi seguente:

```cpp
nomeArray[indice] = valore;
```

Ad esempio, per assegnare il valore 10 all'elemento con indice 0 dell'array mieiNumeri, potremmo scrivere:

```cpp
mieiNumeri[0] = 10;
```
Per accedere al valore di un elemento dell'array, si utilizza la sintassi seguente:

```cpp
valore = nomeArray[indice];
```

Ad esempio, per stampare il valore dell'elemento con indice 0 dell'array mieiNumeri, potremmo scrivere:

```cpp
std::cout << mieiNumeri[0] << std::endl;
```
Questo codice stamperà il seguente output a video:

```text
10
```