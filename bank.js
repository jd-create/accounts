// Functie eisen -> Data modelleren -> Stappenplan

// Saldo opvragen
// Rekening -> Object
//     id: number
//     naam: string
//     nummer: string
//     pin: string
//     saldo: number
// Rekeningen -> Array<Rekening>
//
// Input: Rekeningen, id, pin
// Output: Saldo

// Stappen
// - variabelen aanmaken
//  X Rekeningen aanmaken (dummy data)
//  X id nodig (dummy input)
//  X pin nodig (dummy input)
// x zoeken naar rekening met de id uit de input
// x checken: is de pin correct?
// - Saldo uit object halen
// - Saldo weergeven

const accounts = [
  { id: 1, name: "Tim", nummer: "INGB110000999911", pin: "1234", saldo: 250 },
  { id: 2, name: "Nina", nummer: "INGB110000999922", pin: "9876", saldo: 3300 },
  { id: 3, name: "Karel", nummer: "INGB110000999987", pin: "0001", saldo: 10 },
];

// SCENARIO 1 (happy path! 😃)

// const idInput = 2;
// const pinInput = "9876";

// DESIRED OUTPUT
// Uw saldo bedraagt: €3300

// console.log(accounts);

// SCENARIO 2 (unhappy path 🥵)

const idInput = 2;
const pinInput = "1111";

// DESIRED OUTPUT
// Uw pincode is niet correct, probeer het nog eens

let account;

switch (idInput) {
  case 1:
    account = accounts[0];
    break;
  case 2:
    account = accounts[1];
    break;
  case 3:
    account = accounts[2];
    break;

  default:
    account = null;
    break;
}

console.log(
  "WHICH PIN DO WE NEED:",
  account.pin,
  pinInput,
  account.pin === pinInput
);

if (account.pin === pinInput) {
  console.log("CHECK!");
  const saldo = account.saldo;
  console.log("Uw saldo bedraagt: €" + saldo);
} else {
  console.log("Uw pincode is niet correct, probeer het nog eens");
}

// Geld storten
// Geld opnemen
