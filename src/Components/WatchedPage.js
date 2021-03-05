import React from "react";
import MoviesList from "./MoviesList";
import { MoviesDisplay } from "../styles";
// Importing Observer from Mobx
import { observer } from "mobx-react";
// Importing movieStore from MovieStore
import movieStore from "../Stores/movieStore";

const WatchedPage = () => {
  return (
    <div>
      <MoviesDisplay>
        <MoviesList movies={movieStore.movies} />
      </MoviesDisplay>
    </div>
  );
};

export default observer(WatchedPage);
