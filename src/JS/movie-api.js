import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async (page = 1) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
  );
  const data = response.data;

  return data.results;
};
export const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`,
  );
  return response.data.genres;
};

export const getMovie = async (name, page = 1) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}&include_adult=false&language=en-US&page=${page}`,
  );

  return response.data.results;
};
