import React, { useState } from "react";
import WishList from "./WishList";
// Importing Observer from Mobx
// import { observer } from "mobx-react";
// Importing movieStore from MovieStore
import movieStore from "../Stores/movieStore";
import WatchedList from "./WatchedList";
import { WishListSerachAddDiv, WishAndWatchedContainerDiv } from "../styles";
import SearchMovieItem from "./SearchMovieItem";

import SearchBar from "./SearchBar";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  // const filteredMovies = movieStore.movies
  //   .filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()))
  //   .map((x) => <SearchMovieItem movie={x} key={x.id} />);

  return (
    <div>
      <WishListSerachAddDiv>
        <SearchBar setSearch={setSearch} />
      </WishListSerachAddDiv>
      <WishAndWatchedContainerDiv>
        <WishList searched={search} />
        {/* {filteredMovies} */}
        <WatchedList searched={search} />
      </WishAndWatchedContainerDiv>
    </div>
  );
};

export default MainPage;
