import React from "react";
import ChatGallery from "../ChatBoxComponents/ChatGallery";
import ChatStats from "../ChatBoxComponents/ChatStats";
import IconButton from "../ChatBoxComponents/IconButton";

const ChatUser = ({ chatUser: { id, name, image }, backToChat }) => {
  return (
    <div className="chat-box__user">
      <div className="chat-user">
        <IconButton callback={backToChat} iconName="arrow-left2" />

        <div className="chat-user__info">
          <img src={`img/${image}.jpg`} alt="" className="user-image" />
          <div className="user-name">{name}</div>
        </div>
      </div>

      <ChatStats />

      <ChatGallery />
    </div>
  );
};

export default ChatUser;
