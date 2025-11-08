// Chiede all'utente il giorno della settimana
let giorno = prompt("Inserisci il giorno della settimana:").toLowerCase();

// Controlla se è weekend o giorno lavorativo
if (giorno === "sabato" || giorno === "domenica") {
    alert("È weekend! ");
} else if (
    giorno === "lunedì" || giorno === "lunedi" ||
    giorno === "martedì" || giorno === "martedi" ||
    giorno === "mercoledì" || giorno === "mercoledi" ||
    giorno === "giovedì" || giorno === "giovedi" ||
    giorno === "venerdì" || giorno === "venerdi"
) {
    alert("È un giorno lavorativo. 💼");
} else {
    alert("Giorno non valido. Prova di nuovo.");
}
// Chiede all'utente il mese
let mese = prompt("Inserisci un mese:").toLowerCase();

// Controlla se è estate (giugno, luglio, agosto)
if (mese === "giugno" || mese === "luglio" || mese === "agosto") {
    alert("È estate! ");
} else {
    alert("Non è estate.");
}

// Chiede all'utente il mese
let mese2 = prompt("Inserisci un mese per sapere la stagione:").toLowerCase();

let stagione;

switch (mese2) {
    case "dicembre":
    case "gennaio":
    case "febbraio":
        stagione = "inverno ";
        break;
    case "marzo":
    case "aprile":
    case "maggio":
        stagione = "primavera ";
        break;
    case "giugno":
    case "luglio":
    case "agosto":
        stagione = "estate ";
        break;
    case "settembre":
    case "ottobre":
    case "novembre":
        stagione = "autunno "; 
        break;
    default:
        stagione = "Mese non valido. Riprova.";
}

alert(stagione);


