import React from "react";

const ChatAvatar = ({ onChangeImage, previewImage, onUploadAvatar }) => {
  return (
    <>
      <div className="file-upload w-90">
        <label htmlFor="file" className="file-upload__label">
          <div className="file-upload__button">
            <svg className="file-upload__icon">
              <use xlinkHref="img/sprite.svg#icon-image"></use>
            </svg>
          </div>

          <input
            type="file"
            placeholder="Email"
            id="file"
            className="sign-up__file-input file-upload__input"
            spellCheck="false"
            onChange={onChangeImage}
          />
        </label>

        <div className="file-upload__preview">
          {previewImage ? (
            <img
              src={previewImage}
              alt=""
              id="image"
              className="file-upload__image"
            />
          ) : (
            <span className="file-upload__preview-text">Preview</span>
          )}
        </div>
      </div>
      <div className="sign-up__button-container">
        <a className="sign-up__button" onClick={onUploadAvatar}>
          Upload Avatar
        </a>
      </div>

      <button className="skip-button" onClick={() => onUploadAvatar(false)}>
        Skip for now
      </button>
    </>
  );
};

export default ChatAvatar;
