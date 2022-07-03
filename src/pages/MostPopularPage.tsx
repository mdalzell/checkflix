import MovieList from "../components/MovieList";
import { useMostPopularMovies } from "../hooks/useMostPopularMovies";

const MostPopularPage = () => {
    
    const { movies } = useMostPopularMovies("2022");

    return  <main>
                <h2>Most Popular Movies of 2022</h2>
                <MovieList movies={movies} />
            </main>
}

export default MostPopularPage;