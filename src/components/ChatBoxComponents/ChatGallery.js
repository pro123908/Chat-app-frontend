import React from "react";

const ChatGallery = () => {
  const imagesArray = [
    "nat-1.jpg",
    "nat-2.jpg",
    "nat-3.jpg",
    "hotel-1.jpg",
    "hotel-2.jpg",
    "hotel-3.jpg",
    "hero-small.jpg",
    "user-1.jpg",
    "user-2.jpg",
    "user-3.jpg",
    "user-4.jpg",
    "user-5.jpg",
    "user-6.jpg",
  ];

  const galleryContent = imagesArray.map((image) => (
    <img src={`img/${image}`} alt="" className="chat-gallery__image" />
  ));

  return (
    <div className="chat-gallery">
      <div className="chat-gallery__images">{galleryContent}</div>
    </div>
  );
};

export default ChatGallery;
