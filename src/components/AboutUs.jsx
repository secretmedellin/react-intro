import React from "react";

const AboutUs = (props) => {
  const onClickItem = () => {
    props.onClickItem(props.item.id);
  };
  return (
    <div>
      <h1>About our story hello good day</h1>
    </div>
  );
};

export default AboutUs;
