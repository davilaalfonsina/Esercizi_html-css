//IMPLEMENTARE CONTROLLO SE I VOTI SONO UGUALI, NON ESISTE IL MIGLIORE

// calcolo media
let somma = 0;
for (let i = 0; i < classe.length; i++) {
  somma += classe[i].voto;
}

let media = somma / classe.length;

// trovo il voto più alto
let votoMassimo = Math.max(...classe.map(s => s.voto));

// filtro studenti con voto massimo
let studentiMigliori = classe.filter(s => s.voto === votoMassimo);

// stampa risultati finali
console.log(`\nMedia dei voti: ${media.toFixed(1)}`);

if (studentiMigliori.length === 1) {
  let migliore = studentiMigliori[0];
  console.log(`🏆 Miglior studente: ${migliore.nome} ${migliore.cognome} (voto ${migliore.voto})`);
} else {
  console.log(`Non esiste un miglior studente: ${studentiMigliori.length} studenti hanno il voto massimo (${votoMassimo})`);
  console.log("Studenti con il voto massimo:");
  studentiMigliori.forEach(s => console.log(`- ${s.nome} ${s.cognome}`));