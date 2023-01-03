// BOM (Browser object model)
// browser window
let browserWidth = window.innerWidth; // 668
let browserHeight = window.innerHeight; // 584

// monitor screen
let deviceScreenWidth = screen.width; // 1366
let deviceScreenHeight = screen.height; // 768
let deviceAvailableWidth = screen.availWidth; // 1366
let deviceAvailableHeight = screen.availHeight; // 728
let deviceOrientation = screen.orientation; // {angle: 0, type: 'landscape-primary', onchange: null}
let devicePixelDepth = screen.pixelDepth; // 24 bit
let deviceColorDepth = screen.colorDepth; // 24 bit

// url
let currentURL = location.href; // http://127.0.0.1:5500/index.html
let hostName = location.hostname; // 127.0.0.1:5500
let urlPath = location.pathname; // /index.html
let protocol = location.protocol; // http:
let port = location.port; // 443
// location.assign("https://google.com");

// history.back();
// history.forward();

// alert("something");
// confirm("Are you sure");
// prompt("your name", "pouria");

let isCookieEnable = navigator.cookieEnabled; // true
let deviceOS = navigator.platform; // win32
let browserLanguage = navigator.language; // en-US
let isBrowserOnline = navigator.onLine; // true

// DOM
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

// old
const demoDiv = document.getElementById("demo");
const containerDivs = document.getElementsByClassName("container");
const marks = document.getElementsByTagName("mark");
const queryInput = document.getElementsByName("query")[0];

// modern
const demo = document.querySelector("#demo");
const containers = document.querySelectorAll(".container");
const markElements = document.querySelectorAll("mark");
const ourQueryInput = document.querySelector("input[name=query]");

// select element
const userInfoDiv = document.querySelector("#user-info");

/* 
  display object data
*/

// data
const user = {
  image: "male.png",
  fullName: "Pouria Nayeb",
  job: "Author and programmer",
};
const { image, fullName, job } = user;

// import html by dynamic data
userInfoDiv.innerHTML = `
    <img src="img/${image}" alt="${fullName}" />
    <h1>${fullName}</h1>
    <h3>${job}</h3>
`;

/* 
  display array data
*/

// select element
const usersUl = document.querySelector("#users");

const users = ["aria zamani", "nava mohammadi", "mehdi eskandari"];
let container = "";

// method 1
// users.forEach(user => {
//     container += `<li>${user}</li>`;
// });

// 1: <li>aria zamani</li>
// 2: <li>aria zamani</li><li>nava mohammadi</li>
// 3: <li>aria zamani</li><li>nava mohammadi</li><li>mehdi eskandari</li>

// usersUl.innerHTML = container;

// method 2
users.forEach((user) => {
  let li = document.createElement("li"); // <li></li>
  let fullName = document.createTextNode(user); // aria zamani
  li.appendChild(fullName); // <li>aria zamani</li>

  usersUl.appendChild(li);
});
