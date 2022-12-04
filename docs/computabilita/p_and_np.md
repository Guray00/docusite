---
sidebar_position: 1
---

# Classi di complessità P e NP

In informatica si dividono i problemi in più classi di complessità, in base alla loro difficoltà di risoluzione. Queste classi sono:

- **P**: i problemi risolvibili in tempo polinomiale con una macchina di Turing deterministica.
- **NP**: i problemi possono essere risolti in tempo polinomiale con una macchina di Turing non deterministica. Questa classe è nota anche come _Non-deterministic Polynomial Time_.
- **NP-completo**: i problemi NP-completi sono i problemi più difficili di **NP**. Ogni problema NP completo è tale per cui è possibile ricondurre un qualsiasi problema NP a quest'ultimo.
- **EXP**: i problemi risolvibili in tempo esponenziale (o peggiore) con una macchina di Turing deterministica.


## Algoritmo deterministico

Un algoritmo deterministico è tale se, dato un particolare input, produrrà sempre lo stesso output, con la macchina sottostante che passa sempre attraverso la stessa sequenza di stati; il percorso di esecuzione dell’algoritmo è lo stesso in ogni esecuzione.


## Algoritmo non deterministico

Un algoritmo non deterministico (in inglese Non-deterministic Algorithms) è un algoritmo che, anche per lo stesso input, può esibire comportamenti diversi su corse diverse. In altre parole, è un algoritmo in cui il risultato di ogni algoritmo non è definito in modo univoco e il risultato potrebbe essere casuale.

Una varietà di fattori può far sì che un algoritmo si comporti in modo non deterministico:

- Se utilizza uno stato esterno diverso dall’input (l’input dell’utente, un valore casuale o dati memorizzati nel disco).
- Se funziona in modo sensibile al tempo, ad esempio se ha più processori che scrivono sugli stessi dati contemporaneamente. In questo caso, l’ordine preciso in cui ciascun processore scrive i propri dati influirà sul risultato.
- Se un errore hardware fa sì che il suo stato cambi in modo imprevisto.

![Deterministico e Non deterministico](../../static/img/computabilita/deterministico_e_non_deterministico.jpg)

## NP

La classe NP è una classe di problemi che possono essere risolti in tempo polinomiale con una macchina di Turing non deterministica. Questa classe è nota anche come _Non-deterministic Polynomial Time_. Si può dunque ottenere 

:::tip
Per pensare a come risolvere in modo polinomiale un problema di questo tipo, si pensi ad avere un numero sufficiente di computer in grado di calcolare, contemporaneamente, la soluzione di un problema eseguendo ciascuna un percorso diverso. In questo modo, si può risolvere il problema in tempo polinomiale.
:::

## NP-completo

Nella teoria della complessità, un problema NP-completo o NPC (cioè un problema completo per la classe NP) è un problema decisionale che verifica le seguenti proprietà:

- è possibile **verificare** una soluzione in modo efficiente (in tempo polinomiale); la classe di problemi che verificano questa proprietà è indicata con NP;
- tutti i problemi della classe NP si riducono a questa tramite una _riduzione polinomiale_; questo significa che il problema è difficile almeno quanto tutti gli altri problemi della classe NP.

Se dunque venisse scoperto un modo per rendere polinomiale un problema **NP-completo**, ne seguirebbe che lo stesso metodo potrebbe essere applicato a tutti i problemi NP, e quindi anche a tutti i problemi P.

### Soluzioni imperfette

Fino ad ora, tutti gli algoritmi conosciuti per problemi NP-Completi necessitano di un tempo superpolinomiale nella dimensione dell'input. L'esistenza di algoritmi più veloci è sconosciuta. Quindi, per risolvere un problema NP-Completo di dimensioni non banali, generalmente vengono utilizzati i seguenti approcci:

- algoritmo di approssimazione: un algoritmo che trova velocemente una soluzione sub-ottimale che si trova in un intorno (noto) di quella ottimale.
- algoritmo probabilistico: un algoritmo il cui tempo medio di esecuzione per una distribuzione data del problema è provata essere buona—idealmente, uno che assegna una bassa probabilità a input "difficili".
- casi speciali: un algoritmo veloce se l'istanza del problema appartiene all'insieme di alcuni casi speciali. La parametrizzazione della complessità può essere vista come una generalizzazione di questo approccio.
- euristica: un algoritmo che funziona "ragionevolmente bene" in molti casi, ma per cui non c'è prova che sia sempre veloce e che dia buoni risultati.

---

## Bibliografia

- [What are the differences between NP, NP-Complete and NP-Hard?](https://stackoverflow.com/questions/1857244/what-are-the-differences-between-np-np-complete-and-np-hard)
- [Differenza tra algoritmo deterministico e non deterministico in informatica](https://vitolavecchia.altervista.org/differenza-tra-algoritmo-deterministico-e-non-deterministico-in-informatica/)
- [NP-completo](https://it.wikipedia.org/wiki/NP-completo)