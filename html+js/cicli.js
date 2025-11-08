let array = ["Diego", 23, false, "Pippo", true, 45];

for(let i = 0; i < array.length; i++){

    console.log(array[i])
}

//------------------------CICLO FOR---------------------

//Stampo i numeri da 1 a 9
for ( let i = 0; i < 10; i++){

    //questa parte di codice viene eseguita per ogni iterazione
    //console.log(i);
}

//Stampo i numeri da 1 a 10
for ( let i = 0; i <= 10; i++){

    //console.log(i);
}

//-------------------------esempi------------------------

//stampare con un ciclo FOR tutti gli elementi di un array

let array = ["Diego", 23, false, "Pippo", true, 45];

for(let i = 0; i < array.length; i++){

    console.log(array[i]);
}


let arrayNum = [37, 23, 67, 2, 87, 45];

for(let i = 0; i < arrayNum.length; i++){

    console.log(arrayNum[i]);
}

//Esercizio 1.

// Chiedo all utente 9 numeri,
// Il programma verifica se sono pari o dispari,
// Stampa tutti i risultati ( valori e se pari o dispari)


//array per i numeri inseriti

let num = [];

//array per pari o dispari

let risultati = [];


//ciclo for 9 volte
/*
for (let i = 0; i < 9; i++){

    //chiedo all utente i 9 numeri
    let valoreInserito = parseInt(prompt("Inserisci un numero (" + (i + 1) + " di 9):"));
    //ora che ho il numero(valoreInserito), lo pusho dentro all array vuoto "num"
    num.push(valoreInserito);

    if (valoreInserito % 2 === 0){

        risultati.push("Pari");
    }else {

        risultati.push("Dispari");

    }
}
*/

//stampa risultato

//console.log("Numeri Inseriti : " + num.join(", "));
//console.log("Numeri Raddoppiati : " + risultati.join(", "));





//Esercizio 2.

// generare 5 numeri casuali tra 1 e 50 
// raddoppiare i valori generati casualmente
// stampare entrambi i risultati

//array di numeri causuale
let numeriCasuali = [];

//array numeri raddoppiati
let numeriDoppi = [];

//per 5 volte
for(let i = 0;i < 5; i++){

    //genero n casuale
    let numero = Math.floor(Math.random() * 50) + 1;

    //salvo il numero nell array
    numeriCasuali.push(numero);

    //calcolo e salvo il doppio
    numeriDoppi.push(numero * 2);

}

//stampo i risultati
console.log("Numeri casuali : " + numeriCasuali.join(", "));
console.log("Numeri doppi : " + numeriDoppi.join(", "));