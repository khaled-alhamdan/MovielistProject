import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import { MoviesDisplay, MoviesDisplayContainerDiv, BoxTitle } from "../styles";

const WatchedList = ({ searched }) => {
  const watchedListMovies = movieStore.movies
    .filter((movie) =>
      movie.name.toLowerCase().includes(searched.toLowerCase())
    )
    .filter((movie) => movie.status === true)
    .map((x) => <WatchedMovieItem movie={x} key={x.id} />);

  return (
    <>
      <MoviesDisplayContainerDiv>
        <BoxTitle>Watched Movies</BoxTitle>
        <MoviesDisplay search={searched}>{watchedListMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WatchedList);
