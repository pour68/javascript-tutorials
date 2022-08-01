// step 1
console.log("log message");
console.log("log message 1", "log message 2");
console.info("info message");

console.warn("warning message");
console.error("error message");
console.debug("debug message");
console.assert(false, "something wrong.");

console.count("test");
console.count("test");
console.countReset("test");

console.clear();

console.dir(document);
console.dirxml(document);

console.group("demo");
console.log("log message");
console.groupEnd("demo");

console.groupCollapsed("demo");
console.log("log message");
console.log("log message");

console.time("testing");
console.log("log message");
console.timeLog("testing");
console.log("log message");
console.timeEnd("testing");

// console.table();
// console.trace();

// step 2:
alert("Alert message");
const isSure = confirm("Are you sure?");
const fatherName = prompt("What's your father name?", "Ali");

// step 3:
document.write("Message");
document.write("<h1>Heading 1</h1>");
document.write("<h1>Heading 1</h1>", "<p>paragraph</p>");

document.writeln("Message 1");
document.writeln("Message 2");
