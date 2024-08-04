import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 캐주얼 from "../../../assets/style/캐주얼.jpg";
import 미니멀 from "../../../assets/style/미니멀.webp";
import 스트릿 from "../../../assets/style/스트릿.webp";
import 비즈니스캐주얼 from "../../../assets/style/비즈니스캐주얼.webp";
import 시티보이 from "../../../assets/style/시티보이.webp";
import 긱시크 from "../../../assets/style/긱시크.webp";
import 고프코어 from "../../../assets/style/고프코어.webp";
import 프레피 from "../../../assets/style/프레피.webp";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5.2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.2,
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
// 캐주얼, 미니멀, 스트릿, 비즈니스 캐주얼, 시티보이, 긱시크, 고프코어, 프레피
const SectionThree: React.FC = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="font-bold text-lg">추천 스타일</div>
        <Carousel responsive={responsive}>
          <div className="style-card">
            <img src={캐주얼} />
            <span>캐주얼</span>
            <span>Casual</span>
          </div>
          <div className="style-card">
            <img src={미니멀} />
            <span>미니멀</span>
            <span>Minimal</span>
          </div>
          <div className="style-card">
            <img src={스트릿} />
            <span>스트릿</span>
            <span>Street</span>
          </div>
          <div className="style-card">
            <img src={비즈니스캐주얼} />
            <span>비즈니스 캐주얼</span>
            <span>Business Casual</span>
          </div>
          <div className="style-card">
            <img src={긱시크} />
            <span>긱시크</span>
            <span>Geek Chic</span>
          </div>
          <div className="style-card">
            <img src={시티보이} />
            <span>시티보이</span>
            <span>City Boy</span>
          </div>
          <div className="style-card">
            <img src={고프코어} />
            <span>고프코어</span>
            <span>Gorpcore</span>
          </div>
          <div className="style-card">
            <img src={프레피} />
            <span>프레피</span>
            <span>Preppy</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SectionThree;
