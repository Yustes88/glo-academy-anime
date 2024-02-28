const mainData = () => {
  fetch("https://anime-33c94-default-rtdb.firebaseio.com/.json").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.anime)
  })
};

mainData();
