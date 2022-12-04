# struct

In C, una struct è una struttura dati utilizzata per organizzare dati di tipi diversi in un unico blocco.

Esempio:

```c
struct persona {
  char nome[50];
  int età;
  float altezza;
};
```

In questo esempio, abbiamo definito una struct chiamata persona che contiene tre campi: nome, età e altezza. Ogni campo può contenere un valore di un tipo di dati diverso.

Per utilizzare una struct in un programma, è necessario dichiararne una variabile:

```c
struct persona p1;
```

In questo caso, abbiamo dichiarato una variabile chiamata p1 che è una struct persona. Possiamo quindi accedere ai campi della struct utilizzando l'operatore di accesso ai membri (.):

```c
p1.nome = "Mario Rossi";
p1.età = 30;
p1.altezza = 1.75;
```

In questo caso, abbiamo assegnato valori ai campi nome, età e altezza della struct p1. Possiamo quindi utilizzare questi valori nella nostra logica di programma:

```c
printf("%s ha %d anni e %.2f di altezza\n", p1.nome, p1.età, p1.altezza);
```
In questo caso, stiamo utilizzando i valori delle variabili nome, età e altezza all'interno del nostro comando printf per stampare i valori della struct p1.

È inoltre possibile utilizzare una struct come tipo di dati per una funzione:

```c
struct persona crea_persona(char *nome, int età, float altezza) {
  struct persona p;
  p.nome = nome;
  p.età = età;
  p.altezza = altezza;
  return p;
}
```

In questo caso, abbiamo creato una funzione crea_persona che accetta tre argomenti: nome, età e altezza. La funzione crea una nuova struct persona e assegna ai suoi campi i valori degli argomenti. La funzione restituisce poi la struct persona. Possiamo quindi utilizzare i valori delle variabili nome, età e altezza all'interno del nostro comando printf per stampare i valori della struct p1.

È inoltre possibile utilizzare una struct come tipo di dati per una funzione:

```c
struct persona crea_persona(char *nome, int età, float altezza) {
  struct persona p;
  p.nome = nome;
  p.età = età;
  p.altezza = altezza;
  return p;
}
```
In questo caso, abbiamo creato una funzione crea_persona che accetta tre argomenti: nome, età e altezza. La funzione crea una nuova struct persona e assegna ai suoi campi i valori degli argomenti. La funzione restituisce poi la struct persona. Possiamo quindi utilizzare questa funzione per creare nuove struct persona:

```c
struct persona p1 = crea_persona("Mario Rossi", 30, 1.75);
struct persona p2 = crea_persona("Luca Bianchi", 28, 1.80);
```

In questo caso, abbiamo creato due nuove struct persona utilizzando la funzione crea_persona e assegnando i valori restituiti alle variabili p1 e p2. Possiamo quindi utilizzare queste struct persona all'interno del nostro programma come desiderato.