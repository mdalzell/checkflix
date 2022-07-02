import { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch"

const useMostPopularMovies = (year: string) => {
    const [movies, setMovies] = useState<any[]>([]);
    const { isLoading, data } = useAuthenticatedFetch("/discover/movie", "GET", {"sort_by": "popularity.desc", year })
    
    useEffect(() => {
        if (!isLoading && data != null){
            const results = data.results.slice(0, 10)
            setMovies(results)
        }
    }, [data, isLoading, setMovies])

    return { isLoading, movies }
}

export { useMostPopularMovies }