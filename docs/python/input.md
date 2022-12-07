# input

La funzione input in Python è una funzione che consente agli utenti di immettere dati dalla tastiera. La sintassi generale per utilizzare la funzione input è la seguente:

```python
input([prompt])
```

Dove prompt è una stringa che viene visualizzata per invitare l'utente a immettere un input. Ad esempio, potresti utilizzare la funzione input come segue:

```python
nome = input("Inserisci il tuo nome: ")
print("Ciao, " + nome + "!")
```

In questo esempio, verrebbe visualizzata la stringa `Inserisci il tuo nome:` e l'utente potrebbe immettere un valore come `Mario` o `Lucia`. Quando l'utente preme il tasto Invio, il valore immesso viene assegnato alla variabile nome, che viene quindi utilizzata dalla funzione print per stampare un messaggio di benvenuto.

La funzione input può anche essere utilizzata per chiedere all'utente di immettere un numero, ad esempio un intero o un numero in virgola mobile. In questo caso, il valore immesso dall'utente verrà automaticamente convertito in un valore numerico, che potrà essere utilizzato in operazioni matematiche o in altre parti del programma. Ad esempio:

```python
anni = input("Inserisci la tua età: ")
anni = int(anni)  # converte il valore immesso in un intero
print("Tra 10 anni avrai " + str(età + 10) + " anni.")
```

In questo esempio, viene chiesto all'utente di immettere la propria età come un numero intero. Il valore immesso viene assegnato alla variabile `anni` e quindi convertito in un intero con la funzione int(). Infine, viene utilizzata la funzione print per stampare un messaggio che indica quanti anni avrà l'utente tra 10 anni.

:::tip
**In sintesi**: la funzione input in Python è una funzione molto utile per consentire agli utenti di immettere dati dalla tastiera e utilizzarli all'interno del programma.
:::
