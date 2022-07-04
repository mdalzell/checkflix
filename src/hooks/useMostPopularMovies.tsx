import { useNicCageMode } from "../context/NicCageContext";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";

const useMostPopularMovies = (year: string) => {
  const { active } = useNicCageMode();
  const withCast = active ? [2963] : [];
  const { isLoading, data } = useAuthenticatedFetch("/discover/movie", "GET", {
    sort_by: "popularity.desc",
    year,
    with_cast: withCast,
  });

  return { isLoading, movies: data?.results.slice(0, 10) ?? [] };
};

export { useMostPopularMovies };
