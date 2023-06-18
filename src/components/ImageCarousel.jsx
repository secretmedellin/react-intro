import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = (props) => {
  const imgs = props.imgs;
  const onClickItem = props.onClickItem;

  return (
    <Carousel autoPlay={true} dynamicHeight={true} onClickItem={onClickItem}>
      {imgs.map((img, index) => {
        return (
          <div key={index}>
            <img src={img.src} alt="img.text" className="carousel-pic" />
            {/* <p className="legend">{img.text}</p> */}
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
