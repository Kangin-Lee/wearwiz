import React, { useState } from "react";
import { area } from "../../common/areaSelect";
import TradeItem from "./TradeItem";
import { Fade } from "react-awesome-reveal";

const Trade: React.FC = () => {
  // 상태 관리
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedSubArea, setSelectedSubArea] = useState<string>("");

  // 선택된 지역에 따라 하위 지역 목록을 가져옴
  const subAreas =
    area.find((area) => area.name === selectedArea)?.subArea || [];

  // 이벤트 핸들러
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value);
    setSelectedSubArea(""); // 새로운 지역 선택 시 하위 지역 초기화
  };

  const handleSubAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubArea(e.target.value);
  };

  return (
    <div className="font-kr">
      <div className="container">
        <h1 className="text-center text-3xl font-bold my-10">
          <Fade duration={1300}>새로운 주인을 기다리는 옷들</Fade>
        </h1>

        <div className="flex items-center justify-between mb-7">
          {/* 지역 선택 select box-------------------------------------------------- */}
          <div className="flex items-center">
            <p className="mr-2 font-bold">지역 선택</p>
            <select
              value={selectedArea}
              onChange={handleAreaChange}
              className="text-center border-2 py-1 px-2 mx-1 rounded-md text-black"
            >
              <option value="">전체</option>
              {area.map((area) => (
                <option key={area.name} value={area.name}>
                  {area.name}
                </option>
              ))}
            </select>

            {selectedArea && (
              <div>
                <select
                  value={selectedSubArea}
                  onChange={handleSubAreaChange}
                  className="text-center border-2 py-1 px-2 mx-1 rounded-md text-black"
                >
                  <option value="">전체</option>
                  {subAreas.map((subArea) => (
                    <option key={subArea} value={subArea}>
                      {subArea}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          {/* ------------------------------------------------------------------------------ */}
          <button className="flex items-center font-bold bg-app-blue text-white px-4 py-2 rounded-md">
            판매하기
          </button>
        </div>
        <hr />

        {/* 중고 의류 리스트---------------------------------------------------------------- */}
        <TradeItem
          selectedArea={selectedArea}
          selectedSubArea={selectedSubArea}
        />
      </div>
    </div>
  );
};

export default Trade;
