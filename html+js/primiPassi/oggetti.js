//---------------------------------OGGETTI--------------------------------


let persona = {

    nome : "Diego",
    cognome : "Aneli",
    eta : 43,
    citta : "Parma",
    sposato : false,
    parla : function(){

                console.log("sono una persona che parla");
            
            }
}


//accedere ai valori con la dot notation (.valore)
//console.log("Nome dell oggetto persona : " + persona.nome);//nome
//console.log("Cognome dell oggetto persona : " + persona.cognome);//cognome
//console.log("Città dell oggetto persona : " + persona.citta);//città
//console.log("Età dell oggetto persona : " + persona.eta);//età
//console.log("Stato dell oggetto persona : " + persona.sposato);//stato


//richiamo funzione parla dell oggetto persona

persona.parla();


//modifica di proprietà
persona.eta = 35; //modifica
persona.eta = 30; //piu giovane
persona.sposato = true;

//aggiungere una proprietà
persona.professione = "Sviluppatore";


//eliminare una proprietà
delete persona.sposato;


console.log("oggetto :" , persona);




//STAMPARE CHIAVE CON CICLO "FOR...IN"
let studente = {

    nome : "Giulia",
    corso : "Informatica",
    anno : 3

};

for (let i in studente){

    console.log(i + "->" + studente[i]);

}

//clonare o copiare un oggetto con metodo "spread operator"
let copiaStudente = { ...studente };
console.log(copiaStudente);

//copiare un oggetto con metodo "assign"
let copiaStudente2 = Object.assign({}, studente);

//come restituire un array con tutte le chiavi
console.log(Object.keys(studente));


//come restituire in un array tutti i valori
console.log(Object.values(studente));


//come restituire un array di coppie [chiave, valore]
console.log(Object.entries(studente));




//----------------------NIDIFICAZIONE -> OGGETTI DENTRO OGGETTI



let scuola = {

    nome : "Itis L.da Vinci",
    
    indirizzoDomicilio : {
        via: "Via roma 1",
        citta : "Roma"
    },
    indirizzoResidenza : {
        via: "Via VERDI 38",
        citta : "Parma"
    }

};

console.log(scuola);
console.log(scuola.indirizzoDomicilio.citta) //Roma
console.log(scuola.indirizzoResidenza.citta) //Parma


//----------------------NIDIFICAZIONE -> ARRAY CON DENTRO OGGETTI


let persone = [

        {nome: "Marco", eta: 18, citta: "Roma"},
        {nome: "Mario", eta: 27, citta: "Milano"},
        {nome: "Pietro", eta: 38, citta: "Pisa"}
];


//FORMATO .JSON -> JAVASCRIPT OBJECT NOTATION 
//XML(VECCHIO FORMATO)