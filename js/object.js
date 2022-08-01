// object
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

// object and array
let personKeys = Object.keys(person);
let personValues = Object.values(person);

// object and map
const personMap = Object.entries(person);
const personObject = Object.fromEntries([
  ["id", 1],
  ["firstName", "Pouria"],
]);

// create new object using an existing object as the prototype
let personObj = Object.create(person);
personObj.birthDate = new Date(1989, 06, 19);

// assign copies all properties from one or more source objects to a target object
const bookTarget = { title: "Harry Potter", genre: "Fantasy" };
const bookAuthor = { author: "J. K. Rowling" };
const bookISBN = { ISBN: "9780747532743" };
const book = Object.assign(bookTarget, bookAuthor, bookISBN); // bookTarget == book

Object.defineProperty(person, "birthdate", {
  value: new Date(1989, 06, 19),
});

Object.defineProperties(person, {
  isMale: {
    value: true,
    writable: true,
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

const descriptors = Object.getOwnPropertyDescriptors(person);
descriptors.phoneNumber.configurable;

const keys = Object.getOwnPropertyNames(person);
const symbolKeys = Object.getOwnPropertySymbols(person);

const prototype = Object.getPrototypeOf(person);

Object.preventExtensions(person);
Object.seal(person);
Object.freeze(person);

Object.isExtensible(person);
Object.isSealed(person);
Object.isFrozen(person);

// object constructor (constructor function)
