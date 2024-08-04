import React from "react";
import SectionOne from "./SectionOne/main";
import SectionTwo from "./SectionTwo/main";
import SectionThree from "./SectionThree/main";
import SectionFour from "./SectionFour/main";
import Nav from "../../components/Nav/main";
import SectionFive from "./SectionFive/main";
import SectionSix from "./SectionSix/main";

const Home: React.FC = () => {
  return (
    <div className="font-kr">
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
      <SectionSix/>
    </div>
  );
};

export default Home;
