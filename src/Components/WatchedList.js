import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import { MoviesDisplay, MoviesDisplayContainerDiv } from "../styles";

const WatchedList = () => {
  const watchedListMovies = movieStore.movies
    .filter((movie) => movie.status === true)
    .map((x) => <WatchedMovieItem movie={x} key={x.id} />);

  return (
    <>
      <MoviesDisplayContainerDiv>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: "fantasy",
            // textDecoration: "solid underline 5px",
          }}
        >
          Watched Movies
        </h2>
        <MoviesDisplay>{watchedListMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WatchedList);
