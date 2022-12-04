# Switch
In Java, l'istruzione switch viene utilizzata per eseguire un blocco di codice specifico in base al valore di una variabile. Ad esempio, potremmo utilizzare un'istruzione switch per stampare un saluto in base al giorno della settimana.

La sintassi per utilizzare un'istruzione switch in Java è la seguente:

```java
switch (variabile) {
    case valore1:
        // codice da eseguire se la variabile è uguale a valore1
        break;
    case valore2:
        // codice da eseguire se la variabile è uguale a valore2
        break;
    ...
    default:
        // codice da eseguire se la variabile non è uguale a nessun valore specificato
}
```

Ad esempio, per stampare un saluto in base al giorno della settimana, potremmo scrivere:

```java
int giorno = 3; // supponiamo che oggi sia mercoledì

switch (giorno) {
    case 1:
        System.out.println("Lunedi");
        break;
    case 2:
        System.out.println("Martedi");
        break;
    case 3:
        System.out.println("Mercoledi");
        break;
    case 4:
        System.out.println("Giovedi");
        break;
    case 5:
        System.out.println("Venerdi");
        break;
    case 6:
        System.out.println("Sabato");
        break;
    case 7:
        System.out.println("Domenica");
        break;
    default:
        System.out.println("Valore non valido");
}
```

Questo codice stamperà il seguente saluto:

```text
Mercoledi
```


