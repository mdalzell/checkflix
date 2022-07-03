import { useAuthenticatedFetch } from "./useAuthenticatedFetch"

const useMovieDetails = (id: string) => {
    const { isLoading, data } = useAuthenticatedFetch(`/movie/${id}`);
    return { isLoading, movieDetails: data }
}

export { useMovieDetails }