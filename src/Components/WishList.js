import React from "react";
import WishMovieItem from "./WishMovieItem";
// Importing useState
import { useState } from "react";
// Importing SearchBar Component
// import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import movieStore from "../Stores/movieStore";
import { MoviesDisplay, MoviesDisplayContainerDiv } from "../styles";

const WishList = () => {
  // const [wishList, setWishList] = useState(movieStore.movies.map((movie)=> ({...movie, status: false})));

  // setWishList( wishList.map((movie) =>
  // movie.id === id? {...movie, status: !movie.status}
  // : movie
  // )
  // );

  const [query, setQuery] = useState("");
  const filteredMovies = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <WishMovieItem
        movie={movie}
        key={movie.id}
        //   setProduct={props.setProduct}
        // onClick={() => props.setProduct}
      />
    ));
  return (
    <>
      {/* <WishListSerachAddDiv>
        <SearchBar setQuery={setQuery} />
      </WishListSerachAddDiv> */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      > */}
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
        <MoviesDisplay>{filteredMovies}</MoviesDisplay>
      </MoviesDisplayContainerDiv>
    </>
  );
};

export default observer(WishList);
