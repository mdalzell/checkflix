type MovieListItemProps = {
    index: number;
    movie: any;
}

const MovieListItem = ({ index, movie }: MovieListItemProps) => <li key={movie.id}>{`${index + 1}. ${movie.original_title}`}</li>

export default MovieListItem