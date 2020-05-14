import React from "react";

const ChatRegister = ({
  name,
  email,
  password,
  setEmail,
  setPassword,
  setName,
  errors,
  onRegister,
  toggleForm,
}) => {
  return (
    <>
      <div className="sign-up__input-area">
        <input
          type="text"
          placeholder="Full Name"
          className="sign-up__input"
          spellCheck="false"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="error-text">{errors.name}</div>
      </div>

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
        <a className="sign-up__button" onClick={onRegister}>
          Join
        </a>
      </div>

      <div className="sign-up__text sign-up__text-inline">
        <div className="sign-up__text-tertiary">Already a member ?</div>
        <a className="sign-up__failed margin-l-vs" onClick={toggleForm}>
          Log in
        </a>
      </div>
    </>
  );
};

export default ChatRegister;
