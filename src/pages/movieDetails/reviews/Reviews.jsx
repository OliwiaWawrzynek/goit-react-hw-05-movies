import React from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../../hooks/fetchMovieReviews";
import css from "./Reviews.module.css";
import { ColorRing } from "react-loader-spinner";

export default function Reviews() {
  const { movieId } = useParams();
  const { reviews, isLoading, error } = fetchMovieReviews(movieId);

  if (isLoading) {
    return <div>
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

  if (!reviews || reviews.length === 0) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  return (
    <>
      <h1 className={css.header}>Reviews</h1>
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.listItem}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.review}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
