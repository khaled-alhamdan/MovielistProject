import movies from "../movies";
import { makeObservable, observable, action } from "mobx";

class MovieStore {
  movies = movies;

  moveToWatched = (id) => {
    this.movies = this.movies.filter((toWatched) => toWatched.id !== id);
    console.log(id);
  };

  constructor() {
    makeObservable(this, {
      movies: observable,
      moveToWatched: action,
    });
  }
}

const movieStore = new MovieStore();

export default movieStore;
