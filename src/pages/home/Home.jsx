import React from "react";
import useFetchMovies from "../../hooks/fetchMovies";
import css from "./Home.module.css";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { movies, isLoading, error } = useFetchMovies();

  if (isLoading) {
    return <div className={css.container}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.home}>
      <h1 className={css.header}>Trending today</h1>
      <ol className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
