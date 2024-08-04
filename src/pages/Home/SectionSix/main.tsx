import React from "react";
import { Link } from "react-router-dom";
import TradeCard from "../../../components/TradeCard/main";
const SectionSix: React.FC = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="font-bold flex items-center justify-between">
          <p className="text-lg">중고거래</p>
          <Link to="/trade" className="text-app-blue underline text-sm">
            더 많은 중고 상품 보기
          </Link>
        </div>

        <div className="flex flex-wrap justify-center">
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        <TradeCard/>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
