import React, { useEffect, useState } from "react";
import WizFindTab from "../../components/WizFindTab/main";
import { Fade } from "react-awesome-reveal";

const backgrounds = [
  "/images/home/section1-2.jpg",
  "/images/home/section1.jpg",
  "/images/home/section1-3.jpg",
  "/images/home/section1-4.jpg",
];

const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
};

const SectionOne: React.FC = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    setBackground(getRandomBackground());
  }, []);

  return (
    <section
      className="bg-fixed h-128 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container font-kr">
        <div className="pt-48 text-4xl text-white font-bold">
          <Fade delay={300} duration={1500}>
            <p>나만의 스타일리스트가 필요하다면?</p>
            <p className="font-logo text-main">WearWiz!</p>
          </Fade>
        </div>
        <div className="pt-3">
          <WizFindTab />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
