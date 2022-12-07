# if

In Python `if` è una parola chiave che viene utilizzata per eseguire il controllo del flusso nei programmi. In altre parole, if ci permette di eseguire determinate azioni solo se una determinata condizione viene soddisfatta.

Ad esempio, supponiamo di voler scrivere un semplice programma che controlli se un numero è maggiore o minore di 10. Possiamo farlo utilizzando if nel seguente modo:

```python
numero = 5

if numero > 10:
    print("Il numero è maggiore di 10")
else:
    print("Il numero è minore o uguale a 10")
```

In questo caso, il programma stamperà "Il numero è minore o uguale a 10", poiché 5 non è maggiore di 10.

È importante notare che l'istruzione else nell'esempio precedente viene eseguita solo se la condizione specificata dopo if non viene soddisfatta. In altre parole, else viene utilizzato per eseguire un'azione quando la condizione specificata dopo if è False.

È inoltre possibile utilizzare più istruzioni if all'interno di un singolo blocco di codice, come illustrato di seguito:

```python
numero = 5

if numero > 10:
    print("Il numero è maggiore di 10")
elif numero < 10:
    print("Il numero è minore di 10")
else:
    print("Il numero è uguale a 10")
```

In questo caso, il programma stamperà "Il numero è minore di 10", poiché 5 non è né maggiore né uguale a 10.
