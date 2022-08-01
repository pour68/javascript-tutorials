let firstName = undefined;
let lastName = null;

// both of undefined and null are falsy values
// both of undefined and null are loosely equal
console.log(firstName == lastName);

const sayHi = (hi = "Hi") => {
  console.log(hi);
};

sayHi(undefined); // Hi
sayHi(null); // null
