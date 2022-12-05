
# Array

In Java, un array è una struttura dati che permette di archiviare una sequenza di valori di uno stesso tipo. Ogni elemento dell'array ha un indice, che permette di accedervi.

Ecco un esempio di come dichiarare un array di interi in Java:

```java
int[] numeri = new int[5];
```

In questo esempio, abbiamo dichiarato un array di interi chiamato numeri, che può contenere fino a 5 elementi. Tutti gli elementi vengono inizializzati a 0 per impostazione predefinita.

Per accedere a un elemento dell'array, utilizziamo l'indice dell'elemento tra parentesi quadre dopo il nome dell'array. Ad esempio, per accedere al primo elemento dell'array numeri, useremmo numeri[0].

```java
numeri[0] = 1;
numeri[1] = 2;
numeri[2] = 3;
numeri[3] = 4;
numeri[4] = 5;
```

In questo esempio, abbiamo assegnato il valore 1 al primo elemento dell'array, il valore 2 al secondo elemento, e così via.

È anche possibile inizializzare un array con valori specifici al momento della dichiarazione, come mostrato di seguito:

```java
int[] numeri = {1, 2, 3, 4, 5};
```

In questo esempio, abbiamo dichiarato un array di interi chiamato numeri e lo abbiamo inizializzato con i valori 1, 2, 3, 4 e 5.

È importante notare che, una volta che un array viene creato, la sua dimensione non può essere modificata. Quindi, se si desidera aggiungere o rimuovere elementi dall'array, è necessario creare un nuovo array con la dimensione appropriata e copiare gli elementi dell'array originale nel nuovo array.
