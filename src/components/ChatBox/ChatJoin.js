import React, { useState } from "react";
import axios from "../../API/axios";
import {
  registerSchema,
  loginSchema,
} from "../../utils/validations/joinSchema";
import ChatRegister from "../ChatBoxComponents/ChatRegister";
import ChatLogin from "../ChatBoxComponents/ChatLogin";
import ChatAvatar from "../ChatBoxComponents/ChatAvatar";

const ChatJoin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showAvatarForm, setShowAvatarForm] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [email, setEmail] = useState("pro123908@gmail.com");
  const [name, setName] = useState("Bilal");
  const [password, setPassword] = useState("home123");
  const [errors, setErrors] = useState({});

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);

    let uploadedPicture = e.target.files[0];

    if (uploadedPicture) {
      let fileReader = new FileReader();

      fileReader.readAsDataURL(uploadedPicture);
      fileReader.onload = function (event) {
        setPreviewImage(event.target.result);
      };
    }
  };

  const toggleForm = () => {
    setEmail("");
    setName("");
    setPassword("");
    setShowLogin(!showLogin);
    setErrors({});
  };

  const getErrors = (errorsArray) => {
    let errors = {};

    errorsArray.map(({ message, path }) => {
      if (!errors[path]) {
        errors[path] = message;
      }
    });

    return errors;
  };

  const onLogin = () => {
    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(async (res) => {
        console.log(res);
        setErrors({});

        try {
          let response = await axios.post("/auth/login", {});
          console.log("Some ", response);
        } catch (err) {
          console.log("Error ", err.response);
        }
      })
      .catch((err) => {
        setErrors(getErrors(err.inner));
      });
  };
  const onRegister = () => {
    let registerData = { email, password, name };
    registerSchema
      .validate(registerData, { abortEarly: false })
      .then(async (res) => {
        console.log(res);
        setErrors({});

        try {
          let response = await axios.post("/auth/register", {});
          console.log("Some ", response);
        } catch (err) {
          console.log("Error ", err.response);
        }
      })
      .catch((err) => {
        setErrors(getErrors(err.inner));
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up__modal">
        <button className="sign-up__modal-close">
          <svg className="sign-up__modal-icon">
            <use xlinkHref="img/sprite.svg#icon-clear"></use>
          </svg>
        </button>

        <div className="sign-up__content">
          <div className="sign-up__text">
            <div className="sign-up__text-primary">
              Welcome to the Chat Room
            </div>
            <div className="sign-up__text-secondary">
              {showLogin && !showAvatarForm
                ? "Login and have fun!"
                : showAvatarForm
                ? "Upload an avatar to mark your appearance"
                : "Join Chat Room and have fun!"}
            </div>
          </div>

          {!showAvatarForm ? (
            <>
              {!showLogin ? (
                <ChatRegister
                  name={name}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setName={setName}
                  errors={errors}
                  onRegister={onRegister}
                  toggleForm={toggleForm}
                />
              ) : (
                <ChatLogin
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  errors={errors}
                  onLogin={onLogin}
                  toggleForm={toggleForm}
                />
              )}
            </>
          ) : (
            <ChatAvatar
              onChangeImage={onChangeImage}
              previewImage={previewImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatJoin;
