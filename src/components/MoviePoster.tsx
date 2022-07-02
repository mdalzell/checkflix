const imageBaseURL = "https://image.tmdb.org/t/p/w300"

type MoviePosterPropTypes = {
    movie: any;
}

const MoviePoster = ({ movie }: MoviePosterPropTypes) => <img src={`${imageBaseURL}/${movie.poster_path}`} alt={movie.title} />

export default MoviePoster