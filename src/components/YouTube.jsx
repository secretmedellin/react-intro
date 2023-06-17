import React from "react";
import YouTube from "react-youtube";

const YouTubeVD = () => {
  const isMobile = window.innerWidth <= 576;

  const opts = {
    heigth: isMobile ? "396" : "390",
    width: isMobile ? "366" : "640",
    playersVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId="mGjR7fI69pY" opts={opts} />;
};

export default YouTubeVD;
