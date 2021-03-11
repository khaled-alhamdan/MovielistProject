import React from "react";
import WishMovieItem from "./WishMovieItem";
// Importing SearchBar Component
// import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import { MoviesDisplay, MoviesDisplayContainerDiv, BoxTitle } from "../styles";

const WishList = ({ searched }) => {
  const wishListMovies = movieStore.movies
    .filter((movie) =>
      movie.name.toLowerCase().includes(searched.toLowerCase())
    )
    .filter((movie) => movie.status === false)
    .map((movie) => <WishMovieItem movie={movie} key={movie.id} />);
  return (
    <>
      <MoviesDisplayContainerDiv>
        <BoxTitle>Movies To Watch</BoxTitle>
        <MoviesDisplay search={searched}>{wishListMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WishList);
