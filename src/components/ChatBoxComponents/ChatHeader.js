import React from "react";
import IconButton from "./IconButton";

const ChatHeader = ({
  chatUser: { name, image },
  backToChatList,
  showChatUserInfo,
}) => {
  return (
    <div className="chat__header">
      <IconButton callback={backToChatList} iconName="arrow-left2" />

      <div className="header__user">
        <img src={`img/${image}.jpg`} alt="" className="header__img" />
        <div className="header__info">
          <div className="user-name">{name}</div>
          <div className="user-status">Active 3 mins ago</div>
          {/* <div className="user-status--active">
                Active
              </div>  */}
        </div>
      </div>
      <IconButton callback={showChatUserInfo} iconName="user" />
    </div>
  );
};

export default ChatHeader;
