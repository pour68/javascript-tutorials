// examples of string literal
let fullName = "Pouria Nayeb";
let address = "Iran, Tehran, ...";
let phoneNumber = "09354425459";
let fieldOfStudy = "Mathematic";
let email = "pouria-nayeb@gmail.com";
let bookTitle = "Harry Potter and the Chamber of Secrets";
let movieName = "Fast and Furious";
let productCode = "mk-121";
let keywords = "HTML, CSS, SASS, JS, React";

// string as object
let fullNameObject = new String("Pouria Nayeb");
fullNameObject.valueOf();

// props
const lengthOfFullName = fullName.length;
fullName.constructor;
String.prototype.firstName = "Pouria";
String.arguments;
String.caller;
String.length;
String.name;

// methods

// part 1
const city = "istanbul";
city.toLowerCase();
city.toUpperCase();
city.toLocaleLowerCase("en-US");
city.toLocaleUpperCase("TR");

city.trim();

city.charAt(2);

city.concat("is a beautiful city.");

city.repeat(3);

city.localeCompare("istanbul");

city.charCodeAt(0);

// part 2
const statement = "JavaScript is great programming language and great tool.";

statement.startsWith("JavaScript");
statement.includes("great");
statement.endsWith("language.");

statement.indexOf("g");
statement.lastIndexOf("g");
statement.search(/javascript/gi);

statement.replace("great", "best");
statement.replace(/great/g, "best");

statement.match(/great/g);

statement.split(" ");

// part 3
statement.slice(0, 10);
statement.slice(11);
statement.slice(-1);
statement.slice(-5, -1);

statement.substring(0, 10);
statement.substring(11);

statement.substr(0, 19);
statement.substr(11);
statement.substr(-5);

String.fromCharCode("72", "105");
String.fromCodePoint(72, 105);

String.raw({ raw: ["foo", "bar", "baz"] }, 2 + 3, "Java");
String.raw({ raw: "test" }, 0, 1, 2);

let id = "5";
id.padEnd(4, "x");
id.padStart(4, "x");

String.apply();
String.bind();
String.call();
String.toString();

// template string
let programmer = "Pouria";
let place = "world";
let phrase = `${programmer} is one of the best programmer in the ${place}.`;
