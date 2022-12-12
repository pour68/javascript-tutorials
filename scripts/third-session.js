let peopleArray = [
  {
    id: 1,
    fullName: "Pouria Nayeb",
    balance: 100_000,
    isGraduated: true,
  },
  {
    id: 2,
    fullName: "Aria Zamani",
    balance: 17_600,
    isGraduated: false,
  },
  {
    id: 3,
    fullName: "Aria Khodarahmi",
    balance: 75_000,
    isGraduated: true,
  },
];

// peopleArray.forEach((person, index, array) =>
//   console.log(person.fullName, index)
// );
// output: Pouria Nayeb 0 Aria Zamani 1 Aria Khodarahmi 2

// let peopleBalances = peopleArray.map((person, index, array) => person.balance);
// output: [100000, 17600, 75000]

// let peopleWithHighPayment = peopleArray.filter(
//   (person, index, array) => person.balance > 50_000
// );
// output: [{ id: 1, fullName: "Pouria Nayeb", balance: 100_000, isGraduated: true}, { id: 3, fullName: "Aria Khodarahmi", balance: 75_000, isGraduated: true }]

// let peopleWhoGraduate = peopleArray.filter((person) => person.isGraduated);
// output:  [{ id: 1, fullName: "Pouria Nayeb", balance: 100_000, isGraduated: true}, { id: 3, fullName: "Aria Khodarahmi", balance: 75_000, isGraduated: true }]

// let peopleStartWithAria = peopleArray.filter((person) =>
//   person.fullName.startsWith("Aria")
// );
// output:  [{ id: 2, fullName: "Aria Zamani", balance: 17_600, isGraduated: false }, { id: 3, fullName: "Aria Khodarahmi", balance: 75_000, isGraduated: true }]

// let person = peopleArray.find((person) => person.id === 2);
// output: { id: 2, fullName: "Aria Zamani", balance: 17_600, isGraduated: false }

// let personIndex = peopleArray.findIndex((person) => person.id === 2);
// output: 1

// let peopleFullNames = peopleArray.map((person) => person.fullName);
// output: ["Pouria Nayeb", "Aria Zamani", "Aria Khodarahmi"]
// let isExistInPeopleArray = peopleFullNames.includes("Aria Khodarahmi");
// output: true

// let isAtLeastOneGraduated = peopleArray.some((person) => person.isGraduated);
// output: true

// let isAllGraduated = peopleArray.every((person) => person.isGraduated);
// output: false

// let fillPeople = peopleArray.fill("aria");
// output: ["aria", "aria", "aria"]

// let totalBalance = peopleArray.reduce((total, item) => item.balance + total, 0);
// let totalBalanceFromRight = peopleArray.reduceRight(
//   (total, item) => item.balance + total,
//   0
// );
// output: 192600

// const shoppingCart = [
//   {
//     title: "xbox series s",
//     price: 9_500_000,
//     count: 2,
//   },
//   {
//     title: "sunsilk shampoo",
//     price: 52_100,
//     count: 1,
//   },
//   {
//     title: "nike ball",
//     price: 85_000,
//     count: 3,
//   },
// ];

// let totalPayment = shoppingCart.reduce(
//   (total, item) => total + item.price * item.count,
//   0
// );
// output: 19307100

// object => json
let employee = {
  fullName: "pouria nayeb",
  baseSalary: 25_000,
  overTime: 10,
  payPerHour: 25,
  gender: "male",
  birthDate: new Date(1989, 05, 20),
  getSalary: function () {
    return this.baseSalary + this.overTime * this.payPerHour;
  },
};

let employeeJSON = JSON.stringify(employee);
// output: {"fullName":"pouria nayeb","baseSalary":25000,"overTime":10,"payPerHour":25,"gender":"male","birthDate":"1989-06-19T20:30:00.000Z"}

let peopleJsonCollection = JSON.stringify(peopleArray);
// output: [{"id":1,"fullName":"Pouria Nayeb","balance":100000,"isGraduated":true},{"id":2,"fullName":"Aria Zamani","balance":17600,"isGraduated":false},{"id":3,"fullName":"Aria Khodarahmi","balance":75000,"isGraduated":true}]

let peopleCollection = JSON.parse(peopleJsonCollection);
console.log(peopleCollection);
// output: [{ "id": 1, "fullName": "Pouria Nayeb", "balance": 100000, "isGraduated": true }, { "id": 2, "fullName": "Aria Zamani", "balance": 17600, "isGraduated": false }, { "id": 3, "fullName": "Aria Khodarahmi", "balance": 75000, "isGraduated": true }]

// storage

// create
// localStorage.setItem("employee", employeeJSON);
// localStorage.setItem("people", peopleJsonCollection);

// get
// let jsonEmployee = localStorage.getItem("employee");

// update
// let employee1 = {
//   fullName: "shahab godarzi",
//   salary: 25_000,
//   overTime: 10,
//   payPerHour: 25,
//   gender: "male",
//   birthDate: new Date(2001, 11, 6),
//   getSalary: function () {
//     return this.salary + this.overTime * this.payPerHour;
//   },
// };

// localStorage.setItem("employee", JSON.stringify(employee1));

// delete
// localStorage.removeItem("employee");

// create
// sessionStorage.setItem("people", peopleJsonCollection);

// cookie
// let email = "AriaZamani@gmail.com";
// document.cookie = `email=${email}; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/`;

// Math object

// props
Math.PI;
Math.E;
Math.LN10;
Math.log2;
Math.log1p;
Math.LOG10E;
Math.LOG2E;
Math.SQRT1_2;
Math.SQRT2;

// methdos
let floor = Math.floor(-1.1); // -2
let round = Math.round(-1.1); // -1
let ceil = Math.ceil(-1.1); // -1
let absoluteValue = Math.abs(-1); // 1
let sqrt = Math.sqrt(25); // 5
let power = Math.pow(2, 2); // 4
let random = Math.random(); // [0, 1)
let min = Math.min(10, 15, -1, 32); // -1
let max = Math.max(10, 15, -1, 32); // 32
