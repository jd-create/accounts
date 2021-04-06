// 1. Functie eisen
// 2. Data modelleren
// 3. Stappenplan
// 4. Happy path
// 5. Unhappy
// 6. Opschonen

// Red (het werkt niet) ->
// Green (het werkt) ->
// Refactor (opschonen of verbeteren)

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
// x variabelen aanmaken
//  X Rekeningen aanmaken (dummy data)
//  X id nodig (dummy input)
//  X iban nodig (dummy input)
// - zoeken naar rekening met de iban uit de input
// x checken: is de pin correct?
// x Saldo uit object halen
// x Saldo weergeven

// const accounts = [
//   { id: 1, name: "Tim", iban: "INGB110000999911", pin: "1234", saldo: 250 }, // 0
//   { id: 2, name: "Nina", iban: "INGB110000999922", pin: "9876", saldo: 3300 }, // 1
//   { id: 3, name: "Karel", iban: "INGB110000999987", pin: "0001", saldo: 10 }, // 2
//   { id: 4, name: "Sjaan", iban: "INGB110000999989", pin: "0222", saldo: 10000 }, // 2
// ];
//
// // SCENARIO 1 (happy path! 😃)
//
// const ibanInput = "INGB110000999922";
// const pinInput = "9876";

// DESIRED OUTPUT
// Uw saldo bedraagt: €3300

// console.log(accounts);

// SCENARIO 2 (unhappy path 🥵)

// const ibanInput = "INGB110000999922";
// const pinInput = "1111";

// DESIRED OUTPUT
// Uw pincode is niet correct, probeer het nog eens

// let account;
//
// for (const element of accounts) {
//   if (element.iban === ibanInput) {
//     account = element;
//   }
// }
//
// if (account.pin === pinInput) {
//   const saldo = account.saldo;
//   console.log("Uw saldo bedraagt: €" + saldo);
// } else {
//   console.log("Uw pincode is niet correct, probeer het nog eens");
// }

// Geld storten
//Geld storten:

//    Rekening -> Object
//     id: number
//     naam: string
//     nummer: string
//     pin: string
//     saldo: number
// Rekeningen -> Array<Rekening>
//
// Input: Rekeningen, iban, pin, bedrag dat gestort wordt
// Output: Saldo opgehoogd met bedrag dat gestort werd + nieuw verhoogd saldo

// Stappen
// [x] variabelen aanmaken
//  [X] Rekeningen aanmaken (dummy data)
//  [X] iban nodig (dummy input)
// - zoeken naar rekening met de iban uit de input
// x checken: is de pin correct?
// x gestort bedrag uit de input verhogen bij het saldo uit het object
// x Verhoogd Saldo weergeven

const accounts = [
  { id: 1, name: "Tim", iban: "INGB110000999911", pin: "1234", saldo: 250 }, // 0
  { id: 2, name: "Nina", iban: "INGB110000999922", pin: "9876", saldo: 3300 }, // 1
  { id: 3, name: "Karel", iban: "INGB110000999987", pin: "0001", saldo: 10 }, // 2
  { id: 4, name: "Sjaan", iban: "INGB110000999989", pin: "0222", saldo: 10000 }, // 2
];

const ibanInput = "INGB110000999911";
const pinInput = "1234";
const depositSum = 25;
let saldoVoorStorten = 0;
const saldoNaStorten = depositSum + saldoVoorStorten;

// SCENARIO 1 (happy path! 😃)
// Uw saldo bedraagt: €3300 + €INPUT = €OUTPUT

let account;

for (const element of accounts) {
  if (element.iban === ibanInput) {
    account = element;
  }
}

if (account.pin === pinInput) {
  saldoVoorStorten = account.saldo;
  console.log("Uw hebt uw saldo verhoogt met €" + depositSum +  ", uw saldo bedraagt nu: €" + saldoNaStorten);
} else {
  console.log("Uw pincode is niet correct, probeer het nog eens");
}



// Geld opnemen
