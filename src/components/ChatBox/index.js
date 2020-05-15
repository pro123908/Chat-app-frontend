import React, { useContext, useState, useEffect } from "react";
import ChatList from "./ChatList";
import Chat from "./Chat";
import ChatUser from "./ChatUser";
import { Context } from "../context/ChatContext";
import ChatJoin from "./ChatJoin";
import { getAuthToken } from "../../utils/authToken";
import { getUserFromLocalStorage, clearUser } from "../../utils/manageUser";

const ChatBox = () => {
  const {
    state: { usersArray, chatMessages, currentUser },
    addMessagesToChat,
    setCurrentUser,
  } = useContext(Context);
  // console.log("Look here => ", chatMessages);

  useEffect(() => {
    if (getAuthToken()) {
      setShowJoin(false);
      setCurrentUser(getUserFromLocalStorage());
    }
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

  const [showJoin, setShowJoin] = useState(true);

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

  const clearActiveUser = () => {
    clearUser();
    setCurrentUser({});
    setShowJoin(true);
  };

  return (
    <div>
      {showJoin ? (
        <ChatJoin setShowJoin={setShowJoin} />
      ) : (
        <div className="chat-box">
          <button onClick={clearActiveUser}>Logout {currentUser.name}</button>
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
