const imageBaseURL = "https://image.tmdb.org/t/p/w300"

type MoviePosterPropTypes = {
    path: string;
}

const MoviePoster = ({ path }: MoviePosterPropTypes) => <img src={`${imageBaseURL}/${path}`} />

export default MoviePoster