import React from "react";
import ListUser from "../ChatBoxComponents/ListUser";

const ChatList = ({ onListUserClicked, users }) => {
  let usersListContent = users.map((user) => (
    <ListUser key={user.id} user={user} onListUserClicked={onListUserClicked} />
  ));

  return <div className="chat-box__list">{usersListContent}</div>;
};

export default ChatList;
