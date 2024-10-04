import React from "react";
import 선물 from "../../../assets/home/section2.png";

const Event: React.FC = () => {
  return (
    <div className="bg-purple-200 py-5 px-6 rounded-xl relative cursor-pointer">
      <p className="font-bold text-lg mb-7 relative z-20">이벤트</p>
      <div className="text-zinc-800 relative z-20">
        <p className="font-bold text-2xl mb-3">회원가입 이벤트!</p>
        <p className="mb-7">
          지금 가입하면 3회 무료 상담 쿠폰과 중고거래 3,000원 할인권을 드립니다!
        </p>
        <p className="text-sm font-bold">
          회원가입만으로 특별한 혜택을 만나보세요! 🚀
        </p>
      </div>

      {/* 이미지를 가장 뒤로 보내기 위해 z-10을 설정 */}
      <img
        className="absolute right-5 bottom-0 z-10 opacity-30"
        width={200}
        src={선물}
      />
    </div>
  );
};

export default Event;
