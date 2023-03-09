/* 
Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

// - value
// - switch / case / break
// - getElementById / QuerySelector
// - addEventListener
// - function()
// - classList

const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const ticketPreviewEl = document.getElementById("ticket_preview");

const generateCarriage = Math.floor(Math.random() * 18) + 1;
console.log(generateCarriage, "Carrozza");
const generateCPCode = Math.floor(Math.random() * 9999) + 90000;
console.log(generateCPCode, "CP Code");
let user = document.getElementById("name_surname").value;

generateBtn.addEventListener("click", function () {
  const km = Number(document.getElementById("km").value);
  const age = document.getElementById("age").value;
  const costKm = 0.21;
  let finalPrice = km * costKm;

  // show name and surname

  const userPreview = document.getElementById("passenger");
  userPreview.innerHTML = `${user}`;

  // show offer type

  const offerPreview = document.getElementById("offer");
  offerPreview.innerHTML = `${age}`;

  // show carriage on ticket

  const carriagePreview = document.getElementById("carriage");
  carriagePreview.innerHTML = `${generateCarriage}`;

  // show code on ticket

  const codePreview = document.getElementById("cpcode");
  codePreview.innerHTML = `${generateCPCode}`;

  // show cost on ticket

  const ticketPreviewCost = document.getElementById("ticketcost");
  ticketPreviewCost.innerHTML = `${finalPrice} €`;

  switch (age) {
    case "under18":
      finalPrice *= 0.8;
      console.log(
        `Price under18: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
      break;
    case "over65":
      finalPrice *= 0.6;
      console.log(
        `Price over 65: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
      break;
    default:
      console.log(
        `Price over18: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`
      );
  }

  // Ta-da, now the ticket shows up

  ticketPreviewEl.classList.remove("d-none");
});

// reset

resetBtn.addEventListener("click", function () {
  ticketPreviewEl.classList.add("d-none");
  document.getElementById("name_surname").value = "";
  km.value = "";
  age.value = "over18";
});
