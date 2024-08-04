import React from "react";
import WizFindTab from "../../../components/WizFindTab/main";
import { Fade } from "react-awesome-reveal";

const SectionOne: React.FC = () => {
  return (
    <section className="bg-home1 bg-fixed h-128 bg-cover bg-no-repeat bg-center">
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
