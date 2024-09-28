import React from "react";
import { Fade } from "react-awesome-reveal";
import ColorMatchVideo from "./ColorMatchVideo";
import ColorPalette from "./ColorPalette";

const ColorMatch: React.FC = () => {
  return (
    <div className="font-kr">
      <div className="h-80 bg-colorMatch bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="container font-bold">
          <Fade delay={300} duration={1500}>
            <p className="text-4xl pt-48">
              아직도 <b className="text-main">컬러매치</b>가 어려우신가요?
            </p>
            <p className="text-2xl mt-2">
              지금 색상을 선택하고, 위즈들이 추천하는 완벽한 컬러 매칭 팁을
              받아보세요!
            </p>
          </Fade>
        </div>
      </div>
      <div className="container h-256">
        <ColorMatchVideo />
        <ColorPalette />
      </div>
    </div>
  );
};

export default ColorMatch;
