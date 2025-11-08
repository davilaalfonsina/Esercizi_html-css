//----------------------------------------ESERCIZIO 1-----------------------------------------------------

// generare 10 numeri casuali tra 1 e 100  
// calcolare i doppi 
// contare quanti numeri sono pari e dispari 
// calcolare la media

//array di numeri casuali
let numeri = [];
//array con i doppi
let numeriDoppi = [];
//contatore numeri pari
let pari = 0;
//contatore per numeri dispari
let dispari = 0;
//variabile per la somma totale
let somma = 0;


//Genero 10 numeri casuali tra 1 e 100 con FOR(x 10 volte)

for(let i = 0; i < 10; i++){

    let valore = Math.floor(Math.random() * 100) + 1; // da 1 a 100

    //salvo il numero nell array "numeri"
    numeri.push(valore);

    //calcolo e salvo il doppio
    numeriDoppi.push(valore * 2); 

    somma += valore; //somma = somma + valore

    //controllo se pari o dispari
    if(valore % 2 === 0){

        pari++;

    }else{

        dispari++;
    }


}

let media = somma / numeri.length;

//stampo i risultati
console.log("Numeri generati : "+ numeri.join(", "));
console.log("Numeri doppi : "+ numeriDoppi.join(", "));
console.log("Numeri pari : " + pari);
console.log("Numeri dispari : " + dispari);
console.log("Media dei numeri : " + media.toFixed(2)); //toFixed(2) -> numeri dopo la virgola, 2



//----------------------------------------ESERCIZIO 2-----------------------------------------------------

//---------SIMULATORE DI SPESA AL SUPERMERCATO

// Il programma ha una lista di prodotti con i prezzi
// Estrae casualmente 5 prodotti
// Calcola il totale della spesa
// Mostra tutto all utente in modo leggibile 


//lista prodotti e lista prezzi


//random di 5 prodotti


//totale spesa


//stampa a schermo o console.log


// -------- SIMULATORE DI SPESA AL SUPERMERCATO --------


/lista prodotti e lista prezzi

let prodotti = ["Pane","Latte","Acqua","Burro","Farina","Uova","Carne","Pesce"];
let prezzi =   [ 1.80,   1.20,  1.55,   3.50,   2.40,    2.80,  6.50,   8.70];

//array per la scelta spesa casuale

let spesa = [];

//inizializzo contatore del totale
let totale = 0;


//random di 5 prodotti
for(let i = 0; i < 5; i++){

    let indiceCasuale = Math.floor(Math.random() * prodotti.length);

    //prendo il prodotto e prezzo corrispondente
    let prodotto = prodotti[indiceCasuale];
    let prezzo = prezzi[indiceCasuale];

    //aggiungo all array della spesa
    spesa.push(prodotto);


    //aggiorno il totale
    totale += prezzo;

}

//stampa a schermo o console.log
console.log("Prodotti acquistati : ");
console.log(spesa.join(", "));
console.log("Totale spesa : ");