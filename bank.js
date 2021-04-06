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

const accounts = [
  { id: 1, name: "Tim", iban: "INGB110000999911", pin: "1234", saldo: 250 }, // 0
  { id: 2, name: "Nina", iban: "INGB110000999922", pin: "9876", saldo: 3300 }, // 1
  { id: 3, name: "Karel", iban: "INGB110000999987", pin: "0001", saldo: 10 }, // 2
  { id: 4, name: "Sjaan", iban: "INGB110000999989", pin: "0222", saldo: 10000 }, // 2
];

// SCENARIO 1 (happy path! 😃)

const ibanInput = "INGB110000999922"; // -> 1
const pinInput = "9876";

let account;

for (let index = 0; index < accounts.length; index = index + 1) {
  //   console.log("COUNTING:", index);
  //   console.log(accounts[index].iban, ibanInput);
  //   console.log(accounts[index].iban === ibanInput);
  if (accounts[index].iban === ibanInput) {
    account = accounts[index];
  }
}

// console.log(accounts[0].iban, ibanInput, accounts[0].iban === ibanInput);
// console.log(accounts[1].iban, ibanInput, accounts[1].iban === ibanInput);
// console.log(accounts[2].iban, ibanInput, accounts[2].iban === ibanInput);

// DESIRED OUTPUT
// Uw saldo bedraagt: €3300

// console.log(accounts);

// SCENARIO 2 (unhappy path 🥵)

// const idInput = 2;
// const pinInput = "1111";

// DESIRED OUTPUT
// Uw pincode is niet correct, probeer het nog eens

// let account = accounts[iban - 1];

// console.log(
//   "WHICH PIN DO WE NEED:",
//   account.pin,
//   pinInput,
//   account.pin === pinInput
// );

if (account.pin === pinInput) {
  console.log("CHECK!");
  const saldo = account.saldo;
  console.log("Uw saldo bedraagt: €" + saldo);
} else {
  console.log("Uw pincode is niet correct, probeer het nog eens");
}

// Geld storten
// Geld opnemen
