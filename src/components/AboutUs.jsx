import React from "react";
// import YouTubeVD from "./YouTube";
// import Collections from "./Collections";
import face from "../Images/face.jpg";

const AboutUs = (props) => {
  return (
    <div>
      <h1 id="titlecalles">CALLES DE MIAMI</h1>
      <img src={face} alt="face" className="logoton" />
      {/* <Collections onClickItem={props.onClickItem} /> */}
      {/* <YouTubeVD /> */}
    </div>
  );
};

export default AboutUs;
