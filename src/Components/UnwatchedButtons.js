import React from "react";
import {
  WatchedPageContainerDiv,
  WatchedPageWatchedDeleteButtonsDiv,
  WatchedPageWatchedDeleteButtons,
} from "../styles";
import movieStore from "../Stores/movieStore";
// import { observer } from "mobx-react";

export const UnwatchedButtons = ({ movie }) => {
  return (
    <div>
      <WatchedPageContainerDiv>
        <WatchedPageWatchedDeleteButtonsDiv>
          <div>
            <WatchedPageWatchedDeleteButtons
              onClick={() => movieStore.moveToWatched(movie.id)}
            >
              Unwatched
            </WatchedPageWatchedDeleteButtons>
          </div>
          <div>
            <WatchedPageWatchedDeleteButtons
              onClick={() => movieStore.deleteButton(movie.id)}
            >
              Delete
            </WatchedPageWatchedDeleteButtons>
          </div>
        </WatchedPageWatchedDeleteButtonsDiv>
      </WatchedPageContainerDiv>
    </div>
  );
};

export default UnwatchedButtons;
