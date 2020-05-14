import React from "react";

const ChatStats = () => {
  return (
    <div className="chat-stats">
      <div className="chat-photos number-over-text">
        <div className="photos-count number-over-text__count">232</div>
        <div className="photos-text number-over-text__text">Photos</div>
      </div>

      <div className="chat-videos number-over-text">
        <div className="videos-count number-over-text__count">120</div>
        <div className="videos-text number-over-text__text">Videos</div>
      </div>
    </div>
  );
};

export default ChatStats;
