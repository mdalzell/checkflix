import MovieListItem from "./MovieListItem";

type MovieListPropTypes = {
    movies: any[];
}

const MovieList = ({ movies }: MovieListPropTypes) => 
    <ul>
        {movies.map((movie, index) => <MovieListItem index={index} movie={movie} />)}
    </ul>

export default MovieList;