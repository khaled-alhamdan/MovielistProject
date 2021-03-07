import React from "react";
import WishList from "./WishList";
// Importing Observer from Mobx
// import { observer } from "mobx-react";
// Importing movieStore from MovieStore
import movieStore from "../Stores/movieStore";
import WatchedList from "./WatchedList";

export const MainPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <WishList movies={movieStore.movies} />
        <WatchedList />
      </div>
    </div>
  );
};

export default MainPage;
