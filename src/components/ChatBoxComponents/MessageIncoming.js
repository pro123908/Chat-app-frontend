import React from "react";

const MessageIncoming = ({ chatUser: { image }, message }) => {
  return (
    <div className="chat-message message__incoming">
      <div className="chat-message__container-incoming">
        <img src={`img/${image}.jpg`} alt="" className="chat-message__image" />
        <div className="incoming__text chat-message__text">{message}</div>
        <div className="chat-message__time">12:57</div>
      </div>
    </div>
  );
};

export default MessageIncoming;
