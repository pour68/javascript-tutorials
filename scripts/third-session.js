let people = [
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

// people.forEach((item, index, array) => console.log(item.fullName, index));

// let peopleBalances = people.map((item, index, array) => item.balance);

// let peopleWithHighPayment = people.filter((item) => item.balance > 50_000);
// let peopleWhoGraduate = people.filter((item) => item.isGraduated);
// let peopleWithStartCharAria = people.filter((item) =>
//   item.fullName.startsWith("Aria")
// );

// let person = people.find((item) => item.id === 2);

// let personIndex = people.findIndex((item) => item.id === 2);

// let peopleFullNames = people.map((item, index, array) => item.fullName);
// let isExistInPeopleCollection = peopleFullNames.includes("Aria Khodarahmi");

// let isAtLeastOneGraduated = people.some((item) => item.isGraduated);
// let isAllGraduated = people.every((item) => item.isGraduated);

// let fillPeople = people.fill("aria");

// let totalBalance = people.reduce((total, item) => item.balance + total, 0);
// let totalBalanceFromRight = people.reduceRight(
//   (total, item) => item.balance + total,
//   0
// );

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

// object => json
let employee = {
  fullName: "pouria nayeb",
  salary: 25_000,
  overTime: 10,
  payPerHour: 25,
  gender: "male",
  birthDate: new Date(1989, 05, 20),
  getSalary: function () {
    return this.salary + this.overTime * this.payPerHour;
  },
};

// let employeeJSON = JSON.stringify(employee);
let peopleJsonCollection = JSON.stringify(people);

// json => object
// let peopleArray = JSON.parse(peopleJsonCollection);

// storage

// create
// localStorage.setItem("employee", employeeJSON);
// localStorage.setItem("people", peopleJsonCollection);

// get
// let jsonEmployee = localStorage.getItem("employee");

// update
// let employee1 = {
//   fullName: "aria zamani",
//   salary: 1_000,
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
// let fullName = "AriaZamani@gmail.com";
// document.cookie = `email=${fullName}; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/`;

// Math

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
