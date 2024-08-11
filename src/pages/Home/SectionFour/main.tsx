import React from "react";
import Carousel from "react-multi-carousel";
import WizCard from "../../../components/WizCard/main";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4.2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};

const SectionFour: React.FC = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="font-bold flex items-center justify-between">
          <p className="text-lg items-center flex dark:text-white">
            <BsFire className="text-xl mr-1 text-red-500" /> 이번 주 HOT 위즈
          </p>
          <Link to="/wiz" className="text-app-blue underline text-sm">
            더 많은 위즈 보기
          </Link>
        </div>
        <Carousel responsive={responsive}>
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
          <WizCard />
        </Carousel>
      </div>
    </div>
  );
};

export default SectionFour;
