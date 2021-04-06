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
// - variabelen aanmaken
//  X Rekeningen aanmaken (dummy data)
//  X id nodig (dummy input)
//  X pin nodig (dummy input)
// x zoeken naar rekening met de id uit de input
// x checken: is de pin correct?
// x Saldo uit object halen
// x Saldo weergeven

const accounts = [
  { id: 1, name: "Tim", nummer: "INGB110000999911", pin: "1234", saldo: 250 }, // 0
  { id: 2, name: "Nina", nummer: "INGB110000999922", pin: "9876", saldo: 3300 }, // 1
  { id: 3, name: "Karel", nummer: "INGB110000999987", pin: "0001", saldo: 10 }, // 2
];

// SCENARIO 1 (happy path! 😃)

const idInput = 2;
const pinInput = "9876";

// DESIRED OUTPUT
// Uw saldo bedraagt: €3300

// console.log(accounts);

// SCENARIO 2 (unhappy path 🥵)

// const idInput = 2;
// const pinInput = "1111";

// DESIRED OUTPUT
// Uw pincode is niet correct, probeer het nog eens

let account = accounts[idInput - 1];

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
