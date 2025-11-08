//Creiamo un oggetto "auto"
let auto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2018
};

// Aggiungo una nuova proprietà
auto.colore = "rosso";

// Modifico una proprietà
auto.anno = 2020;

// Elimino una proprietà
delete auto.modello;

// Aggiungo una funzione all’oggetto
auto.descrizione = function() {
    return `Auto: ${this.marca}, colore: ${this.colore}, anno: ${this.anno}`;
};

// Richiamo la funzione
console.log(auto.descrizione());

///EZERCIZI 2//

// Array per contenere gli studenti
let studenti = [];

// Inserimento di 3 studenti (puoi anche usare prompt se vuoi input da utente)
for (let i = 1; i <= 3; i++) {
    let nome = prompt("Inserisci il nome dello studente " + i + ":");
    let cognome = prompt("Inserisci il cognome dello studente " + i + ":");
    let voto = parseFloat(prompt("Inserisci il voto di " + nome + " " + cognome + ":"));

    studenti.push({
        nome: nome,
        cognome: cognome,
        voto: voto
    });
}

// Mostra elenco studenti
console.log("Elenco studenti:");
studenti.forEach(studente => {
    console.log(`${studente.nome} ${studente.cognome} - Voto: ${studente.voto}`);
});

// Calcolo media voti
let sommaVoti = 0;
studenti.forEach(s => sommaVoti += s.voto);
let media = sommaVoti / studenti.length;
console.log(`Media voti classe: ${media.toFixed(2)}`);

// Trova lo studente con il voto più alto
let migliore = studenti[0];
for (let i = 1; i < studenti.length; i++) {
    if (studenti[i].voto > migliore.voto) {
        migliore = studenti[i];
    }
}

console.log(`Miglior studente: ${migliore.nome} ${migliore.cognome} con voto ${migliore.voto}`);




import java.util.ArrayList;

class Studente {
    private String nome;
    private String cognome;
    private double voto;

    public Studente(String nome, String cognome, double voto) {
        this.nome = nome;
        this.cognome = cognome;
        this.voto = voto;
    }

    public String getNome() { return nome; }
    public String getCognome() { return cognome; }
    public double getVoto() { return voto; }

    public void stampaStudente() {
        System.out.println(nome + " " + cognome + " - Voto: " + voto);
    }
}

public class GestioneStudenti {
    public static void main(String[] args) {

        // Creiamo una lista di studenti con dati "reali"

        ArrayList<Studente> studenti = new ArrayList<>();
        studenti.add(new Studente("Marco", "Rossi", 27.5));
        studenti.add(new Studente("Giulia", "Bianchi", 30.0));
        studenti.add(new Studente("Luca", "Verdi", 24.0));
        studenti.add(new Studente("Elena", "Neri", 28.5));
        studenti.add(new Studente("Sofia", "Romano", 29.0));

        double sommaVoti = 0;

        // tampa elenco studenti

        System.out.println("--- Elenco Studenti ---");
        for (Studente s : studenti) {
            s.stampaStudente();
            sommaVoti += s.getVoto();
        }

        // Calcolo media

        double media = sommaVoti / studenti.size();
        System.out.printf("\nMedia dei voti: %.2f\n", media);

        // Trova lo studente migliore

        Studente migliore = studenti.get(0);
        for (Studente s : studenti) {
            if (s.getVoto() > migliore.getVoto()) {
                migliore = s;
            }
        }

        // Stampa studente migliore

        System.out.println("\nStudente migliore: " + migliore.getNome() + " " + migliore.getCognome()
                + " con voto " + migliore.getVoto());
    }
}

--- Elenco Studenti ---

Marco Rossi - Voto: 27.5
Giulia Bianchi - Voto: 30.0
Luca Verdi - Voto: 24.0
Elena Neri - Voto: 28.5
Sofia Romano - Voto: 29.0

Media dei voti: 27.80

Studente migliore: Giulia Bianchi con voto 30.0



/ESERCIZIO : inserimento di studenti , calcolo media e miglior voto 

// In questo programma, l utente dovrà inserire i dati di 3 studenti con prompt(), 
// Nome, Cognome e Voto
// Dovrà esser mostrato l elenco completo degli studenti,
// Calcolare e stampare la media dei voti
// Trovare lo studente con il voto piu alto e stampare lo studente migliore


//Per 3 volte devo chiedere 3 dati : nome cognome e voto ( string, string, number)
//Salvo i dati in un array di oggetti perchè sono 3 studenti con 3 proprietà


//array vuoto della classe
let classe = [];


//chiedo all utente per 3 volte 3 dati
for (i = 0; i < 3; i++){

  let nome = prompt("Inserisci il tuo nome : ");
  let cognome = prompt("Inserisci il cognome : ");
  let voto = parseFloat(prompt("Inserisci il voto : "));

  //creo l oggetto studente e lo aggiungo all array classe
  let studente = {nome : nome, cognome : cognome, voto : voto };

  //aggiungo studente all array classe
  classe.push(studente);

}

//stampa dei risultati
console.log("Elenco studenti : ");




for (let i = 0; i < classe.length; i++){

  console.log(classe[i].nome + classe[i].cognome + " - voto : " + classe[i].voto);
    
}

//console.log(classe);

//calcolo media

//inizializzo contatore a zero, che sarà la somma dei voti
let somma = 0;

for (let i = 0; i < classe.length; i++){

  somma += classe[i].voto;

}

//Media
let media = somma / classe.length;

//console.log("la media dei voti è : " + media.toFixed(1));


//non conosco qual è il voto piu alto
//ma se ipotizzo che il primo sia il migliore

//trovo lo studente con il voto piu alto

let votoMigliore = classe[0]; // il primo oggetto ha il voto piu alto

for(let i = 1; i < classe.length; i++){

  if (classe[i].voto > votoMigliore.voto){

    votoMigliore = classe[i];

  }
}

console.log("media dei voti : " + media.toFixed(1));
console.log("Miglior studente : " + votoMigliore.nome + votoMigliore.cognome + "(voto" + votoMigliore.voto +")");



