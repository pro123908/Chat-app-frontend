import React from "react";

const ListUser = ({ user: { name, image, id }, onListUserClicked }) => {
  return (
    <div className="list-user" onClick={() => onListUserClicked(id)}>
      <img src={`img/${image}.jpg`} alt="" className="list-user__image" />
      <div className="list-user__description">
        <div className="user-name">{name}</div>
        <div className="message">This is the last message readable</div>
      </div>
      <div className="list-user__time">12:56pm</div>
    </div>
  );
};

export default ListUser;
