import React from "react";
import YouTubeVD from "./YouTube";
import Collections from "./Collections";

const AboutUs = (props) => {
  const onClickItem = () => {
    props.onClickItem(props.item.id);
  };
  return (
    <div>
      <h1>About Us title hello</h1>
      <p>you tube video below</p>
      <Collections onClickItem={props.onClickItem} />
      <YouTubeVD />
    </div>
  );
};

export default AboutUs;
