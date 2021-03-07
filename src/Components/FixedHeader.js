import React from "react";
import {
  HeaderNavDiv,
  NavbarButtonsDiv,
  // NavbarButtons,
  NavbarTitleButton,
} from "../styles";
// import SearchBar from "./SearchBar";
// Importing useState
// import { useState } from "react";
import AddWish from "./AddWish";

// const NavbarButtonsList = ["Watched"];

const FixedNavHeader = () => {
  // const [query, setQuery] = useState("");
  return (
    <HeaderNavDiv>
      <div>
        <NavbarTitleButton onclick="/WishPage'">
          <b> Movies App</b>
        </NavbarTitleButton>
      </div>
      <NavbarButtonsDiv>
        {/* {NavbarButtonsList.map((button) => (
          <NavbarButtons type="button">{button}</NavbarButtons>
        ))} */}
        {/* <SearchBar setQuery={setQuery} /> */}
        <AddWish />
      </NavbarButtonsDiv>
    </HeaderNavDiv>
  );
};

export default FixedNavHeader;
