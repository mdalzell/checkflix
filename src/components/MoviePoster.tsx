import { Link } from "react-router-dom";

const imageBaseURL = "https://image.tmdb.org/t/p/w300";

type MoviePosterPropTypes = {
  movie: any;
};

const MoviePoster = ({ movie }: MoviePosterPropTypes) => (
  <Link to={`/movie/${movie.id}`}>
    <img src={`${imageBaseURL}/${movie.poster_path}`} alt={movie.title} />
  </Link>
);

export default MoviePoster;
