// number

// integer
let age = 31;
let ram = 16;
let cpuCatch = 256;
let speed = 90;
let numberInStock = 10;
let userId = 15;
let size = 42;
let releaseYear = 2019;

// float
let height = 1.76;
let width = 10.25;
let temprature = 10.5;
let price = 999.99;
let volume = 10.5;

const PI = 3.14;

// scientific notation
let lightSpeed = 3e5; // 3x10^5
let weight = 1.4e4; // 14000
let gravityForce = 9.8; // 9.8

// string
let address = "Iran, Tehran, Shariati st., Moallem st.";
let fullName = "Pouria Nayeb";
let username = "pour68";
let email = "pour68@gmail.com";
let gameConsole = "xbox series s";
let job = "programmer";
let carName = "benz cls";
let phoneNumber = "09354425459";
let nationalId = "0011052847";
let bookTitle = "harry potter";
let movieTitle = "Titanic";
let natinality = "Iranian";
let statement = 'It\'s seems you are a "programmer"';
let digitalCoin = "XRP";
let phrase = "my name is " + fullName + " and I'm a " + job + " and teacher.";

const ISBN = "124512545554454";

// boolean
let isMale = true;
let isAdult = false;
let hasLicense = true;
let hasDrivingLicense = true;
let isConfirmed = false;
let isExpert = true;
let hasSister = true;

// null
let ariaBrother = null;

// undefined
let myCat = undefined;

// symbol
const description = "aria-id";
let ariaId = Symbol(description);

// object: key/value collection of related data
let person = {
  firstName: "Aria",
  lastName: "Zamani",
  gender: "Male",
  bloodType: "B+",
  eyeColor: "Brown",
  walk: function () {},
  eat: function () {},
};

let employee = {
  fullName: "Aria Zamani",
  baseSalary: 2_000,
  overTime: 18,
  payPerHour: 15,
  getWage: function () {
    return this.baseSalary + this.overTime * this.payPerHour;
  },
};

let car = {
  brand: "Toyota",
  model: "lancrouser",
  releaseYear: 2010,
  color: "black",
  highestSpeed: 220,
  start: function () {},
  stop: function () {},
  run: function () {},
};

let table = {
  width: 4.5,
  base: 12.5,
  height: 1.2,
  getVolume: function () {
    return this.width * this.base * this.height;
  },
};

// array: collection of data
let students = ["mohammad darabi", "aria zamani", "nava mohammadi"];
let carBrands = ["BMW", "Benz", "Porche", "TOYOTA"];

let grades = [10, 12.5, 14.75, 18, 20];

let gameConsoles = [
  { title: "ps4", releaseYear: 2013 },
  { title: "ps5", releaseYear: 2020 },
  { title: "xbox series x", releaseYear: 2020 },
  { title: "xbox series s", releaseYear: 2020 },
  { title: "nintendo switch oled", releaseYear: 2019 },
];

let people = [
  { fullName: "Pouria Nayeb", balance: 100_000, isGraduated: true },
  { fullName: "Aria Zamani", balance: 11_600, isGraduated: false },
  { fullName: "Aria Khodarahmi", balance: 50_000, isGraduated: true },
];

let miscellaniousData = ["aria zamani", true, 12.5];

// date: get/set date

// get
let currentDate = new Date();

// set
let targetDate = new Date(2023, 2, 10);

// function: encapsulate set of related statements
function getName(name) {
  return name;
}

function toFahrenheit(tempature) {
  return tempature * 1.8 + 32;
}

function getSalary(baseSalary, overTime, payPerHour) {
  return baseSalary + overTime * payPerHour;
}

// class: blueprint of an object
class Human {
  constructor(name, gender, birthdate) {
    this.name = name;
    this.gender = gender;
    this.birthdate = birthdate;
  }

  getDetails() {
    return this.name + " " + this.gender + " " + this.birthdate;
  }
}

// get object from class
const aria = new Human("aria zamani", "male", new Date(2001, 10, 5));
const pouria = new Human("pouria nayeb", "male", new Date(1989, 5, 19));

console.log(aria.getDetails());
console.log(pouria.getDetails());

class Book {
  constructor(title, isbn, author) {
    this.title = title;
    this.isbn = isbn;
    this.author = author;
  }

  getDetails() {
    return this.title + " " + this.isbn + " " + this.author;
  }
}

let harryPotterBook = new Book(
  "Harry Potter and the Deathly Hallows",
  "9788893814560",
  "J. K. Rowling"
);

console.log(harryPotterBook.getDetails());
