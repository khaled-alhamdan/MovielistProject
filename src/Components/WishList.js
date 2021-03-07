import React from "react";
import WishMovieItem from "./WishMovieItem";
// Importing SearchBar Component
// import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import { MoviesDisplay, MoviesDisplayContainerDiv } from "../styles";

const WishList = () => {
  const wishListMovies = movieStore.movies
    .filter((movie) => movie.status === false)
    .map((movie) => <WishMovieItem movie={movie} key={movie.id} />);
  return (
    <>
      <MoviesDisplayContainerDiv>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: "fantasy",
          }}
        >
          Movies To Watch
        </h2>
        <MoviesDisplay>{wishListMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WishList);
