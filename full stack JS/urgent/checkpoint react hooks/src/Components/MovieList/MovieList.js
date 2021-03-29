import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.css";
export default function MovieList({ movieListe, nameSearch, rateSearch }) {
  return (
    <div className="movieListe">
      {movieListe
        .filter(
          (movie) =>
            movie.rate >= rateSearch &&
            movie.title.toLowerCase().includes(nameSearch)
        )

        .map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
    </div>
  );
}
