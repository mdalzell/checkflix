import { useAuthenticatedFetch } from "./useAuthenticatedFetch"

const useMostPopularMovies = (year: string) => {
    const { isLoading, data } = useAuthenticatedFetch("/discover/movie", "GET", {"sort_by": "popularity.desc", year })
    return { isLoading, movies: data?.results.slice(0, 10) ?? [] }
}

export { useMostPopularMovies }