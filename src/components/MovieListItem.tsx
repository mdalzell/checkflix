import MoviePoster from "./MoviePoster";

type MovieListItemProps = {
    index: number;
    movie: any;
}

const MovieListItem = ({ index, movie }: MovieListItemProps) => 
    <li key={movie.id}>
        <div>{`${index + 1}. ${movie.original_title}`}</div>
        <MoviePoster path={movie.poster_path} />
    </li>

export default MovieListItem