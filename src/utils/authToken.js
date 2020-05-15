export const storeAuthToken = (token) => {
  localStorage.setItem("auth-token", JSON.stringify(token));
};

export const getAuthToken = () => {
  if (localStorage.getItem("auth-token")) {
    return JSON.parse(localStorage.getItem("auth-token"));
  }
  return false;
};
