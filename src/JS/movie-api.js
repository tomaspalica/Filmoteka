import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );
  const data = response.data;

  return data.results;
};
export const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`,
  );
  console.log(response.data.genres);
  return response.data.genres;
};
