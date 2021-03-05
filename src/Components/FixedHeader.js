import React from "react";
import { HeaderNavDiv, NavbarButtonsDiv, NavbarButtons } from "../styles";
import SearchBar from "./SearchBar";
// Importing useState
import { useState } from "react";

const NavbarButtonsList = ["Watched"];

const FixedNavHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <HeaderNavDiv>
      <div>
        <h2>Movies App</h2>
      </div>
      <NavbarButtonsDiv>
        {NavbarButtonsList.map((button) => (
          <NavbarButtons>{button}</NavbarButtons>
        ))}
        {/* <SearchBar /> */}
        <SearchBar setQuery={setQuery} />
      </NavbarButtonsDiv>
    </HeaderNavDiv>
  );
};

export default FixedNavHeader;
