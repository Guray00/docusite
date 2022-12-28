# Programmazione Orientata agli Oggetti

La **programmazione orientata agli oggetti** (OOP, dall'inglese "Object-Oriented Programming") è un paradigma di programmazione che si basa sulla creazione di "oggetti", che rappresentano entità reali o astratte, dotati di proprietà (chiamate "attributi") e di comportamenti (chiamati "metodi"). In Python, come in molti altri linguaggi di programmazione, è possibile utilizzare l'OOP per creare classi che rappresentino gli oggetti e per istanziare oggetti a partire da queste classi.

Ecco un esempio di come si può definire una classe in Python:

```python
class Automobile:
    def __init__(self, marca, modello, anno, colore):
        self.marca = marca
        self.modello = modello
        self.anno = anno
        self.colore = colore
        self.velocita = 0
    
    def accelera(self, incremento_velocita):
        self.velocita += incremento_velocita
    
    def frena(self, decremento_velocita):
        self.velocita -= decremento_velocita
```

In questo esempio, la classe Automobile rappresenta un'automobile generica, con alcune proprietà come la marca, il modello, l'anno e il colore. La classe definisce anche due metodi: a`ccelera()`, che aumenta la velocità dell'automobile di un determinato valore, e `frena(), che diminuisce la velocità dell'automobile di un determinato valore.

Per istanziare un oggetto a partire da questa classe, si può utilizzare il costruttore __init__(). Ad esempio:

```python
auto1 = Automobile("Ford", "Mustang", 1967, "Rosso")
auto2 = Automobile("Toyota", "Camry", 2010, "Grigio")
```

In questo modo, si sono create due istanze della classe Automobile, rappresentate dalle variabili auto1 e auto2. Ognuna di queste istanze ha le proprie proprietà e può utilizzare i metodi definiti nella classe. Ad esempio:

```python
print(auto1.marca)  # "Ford"
print(auto2.modello)  # "Camry"

auto1.accelera(20)
auto2.frena(10)

print(auto1.velocita)  # 20
print(auto2.velocita)  # -10
```

Oltre a definire le proprietà e i metodi della classe, è anche possibile definire degli "attributi di classe", ovvero delle variabili condivise da tutte le istanze della classe. Gli attributi di classe vengono definiti all'interno della classe, ma non all'interno di un qualsiasi metodo, e vengono indicati utilizzando il prefisso self. Ecco un esempio:

```python
class Automobile:
    numero_ruote = 4  # attributo di classe
    
    def __init__(self, marca, modello, anno, colore):
        self.marca = marca
        self.modello = modello
        self.anno = anno
        self.colore = colore
        self.velocita = 0
    
    def accelera(self, incremento_velocita):
        self.velocita += incremento_velocita
    
    def frena(self, decremento_velocita):
        self.velocita -= decremento_velocita

auto1 = Automobile("Ford", "Mustang", 1967, "Rosso")
auto2 = Automobile("Toyota", "Camry", 2010, "Grigio")

print(auto1.numero_ruote)  # 4
print(auto2.numero_ruote)  # 4
```

In questo esempio, l'attributo di classe numero_ruote viene condiviso da entrambe le istanze della classe Automobile. È possibile modificare il valore di un attributo di classe utilizzando il nome della classe seguito dal punto e il nome dell'attributo. Ad esempio:

```python
Automobile.numero_ruote = 3
print(auto1.numero_ruote)  # 3
print(auto2.numero_ruote)  # 3
```

Inoltre, è possibile definire dei "metodi di classe" utilizzando il decoratore @classmethod. I metodi di classe vengono chiamati utilizzando il nome della classe come primo argomento, invece che self, e possono essere utilizzati per effettuare operazioni che coinvolgono la classe stessa, anziché le istanze della classe.

Ecco un esempio di come si possono definire e utilizzare i metodi di classe in Python:

```python
class Automobile:
    numero_ruote = 4
    
    def __init__(self, marca, modello, anno, colore):
        self.marca = marca
        self.modello = modello
        self.anno = anno
        self.colore = colore
        self.velocita = 0
    
    def accelera(self, incremento_velocita):
        self.velocita += incremento_velocita
    
    def frena(self, decremento_velocita):
        self.velocita -= decremento_velocita
    
    @classmethod
    def numero_ruote_standard(cls):
        return cls.numero_ruote

auto1 = Automobile("Ford", "Mustang", 1967, "Rosso")
auto2 = Automobile("Toyota", "Camry", 2010, "Grigio")

print(Automobile.numero_ruote_standard())  # 4
```

In questo esempio, il metodo di classe numero_ruote_standard() viene chiamato utilizzando il nome della classe Automobile, e non l'istanza della classe. All'interno del metodo, il primo argomento cls rappresenta la classe stessa, e può essere utilizzato per accedere agli attributi di classe.

Infine, è possibile creare delle "relazioni tra classi" utilizzando l'ereditarietà. In Python, è possibile definire una classe figlia che eredita le proprietà e i metodi di una classe padre, e può anche aggiungere nuove proprietà e metodi o modificare quelli ereditati. Ecco un esempio:

```python
class Automobile:
    numero_ruote = 4
    
    def __init__(self, marca, modello, anno, colore):
        self.marca = marca
        self.modello = modello
        self.anno = anno
        self.colore = colore
        self.velocita = 0
    
    def accelera(self, incremento_velocita):
        self.velocita += incremento_velocita
    
    def frena(self, decremento_velocita):
        self.velocita -= decremento_velocita
    
    @classmethod
    def numero_ruote_standard(cls):
        return cls.numero_ruote

auto1 = Automobile("Ford", "Mustang", 1967, "Rosso")
auto2 = Automobile("Toyota", "Camry", 2010, "Grigio")

print(Automobile.numero_ruote_standard())  # 4
```

In questo esempio, il metodo di classe numero_ruote_standard() viene chiamato utilizzando il nome della classe Automobile, e non l'istanza della classe. All'interno del metodo, il primo argomento cls rappresenta la classe stessa, e può essere utilizzato per accedere agli attributi di classe.

Infine, è possibile creare delle "relazioni tra classi" utilizzando l'ereditarietà. In Python, è possibile definire una classe figlia che eredita le proprietà e i metodi di una classe padre, e può anche aggiungere nuove proprietà e metodi o modificare quelli ereditati. Ecco un esempio:

```python
class Veicolo:
    numero_ruote = 0
    
    def __init__(self, marca, modello, anno, colore):
        self.marca = marca
        self.modello = modello
        self.anno = anno
        self.colore = colore
        self.velocita = 0
    
    def accelera(self, incremento_velocita):
        self.velocita += incremento_velocita
    
    def frena(self, decremento_velocita):
        self.velocita -= decremento_velocita

class Automobile(Veicolo):
    numero_ruote = 4
    
    def apri_tetto_convertibile(self):
        print("Apertura del tetto convertibile in corso...")

class Motocicletta(Veicolo):
    numero_ruote = 2
    
    def piega_specchietti(self):
        print("Piegatura degli specchietti in corso...")

auto = Automobile("Ford", "Mustang", 1967, "Rosso")
moto = Mot
```
