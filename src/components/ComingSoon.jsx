import React from "react";
import ImageCarousel from "./ImageCarousel";
import YouTubeVD from "./YouTube";
import caru_03 from "../Images/caru_03.JPG";
import caru_01 from "../Images/caru_01.JPG";
import caru_04 from "../Images/caru_04.jpeg";
import caru_02 from "../Images/caru_02.JPG";
import military from "../Images/militaryhat.jpg";

const ComingSoon = (props) => {
  // const [selectedImgSrc, setSelectedImageSrc] = useState("");
  // const [modalIsOpen, setIsOpen] = useState(false);

  const imgs = [
    { src: caru_01, text: "coming soon" },
    { src: caru_02, text: "coming soon" },
    { src: caru_03, text: "calles" },
    { src: caru_04, text: "coming soon" },
    { src: military, text: "military" },
  ];
  const onClickItem = (index, item) => {
    props.onClickItem(imgs[index].src);
  };
  // <ComingSoon onClickItem={onClickItem} />;

  return (
    <>
      <h1>hello</h1>
      <YouTubeVD />
      <ImageCarousel imgs={imgs} onClickItem={onClickItem} />
    </>
  );
};
export default ComingSoon;
