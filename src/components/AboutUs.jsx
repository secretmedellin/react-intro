import React from "react";

const AboutUs = (props) => {
  const onClickItem = () => {
    props.onClickItem(props.item.id);
  };
  return (
    <div>
      <h1>About our story</h1>
    </div>
  );
};

export default AboutUs;