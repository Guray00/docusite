# for

In Java, il ciclo for viene utilizzato per eseguire un blocco di codice ripetutamente per un numero specifico di volte. Ad esempio, potremmo utilizzare un ciclo for per stampare tutti gli elementi di una matrice.

La sintassi per utilizzare un ciclo for in Java è la seguente:

```java
for (inizializzazione; condizione; incremento) {
    // codice da eseguire per ogni iterazione del ciclo
}
```

Ad esempio, per stampare ogni elemento di una matrice di numeri interi, potremmo scrivere:

```java
int[] numeri = {1, 2, 3};

for (int i = 0; i < numeri.length; i++) {
    System.out.println(numeri[i]);
}
```

Questo codice stamperà i seguenti numeri:

```text
1
2
3
```