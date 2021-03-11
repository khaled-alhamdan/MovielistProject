import styled, { createGlobalStyle } from "styled-components";
import ImageCoomingSoon from "./Images/ImageComingSoon.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.bodyFontColor};
    background-color: ${(props) => props.theme.backgroundColor};
    font-weight:300;
    font-family:sans-serif;
  }
`;

export const HeaderNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.HeaderDivColor};
  width: 100%;
  /* height: 80px; */
  box-sizing: border-box;
  /* margin: 0px; */
  padding: 10px;
  padding-bottom: 15px;
  padding-top: 15px;
  position: relative;
  color: rgb(221, 219, 219);
`;

export const NavbarTitleButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: rgb(221, 219, 219);
  font-size: 20px;
  font-family: sans-serif;
`;

export const NavbarButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarButtons = styled.button`
  background: ${(props) => props.theme.HeaderButtonsBack};
  color: ${(props) => props.theme.bodyFontColor};
  font-size: 15px;
  /* To make the buttons width/height/size equal */
  width: 80px;
  height: 30px;
  /* Remove the surrounding border */
  border: none;
  /* Cursor for how will the mouse look when hovering over them */
  cursor: pointer;
  margin: 5px;
  :hover {
    background-color: ${(props) => props.theme.onHoverColor};
    color: ${(props) => props.theme.navbatButtonHover};
    border: 1px solid ${(props) => props.theme.buttonTextColor};
  }
  :focus {
    outline: 0;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 5px;
  height: 15px;
  width: 25%;
  min-width: 200px;
  /* max-width: 800px; */
  margin-top: 40px;
  color: ${(props) => props.theme.HeaderDivColor};
  :focus {
    outline: 0;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  font-family: sans-serif;
  width: 25%;
  min-width: 200px;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 7px;
  border: none;
  background-color: ${(props) => props.theme.buttonBGColor};
  color: ${(props) => props.theme.buttonTextColor};
  transition-duration: 0.4s;
  :hover {
    background-color: ${(props) => props.theme.onHoverColor};
    color: ${(props) => props.theme.buttonBGColor};
    border: 2px solid ${(props) => props.theme.HeaderDivColor};
  }
  :focus {
    outline: 0;
  }
`;

export const WatchedPageContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
  height: 10px;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* border: 2px solid white; */
  /* padding: 10px; */
  margin-top: 25%;
  margin-bottom: 25%;
`;

export const WatchedPageWatchedDeleteButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const WatchedPageWatchedDeleteButtons = styled.button`
  margin: 2px;
  text-align: center;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.buttonBGColor};
    border: 2px solid ${(props) => props.theme.HeaderDivColor};
  }
`;

export const MoviesDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

export const MoviesDisplayContainerDiv = styled.div`
  border: 2px solid ${(props) => props.theme.bodyFontColor};
  border-radius: 10px;
  /* max-width: 425px; */
  min-width: 450px;
  width: 45%;
  margin: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  margin-top: 50px;
`;

export const MovieImage = styled.img`
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
  height: 170px;
  width: 125px;
`;

export const MovieItemConatinerDiv = styled.div`
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const MovieItemTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  height: 10px;
  margin-bottom: 50px;
  text-transform: uppercase;
  /* box-sizing: border-box; */
`;

export const WishListSerachAddDiv = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  grid-column: 1/-1;
`;

export const AddButton = styled.button`
  height: 27px;
  background: ${(props) => props.theme.HeaderButtonsBack};
  color: ${(props) => props.theme.bodyFontColor};
  font-size: 15px;
  /* To make the buttons width/height/size equal */
  width: 50px;
  /* Remove the surrounding border */
  border: none;
  /* Cursor for how will the mouse look when hovering over them */
  cursor: pointer;
  margin: 3px;
  :hover {
    background-color: ${(props) => props.theme.onHoverColor};
    color: ${(props) => props.theme.navbatButtonHover};
    border: 1px solid ${(props) => props.theme.buttonTextColor};
  }
  :focus {
    outline: 0;
  }
`;

export const AddMovieInput = styled.input`
  height: 25px;
  width: 20vw;
  min-width: 150px;
  outline: none;
  border: none;
`;

export const AddWishInputButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WishAndWatchedContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BoxTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-family: fantasy;
`;
