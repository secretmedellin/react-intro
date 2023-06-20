import React from "react";
import ImageCarousel from "./ImageCarousel";
import caru_03 from "../Images/caru_03.JPG";

import caru_01 from "../Images/caru_01.JPG";
import caru_04 from "../Images/caru_04.jpeg";
import caru_02 from "../Images/caru_02.JPG";

const ComingSoon = (props) => {
  const imgs = [
    { src: caru_01, text: "coming soon" },
    { src: caru_02, text: "coming soon" },
    { src: caru_03, text: "calles" },
    { src: caru_04, text: "coming soon" },
  ];
  return (
    <div>
      <h1> ComingSoon</h1>
      <ImageCarousel imgs={imgs} />;
    </div>
  );
};

export default ComingSoon;
