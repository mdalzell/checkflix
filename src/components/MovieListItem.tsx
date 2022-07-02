import MoviePoster from "./MoviePoster";

type MovieListItemProps = {
    index: number;
    movie: any;
}

const MovieListItem = ({ index, movie }: MovieListItemProps) => 
    <li key={movie.id}>
        <h3>{`${index + 1}. ${movie.original_title}`}</h3>
        <MoviePoster path={movie.poster_path} />
    </li>

export default MovieListItem