import React from "react";
import SectionOne from "./SectionOne/main";
import SectionTwo from "./SectionTwo/main";
import SectionThree from "./SectionThree/main";
import SectionFour from "./SectionFour/main";
import Nav from "../../components/Nav/main";
import SectionFive from "./SectionFive/main";
import SectionSix from "./SectionSix/main";
import Footer from "../../components/Footer/main";

const Home: React.FC = () => {
  return (
    <div className="font-kr dark:bg-zinc-800">
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
};

export default Home;
