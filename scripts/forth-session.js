// Symbol
// local symbol
const localSymbol = Symbol("localId");
// props
localSymbol.description;

// // methods
localSymbol.toString();
localSymbol.valueOf();

// global symbol
const globalSymbol = Symbol.for("id");
const description = Symbol.keyFor(globalSymbol);
globalSymbol.toString();
globalSymbol.valueOf();

// Date

const currentDate = new Date();

// Function

const minValue = (...array) => {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
};

const maxValue = (...array) => {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
};

// 1! = 1
// (n)! = n * (n - 1)!
const factorial = (n) => {
  if (n === 1) return 1;

  return n * factorial(n - 1);
};

// ind: 0 1 2 3 4 5 6 ...
// val: 0 1 1 2 3 5 8 ...

// fib(n) = fib(n-1) + fib(n-2)
const fibonacci = (index) => {
  if (index === 0) return 0;

  if (index === 1) return 1;

  return fibonacci(index - 1) + fibonacci(index - 2);
};

// factory function
function Person(firstName, lastName, nationalId) {
  return {
    firstName,
    lastName,
    nationalId,
  };
}
// const Aria = Person("aria", "zamani", "001025415855");

// constructor function
function Employee(fullName, position, registerDate) {
  this.fullName = fullName;
  this.position = position;
  this.registerDate = registerDate;
}
const Aria = new Employee("aria zamani", "Consultant", new Date(2001, 10, 02));

// Class
// class PersianDate {
//   constructor() {
//     this.currentDate = new Date();
//   }

//   get() {
//     return this.currentDate.toLocaleDateString("fa-IR");
//   }
// }

// let pd = new PersianDate();
// pd.get();

// class PersianDate1 {
//   constructor() {}

//   static get() {
//     let currentDate = new Date();

//     return currentDate.toLocaleDateString("fa-IR");
//   }
// }

// let pd1 = PersianDate1.get();
// console.log(pd1);

// Object

const person = {
  id: 1,
  firstName: "Pouria",
  lastName: "Nayeb",
  email: "pouria-nayeb@gmail.com",
  phoneNumber: "09354425459",
  [Symbol("id")]: "001",
};

// get
person.firstName;
person["firstName"];

// set
person.id = 35;

// props
Object.constructor;
Object.prototype.fullName = "Pouria Nayeb";

// methods
let personKeys = Object.keys(person);
let personValues = Object.values(person);

const personMap = Object.entries(person);
const personObject = Object.fromEntries([
  ["id", 1],
  ["firstName", "Pouria"],
]);

let personObj = Object.create(person);
personObj.birthDate = new Date(1989, 06, 19);

const bookTarget = { title: "Harry Potter", genre: "Fantasy" };
const bookAuthor = { author: "J. K. Rowling" };
const bookISBN = { ISBN: "9780747532743" };

const book = Object.assign(bookTarget, bookAuthor, bookISBN);

Object.defineProperty(person, "birthdate", {
  value: new Date(1989, 06, 19),
});

Object.defineProperties(person, {
  isMale: {
    value: true,
    writable: false,
  },
  job: {
    value: "programmer",
  },
});

const descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
descriptor.value;
descriptor.writable;
descriptor.configurable;
descriptor.enumerable;

Object.seal(person);

const descriptors = Object.getOwnPropertyDescriptors(person);
descriptors.phoneNumber.configurable;
