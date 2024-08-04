import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import gift from '../../../assets/home/section2.png'

const SectionTwo: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="pt-12">
      <div className="container bg-purple-100 rounded-xl flex justify-between items-center px-5 py-9">
        <div>
          <p className="text-2xl font-bold">회원가입만 해도 쏟아지는 혜택</p>
          <p>회원가입 시, 3회 무료 상담 쿠폰 + 중고거래 3,000원 할인권!</p>
          <button
            onClick={goToLogin}
            className="bg-app-blue px-4 py-3 text-white rounded-lg mt-3 font-bold"
          >
            로그인/회원가입
          </button>
        </div>
        <img width={150} className="mr-5" src={gift}/>
      </div>
    </div>
  );
};

export default SectionTwo;
