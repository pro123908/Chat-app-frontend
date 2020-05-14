import createDataContext from "./createDataContext";

const initialState = {
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

const chatReducer = (state, { type, payload }) => {
  let { chatMessages } = state;

  switch (type) {
    case "ADD_MESSAGES_TO_CHAT":
      return { ...state, chatMessages: [...chatMessages, payload] };

    default:
      return state;
  }
};

const addMessagesToChat = (dispatch) => {
  return (message) => {
    console.log("Message => ", message);
    dispatch({ type: "ADD_MESSAGES_TO_CHAT", payload: message });
  };
};

export const { Provider, Context } = createDataContext(
  chatReducer,
  { addMessagesToChat },
  initialState
);
