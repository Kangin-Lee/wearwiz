import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5.2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};

const ColorMatchVideo: React.FC = () => {
  return (
    <div className="my-9">
      <p className="font-bold text-lg mb-2">
        패션 전문가의 컬러 매칭 팁, 옷장 속 숨겨진 조합 찾기!
      </p>
      <Carousel responsive={responsive} className="video-content">
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/GCcqsNWU_LE?si=4qTZKWYfFmy-NFfd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/C_y3QKHqhF4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/7kKWhKvXxxc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/vWjUWRe219Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/maf2-AwvUkY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/MvsrlCFJJNE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="colormatch-video">
          <iframe
            width="320"
            height="181"
            src="https://www.youtube.com/embed/O_IUHkcG3eo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Carousel>
    </div>
  );
};

export default ColorMatchVideo;
