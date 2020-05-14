import React, { useContext, useState, useEffect } from "react";
import ChatList from "./ChatList";
import Chat from "./Chat";
import ChatUser from "./ChatUser";
import { Context } from "../context/ChatContext";
import ChatJoin from "./ChatJoin";

const ChatBox = () => {
  const {
    state: { usersArray, chatMessages },
    addMessagesToChat,
  } = useContext(Context);
  // console.log("Look here => ", chatMessages);

  useEffect(() => {
    setMobileView(window.matchMedia("(max-width:749px)").matches);
  }, []);

  window.onresize = () => {
    setMobileView(window.matchMedia("(max-width:749px)").matches);
  };

  const [chatUser, setChatUser] = useState(usersArray[0]);
  // const [users, setUsers] = useState(usersArray);

  const [mobileView, setMobileView] = useState(false);

  const [showChatList, setShowChatList] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const [showLogin, setShowLogin] = useState(true);

  const onListUserClicked = (id) => {
    setChatUser(usersArray.find((user) => user.id === id));
    if (mobileView) {
      setShowChatList(false);
      setShowChat(true);
    }
  };

  const backToChatList = () => {
    setShowChatList(true);
    setShowChat(false);
  };

  const showChatUserInfo = () => {
    setShowChat(false);
  };

  const backToChat = () => {
    setShowChat(true);
  };

  return (
    <div>
      {showLogin ? (
        <ChatJoin />
      ) : (
        <div className="chat-box">
          {showChatList || !mobileView ? (
            <ChatList
              users={usersArray}
              onListUserClicked={onListUserClicked}
            />
          ) : (
            ""
          )}

          {showChat || !mobileView ? (
            <Chat
              chatUser={chatUser}
              backToChatList={backToChatList}
              showChatUserInfo={showChatUserInfo}
              chatMessages={chatMessages}
            />
          ) : (
            ""
          )}
          {(!showChatList && !showChat) || !mobileView ? (
            <ChatUser chatUser={chatUser} backToChat={backToChat} />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
