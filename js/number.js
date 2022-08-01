// number literal
let userId = 10;
let numberInStock = 21;
let totalMen = 126;

let price = 21.5;
let weight = 62.5;
let height = 172.65;
let temperature = -21.7;
let average = 17.5;
let rating = 4.8;
let mark = 13.75;

let scientificNotation = 1.2e5;

let hexadecimal = 0x1110;

// number as object
let userIdObject = new Number(10);
userIdObject.valueOf();

// props
userId.constructor;

Number.prototype.PI = 3.14;

Number.MIN_VALUE;
Number.MAX_VALUE;

Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;

Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

Number.EPSILON;

Number.NaN;

Number.arguments;
Number.caller;
Number.length;
Number.name;

// methods

// part 1
Number.isFinite(25);
Number.isInteger(100.25);
Number.isNaN(Number.NaN);
Number.isSafeInteger(1000);

Number.parseInt("25");
Number.parseInt("101", 2);

Number.parseFloat("17.56");

// part 2
let volume = 135.1566;

volume.toPrecision(4);
volume.toExponential(3);
volume.toFixed(2);

volume.toString();

volume.toLocaleString("fa-IR");

// part 3
let number = 5;
number.toString(2);

let salary = 126_500.256;
salary.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
salary.toLocaleString("en-UK", { maximumSignificantDigits: 3 });
salary.toLocaleString("en-UK", { maximumFractionDigits: 3 });

console.log(salary.toLocaleString("en-UK", { maximumFractionDigits: 2 }));

Number.apply();
Number.bind();
Number.call();
Number.toString();

// store number in memory
