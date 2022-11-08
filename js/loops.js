// pattern
// for (initializer; condition; iterator) {}

//                0        1        2        3       4
const names = ["Pouria", "Ali", "Maryam", "Hamed", "Sara"];

// loop through each name over index
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// loop through each name over index
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// loop through each name over index
// let i = 0;
// do {
//   console.log(names[i]);
//   i++;
// } while (i < names.length);

// loop through each name
// names.forEach((name) => {
//   console.log(name);
// });

// object
const employee = {
  firstName: "Pouria",
  lastName: "Nayeb",
  birthdate: new Date(1989, 06, 19),
  salary: "$25_000",
  experienceYear: 12,
  fullTime: true,
};

// loop through each value
for (const value of Object.values(employee)) {
  console.log(value);
}

// loop through each property
for (const property in employee) {
  console.log(property);
}
