# while

In Python, il costrutto while è utilizzato per eseguire un blocco di codice ripetutamente finché una determinata condizione viene soddisfatta. Ad esempio, si può utilizzare il costrutto while per stampare una sequenza di numeri fino a quando l'utente non inserisce il numero 0:

```python
# Inizializza una variabile per memorizzare il numero inserito dall'utente
numero = 1

# Continua a chiedere all'utente di inserire un numero finché non inserisce 0
while numero != 0:
    # Chiede all'utente di inserire un numero
    numero = int(input("Inserisci un numero (0 per uscire): "))

    # Se il numero inserito non è 0, stampa il numero
    if numero != 0:
        print("Hai inserito:", numero)
```