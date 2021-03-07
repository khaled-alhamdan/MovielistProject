import { useState } from "react";
import movieStore from "../Stores/movieStore";
import { AddButton, AddWishInputButtonDiv } from "../styles";

const AddWish = () => {
  const [added, setAdded] = useState({});

  return (
    <AddWishInputButtonDiv>
      <input
        style={{
          height: "25px",
          outline: "none",
          border: "none",
        }}
        type="text"
        placeholder="Add a new movie"
        onChange={
          (event) => setAdded(event.target.value)
          // (event) =>
          //   fetch(
          //     `https://api.themoviedb.org/3/search/movie/505?api_key=${process.env.REACT_APP_TMDB_KEY}&langauge=en-US&include_adult=false&query=${event.target.value}`
          //   )
          //     .then((resualt) => resualt.json())
          //     .then((data) => console.log(data)))
        }
      />
      <AddButton onClick={() => movieStore.addNewMovie(added)}> Add</AddButton>
    </AddWishInputButtonDiv>
  );
};

export default AddWish;
