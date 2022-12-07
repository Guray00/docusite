# Main

In Python, il termine "main" si riferisce alla funzione principale del programma, ovvero la funzione che viene eseguita quando il programma viene avviato. In molti linguaggi di programmazione, la funzione principale viene solitamente chiamata main o main().

La sintassi generale per definire la funzione principale in Python è la seguente:

```python
if __name__ == "__main__":
    # codice da eseguire
```

In questo codice, la prima riga utilizza una costante predefinita di Python chiamata __name__ per verificare se il programma viene eseguito direttamente o importato da un altro programma. Se il programma viene eseguito direttamente, cioè se viene avviato dalla riga di comando o dal prompt dei comandi, il valore della costante __name__ sarà "main". In questo caso, il codice all'interno del blocco if verrà eseguito.

Ad esempio, il seguente programma Python definisce una funzione principale che stampa il messaggio "Ciao, mondo!" e quindi chiama la funzione saluta() che stampa il messaggio "Ciao, utente!":

```python
def saluta():
    print("Ciao, utente!")

if __name__ == "__main__":
    print("Ciao, mondo!")
    saluta()
```

Se questo programma viene eseguito direttamente, verrà visualizzato il seguente output:

```text
Ciao, mondo!
Ciao, utente!
```

:::tip
**In sintesi**: la funzione principale in Python è una funzione che viene eseguita quando il programma viene avviato direttamente e non viene importato da un altro programma. La funzione principale può essere utilizzata per eseguire il codice principale del programma, come la definizione di variabili globali, la chiamata di altre funzioni e la gestione degli errori.
:::
