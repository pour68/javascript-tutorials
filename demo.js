let departmentName = "HR";
let studentNumber = "92111328";
let isBald = false;

let department = {
  id: 12,
  name: "IT",
  employees: ["pouria nayeb", "shahab godarzi"],
};

let trouser = {
  title: "bag",
  colors: ["yellow", "black", "blue"],
  sizes: [38, 40, 42],
};

let shahabGodarzi = {
  firstName: "shahab",
  lastName: "godarzi",
  skills: ["frontend", "backend", "database"],
  birthdate: new Date(1999, 4, 13),
  favorites: ["gaming", "programming", "water"],
  website: "shahabg.com",
  projects: [{ url: "", title: "" }],
};

let brands = [
  { id: 1, name: "D&G" },
  { id: 2, name: "GUCCI" },
  { id: 3, name: "DELCI" },
];

let bags = [
  { id: 1, name: "bag 1", brand: brands[0] },
  { id: 2, name: "bag 2", brand: brands[2] },
  { id: 3, name: "bag 3", brand: brands[2] },
];

let shoppingCart = [
  {
    id: 38,
    image: "https://...",
    title: "nintendo swich OLED",
    count: 2,
    price: 330,
  },
  {
    id: 400,
    image: "https://...",
    title: "Sony PS5",
    count: 1,
    price: 499,
  },
  {
    id: 500,
    image: "https://...",
    title: "XBOX Series S",
    count: 1,
    price: 320,
  },
];

let genres = [
  { id: 1, title: "action" },
  { id: 2, title: "drama" },
  { id: 3, title: "horror" },
  { id: 4, title: "comedy" },
  { id: 5, title: "fantasy" },
];

let movies = [
  {
    id: 1,
    title: "",
    directors: [],
    categories: [genres[0], genres[1]],
    actors: ["", ""],
  },
];

const departments = [
  { id: 1, title: "mathematic" },
  { id: 2, title: "physics" },
  { id: 3, title: "computer science" },
];

const employees = [
  {
    id: 1,
    fullName: "",
    registerDate: new Date(),
    graduationDoc: "",
    position: "",
    departments: [],
  },
];

const categories = [
  { id: 1, title: "washers" },
  { id: 2, title: "books" },
  { id: 3, title: "gadgets" },
  { id: 4, title: "smokes" },
];

const products = [
  {
    id: 1,
    title: "bahman cigarette",
    numberInStock: 10,
    images: [],
    price: 12_000,
    description: "",
    categories: [categories[3]],
  },
];

// bank client

// maxSpeed = 60, speed > 100 penalty, speed > 120 penalty + 3 month suspend

const season = "winter";

// switch case
