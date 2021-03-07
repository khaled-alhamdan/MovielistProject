// Importing Themeprovide
import { ThemeProvider } from "styled-components";
// Importing useState
import { useState } from "react";
// Importing Styled Components from srtyles.js
import { GlobalStyle, ThemeButton, WishListSerachAddDiv } from "./styles";
// Importing FixedHeader
import FixedNavHeader from "./Components/FixedHeader";
// Importing Wish page
import MainPage from "./Components/MainPage";
// Importing Observer from Mobx
import { observer } from "mobx-react";
// // importing search bar
// import SearchBar from "./Components/SearchBar";
// import SearchMovieItem from "./Components/SearchItem";
// import movieStore from "./Stores/movieStore";

const theme = {
  lightTheme: {
    backgroundColor: "#cfcfd4", // main background color
    HeaderDivColor: "#121273",
    HeaderButtonsBack: "#cfcfd4",
    navbatButtonHover: "rgb(221, 219, 219)",
    bodyFontColor: "#121273",
    // HeaderFontColor: "#56a6e3",
    onHoverColor: "#56a6e3",
    buttonTextColor: "rgb(221, 219, 219)",
    buttonBGColor: "#121273",
  },
  darkTheme: {
    backgroundColor: "#0d378b", // main background color
    HeaderDivColor: "#282c34",
    HeaderButtonsBack: "#0d378b",
    navbatButtonHover: "#282c34",
    bodyFontColor: "rgb(221, 219, 219)",
    // HeaderFontColor: "#56a6e3",
    onHoverColor: "rgb(221, 219, 219)",
    buttonTextColor: "rgb(221, 219, 219)",
    buttonBGColor: "#282c34",
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("darkTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  // const [query, setQuery] = useState("");
  // const filteredMovies = movieStore.movies
  //   .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((movie) => (
  //     <SearchMovieItem
  //       movie={movie}
  //       key={movie.id}
  //       //   setProduct={props.setProduct}
  //       // onClick={() => props.setProduct}
  //     />
  //   ));
  return (
    <div>
      {/* Wrapping everything with the theme provider */}
      <ThemeProvider theme={theme[currentTheme]}>
        <FixedNavHeader />
        <GlobalStyle />
        {/* <WishListSerachAddDiv>
          <SearchBar setQuery={setQuery} />
          {filteredMovies}
        </WishListSerachAddDiv> */}
        <MainPage />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ThemeProvider>
    </div>
  );
};

export default observer(App);
