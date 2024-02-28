const mainData = () => {

  const renderAnimeList = (array, genre) => {
    console.log(array)

  }

  const renderTopAnime = (array) => {
    const wrapper = document.querySelector('.filter__gallery')
    wrapper.innerHTML = ''
    array.forEach((item) => {
      wrapper.insertAdjacentHTML('afterbegin', `
      <div class="product__sidebar__view__item set-bg mix day years" data-setbg="${item.image}">
           <div class="ep">${item.rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
            <h5><a href="/anime-details.html">${item.title}</a></h5>
      </div>
      `)
    })

    wrapper.querySelectorAll('.set-bg').forEach((elem) => {
      elem.style.backgroundImage = "url(" + elem.dataset.setbg + ")";
    });
  }

  fetch("https://anime-33c94-default-rtdb.firebaseio.com/.json").then((response) => {
    return response.json();
  }).then((data) => {
    const genres = new Set()
    renderTopAnime(data.anime.sort((a,b) => b.views - a.views).slice(0, 5))

    data.anime.forEach((item) => {
      genres.add(item.ganre)
    })

    renderAnimeList(data.anime, genres)
    console.log(genres)
  })
};

mainData();
