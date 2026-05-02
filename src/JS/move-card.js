import { getPopularMovies, getGenres } from "./movie-api";
import { filterGenres } from "./helpers";
const filmSection = document.querySelector(".section-films");
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const createMovieCards = async () => {
  const popularMovies = await getPopularMovies();
  const genresArr = await getGenres();
  const markup = popularMovies.map((el) => {
    const genres = filterGenres(el.genre_ids, genresArr);

    let correctGenres = [];
    if (genres.length > 3) {
      correctGenres = genres.slice(0, 3);
      correctGenres.push("...");
    } else {
      correctGenres = genres;
    }

    return `<div class="film-card">
    <div class="film-card__img-wrapper">
    <img class="film-card__img" src="${IMG_URL}${el.poster_path}" alt="" />
    </div>
    <div class="film-card__text-wrapper">
      <h4 class="film-card__title">${el.title}</h4>
      <span class="film-card__tags">${correctGenres} | ${el.release_date ? el.release_date.split("-")[0] : "N/A"}</span>
    </div>
  </div>`;
  });
  console.log(markup.join(""));
  filmSection.innerHTML = markup.join(" ");
};

/* <div class="film-card">
    <img class="film-card__img" src="public/AquarelaIMG.jpg" alt="" />
    <div class="film-card__text-wrapper">
      <h4 class="film-card__title">aquarela</h4>
      <span class="film-card__tags">documentary,drama,other | 2019</span>
    </div>
  </div> */
