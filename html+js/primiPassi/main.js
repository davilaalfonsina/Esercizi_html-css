// inline
/*

su piu righe
altra riga

*/


// ---------------------------------------------   TIPI DI VARIABILI  ---------------------------------------

//STRINGA
var nome = "Pippo"; // stringa cioè una "parola"

//stampa in console il nome pippo
console.log(nome);


//NUMERICO
//intero
var numero = 8; // numero
//decimale 
var numDecimale = 10.99; // numero decimale
//valori negativi
var numNegativo = -5; 

console.log(numero);
console.log(numDecimale);
console.log(numNegativo);


//BOOLEANO
//Verifica di veridicità booleana
var lampadinaAccesa = true;
var lampadinaSpenta = false;

console.log("Questo è il console.log della variabile lampadinaAccesa : " , lampadinaAccesa);
console.log("Questo è il console.log della variabile lampadinaSpenta : " , lampadinaSpenta);



//Dichiarazioni di variabili -> LET 

var numSomma1 = 5;

var numSomma1 = 7;

var numSomma1 = 10;

var numSomma1 = "sette";
console.log(numSomma1);
var numSomma1 = "otto";
console.log(numSomma1);


let numeroLet = 56;

//dopo 10000 righe

let numeroLet3 = 45;


//----------------------------- OPERATORI aritmetici ------------------------------

// + (ADDIZIONE) , 
// - (SOTTRAZIONE) , 
// / (DIVISIONE) , 
// * (MOLTIPLICAZIONE),
// % (RESTO O MODULO)


//ESEMPIO BASE DI SOMMA

let num1Somma = 6;
let num2Somma = 8;

//la somma delle due variabili
let somma = num1Somma + num2Somma;

console.log("La somma è di : ", somma);




//ESEMPIO BASE DI SOTTRAZIONE

let num1Sottrazione = 10;
let num2Sottrazione = 5;

//la sottrazione tra le due variabili
let sottrazione = num1Sottrazione - num2Sottrazione;

console.log("La sottrazione è di : ", sottrazione);




//ESEMPIO DI MOLTIPLICAZIONE

let num1Moltiplicazione = 5;
let num2Moltiplicazione = 5;

let moltiplicazione = num1Moltiplicazione * num2Moltiplicazione;

console.log("Il risultato della moltiplicazione è di : ",moltiplicazione);


//ESEMPIO DI DIVISIONE

let num1Divisione = 100;
let num2Divisione = 5

let divisione = num1Divisione / num2Divisione;

console.log("Il risultato della divisione è di : ", divisione);


//ESEMPIO DI MODULO 

let a = 13;
let b = 5;

let modulo = a % b;

console.log("Il resto è : ", modulo); 


// COME CHIEDERE DATI ALL UTENTE TRAMITE PROMPT()

//chiedi il nome all utente

//let nomeInserito = prompt("Inserisci un nome");

//console.log(nomeInserito);


//chiedi un numero all utente tramite prompt -> parseInt gestisce i numeri interi inseriti
//                                              parseFloat gestisce i numeri decimali

/*

let numeroInserito1 = parseInt(prompt("Inserisci primo numero"));
let numeroInserito2 = parseInt(prompt("Inserisci secondo numero"));

let sommaNumeri = numeroInserito1 + numeroInserito2;

console.log("La somma dei due numeri inseriti è : " ,sommaNumeri);

//Mostro a schermo il risultato
alert("La somma dei due numeri inseriti è : " + sommaNumeri);

*/
//console.log(numeroInserito);


//--------------------- CONDIZIONI IF ELSE -------------
/*
//confronto banale di due password (parole)
let password1 = prompt("Inserisci la tua password : ");

let password2 = prompt("Conferma la tua password : ");

if ( password1 === password2  ){

    alert("Ok sei dentro");


} else {

    alert("Le passoword sono diverse, mi spiace.");

}*/

//Esempio emulazione confronto password captcha

let passwordInserita = prompt("INSERISCI L PASSWORD");

let passwordBackend = "pippo";

if (passwordInserita === passwordBackend){

    alert("ok, PASSWORD ");

}else {

    alert("no");
}




//------------------------ ESEMPIO IF ELSE SEMAFORO
let colore = prompt("inserisci il colore del semaforo( rosso, giallo o verde");


colore = colore.toLowerCase(); // converte tutto in minuscolo ( per evitare errori del tipo "rosso" , "Rosso")

if (colore === "rosso"){

    alert("fermati");

}else if (colore === "giallo") {

    alert("indecisione");

}else if (colore === "verde") {

    alert("passa");

}

let colore = prompt("inserice il colore del semaforo  rosso , giallo o verde");
   

colore 



//------------------------ CHIEDI ALL UTENTE UN NUMERO E VERIFICA SE PARI O DISPARI
   
let numero = parseInt (prompt ("inserisci un numero:) ") ;

numero % === 