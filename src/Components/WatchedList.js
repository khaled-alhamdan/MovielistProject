import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";
// Importing useState
import { useState } from "react";
// Importing SearchBar Component
// import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import {
  MoviesDisplay,
  // WishListSerachAddDiv,
  MoviesDisplayContainerDiv,
} from "../styles";

const WatchedList = () => {
  const [query, setQuery] = useState("");
  const filteredMovies = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((x) => (
      <WatchedMovieItem
        movie={x}
        key={x.id}
        //   setProduct={props.setProduct}
        // onClick={() => props.setProduct}
      />
    ));
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
        <MoviesDisplay>{filteredMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WatchedList);
