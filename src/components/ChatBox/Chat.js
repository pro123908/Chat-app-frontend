import React, { useState } from "react";
import ChatHeader from "../ChatBoxComponents/ChatHeader";
import MessageIncoming from "../ChatBoxComponents/MessageIncoming";
import MessageOutgoing from "../ChatBoxComponents/MessageOutgoing";
import ChatInput from "../ChatBoxComponents/ChatInput";
import { v4 } from "uuid";

const Chat = ({ chatUser, backToChatList, showChatUserInfo, chatMessages }) => {
  // const [chatMessages, setChatMessages] = useState([
  //   { message: "Hi Mckay, how are you?", type: "out" },
  //   { message: "Hello, I'm fine, you tell,?", type: "in" },
  // ]);

  const sendMessageToChat = (message) => {
    // setChatMessages([...chatMessages, { message, type: "out" }]);
  };

  const chatMessagesContent = chatMessages[chatUser.id].map(
    ({ message, type }) => {
      return type === "in" ? (
        <MessageIncoming key={v4()} chatUser={chatUser} message={message} />
      ) : (
        <MessageOutgoing key={v4()} chatUser={chatUser} message={message} />
      );
    }
  );
  return (
    <div className="chat-box__chat">
      <div className="chat">
        <ChatHeader
          chatUser={chatUser}
          backToChatList={backToChatList}
          showChatUserInfo={showChatUserInfo}
        />

        <div className="chat__area">{chatMessagesContent}</div>

        <ChatInput sendMessageToChat={sendMessageToChat} />
      </div>
    </div>
  );
};

export default Chat;
