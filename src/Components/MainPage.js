import React, { useState } from "react";
import WishList from "./WishList";
// Importing Observer from Mobx
// import { observer } from "mobx-react";
// Importing movieStore from MovieStore
import movieStore from "../Stores/movieStore";
import WatchedList from "./WatchedList";
import { WishListSerachAddDiv } from "../styles";
import SearchMovieItem from "./SearchMovieItem";

import SearchBar from "./SearchBar";

export const MainPage = () => {
  const [query, setQuery] = useState("");
  const filteredMovies = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((x) => <SearchMovieItem movie={x} key={x.id} />);

  return (
    <div>
      <WishListSerachAddDiv>
        <SearchBar setQuery={setQuery} />
      </WishListSerachAddDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <WishList movies={movieStore.movies} />
        {/* {filteredMovies} */}
        <WatchedList />
      </div>
    </div>
  );
};

export default MainPage;
