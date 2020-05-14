import React from "react";

const IconButton = ({
  callback,
  iconName,
  disabled = false,
  notMobile = false,
}) => {
  let classNames = `icon-button__button ${
    notMobile ? "icon-button__button_show" : ""
  }`;
  return (
    <div className="icon-button">
      <button className={classNames} onClick={callback} disabled={disabled}>
        <svg className="icon-button__icon">
          <use xlinkHref={`img/sprite.svg#icon-${iconName}`}></use>
        </svg>
      </button>
    </div>
  );
};

export default IconButton;
