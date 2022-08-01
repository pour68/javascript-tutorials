// local symbol
const localSymbol = Symbol("localId");
localSymbol.description;
localSymbol.toString();
localSymbol.valueOf();

// global symbol
const globalSymbol = Symbol.for("id");
const description = Symbol.keyFor(globalSymbol);
globalSymbol.toString();
globalSymbol.valueOf();

// symbol and object
const uniqueKey = Symbol("personalId");
const person = {
  id: 1,
  firstName: "Pouria",
  lastName: "Nayeb",
  email: "pouria-nayeb@gmail.com",
  phoneNumber: "09354425459",
  [uniqueKey]: "0011052978",
};

person[Symbol.for("id")] = "1112";
