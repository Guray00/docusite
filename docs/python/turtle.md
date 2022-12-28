# Turtle

La libreria **turtle** di Python è un modulo che fornisce un'interfaccia grafica per il disegno di forme e figure geometriche utilizzando un "tartaruga" che si muove sullo schermo. La turtle si può muovere avanti e indietro, girare a destra e a sinistra, sollevare e abbassare il pennello per disegnare o non disegnare, e cambiare il colore del pennello per disegnare con diverse tonalità.

Per utilizzare la libreria turtle, è necessario prima importarla con il comando import turtle. Una volta importata, è possibile utilizzare i metodi della classe Turtle per creare un'istanza della tartaruga e muoverla sullo schermo. Ad esempio:

```python
import turtle

t = turtle.Turtle()  # crea un'istanza della tartaruga

t.forward(100)  # muovi la tartaruga in avanti di 100 pixel
t.right(90)  # gira la tartaruga a destra di 90 gradi
t.forward(50)  # muovi la tartaruga in avanti di 50 pixel
```

In questo esempio, la tartaruga viene creata e poi viene fatta muovere in avanti di 100 pixel, quindi viene fatta girare a destra di 90 gradi e poi muovere ancora in avanti di 50 pixel. Il risultato sarà una linea di 150 pixel di lunghezza che forma un angolo di 90 gradi.

La libreria turtle offre molti altri metodi per muovere la tartaruga e disegnare forme e figure geometriche. Ad esempio, è possibile utilizzare il metodo circle() per disegnare un cerchio, il metodo penup() per sollevare il pennello e spostare la tartaruga senza disegnare, e il metodo pendown() per abbassare il pennello e continuare a disegnare. Ecco un esempio che mostra alcuni di questi metodi in azione:

```python
import turtle

t = turtle.Turtle()

t.pencolor("red")  # cambia il colore del pennello in rosso
t.circle(50)  # disegna un cerchio di raggio 50 pixel

t.penup()  # solleva il pennello
t.goto(100, 0)  # sposta la tartaruga a 100 pixel a destra
t.pendown()  # abbassa il pennello

t.pencolor("blue")  # cambia il colore del pennello in blu
t.circle(50)  # disegna un cerchio di raggio 50 pixel
```

In questo esempio, la tartaruga disegna prima un cerchio di raggio 50 pixel in rosso, quindi solleva il pennello e si sposta a 100 pixel a destra senza disegnare, quindi abbassa di nuovo il pennello e disegna un altro cerchio di raggio 50 pixel in blu. Il risultato sarà due cerchi, uno rosso e uno blu, separati di 100 pixel.

La libreria turtle offre anche la possibilità di personalizzare molti altri aspetti della tartaruga e del disegno, come il colore di sfondo, la velocità di disegno, la forma e la dimensione della tartaruga, e altro ancora. Ecco un esempio di come si possono personalizzare alcune di queste opzioni:

```python
import turtle

t = turtle.Turtle()

t.screen.bgcolor("lightyellow")  # imposta il colore di sfondo
t.speed(10)  # imposta la velocità di disegno (da 1 a 10)
t.shape("turtle")  # imposta la forma della tartaruga
t.shapesize(2, 2)  # imposta la dimensione della tartaruga

t.pencolor("red")  # cambia il colore del pennello in rosso
t.circle(50)  # disegna un cerchio di raggio 50 pixel

t.penup()  # solleva il pennello
t.goto(100, 0)  # sposta la tartaruga a 100 pixel a destra
t.pendown()  # abbassa il pennello

t.pencolor("blue")  # cambia il colore del pennello in blu
t.circle(50)  # disegna un cerchio di raggio 50 pixel
```

In questo esempio, il colore di sfondo viene impostato su "lightyellow", la velocità di disegno viene impostata su 10 (la massima), la forma della tartaruga viene impostata su "turtle" (la forma standard) e la dimensione viene impostata su 2x2 (il doppio della dimensione standard). Il risultato sarà lo stesso dell'esempio precedente, con due cerchi di raggio 50 pixel, uno rosso e uno blu, separati di 100 pixel, ma con il colore di sfondo impostato su "lightyellow" e la tartaruga che si muove più velocemente e ha una forma e una dimensione personalizzate.

## Spostamenti

Prendendo in considerazione una variabile di tipo `turtle` di nome `t` e un generico valore intero `x`:

Sposta la tartaruga in avanti di `x` pixel:

```python
t.forward(x)
```

Sposta la tartaruga indietro di `x` pixel:

```python

```python
t.backward(x)
```

Ruota la tartaruga verso destra di `x` gradi:

```python

```python
t.right(x)
```

Ruota la tartaruga verso sinistra di `x` gradi:

```python
t.left(x)
```