# JavaScript

## What is JavaScript?

- JavaScript is high-level dynamic-type general-purpose scripting language, in another words JavaScript called interpreted programming language of the web that can update and change both html and css, it also suitable for calculate, manipulate and validate data.
- Multi-paradigm: event-driven, functional, imperative, procedural, object-oriented programming

## JavaScript history

- Founder: Brendan Eich (American computer programmer and technology executive born in july 4, 1961)
- Invention-Year: December 4, 1995
- ECMA-Standard: 1997
- Story: Brendan Eich created Mocha which became LiveScript, and later JavaScript, It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8.

### What is ECMA?

ECMAScript is a standard specification for a scripting language.

## What is difference between JavaScript and ECMAScript?

JavaScript is a general-purpose scripting language that conforms to the ECMAScript specification. The ECMAScript specification is a blueprint for creating a scripting language. JavaScript is an implementation of that blueprint. On the whole, JavaScript implements the ECMAScript specification as described in ECMA-262.

## application types you can build with JavaScript

website - web app. - server app. - games - real-time networking app. - desktop/mobile/smartwatch app. - IoT - AI - command-line tools

## JavaScript browser engines

V8 - SpiderMonkey - JavaScriptCore - Chakra(obsolete)

---

## Requirements

Advance text editor(VSCode - Atom - Sublime text - ...) - Web Browser (Chrome - Firefox - Edge - Opera - ...)

## VSCode Extensions

Prettier - IntelliCode - JavaScript (ES6) code snippets - ESLint

## JavaScript file extension

.js

## File/Folder structure convention

js - scripts

---

## Programming case types(case styles|convention name)

- __kebab case__: first-name - last-name - ...
- __camel case__: firstName - lastName - ...
- __snake case__: first_name - last_name - ...
- __pascal case__: FirstName - LastName - ...
- __macro case__: FIRST_NAME - LAST_NAME - ...
- __train case__: First-Name - Last-Name - ...
- __cobol case__: FIRST-NAME - LAST-NAME - ...
- __flatcase__: firstname - lastname - ...
- __hungarian notation__: strName - bIsMale - ...

---

## Different ways to reference JavaScript in HTML document

- inline
- internal
- external

---

## Comment

- single line
- multiline

---

## Variables

- var, let and const keywords

---

## DataTypes

### Primitives(Value-Types)

string - number - boolean - undefined - null - date - symbol

### Reference-Types(Non-Primitives)

object - array - function - class

---

## Output by console

console.log()

---

## String object shaped

const name = new String("Pouria");
name.valueOf();

const name = "Pouria";

---

## String properties

- length: Returns the length of a string
- constructor: Returns the string's constructor function
- prototype: Allows you to add properties and methods to an object

---

## String methods

- toUpperCase(): Returns a string converted to uppercase letters
- toLowerCase(): Returns a string converted to lowercase letters
- toLocaleLowerCase(): Returns a string converted to lowercase letters, using the host's locale
- toLocaleUpperCase(): Returns a string converted to uppercase letters, using the host's locale
- toString(): Returns a string or a string object as a string

- trim(): Returns a string with removed white-spaces

- charAt(/pos/): Returns the character at a specified index (position)

- concat(/...string/): Returns two or more joined strings

- repeat(/count/): Returns a new string with a number of copies of a string

- localeCompare(/char | string/): Compares two strings in the current locale

- charCodeAt(): Returns the Unicode of the character at a specified index

- startsWith("char | word"): Checks whether a string begins with specified characters
- includes("char | word"): Returns if a string contains a specified value
- endsWith("char | word"): Returns if a string ends with a specified value

- indexOf("char | word"): Returns the index (position) of the first occurrence of a value in a string
- lastIndexOf("char | word"): Returns the index (position) of the last occurrence of a value in a string
- search("char | word"): Searches a string for a value, or regular expression, and returns the index (position) of the match

- replace(/char | word/gi, "char | word"): Searches a string for a value, or a regular expression, and returns a string where the values are replaced

- match(/char | word/gi): Searches a string for a value, or a regular expression, and returns the matches

- split("char"): Splits a string into an array of substrings

- slice(start, end): Extracts a part of a string and returns a new string
- substring(start, end): Extracts characters from a string, between two specified indices (positions)
- substr(start, length): Extracts a number of characters from a string, from a start index (position)

- fromCharCode(): Returns Unicode values as characters

- padStart(maxlength, fillString): method pads a string with another string
- padEnd(maxlength, fillString): method pads a string with another string

- valueOf(): Returns the primitive value of a string or a string object

---

### Template string

let language = "English";
let phrase = `${language} is the best.`;

---

## Number

let userId = 10;
let numberInStock = 21;

let price = 21.5;
let weight = 62.5;

let scientificNotation = 1.2e5;

---

## Number object shaped

const userId = new Number(10);
userId.valueOf();

---

## Number properties

- constructor: Returns the function that created JavaScript's Number prototype
- prototype: Allows you to add properties and methods to an object
- MAX_VALUE: Returns the largest number possible in JavaScript
- MIN_VALUE: Returns the smallest positive number possible in JavaScript
- NEGATIVE_INFINITY: Represents negative infinity (returned on overflow)
- NaN: Represents a "Not-a-Number" value
- POSITIVE_INFINITY: Represents infinity (returned on overflow)

---

## Number methods

- isFinite(): Checks whether a value is a finite number
- isInteger(): Checks whether a value is an integer
- isNaN(): Checks whether a value is an integer
- isSafeInteger(): Checks whether a value is a safe integer
- toExponential(x): Converts a number into an exponential notation
- toFixed(x): Formats a number with x numbers of digits after the decimal point
- toLocaleString(): Converts a number into a string, based on the locale settings
- toPrecision(x): Formats a number to x length
- toString(): Converts a number to a string
- valueOf(): Returns the primitive value of a number

---

## Boolean

let isMale = true;
let isApproved = false;

---

## Boolean object shaped

const name = new Boolean(true);
name.valueOf();

const name = true;

---

## Boolean properties

- constructor: Returns the function that created JavaScript's Boolean prototype
- prototype: Allows you to add properties and methods to an object

---

## Boolean methods

- toString(): Converts a number to a string
- valueOf(): Returns the primitive value of a boolean

---

## Type conversion

- Number(): Returns a number, converted from its argument
- parseInt(): Parses a string and returns an integer
- parseFloat(): Parses a string and returns a floating point number
- toString(): Converts a data to a string
- Boolean(): Returns a boolean, converted from its argument
- String(): Returns a string, converted from its argument

---

## null vs undefined

null is an empty or non-existent value.
null must be assigned.

undefined: typically means a variable has been declared, but not defined

---

## Output

- alert(): displays an alert box with a message and an OK button
- confirm(): displays a dialog box with a message, an OK button, and a Cancel button
- prompt(,): displays a dialog box that prompts the user for input
- document.write()

### console

- log(): log(print) the output to the console
- warn(): log warning message to the console
- error: log error message to the console
- info: log info message to the console
- debug: log message to the console
- assert(condition, ...data):
- clear(): clear the console
- count(label): start counter
- countReset(label): reset the counter
- dir(): displays an interactive listing of the properties of a specified JavaScript object
- dirxml(): displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible
- group(label): group content
- groupEnd(label): end group content
- groupCollapsed(): Expandable group
- time(label): start timer
- timeLog(label): log time
- timeEnd(label): stop timer
- table(object|array): display object and array in tabular format
- trace(): outputs a stack trace

---

## operators

- arithmetic
- assignment
- comparison
- logical
- bitwise
- type checking

---

## Make decision statement

- if else
- ternary
- switch case

---

## Math Properties

- Math.PI: Returns PI (approx. 3.14)
- Math.SQRT2: Returns the square root of 2 (approx. 1.414)
- Math.E: Returns Euler's number (approx. 2.718)
- Math.LN10: Returns the natural logarithm of 10 (approx. 2.302)
- Math.LN2: Returns the natural logarithm of 2 (approx. 0.693)
- Math.LOG10E: Returns the base-10 logarithm of E (approx. 0.434)
- Math.LOG2E: Returns the base-2 logarithm of E (approx. 1.442)
- Math.SQRT1_2: Returns the square root of 1/2 (approx. 0.707)

---

## Math methods

- abs(x): Returns the absolute value of x
- acos(x): Returns the arccosine of x, in radians
- acosh(x): Returns the hyperbolic arccosine of x
- asin(x): Returns the arcsine of x, in radians
- asinh(x): Returns the hyperbolic arcsine of x
- atan(x): Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
- atan2(y, x): Returns the arctangent of the quotient of its arguments
- atanh(x): Returns the hyperbolic arctangent of x
- cbrt(x): Returns the cubic root of x
- ceil(x): Returns x, rounded upwards to the nearest integer
- clz32(x): Returns the number of leading zeros in a 32-bit binary representation of x
- cos(x): Returns the cosine of x (x is in radians)
- cosh(x): Returns the hyperbolic cosine of x
- exp(x): Returns the value of Ex
- expm1(x): Returns the value of Ex minus 1
- floor(x): Returns x, rounded downwards to the nearest integer
- fround(x): Returns the nearest (32-bit single precision) float representation of a number
- log(x): Returns the natural logarithm of x
- log10(x): Returns the base-10 logarithm of x
- log1p(x): Returns the natural logarithm of 1 + x
- log2(x): Returns the base-2 logarithm of x
- max(x, y, z, ..., n): Returns the number with the highest value
- min(x, y, z, ..., n): Returns the number with the lowest value
- pow(x, y): Returns the value of x to the power of y
- random(): Returns a random number between 0 and 1
- round(x): Rounds x to the nearest integer
- sign(x): Returns the sign of a number (checks whether it is positive, negative or zero)
- sin(x): Returns the sine of x (x is in radians)
- sinh(x): Returns the hyperbolic sine of x
- sqrt(x): Returns the square root of x
- tan(x): Returns the tangent of an angle
- tanh(x): Returns the hyperbolic tangent of a number
- trunc(x): Returns the integer part of a number (x)

---

## Symbol

const localSymbol = Symbol();
const globalSymbol = Symbol.for(description);

---

## Symbol properties

Symbol.hasInstance
Symbol.iterator
Symbol.arguments
Symbol.toStringTag
Symbol.toPrimitive
Symbol.match
Symbol.matchAll
Symbol.length
Symbol.species
Symbol.name
Symbol.prototype
Symbol.replace
Symbol.split
Symbol.asyncIterator
Symbol.isConcatSpreadable
Symbol.search
Symbol.caller
Symbol.unscopables

---

## Symbol methods

Symbol.for(description) - Symbol.keyFor(global symbol)

---

## Date object

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

### Examples

const currentDate = new Date();
const targetDate = new Date(2018, 11, 24, 10, 33, 30);
const targetDate = new Date(86400000);

ISO Date: "2015-03-25" (The International Standard)
Short Date: "03/25/2015"
Long Date: "Mar 25 2015" or "25 Mar 2015"

const targetDate = new Date("2015-03-25T12:00:00Z");
const targetDate = new Date("2015-03-25T12:00:00-06:30");
const targetDate = new Date("October 13, 2014 11:13:00");

const msec = Date.parse("March 21, 2012");

---

## Date properties

constructor - prototype

---

## Date methods

### get

- getFullYear(): Get the year as a four digit number (yyyy)
- getMonth(): Get the month as a number (0-11)
- getDate(): Get the day as a number (1-31)
- getHours(): Get the hour (0-23)
- getMinutes(): Get the minute (0-59)
- getSeconds(): Get the second (0-59)
- getMilliseconds(): Get the millisecond (0-999)
- getTime(): Get the time (milliseconds since January 1, 1970)
- getDay(): Get the weekday as a number (0-6)
- Date.now(): Get the time. ECMAScript 5.

### set

- setDate(): Set the day as a number (1-31)
- setFullYear(): Set the year (optionally month and day)
- setHours(): Set the hour (0-23)
- setMilliseconds(): Set the milliseconds (0-999)
- setMinutes(): Set the minutes (0-59)
- setMonth(): Set the month (0-11)
- setSeconds(): Set the seconds (0-59)
- setTime(): Set the time (milliseconds since January 1, 1970)

---

## Object

let person = { firstName: "", lastName: "", ... };

---

## Object constructor(constructor function)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  ...
}

Person.prototype.nationality = "Iranian";

---

## Object properties

person.firstName
person["firstName"]

---

## Object methods

Object.keys(object):
Object.values(object):
Object.entries(object);
Object.fromEntries(map):
Object.create(oldObject):
Object.assign(target, ...sources):
Object.defineProperty(object, property, descriptor):
Object.defineProperties(object, descriptors):
Object.getOwnPropertyDescriptor(object, property):
Object.getOwnPropertyDescriptors(object, property):
Object.getOwnPropertyNames(object):
Object.getOwnPropertySymbols():
Object.getPrototypeOf(object):
Object.setPrototypeOf(object):
Object.preventExtensions(object):
Object.isExtensible(object): prevents new properties from ever being added to an object.
Object.seal(object): preventing new properties from being added to it and marking all existing properties as non-configurable
Object.isSealed(object):
Object.freeze(object):
Object.isFrozen(object):
Object.toString():

---

## Array

const fruits = ["apple", "pineapple", "grapes", "orange", "cherry"];

---

## Array object shaped

const fruitsObj = new Array("apple", "pineapple", "grapes", "orange", "cherry");

---

## Array properties

length: Sets or returns the number of elements in an array
constructor: Returns the function that created the Array object's prototype
prototype: Allows you to add properties and methods to an Array object

---

## Array methods

### CRUD

push(): Adds new elements to the end of an array, and returns the new length
pop(): Removes the last element of an array, and returns that element
shift(): Removes the first element of an array, and returns that element
unshift(): Adds new elements to the beginning of an array, and returns the new length

### sorting

sort(): Sorts the elements of an array
reverse(): Reverses the order of the elements in an array

### cut and join

slice(): Selects a part of an array, and returns the new array
splice(): Adds/Removes elements from an array
concat(): Joins arrays and returns an array with the joined arrays
join(): Joins all elements of an array into a string

### search by index

indexOf(): Search the array for an element and returns its position
lastIndexOf(): Search the array for an element, starting at the end, and returns its position

### others

entries(): Returns a key/value pair Array Iteration Object
keys(): Returns a Array Iteration Object, containing the keys of the original array
isArray(): Checks whether an object is an array
from(): Creates an array from an object
copyWithin(): Copies array elements within the array, to and from specified positions
toString(): Converts an array to a string, and returns the result
valueOf(): Returns the primitive value of an array

---

### High order array methods

forEach(): Calls a function for each array element
map(): Creates a new array with the result of calling a function for each array element
filter(): Creates a new array with every element in an array that pass a test
find(): Returns the value of the first element in an array that pass a test
findIndex(): Returns the index of the first element in an array that pass a test
includes(): Check if an array contains the specified element
every(): Checks if every element in an array pass a test
some(): Checks if any of the elements in an array pass a test
fill(): Fill the elements in an array with a static value
reduce(): Reduce the values of an array to a single value (going left-to-right)
reduceRight(): Reduce the values of an array to a single value (going right-to-left)

---

## Loops

- for
- while
- do while
- for in
- for of
- forEach

---

## Function

const square = (width) => width * width;

---

## Function types

- named
- anonymous
- arrow
- auto-invoked
- constructor
- factory
- recursive
- generator

---

## Function properties

length: number of parameters
prototype: return object

---

## Function methods

call() - apply() - bind()

---

## Set

let set = new Set([1,2,2,3]);

---

## Set properties

size: Returns the number elements in a Set

---

## Set methods

new Set(): Creates a new Set
add(): Adds a new element to the Set
delete(): Removes an element from a Set
has(): Returns true if a value exists
clear(): Removes all elements from a Set
forEach(): Invokes a callback for each element
values(): Returns an Iterator with all the values in a Set
keys(): Same as values()
entries(): Returns an Iterator with the [value,value] pairs from a Set

---

## Map

let map = new Map([["apples", 500], ... ]);

---

## Map properties

size: Returns the number of Map elements

---

## Map methods

new Map(): Creates a new Map object
set(): Sets the value for a key in a Map
get(): Gets the value for a key in a Map
clear(): Removes all the elements from a Map
delete(): Removes a Map element specified by a key
has(): Returns true if a key exists in a Map
forEach(): Invokes a callback for each key/value pair in a Map
entries(): Returns an iterator object with the [key, value] pairs in a Map
keys(): Returns an iterator object with the keys in a Map
values(): Returns an iterator object of the values in a Map

---

## Class

- constructor
- field
- property
- method
- static method
- inheritance
- get
- set

---

## DOM

---

## BOM

---

## Cookie

---

## Local Storage

---

## Json

- serialize
- deserialize

---

## Promise

---

## Async and Await

---

## fetch (get - post - put - delete)

---

## NodeJS

---

## RegEx

---

## Miscellaneous

### Js bugs

- string is primitive type
- undefined is a value an at the same time datatype
- type of null is object

### Falsy values in js

undefined - null - "" - 0 - NaN - false

### Strict mode

### Bubbling
