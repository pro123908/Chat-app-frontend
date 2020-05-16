import React, { useState, useContext } from "react";
import { Context } from "../context/ChatContext";
import IconButton from "./IconButton";

const ChatInput = ({ sendMessageToChat, chatUserId }) => {
  const { addMessagesToChat } = useContext(Context);

  const [message, setMessage] = useState("");

  const addMessagesToChat_2 = () => {
    addMessagesToChat({ message, type: "out", chatUserId });
    setMessage("");
    setTimeout(() => {
      let chatDiv = document.querySelector(".chat__area");
      if (chatDiv.scrollHeight) {
        chatDiv.scrollTop = chatDiv.scrollHeight;
      }
    }, 100);
  };

  const onEnterKeyPressed = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      addMessagesToChat_2();
    }
  };

  return (
    <div className="chat__input-area">
      <textarea
        type="text"
        className="chat__input"
        placeholder="Type message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={onEnterKeyPressed}
      ></textarea>

      <IconButton
        iconName="send"
        callback={addMessagesToChat_2}
        disabled={!message}
        notMobile={true}
      />
    </div>
  );
};

export default ChatInput;
