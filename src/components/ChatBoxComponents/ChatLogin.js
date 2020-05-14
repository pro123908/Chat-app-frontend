import React from "react";

const ChatLogin = ({
  email,
  password,
  setEmail,
  setPassword,
  errors,
  onLogin,
  toggleForm,
}) => {
  return (
    <>
      <div className="sign-up__input-area">
        <input
          type="text"
          placeholder="Email"
          className="sign-up__input"
          spellCheck="false"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="error-text">{errors.email}</div>
      </div>

      <div className="sign-up__input-area">
        <input
          type="password"
          placeholder="Password"
          className="sign-up__input"
          spellCheck="false"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="error-text">{errors.password}</div>
      </div>

      <div className="sign-up__button-container">
        <a className="sign-up__button" onClick={onLogin}>
          Login
        </a>
      </div>

      <div className="sign-up__text sign-up__text-inline">
        <div className="sign-up__text-tertiary">New to chat room ?</div>
        <a className="sign-up__failed margin-l-vs" onClick={toggleForm}>
          Join
        </a>
      </div>
    </>
  );
};

export default ChatLogin;
