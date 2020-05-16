import React, { useContext, useState, useEffect } from "react";
import ChatList from "./ChatList";
import Chat from "./Chat";
import ChatUser from "./ChatUser";
import { Context } from "../context/ChatContext";
import ChatJoin from "./ChatJoin";
import { getAuthToken } from "../../utils/authToken";
import { getUserFromLocalStorage, clearUser } from "../../utils/manageUser";
import ChatNav from "../ChatBoxComponents/ChatNav";
import LoadingOverlay from "react-loading-overlay";

const ChatBox = () => {
  const {
    state: { usersArray, chatMessages, currentUser, loadingOverlay },
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
    <LoadingOverlay active={loadingOverlay} spinner>
      <div class="chat-app">
        {showJoin ? (
          <ChatJoin setShowJoin={setShowJoin} />
        ) : (
          <>
            <ChatNav
              clearActiveUser={clearActiveUser}
              currentUser={currentUser}
            />
            <div className="chat-box">
              {/* <button onClick={clearActiveUser}>Logout {currentUser.name}</button> */}
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
          </>
        )}
      </div>
    </LoadingOverlay>
  );
};

export default ChatBox;
