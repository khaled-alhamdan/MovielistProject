import wishMovies from "../wishMovies";
// import watchedMovies from "../watchedMovies";
import { makeObservable, observable, action } from "mobx";
// import { useState } from "react";

class MovieStore {
  movies = wishMovies;

  // {const [wishList, setWishList] = useState(movies.map((movie)=> ({...movie, status: false})));}
  // {const moveIt = (id) => {
  // setWishList( wishList.map((movie) =>
  // movie.id === id? {...movie, status: !movie.status}
  // : movie
  // )
  // );
  // };}

  constructor() {
    makeObservable(this, {
      movies: observable,
      moveToWatched: action,
      deleteButton: action,
      addNewMovie: action,
    });
  }

  addNewMovie = (added) => {
    let newMovie = { name: added, id: this.movies.length + 1 };
    // newMovie.id = this.movies.length + 1;
    this.movies.push(newMovie);
  };

  moveToWatched = (id) => {
    this.movies = this.movies.filter((toWatched) => toWatched.id === id);
  };

  deleteButton = (id) => {
    this.movies = this.movies.filter((toDelete) => toDelete.id !== id);
  };
}

const movieStore = new MovieStore();

export default movieStore;
