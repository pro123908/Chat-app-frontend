import React from "react";

const ChatNav = ({ currentUser: { name, avatar }, clearActiveUser }) => {
  return (
    <div className="chat-nav">
      <div className="user-info">
        <img src={avatar} alt="" className="user-info__img" />
        <div className="user-info__info">
          <div className="user-info__name">{name}</div>
        </div>
      </div>
      <button className="logout-button" onClick={clearActiveUser}>
        Logout
      </button>
    </div>
  );
};

export default ChatNav;
