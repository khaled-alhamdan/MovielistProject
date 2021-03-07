import React from "react";
import {
  MovieItemConatinerDiv,
  MovieImage,
  MovieItemTitleDiv,
} from "../styles";
import WishDeleteButtons from "./WishDeleteButtons";
// import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";

const WishMovieItem = ({ movie }) => {
  // movie is a prop
  return (
    <MovieItemConatinerDiv>
      <MovieImage src={movie.image} />
      <MovieItemTitleDiv>
        <t> {movie.name} </t>
      </MovieItemTitleDiv>
      <WishDeleteButtons movie={movie} />
    </MovieItemConatinerDiv>
  );
};

export default observer(WishMovieItem);
