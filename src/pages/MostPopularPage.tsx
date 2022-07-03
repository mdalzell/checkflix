import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useMostPopularMovies } from "../hooks/useMostPopularMovies";

const MostPopularPage = () => {
    const { year = "2022" } = useParams()
    const { movies } = useMostPopularMovies(year);

    return  <main>
                <h2>Most Popular Movies of {year}</h2>
                <MovieList movies={movies} />
            </main>
}

export default MostPopularPage;