// pattern:

// function functionName(parameter) {
//   ...
// }

// functionName(argument);

/* Example 1 */

// step 1: define function
// function log() {
//   console.log("log something");
// }

// step 2: invoke function
// log();

/* Example 2 */

// step 1: define function
// const square = (width) => width * width;

// step 2: invoke function
// console.log(square(5));

/* Named function */
// function cube(number) {
//   return number * number * number;
// }

// function min(collection) {
//   let min = collection[0];

//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i] < min) {
//       min = collection[i];
//     }
//   }

//   return min;
// }

/* arrow function */
// const toFahrenheit = (celciusTemperature) => celciusTemperature * (9 / 5) + 32;

// const max = (collection) => {
//   const max = collection[0];

//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i] > max) {
//       max = collection[i];
//     }
//   }

//   return max;
// };

/* auto invoked function */
// (function (rows) {
//   let container = "";

//   for (let row = 1; row <= rows; row++) {
//     for (let col = 1; col <= row; col++) {
//       container += "*";
//     }
//     container += "\n";
//   }

//   console.log(container);
// })(5);

// (function (a, b) {
//   let temp;

//   temp = a;
//   a = b;
//   b = temp;

//   console.log({ a, b });
// })(10, 11);

/* recursive function */
// const factorial = (number) => {
//   if (number === 1) return 1;

//   return number * factorial(number - 1);
// };

// pos   0 1 2 3 4 5 6 ...
// value 0 1 1 2 3 5 8 ...

// const fibonacci = (position) => {
//   if (position === 0) return 0;
//   if (position === 1) return 1;

//   return fibonacci(position - 1) + fibonacci(position - 2);
// };

/* factory function */
// const person = (fullName, birthdate, gender) => {
//   return {
//     fullName,
//     birthdate,
//     gender,
//   };
// };

/* constructor function */
// function Employee(
//   fullName,
//   birthdate,
//   gender,
//   baseSalary,
//   overTime,
//   payPerHour
// ) {
//   this.fullName = fullName;
//   this.birthdate = birthdate;
//   this.gender = gender;
//   this.getWage = function () {
//     return baseSalary + overTime * payPerHour;
//   };
// }

// const pouriaNayebEmployee = new Employee(
//   "Pouria Nayeb",
//   new Date("1989/06/18"),
//   "male",
//   1000,
//   12,
//   25
// );

/* generator function */
/* Example 1 */
// function* generator(number) {
//   yield number;
//   yield number + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next());
// // expected output: 20
// console.log(gen.next());

/* Example 2 */
// function* anotherGenerator(i) {
//   yield i + 1;
// }

// function* generator(i) {
//   yield i;
//   yield* anotherGenerator(i);
//   yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next()); // {value: 20, isDone: false}

/* call, apply and bind */
// const teacher = {
//   details: function (country, city) {
//     return `${this.firstName} ${this.lastName},${country},${city}`;
//   },
// };

// const pouriaObject = {
//   firstName: "Pouria",
//   lastName: "Nayeb",
// };

// teacher.details.call(pouriaObject, "Iran", "Tehran");
// teacher.details.apply(pouriaObject, ["Iran", "Tehran"]);
// let details = teacher.details.bind(pouriaObject, "Iran", "Tehran");

/* function closure */

// const add = (function () {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();
