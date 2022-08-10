const movies = [
  {
    title: "Titanic",
    director: "James Cameron",
    releaseYear: 1997,
    actors: ["Kate Winslet", "Leonardo DiCaprio"],
    genre: ["Romance", "Drama"],
  },
  {
    title: "Avatar",
    director: "James Cameron",
    releaseYear: 2009,
    actors: ["Zoe Yadira", "Lara Worthington"],
    genre: ["Sci-fi", "Action"],
  },
  {
    title: "Transformers",
    director: "Michael Bay",
    releaseYear: 2007,
    actors: ["Megan Fox", "Shia LaBeouf", "Michael Wahlberg"],
    genre: ["Sci-fi"],
    book: null,
    podcast: undefined,
    storyDate: new Date(2005, 10, 11),
  },
];

// serialization
const moviesInJson = JSON.stringify(movies);

// deserialization
const movieCollection = JSON.parse(moviesInJson);

// json collection file
