import React from "react";
import {
  MovieItemConatinerDiv,
  MovieImage,
  MovieItemTitleDiv,
} from "../styles";
import UnwatchedButtons from "./UnwatchedButtons";
import { observer } from "mobx-react";

const WatchedMovieItem = ({ movie }) => {
  // movie is a prop
  return (
    <MovieItemConatinerDiv>
      <MovieImage src={movie.image} />
      <MovieItemTitleDiv>
        <t> {movie.name} </t>
      </MovieItemTitleDiv>
      <UnwatchedButtons movie={movie} />
    </MovieItemConatinerDiv>
  );
};

export default observer(WatchedMovieItem);
