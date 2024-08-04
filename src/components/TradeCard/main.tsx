import React from "react";
import trade from "../../assets/중고거래대용.jpg";
import { FaHeart } from "react-icons/fa";

const TradeCard: React.FC = () => {
  return (
    <div className="style-card w-64 mb-3">
      <img src={trade} />
      <p className="truncate text-xl font-bold">
        제로 후드티 L 사이즈 싸게 팝니다. 가격은 선재시
      </p>
      <p>23,000원</p>
      <p className="text-sm">대전광역시 서구 월평동</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <FaHeart className="mr-1 text-red-500" /> 54
        </div>

        <p className="text-app-blue underline text-sm font-bold">자세히 보기</p>
      </div>
    </div>
  );
};

export default TradeCard;
