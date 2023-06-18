import React from "react";
import ImageCarousel from "./ImageCarousel";
import pic_01 from "../Images/IMG_9033.jpg";
import pic_02 from "../Images/IMG_9033.jpg";

const Collections = (props) => {
  <div>
    <h1>Collection</h1>
  </div>;
  const imgs = [
    { scr: pic_01, text: "calles" },
    { scr: pic_02, text: "military hat" },
  ];

  const onClickItem = (index, item) => {
    props.onClickItem(imgs[index].src);
  };
  return <ImageCarousel imgs={imgs} onClickItem={onClickItem} />;
};

export default Collections;
