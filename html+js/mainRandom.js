// Il computer genera un numero casuale da 1 a 10
let numeroSegreto = Math.floor(Math.random() * 10) + 1;

// L'utente inserisce un numero
let tentativo = prompt("Indovina il numero (da 1 a 10):");

// Converte l'input in numero
tentativo = Number(tentativo);

// Controlla se è corretto
if (tentativo === numeroSegreto) {
    alert(" Complimenti! Hai indovinato!");
} else {
    alert(" Mi dispiace, il numero corretto era " + numeroSegreto);
}


let numeroSegreto z= Math.floor(Math.random() * 10) + 1;
let tentativo;
let tentativiRimasti = 3;

while (tentativiRimasti > 0) {
    tentativo = Number(prompt("Indovina il numero (1-10). Tentativi rimasti: " + tentativiRimasti));

    if (tentativo === numeroSegreto) {
        alert(" Hai indovinato! Il numero era " + numeroSegreto);
        break;
    } else if (tentativo > numeroSegreto) {
        alert("📉 Troppo alto!");
    } else if (tentativo < numeroSegreto) {
        alert("📈 Troppo basso!");
    }

    tentativiRimasti--;
}

if (tentativiRimasti === 0 && tentativo !== numeroSegreto) {
    alert(" Hai finito i tentativi. Il numero corretto era " + numeroSegreto);
}


// Genera il primo lancio (da 1 a 6)
let dado1 = Math.floor(Math.random() * 6) + 1;

// Genera il secondo lancio (da 1 a 6)
let dado2 = Math.floor(Math.random() * 6) + 1;

// Somma i risultati
let somma = dado1 + dado2;

// Mostra i risultati
alert("Primo lancio: " + dado1 + "\nSecondo lancio: " + dado2 + "\nSomma totale: " + somma);


// Genera un numero casuale tra 1 e 20
let numero = Math.floor(Math.random() * 20) + 1;

// Verifica se è pari o dispari
if (numero % 2 === 0) {
    alert("Il numero " + numero + " è PARI ⚡");
} else {
    alert("Il numero " + numero + " è DISPARI ");
}


// Genera un numero casuale: 0 oppure 1
let lancio = Math.floor(Math.random() * 2);

// Controlla il risultato
let risultato;
if (lancio === 0) {
    risultato = "Testa";
} else {
    risultato = "Croce";
}

// Mostra il risultato
alert("Risultato del lancio: " + risultato);
