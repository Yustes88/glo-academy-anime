const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");

  elements.forEach((elem) => {
    elem.style.backgroundImage = "url(" + elem.dataset.setbg + ")";
  });

  // const array = [5,3,2,4,1]
  const array = [
    {
      id: 0,
      value: 100,
    },
    {
      id: 2,
      value: 300,
    },
    {
      id: 1,
      value: 200,
    },
  ];

  const newArray = array.filter((element) => element <= 3);

  // console.log(array.sort((a,b) => a.value - b.value));
};

bgElements();
