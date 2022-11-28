// make decision statements
let isWinter = true;
if (isWinter) {
  // wear worm clothes
} else {
  // wear normal clothes
}

let balance = 3_000_000;
let hasCrime = false;

if (balance > 1_000_000 && !hasCrime) {
  // eligible for loan
} else {
  // not elgible for loan
}

// example 1: payment based on account type

let price = 50_000;
let accountType = "Golden";
let off;
switch (accountType) {
  case "Golden":
    off = 10_000;
    break;
  case "Silver":
    off = 5_000;
    break;
  case "Bronze":
    off = 1_000;
    break;
  default:
    off = 0;
    break;
}

const finalPrice = price - off;

// example 2: salary per position

let baseSalary;
let payPerHour;
let overTime = 15;
let position = "Programer";
switch (position) {
  case "CEO":
    baseSalary = 100_000;
    payPerHour = 50;
    break;
  case "Manager":
    baseSalary = 50_000;
    payPerHour = 35;
    break;
  case "Programer":
    baseSalary = 25_000;
    payPerHour = 25;
    break;
  case "Employee":
    baseSalary = 5_000;
    payPerHour = 10;
    break;
  default:
    baseSalary = 1_000;
    payPerHour = 5;
    break;
}

let finalPayment = baseSalary + overTime * payPerHour;

// example 3: move by dice

// let movement;
// let dice = 6;
// switch (dice) {
//   case 1:
//     movement = 1;
//     break;
//   case 2:
//     movement = 2;
//     break;
//   case 3:
//     movement = 3;
//     break;
//   case 4:
//     movement = 4;
//     break;
//   case 5:
//     movement = 5;
//     break;
//   default:
//     movement = 6;
//     break;
// }

// loops

// pattern: for (initializer; condition; iterator) {}
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// pattern: initializer while(condition) { ... iterator }
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// pattern: initializer do { ... iterator } while(condition);
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// boolean props and methods

// object literal
let isSummer = true;

// let isSummer = new Boolean(true);
// console.log(isSummer.valueOf());

// isSummer.toString();

// number props and methods
let iphonePrice = 999.99;

// let iphonePrice = new Number(999.99);
// iphonePrice.valueOf();

iphonePrice.toFixed(2);
iphonePrice.toPrecision(5);
iphonePrice.toExponential(2);
iphonePrice.toString();
iphonePrice.toLocaleString("en-US", { style: "currency", currency: "USD" });

// operators
// arithmetic (+ - * / % ** ++ --)
let width = 5;
let height = 2;

// let addition = width + height;
// let subtraction = width - height;
// let multiplication = width * height;
// let division = width / height;
// let remainder = width % height;
// let exponentiation = width ** height;
// let widthIncrement = width++;
// let heightDecrement = --height;

// assignment (+= -= *= /= %= **= <<= >>= >>>= &= |= ^=)

// width += 2; // width = width + 2;
// width -= 2;
// width *= 2;
// width /= 2;
// width %= 2;
// width **= 2;

// comparison (> >= < <= == === != !==)
let age = 20;
if (age > 18) {
  // adult content
} else {
  // teenager content
}

// logical (! && ||)
// let isFemale = false;
// let isApproved = isFemale || age >= 18;

// // bitwise (& | ^ ~ << >> >>>)
let number = 5;
let value = 1;

// string props and methods
//               012345678
let statement = "Aria is a programmer.";

// props
statement.length;

// methods
statement.toUpperCase();
statement.toLowerCase();
statement.replace("Aria", "Pouria"); // output: Pouria is a programmer.
statement.split(" "); // output: ["Aria", "is", "a", "programmer."]
statement.indexOf("is"); // output: 5
statement.substring(0, 7); // output: Aria is
statement.slice(8); // output: a programmer.
statement.concat(" and also a great person"); // output: Aria is a programmer. and also a great person
statement.includes("Aria"); // output: true
statement.startsWith("Aria"); // output: true
statement.endsWith("programmer."); // output: true
statement.search("is"); // output: 5
statement.charCodeAt(1);

let fullName = "   aria zamani    ";
fullName.trim(); // output: aria zamani
fullName.trimStart();
fullName.trimEnd();

// array props and methods
// index:          0      1        2         3
let carBrands = ["BMW", "Benz", "Porche", "TOYOTA"];

// get
carBrands[1];

// set
carBrands[2] = "KIA";

for (let i = 0; i < carBrands.length; i++) {
  console.log(carBrands[i]);
}

// business class
carBrands.forEach((value) => console.log(value));

// props
const countOfBrand = carBrands.length; // output: 4

// methods
// carBrands.push("Ferrari"); // output: ["BMW", "Benz", "Porche", "TOYOTA", "Ferrari"];
// carBrands.pop(); // output: ["BMW", "Benz", "Porche"]

// carBrands.unshift("Lamborgini"); // output: ["Lamborgini", "BMW", "Benz", "Porche", "TOYOTA"]
// carBrands.shift(); // output: ["Benz", "Porche", "TOYOTA"]

// const cars = carBrands.concat(["Alfa Romeo", "Hundai"]);
// output: ["BMW", "Benz", "Porche", "TOYOTA", "Alpha Romeo", "Hundai"]

carBrands.indexOf("Porche"); // output: 2
carBrands.join("-"); // output: BMW-Benz-Porche-TOYOTA
const germanCars = carBrands.slice(0, 2); // output: ["BMW", "Benz"]
const remainingCars = carBrands.splice(2, 1); // output: ["BMW", "Benz", "TOYOTA"];

carBrands.includes("Benz"); // output: true

Array.from(carBrands.keys()); // output: [0, 1, 2, 3]
Array.from(carBrands.values()); // output: ['BMW', 'Benz', 'Porche', 'TOYOTA']
Array.from(carBrands.entries()); // output: [[0, 'BMW'], [1, 'Benz'], [2, 'Porche'], [3, 'TOYOTA']]

carBrands.sort();
carBrands.reverse();

for (const value of carBrands) {
  console.log(value);
}

for (const key in carBrands) {
  console.log(key);
}

// example 1: list of mobile oses

let mobileOSes = ["Andriod", "Ios"];

for (const mobileOS of mobileOSes) {
  // iterate through each mobile os
}

// example 2: list of genres

let genres = [
  { id: 1, title: "action" },
  { id: 2, title: "adventure" },
  { id: 3, title: "comedy" },
  { id: 4, title: "horror" },
  { id: 5, title: "musicals" },
  { id: 6, title: "mystery" },
  { id: 7, title: "romance" },
  { id: 8, title: "science fiction" },
  { id: 9, title: "sports" },
  { id: 10, title: "thriller" },
  { id: 11, title: "Western" },
  { id: 12, title: "fanatsy" },
];

for (const genre of genres) {
  // iterate through each genre
}
