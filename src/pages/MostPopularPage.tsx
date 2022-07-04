import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import NicCageModeCheckbox from "../components/NicCageModeCheckbox";
import YearDropdown from "../components/YearDropdown";
import { useMostPopularMovies } from "../hooks/useMostPopularMovies";

const MostPopularPage = () => {
  const { year = "2022" } = useParams();
  const { movies } = useMostPopularMovies(year);

  return (
    <main>
      <YearDropdown selectedYear={year} />
      <NicCageModeCheckbox />
      <h2>Most Popular Movies of {year}</h2>
      <MovieList movies={movies} />
    </main>
  );
};

export default MostPopularPage;
