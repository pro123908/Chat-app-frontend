export const setUserInLocalStorage = (user) => {
  console.log("Coming in local => ", user);
  localStorage.setItem("chat-user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem("chat-user")) {
    return JSON.parse(localStorage.getItem("chat-user"));
  }

  return false;
};

export const clearUser = () => {
  localStorage.removeItem("chat-user");
  localStorage.removeItem("auth-token");
};
