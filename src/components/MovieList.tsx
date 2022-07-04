import MovieListItem from "./MovieListItem";

type MovieListPropTypes = {
  movies: any[];
};

const MovieList = ({ movies }: MovieListPropTypes) => (
  <>
    <ol className="movieList">
      {movies.map((movie, index) => (
        <MovieListItem index={index} key={movie.id} movie={movie} />
      ))}
    </ol>
  </>
);

export default MovieList;
