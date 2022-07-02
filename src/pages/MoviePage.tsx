import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";

const MoviePage = () => {
    const { data } = useAuthenticatedFetch("/search/movie", "GET", {query: "test", year: "2022"})

    console.log(data)

    return <main>Hello there</main>
}

export default MoviePage;