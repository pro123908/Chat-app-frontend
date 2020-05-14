import React from "react";

import "./App.css";
import ChatBox from "./components/ChatBox";
import { Provider } from "./components/context/ChatContext";

function App() {
  return (
    <Provider>
      <ChatBox />
    </Provider>
  );
}

export default App;
