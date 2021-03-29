import React, { useState } from "react";
import "./MovieApp.css";
import MovieList from "../MovieList/MovieList";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import Filter from "../Filter/Filter";
import ListeMovies from "./ListeMovies";
import StarRating from "../StarRating/StarRating";

export const MovieApp = () => {
  const [movies, setMovies] = useState(ListeMovies);

  const [nameSearch, setNameSearch] = useState("");

  const [rateSearch, setRateSearch] = useState(0);
  const [hover, setHover] = useState(null); //State pour la partie filtre par <SatrRating>

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <div className="container-fluid">
      <Filter setNameSearch={setNameSearch} />
      <div className="subContainer">
        <div className="rateSearch">
          <StarRating
            rating={rateSearch}
            starIndex={setRateSearch}
            hover={hover}
            setHover={setHover}
          />
        </div>
        <div className="movieList">
          <h4>
            Sharing a few of my favorite movies and series based on true story
          </h4>
          <MovieList
            movieListe={movies}
            nameSearch={nameSearch}
            rateSearch={rateSearch}
          />
        </div>
      </div>

      <AddMovieForm addMovie={addMovie} />
    </div>
  );
};
export default MovieApp;
