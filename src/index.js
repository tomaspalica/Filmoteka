import { getPopularMovies, getGenres, getMovie } from "./JS/movie-api";
import { createMovieCards } from "./JS/movie-card";
const searchForm = document.querySelector(".search-form");

const loadPopularFilms = async () => {
  const popularMovies = await getPopularMovies();
  console.log(popularMovies);
  await createMovieCards(popularMovies);
};
const searchMovie = async (event) => {
  event.preventDefault();
  const movieName = event.target.firstElementChild.value;
  const searchMovies = await getMovie(movieName);
  createMovieCards(searchMovies);
};
searchForm.addEventListener("submit", searchMovie);
loadPopularFilms();
