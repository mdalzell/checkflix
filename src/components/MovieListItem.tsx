import MoviePoster from "./MoviePoster";

type MovieListItemProps = {
  index: number;
  movie: any;
};

const MovieListItem = ({ index, movie }: MovieListItemProps) => (
  <li>
    <h3>{`${index + 1}. ${movie.original_title}`}</h3>
    <MoviePoster movie={movie} />
  </li>
);

export default MovieListItem;
