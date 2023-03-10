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
// - function() / = () => : Arrow Function
// - classList

const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const ticketPreview = document.getElementById("ticket_preview");

generateBtn.addEventListener("click", function () {
  const user = document.getElementById("name_surname").value;
  console.log(user, "User");
  const km = Number(document.getElementById("km").value);
  console.log(km, "KM");
  const age = document.getElementById("age").value;
  console.log(age, "Age");
  const costKm = 0.21;
  let finalPrice = km * costKm;
  const generateCarriage = Math.floor(Math.random() * 18) + 1;
  console.log(generateCarriage, "Carriage");
  const generateCPCode = Math.floor(Math.random() * 9999) + 90000;
  console.log(generateCPCode, "CP Code");
  const date = new Date();
  console.log(date)
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

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

  // show cost on ticket

  let ticketPreviewCost = document.getElementById("ticketcost");
  ticketPreviewCost.innerHTML = `${finalPrice.toFixed(2)} €`;
  console.log(finalPrice, "Current Price");

  // Ta-da, now the ticket shows up

  if (user && km !== "") {
    ticketPreview.classList.remove("d-none");
  }
  // Ta-da, now shows up an error when occur

  if (user == "" || km == "") {
    alert("ERROR - All fields must be filled up");
  }

  // Current Date
  let currentDate = document.getElementById("date");
  currentDate.innerHTML = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
});

// reset

resetBtn.addEventListener("click", function () {
  ticketPreview.classList.add("d-none");
  document.getElementById("name_surname").value = "";
  km.value = "";
  age.value = "over18";
});
