<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Esercizio 1 - Maggiorenne</title>
</head>
<body>

  <h2>Esercizio 1: Sei maggiorenne?</h2>
  
  <label>Quanti anni hai?</label>
  <input type="number" id="eta" placeholder="Es: 18">
  <button onclick="controllaEta()">Controlla</button>

  <p id="messaggioEta"></p>

  <script>
    function controllaEta() {
      let eta = Number(document.getElementById("eta").value);
      let messaggio = document.getElementById("messaggioEta");

      if (isNaN(eta) || eta < 0) {
        messaggio.textContent = "Per favore, inserisci un'età valida.";
      } else if (eta >= 18) {
        messaggio.textContent = " Sei maggiorenne.";
      } else {
        messaggio.textContent = " Sei minorenne.";
      }
    }
  </script>

</body>
</html>
