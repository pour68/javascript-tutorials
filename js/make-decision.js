// if else
let balance = 3_450_000;
let hasCrime = false;

if (balance > 1_000_000 && !hasCrime) {
  // user is eligible for loan give the loan
} else {
  // reject proposal
}

// if if else else
let mark = 90.5;
if (mark < 20) console.log("F");
else if (mark < 40) console.log("E");
else if (mark < 60) console.log("D");
else if (mark < 80) console.log("C");
else if (mark < 90) console.log("B");
else console.log("A");

// ternary
let eligible = mark > 12 ? "pass" : "failure";

// switch case
let credit = 1_000_000;
let userLevel = "golden";
let off;

switch (userLevel) {
  case "bronze":
    off = 25_000;
    break;
  case "silver":
    off = 50_000;
    break;
  case "golden":
    off = 100_000;
    break;
  default:
    off = 0;
    break;
}

let payment = credit - off;
