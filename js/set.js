// feed data from constructor
let letters = new Set(["a", "b", "c"]);

// methods
letters.add("d");
letters.add("e");

letters.delete("d");

console.log(letters.has("z"));

console.log(letters.values());

letters.forEach((letter) => console.log(letter));

// props

console.log(letters.size);
