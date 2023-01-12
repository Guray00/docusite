# classi e oggetti

In Java, una classe è un modello per creare oggetti che hanno proprietà e comportamenti simili. Ad esempio, potremmo avere una classe Persona che rappresenta una persona con proprietà come nome, età e indirizzo, e comportamenti come parlare e camminare.

Per creare una classe in Java, si utilizza la sintassi seguente:

```java
public class NomeClasse {
    // proprietà e metodi della classe
}
```

Ad esempio, per creare la classe Persona descritta sopra, potremmo scrivere:

```java
public class Persona {
    // proprietà della classe
    private String nome;
    private int eta;
    private String indirizzo;

    // metodi della classe
    public void parla() {
        // implementazione del metodo
    }

    public void cammina() {
        // implementazione del metodo
    }
}
```

Per creare un oggetto a partire da una classe, si utilizza la sintassi seguente:

```java
NomeClasse nomeOggetto = new NomeClasse();
```

Ad esempio, per creare un oggetto persona della classe Persona descritta sopra, potremmo scrivere:

```java
Persona persona = new Persona();
```

Per utilizzare le proprietà e i metodi di un oggetto, si utilizza la notazione con il punto, ad esempio:

```java
persona.nome = "Mario Rossi";
persona.eta = 30;
persona.indirizzo = "Via Roma, 1";

persona.parla();
persona.cammina();
```
 