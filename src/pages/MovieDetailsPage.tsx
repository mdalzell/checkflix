import { useParams } from "react-router-dom";
import MoviePoster from "../components/MoviePoster";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieDetailsPage = () => {
    const { movieID = "" } = useParams();
    const { isLoading, movieDetails } = useMovieDetails(movieID);
    
    return <main>
                <h2>Movie Details</h2>
                {!isLoading &&
                    <div>
                        <section>
                            <MoviePoster movie={movieDetails} />
                        </section>
                        <section></section>
                    </div>
                }
            </main>
}

export default MovieDetailsPage;