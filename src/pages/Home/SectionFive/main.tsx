import React from "react";
import { Link } from "react-router-dom";

const SectionFive: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-home5 h-screen-80">
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="flex items-center justify-center h-screen-80 flex-col">
        <p className="relative z-10 text-center text-4xl leading-relaxed font-bold pt-16 mt-5">
          안 입는 옷이 있으신가요? <br />
          중고 옷도 쉽게 사고 팔고 해보세요!
        </p>
        <Link to='/trade' className="text-black text-lg relative z-10 underline font-bold p-2 hover:text-main duration-300">중고거래 바로가기</Link>
      </div>
    </div>
  );
};

export default SectionFive;
