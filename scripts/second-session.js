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
  // not elgible for loand
}

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

// loops

// for (initializer; condition; iterator) {}

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// boolean props and methods

let isSummer = true;

// let isSummer = new Boolean(true);
// console.log(isSummer.valueOf());

isSummer.toString();

// number props and methods
let iphonePrice = 999.99;

// let price = new Number(999.99);
// price.valueOf();

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
// let age = 20;
// if (age > 18) {
//   // adult content
// } else {
//   // teenager content
// }

// logical (! && ||)
// let isFemale = false;
// let isApproved = isFemale || age >= 18;

// // bitwise (& | ^ ~ << >> >>>)
// let number = 5;
// let value = 1;

// string props and methods
let statement = "Aria is a programmer.";

// props
statement.length;

// methods
// statement.toUpperCase();
// statement.toLowerCase();
// statement.replace("Aria", "Pouria"); // Pouria is a programmer.
// statement.split(" "); // ["Aria", "is", "a", "programmer."]
// statement.indexOf("is"); // 5
// statement.substring(0, 7); // Aria is
// statement.slice(8); // a programmer.
// statement.substring(0, 7); // Aria is
// statement.concat(" and also a great person"); // Aria is a programmer. and also a great person
// statement.includes("Aria"); // true
// statement.startsWith("Aria"); // true
// statement.endsWith("programmer."); // true
// statement.search("is");
// statement.charCodeAt(1);

// let fullName = "   aria zamani    ";
// fullName.trim(); // aria zamani
// fullName.trimStart();
// fullName.trimEnd();

// array props and methods
//                 0      1        2        3
let carBrands = ["BMW", "Benz", "Porche", "TOYOTA"];

// get
// carBrands[1];

// set
// carBrands[2] = "Aria";

// for (let i = 0; i < carBrands.length; i++) {
//   console.log(carBrands[i]);
// }

// business class
// carBrands.forEach((item) => console.log(item));

// props
carBrands.length; // 4

// methods
carBrands.push("Ferrari");
carBrands.pop();

carBrands.unshift("Lamborgini");
carBrands.shift();

// carBrands.concat(["Alpha Romeo", "Hundai"]);

carBrands.indexOf("Porche");
carBrands.join("-");
carBrands.slice(0, 2); // ["BMW", "Benz"]
// carBrands.splice(2, 1); // ["BMW", "Benz", "TOYOTA"];

carBrands.includes("Benz"); // true

Array.from(carBrands.entries()); // [[0, 'BMW'], [1, 'Benz'], [2, 'Porche'], [3, 'TOYOTA']]
Array.from(carBrands.keys()); // [0, 1, 2, 3]
Array.from(carBrands.values()); // ['BMW', 'Benz', 'Porche', 'TOYOTA']

carBrands.sort();
carBrands.reverse();

// for (const value of carBrands) {
//   console.log(value);
// }

// for (const key in carBrands) {
//   console.log(key);
// }

let people = [
  {
    fullName: "Pouria Nayeb",
    balance: 100_000,
    isGraduated: true ? "graduate" : "not-graduate",
  },
  {
    fullName: "Aria Zamani",
    balance: 11_600,
    isGraduated: false ? "graduate" : "not-graduate",
  },
  {
    fullName: "Aria Khodarahmi",
    balance: 50_000,
    isGraduated: true ? "graduate" : "not-graduate",
  },
];

for (const person of people) {
  console.log(
    person.fullName,
    person.balance.toLocaleString("en-US"),
    person.isGraduated
  );
}
