import wishMovies from "../wishMovies";
// import watchedMovies from "../watchedMovies";
import { makeObservable, observable, action } from "mobx";

class MovieStore {
  movies = wishMovies.map((movie) => ({ ...movie, status: false })); // Here we are mapping over each movie object and adding a status of "False to it"

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
    this.movies.push({ ...newMovie, status: false }); // Here we are giving each new movie a status of "False"
  };

  moveToWatched = (id) => {
    this.movies = this.movies.map((toWatched) =>
      toWatched.id === id
        ? { ...toWatched, status: !toWatched.status }
        : toWatched
    );
  };

  deleteButton = (id) => {
    this.movies = this.movies.filter((toDelete) => toDelete.id !== id);
  };
}

const movieStore = new MovieStore();

export default movieStore;
