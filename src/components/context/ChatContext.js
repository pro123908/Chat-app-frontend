import createDataContext from "./createDataContext";
import { setUserInLocalStorage } from "../../utils/manageUser";

const initialState = {
  loadingOverlay: false,
  currentUser: {},
  usersArray: [
    { id: 1, name: "Bilal Ahmad", image: "bilal" },
    { id: 2, name: "Waleed Mujahid", image: "waleed" },
    { id: 3, name: "Haider Mansoor", image: "haider" },
    { id: 4, name: "Hamza Mujahid", image: "hamza" },
  ],

  chatMessages: {
    1: [
      { message: "Hi Bilal, how are you?", type: "out" },
      { message: "Hello, I'm fine, you tell,?", type: "in" },
      { message: "Me fine too ", type: "out" },
    ],
    2: [
      { message: "Hi Waleed, how are you?", type: "out" },
      { message: "Hello, I'm fine, you tell,?", type: "in" },
      { message: "Me fine too ", type: "out" },
    ],

    3: [
      { message: "Hi Haider, how are you?", type: "out" },
      { message: "Hello, I'm fine, you tell,?", type: "in" },
      { message: "Me fine too ", type: "out" },
    ],

    4: [
      { message: "Hi Hamza, how are you?", type: "out" },
      { message: "Hello, I'm fine, you tell,?", type: "in" },
      { message: "Me fine too ", type: "out" },
    ],
  },
};

const addChatMessagesToState = (state, { chatUserId, message, type }) => {
  const { chatMessages } = state;

  let currentChat = chatMessages[chatUserId];

  currentChat = [...currentChat, { message, type }];

  chatMessages[chatUserId] = currentChat;

  return { ...state, chatMessages };
};

const chatReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_MESSAGES_TO_CHAT":
      return addChatMessagesToState(state, payload);

    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };

    case "SET_LOADING_OVERLAY":
      return { ...state, loadingOverlay: payload };

    default:
      return state;
  }
};

const setLoadingOverlay = (dispatch) => {
  return (flag) => {
    dispatch({ type: "SET_LOADING_OVERLAY", payload: flag });
  };
};

const addMessagesToChat = (dispatch) => {
  return (message) => {
    dispatch({ type: "ADD_MESSAGES_TO_CHAT", payload: message });
  };
};

const setCurrentUser = (dispatch) => {
  return (user) => {
    if (Object.keys(user).length > 0) {
      setUserInLocalStorage(user);
    }

    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };
};
export const { Provider, Context } = createDataContext(
  chatReducer,
  { addMessagesToChat, setCurrentUser, setLoadingOverlay },
  initialState
);
