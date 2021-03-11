import { useState } from "react";
import movieStore from "../Stores/movieStore";
import { AddButton, AddWishInputButtonDiv, AddMovieInput } from "../styles";

const AddWish = () => {
  const [added, setAdded] = useState({});

  return (
    <AddWishInputButtonDiv>
      <AddMovieInput
        type="text"
        placeholder="Add a new movie"
        onChange={(event) => setAdded(event.target.value)}
      />
      <AddButton onClick={() => movieStore.addNewMovie(added)}> Add</AddButton>
    </AddWishInputButtonDiv>
  );
};

export default AddWish;
