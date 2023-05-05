import React, { lazy, Suspense } from "react";
import useMovieDetails from "../../hooks/fetchMovieDetails";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import apiInfo from "../../data/apiData.json";
import css from "./MovieDetails.module.css";
import { ColorRing } from "react-loader-spinner";

const Cast = lazy(() => import("./cast/Cast"));
const Reviews = lazy(() => import("./reviews/Reviews"));

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { movieDetails, isLoading, error } = useMovieDetails(movieId);

  const handleClick = (view) => {
    navigate(`/movies/${movieId}/${view}`);
  };

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
    return <div className={css.container}>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div className={css.container}>Select a movie to view details.</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.topContainer}>
        <h1 className={css.header}>{movieDetails.title}</h1>
        <img
          src={`${apiInfo[0].posterPath}${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={css.image}
        />
        <div className={css.textContainer}>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>Genres: {movieDetails.genres.map(genre => ` ${genre.name}`)}</p>
          <p>Vote Average: {movieDetails.vote_average}</p>
        </div>
      </div>
      <div className={css.controls}>
        <button onClick={() => handleClick("cast")}>Cast</button>
        <button onClick={() => handleClick("reviews")}>Reviews</button>
      </div>
      <div className={css.bottomContainer}>
        <Suspense fallback={<div>
          <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        </div>}>
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
