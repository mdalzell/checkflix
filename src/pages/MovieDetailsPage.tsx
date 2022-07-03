import { useParams } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieDetailsPage = () => {
    const { movieID = "" } = useParams();
    const { isLoading, movieDetails } = useMovieDetails(movieID);

    return <main>
                {!isLoading &&
                    <main>
                        <h2>{movieDetails.title}</h2>
                        <div className="movieDetails">
                            <section>
                                <MoviePoster movie={movieDetails} />
                            </section>
                            <section>
                                <p>{movieDetails.overview}</p>
                                <p><strong>Runtime: </strong>{`${movieDetails.runtime} minutes`}</p>
                            </section>
                        </div>
                    </main>
                }
            </main>
}

export default MovieDetailsPage;