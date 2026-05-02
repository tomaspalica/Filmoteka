import { getGenres } from "./movie-api";

export const filterGenres = (movieGenresIds, genresArr) => {
  return genresArr
    .filter((el) => movieGenresIds.includes(el.id))
    .map((el) => el.name);
};
