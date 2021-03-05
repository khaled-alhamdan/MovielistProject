import React from "react";
import {
  WatchedPageContainerDiv,
  WatchedPageWatchedDeleteButtonsDiv,
  WatchedPageWatchedDeleteButtons,
} from "../styles";

export const WatchDeleteButtons = () => {
  return (
    <div>
      <WatchedPageContainerDiv>
        <WatchedPageWatchedDeleteButtonsDiv>
          <div>
            <WatchedPageWatchedDeleteButtons>
              Watched
            </WatchedPageWatchedDeleteButtons>
          </div>
          <div>
            <WatchedPageWatchedDeleteButtons>
              Delete
            </WatchedPageWatchedDeleteButtons>
          </div>
        </WatchedPageWatchedDeleteButtonsDiv>
      </WatchedPageContainerDiv>
    </div>
  );
};

export default WatchDeleteButtons;
