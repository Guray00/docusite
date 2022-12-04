# Variabili

In Java, una variabile è un contenitore per memorizzare un valore. Ogni variabile ha un nome e un tipo, che determina il tipo di valore che può contenere. Ad esempio, una variabile di tipo int può contenere un numero intero, mentre una variabile di tipo String può contenere una stringa.

Per dichiarare una variabile in Java, si utilizza la sintassi seguente:

```java
tipo nomeVariabile;
```

Ad esempio, per dichiarare una variabile di nome numero di tipo int, potremmo scrivere:

```java
int numero;
```

Per assegnare un valore a una variabile, si utilizza l'operatore di assegnazione =, ad esempio:

```java
numero = 10;
```

Ecco alcuni tipi di variabili comunemente usati in Java:

- int: contiene un numero intero, ad esempio 1, -10, 100.
- double: contiene un numero con la virgola, ad esempio 3.14, -0.5, 0.0.
- char: contiene un singolo carattere, ad esempio 'A', 'B', '1'.
- String: contiene una stringa, ad esempio "Ciao", "Mondo", "123".
- boolean: contiene un valore booleano, cioè true o false.

Ecco un esempio che mostra come dichiarare e utilizzare alcune variabili di diversi tipi:

```java
int numeroIntero = 10;
double numeroVirgola = 3.14;
char carattere = 'A';
String stringa = "Ciao Mondo";
boolean veroOFalso = true;

System.out.println(numeroIntero); // stamperà 10
System.out.println(numeroVirgola); // stamperà 3.14
System.out.println(carattere); // stamperà A
System.out.println(stringa); // stamperà Ciao Mondo
System.out.println(veroOFalso); // stamperà true
```