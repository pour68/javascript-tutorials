// the document object props and methods
console.dir(document);

document.URL;
document.domain;

document.doctype;

document.head;
document.title;

document.body;
document.forms;
document.links;
document.images;

// manipulation
const subTitle = document.getElementById("sub-title");

subTitle.textContent = "";
subTitle.innerText = "";
subTitle.innerHTML = "";
subTitle.style.color = "";
subTitle.style.backgroundColor = "";

const items = document.getElementsByClassName("item");
const paragraphs = document.getElementsByTagName("p");
const cities = document.getElementsByName("cities");

for (let i = 0; i < items.length; i++) {
  items[i].style.borderLeft = "1px solid #333";
}

const theSubTitle = document.querySelector("#sub-title");
const note = document.querySelector(".item");
const notes = document.querySelectorAll(".item");
const nameInput = document.querySelector("input");
const ageInput = document.querySelector("input[type='number']");
const oddItems = document.querySelectorAll(".item:nth-child(odd)");

for (let i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = "#ccc";
}

// traversying
note.parentNode;
note.parentElement;

note.firstChild;
note.firstElementChild;
note.childNodes;
note.children;
note.lastChild;
note.lastElementChild;
note.nextSibling;
note.nextElementSibling;

// create element and append element and text nodes
const div = document.createElement("div");
div.setAttribute("title", "introduction to javascript");
const text = document.createTextNode(
  "JavaScript is a dynamic-type interpreting programming language of web."
);

div.appendChild(text);

// events
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.target;
  e.target.id;
  e.target.className;
  e.target.classList;
  // click, dblClick
  e.type;
  // window from left to right
  e.clientX;
  // window from top to bottom
  e.clientY;
  // from element x
  e.offsetX;
  // from element y
  e.offsetY;

  e.altKey;
  e.ctrlKey;
  e.shiftKey;
});
