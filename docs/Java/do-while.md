# do-while
In Java, il ciclo do-while è simile al ciclo while, ma la condizione viene controllata alla fine del ciclo invece che all'inizio. Ciò significa che il blocco di codice verrà eseguito almeno una volta, indipendentemente dal fatto che la condizione sia vera o falsa.

La sintassi per utilizzare un ciclo do-while in Java è la seguente:

```java
do {
    // codice da eseguire almeno una volta
} while (condizione);
```

Ad esempio, per stampare i numeri da 1 a 10, potremmo scrivere:

```java
int numero = 1;

do {
    System.out.println(numero);
    numero++;
} while (numero <= 10);
```

Questo codice stamperà i seguenti numeri:

```text
1
2
3
4
5
6
7
8
9
10
```