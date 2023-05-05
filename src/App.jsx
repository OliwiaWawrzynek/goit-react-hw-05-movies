import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { ColorRing } from "react-loader-spinner";

const Home = lazy(() => import("./pages/home/Home"));
const Movies = lazy(() => import("./pages/movies/Movies"));
const MovieDetails = lazy(() => import("./pages/movieDetails/MovieDetails"));

export default function App() {
  return (
    <div>
      <Nav />
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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}
