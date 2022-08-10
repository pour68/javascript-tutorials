// array and fixed datatypes
const fruits = ["apple", "pineapple", "grapes", "orange", "cherry"];
const marks = [10, 20, 16.5, 14, 18];

// array mixed datatypes
const mix = ["harry potter", 12, true, Symbol("id")];

// array and object
const users = [
  {
    userId: 1,
    email: "rashid_amini@yahoo.com",
    password: "G$12!&jh^",
    phoneNumber: "0935xxxxx",
    balance: 1_200_000,
    token: "1211",
    isMale: true,
  },
  {
    userId: 2,
    email: "sahar_kojave@gmail.com",
    password: "K$18!&hj^",
    phoneNumber: "0912xxxxx",
    balance: 500_000,
    token: "1822",
    isMale: false,
  },
  {
    userId: 3,
    email: "alisadeghi@yahoo.com",
    password: "U!65$#fg^",
    phoneNumber: "0921xxxxx",
    balance: 15_000_000,
    token: "1511",
    isMale: true,
  },
];

// array as an object
const fruitsObj = new Array("apple", "pineapple", "grapes", "orange", "cherry");
fruitsObj.valueOf();

// props
fruits.length;
fruits.constructor;

Array.prototype.fruitsCount = fruits.length;
fruits.fruitsCount;

// methods

// crud

// create
fruits.push("sourcherry");
fruits.unshift("banana");

// read
for (const fruit of fruits) {
  console.log(fruit);
}

for (const mark of marks) {
  console.log(mark);
}

// update
fruits.splice(1, 2, "watermelon", "melon", "papaya", "dragon");

// delete
fruits.pop();
fruits.shift();

// sorting

// asc
const sortedFruits = fruits.sort();
const ascSortedMarks = marks.sort((a, b) => a - b);

// desc
const reverseFruits = fruits.reverse();
const descSortedMarks = marks.sort((a, b) => b - a);

// cut, concat and join
const partOfFruits = fruits.slice(2, 4);

const fruitsAndMarks = fruits.concat(marks);
const fruitsAndMarksAndMix = fruits.concat(marks, mix);

const fruitsJoinedByDash = fruits.join("-");

// search by index
const appleIndex = fruits.indexOf("apple");
const cherryIndex = fruits.lastIndexOf("cherry");

// others
const keys = fruits.keys();
const fruitsMap = fruits.entries();
const copyOfFruits = fruits.copyWithin(0, 3);
fruits.toString();

Array.isArray(fruits);

let arrayOfDoubles = Array.from([1, 2, 3], (x) => x * 2);
let arrayOfCharacters = Array.from("Pouria");

// high order methods

fruits.forEach((fruit) => {
  console.log(fruit);
});

const halfOfMarks = marks.map((mark) => mark / 2);

const richUsers = users.filter((user) => user.balance > 1_000_000);

const rashidAminiUser = users.find((user) => user.userId === 1);

const IndexOf20InMarks = marks.findIndex((mark) => mark === 20);

const is20MarkExist = marks.includes(20);
const isAllValuesPositive = marks.every((mark) => mark > 0);
const hasAtLeastOne20 = marks.some((mark) => mark === 20);

const fillArray = fruits.fill("value", 0, fruits.length);

const sum = marks.reduce((mark, total) => {
  total += mark;

  return total;
}, 0);

const total = marks.reduceRight((mark, total) => {
  total += mark;

  return total;
}, 0);
