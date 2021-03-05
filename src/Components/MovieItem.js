import React from "react";
import {
  MovieItemConatinerDiv,
  MovieImage,
  MovieItemTitleDiv,
} from "../styles";
import WatchDeleteButtons from "./WatchDeleteButtons";
import movieStore from "../Stores/movieStore";

const MovieItem = ({ movie }) => {
  // movie is a prop
  return (
    <MovieItemConatinerDiv onClick={() => movieStore.moveToWatched(movie.id)}>
      <MovieImage src={movie.image} />
      <MovieItemTitleDiv>
        <a> {movie.name} </a>
      </MovieItemTitleDiv>
      <WatchDeleteButtons />
    </MovieItemConatinerDiv>
  );
};

export default MovieItem;
