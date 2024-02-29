const detailData = () => {
  const preloader = document.querySelector(".preloder");

  const renderGanreList = (genres) => {
    const dropDownBlock = document.querySelector(".header__menu .dropdown");

    genres.forEach((genre) => {
      dropDownBlock.insertAdjacentHTML(
        "beforeend",
        `
      <li><a href="./categories.html?ganre=${genre}">${genre}</a></li>
      `
      );
    });
  };

  const renderAnimeDetails = (array, itemId) => {
    const animeObj = array.find((item) => item.id == itemId);
    const imageBlock = document.querySelector(".anime__details__pic");
    const titleBlock = document.querySelector(".anime__details__title h3");
    const subtitleBlock = document.querySelector(".anime__details__title span");
    const descriptionBlock = document.querySelector(".anime__details__text p");
    const viewsBlock = imageBlock.querySelector(".view");
    const widgetList = document.querySelectorAll(
      ".anime__details__widget ul li"
    );
    const breadcrumbs = document.querySelector(".breadcrumb__links span");

    if (animeObj) {
      imageBlock.dataset.setbg = animeObj.image;
      viewsBlock.insertAdjacentHTML(
        "beforeend",
        `
        <i class="fa fa-eye"></i> ${animeObj.views}</div>
        `
      );
      document.querySelectorAll(".set-bg").forEach((elem) => {
        elem.style.backgroundImage = "url(" + elem.dataset.setbg + ")";
      });

      titleBlock.textContent = animeObj.title;
      subtitleBlock.textContent = animeObj["original-title"];
      descriptionBlock.textContent = animeObj.description;

      widgetList[0].insertAdjacentHTML(
        "beforeend",
        `
        <span>Date aired:</span> ${animeObj.date}
        `
      );

      widgetList[1].insertAdjacentHTML(
        "beforeend",
        `
        <span>Raiting:</span> ${animeObj.rating}
        `
      );

      widgetList[2].insertAdjacentHTML(
        "beforeend",
        `
        <span>Genre:</span> ${animeObj.tags.join(", ")}
        `
      );

      breadcrumbs.textContent = animeObj.ganre;
      setTimeout(function () {
        preloader.classList.remove("active");
      }, 500);
    } else {
      console.log("Аниме отсутсвует");
    }
  };


  fetch("https://anime-33c94-default-rtdb.firebaseio.com/.json")
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set();
      const ganreParams = new URLSearchParams(window.location.search).get(
        "itemId"
      );

      data.anime.forEach((item) => {
        genres.add(item.ganre);
      });

      if (ganreParams) {
        renderAnimeDetails(data.anime, ganreParams);
      } else {
        console.log("Аниме отсутствует");
      }
      renderGanreList(genres);
    });
};

detailData();
