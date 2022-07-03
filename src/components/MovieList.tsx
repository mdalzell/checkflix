import MovieListItem from "./MovieListItem";
import YearDropdown from "./YearDropdown";

type MovieListPropTypes = {
    movies: any[];
}

const MovieList = ({ movies }: MovieListPropTypes) => 
    <>
        <YearDropdown />
        <ul>
            {movies.map((movie, index) => <MovieListItem index={index} key={movie.id} movie={movie} />)}
        </ul>
    </>

export default MovieList;