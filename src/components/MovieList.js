import { Movie } from "./Movie";

export function MovieList({ movies, onClickMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.length > 0 &&
        movies?.map((movie) => (
          <Movie onClickMovie={onClickMovie} movie={movie} />
        ))}
    </ul>
  );
}

export default MovieList;
