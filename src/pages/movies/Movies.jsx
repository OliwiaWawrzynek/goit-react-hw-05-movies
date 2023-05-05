import useSearchMovies from "../../hooks/searchMovies";
import { Link } from "react-router-dom";
import css from "./Movies.module.css";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams("");

  const { movies, isLoading, error } = useSearchMovies(searchParams);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchParams({
      movie: value
    })
  };

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  )
  const { movie } = params;
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return (
      <div className={css.container}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.container}>
      <h1 className={css.header}>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={movie}
          onChange={handleChange}
          // {handleChange}
          placeholder="Search for movies..."
        />
      </form>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
