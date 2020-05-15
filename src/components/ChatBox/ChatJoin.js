import React, { useState, useContext } from "react";
import axios from "../../API/axios";
import {
  registerSchema,
  loginSchema,
} from "../../utils/validations/joinSchema";
import ChatRegister from "../ChatBoxComponents/ChatRegister";
import ChatLogin from "../ChatBoxComponents/ChatLogin";
import ChatAvatar from "../ChatBoxComponents/ChatAvatar";
import { storeAuthToken, getAuthToken } from "../../utils/authToken";
import { Context } from "../context/ChatContext";

const ChatJoin = ({ setShowJoin }) => {
  const {
    setCurrentUser,
    state: { currentUser },
  } = useContext(Context);

  const [showLogin, setShowLogin] = useState(true);
  const [showAvatarForm, setShowAvatarForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [email, setEmail] = useState("pro123908@gmail.com");
  const [name, setName] = useState("Bilal");
  const [password, setPassword] = useState("home123");
  const [errors, setErrors] = useState({});
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);

    let uploadedPicture = e.target.files[0];

    if (uploadedPicture) {
      let fileReader = new FileReader();
      setSelectedAvatar(e.target.files[0]);

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

  const onUploadAvatar = async (upload = true) => {
    if (!upload) setShowJoin(false);
    else if (selectedAvatar) {
      const data = new FormData();
      data.append("avatar", selectedAvatar);

      let authToken = getAuthToken();

      try {
        setLoading(true);
        let response = await axios.post("/user/update/avatar", data, {
          headers: { "auth-token": authToken },
        });
        setShowJoin(false);
        console.log("Response => ", response);
        setLoading(false);
      } catch (err) {
        console.log("Error => ", err);
        setLoading(false);
      }
    }
  };

  const onLogin = () => {
    let loginData = { email, password };

    loginSchema
      .validate(loginData, { abortEarly: false })
      .then(async (res) => {
        console.log(res);
        setErrors({});

        try {
          setLoading(true);
          let {
            data: { token, user },
          } = await axios.post("/auth/login", loginData);
          console.log("Some ", { token, user });
          storeAuthToken(token);
          setCurrentUser(user);
          setShowJoin(false);
          setLoading(false);
          // setShowAvatarForm(true);
        } catch (err) {
          console.log("Error ", err.response);
          setServerError(err.response.data.msg);
          setLoading(false);
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
          setLoading(true);
          let {
            data: { token, user },
          } = await axios.post("/auth/register", registerData);

          storeAuthToken(token);
          setCurrentUser(user);
          setShowAvatarForm(true);
          setLoading(false);
          console.log("Some ", { token, user });
        } catch (err) {
          console.log("Error ", err.response);
          setServerError(err.response.data.msg);
          setLoading(false);
        }
      })
      .catch((err) => {
        setErrors(getErrors(err.inner));
      });
  };

  let currentUserName =
    Object.keys(currentUser).length > 0 ? currentUser.name : "";

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
              Welcome to the Chat Room {currentUserName}
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
              onUploadAvatar={onUploadAvatar}
            />
          )}
          {serverError ? serverError : ""}
          {loading ? "Loading..." : ""}
        </div>
      </div>
    </div>
  );
};

export default ChatJoin;
