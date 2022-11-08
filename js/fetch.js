const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData("https://jsonplaceholder.typicode.com/todos");
