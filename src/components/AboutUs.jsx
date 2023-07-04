import React from "react";
// import YouTubeVD from "./YouTube";
// import Collections from "./Collections";
import face from "../Images/face.jpg";

const AboutUs = (props) => {
  return (
    <div>
      <h1>About Us title hello</h1>
      <p>you tube video below</p>
      <img src={face} alt="face" />
      {/* <Collections onClickItem={props.onClickItem} /> */}
      {/* <YouTubeVD /> */}
    </div>
  );
};

export default AboutUs;
