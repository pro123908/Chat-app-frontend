import React, { useContext } from "react";
import { Context } from "../context/ChatContext";

const MessageOutgoing = ({ message }) => {
  const {
    state: {
      currentUser: { image },
    },
  } = useContext(Context);

  return (
    <div className="chat-message message__outgoing">
      <div className="chat-message__container-outgoing">
        <img src={image} alt="" className="chat-message__image" />
        <div className="outgoing__text chat-message__text">{message}</div>
        <div className="chat-message__time">12:56</div>
      </div>
    </div>
  );
};

export default MessageOutgoing;
