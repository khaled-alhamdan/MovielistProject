import React from "react";
import MovieItem from "./MovieItem";
// Importing useState
import { useState } from "react";
// Importing movies from movies.js
import movies from "../movies";
// Importing SearchBar Component
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";

const MoviesList = () => {
  const [query, setQuery] = useState("");
  const filteredMovies = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((x) => (
      <MovieItem
        movie={x}
        key={x.id}
        //   setProduct={props.setProduct}
        // onClick={() => props.setProduct}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {filteredMovies}
    </>
  );
};

export default observer(MoviesList);
