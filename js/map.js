// feed data from constructor
let map = new Map([
  ["HTML", "HyperText markup language"],
  ["CSS", "Cascading stylesheet"],
  ["JavaScript", "Programing language of web"],
]);

// get an element by key
map.get("HTML");

// add new element to map
map.set("Sass", "Syntatically awesome stylesheet");
map.set("React", "view engine");

// remove an item from map
map.delete("Sass");

// check if element exist in map
console.log(map.has("react"));

// get all values
map.values();
// get all keys
map.keys();

// iterate through each key/value pair
map.forEach((value, key) => console.log(key, value));

// clear all the elements
map.clear();

// props
console.log(map.size);
