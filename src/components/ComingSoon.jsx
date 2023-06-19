import React from "react";
import ImageCarousel from "./ImageCarousel";
import pic_01 from "../Images/IMG_0790.JPG";
import pic_02 from "../Images/IMG_9033.jpg";

const ComingSoon = (props) => {
  const imgs = [
    { src: pic_01, text: "calles" },
    { src: pic_02, text: "military hat" },
  ];
  return (
    <div>
      <h1> ComingSoon</h1>
      <ImageCarousel imgs={imgs} />;
    </div>
  );
};

export default ComingSoon;
