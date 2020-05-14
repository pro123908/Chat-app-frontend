import React from "react";

const MessageOutgoing = ({ message }) => {
  return (
    <div className="chat-message message__outgoing">
      <div className="chat-message__container-outgoing">
        <img src="img/user-1.jpg" alt="" className="chat-message__image" />
        <div className="outgoing__text chat-message__text">{message}</div>
        <div className="chat-message__time">12:56</div>
      </div>
    </div>
  );
};

export default MessageOutgoing;
