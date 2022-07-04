import { Link, useParams } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import RatingBadge from "../components/RatingBadge";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieDetailsPage = () => {
  const { movieID = "" } = useParams();
  const { isLoading, movieDetails } = useMovieDetails(movieID);

  return (
    <main>
      {!isLoading && (
        <main>
          <h2>{movieDetails.title}</h2>
          <div className="movieDetails">
            <section>
              <MoviePoster movie={movieDetails} />
            </section>
            <section>
              <p>{movieDetails.overview}</p>
              <p>
                <strong>Runtime: </strong>
                {`${movieDetails.runtime} minutes`}
              </p>
              <RatingBadge rating={movieDetails.vote_average} />
            </section>
          </div>
          <Link to="/">Return</Link>
        </main>
      )}
    </main>
  );
};

export default MovieDetailsPage;
