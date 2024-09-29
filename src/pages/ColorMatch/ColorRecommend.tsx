import React, { useEffect } from "react";
import { choice } from "./ColorInfo";

interface ColorRecommendProps {
  selectColor: string;
  selectCode: string;
}

const ColorRecommend: React.FC<ColorRecommendProps> = ({
  selectCode,
  selectColor,
}) => {
  const selectColorInfo = choice[selectColor] || { text: "설명 없음" };

  console.log(selectColorInfo);
  return (
    <div className="shadow-md p-5 rounded-md flex  bg-zinc-50 flex-col my-9">
      {/* 선택한 색상과 그 색상에 대한 내용 */}
      <div className="flex justify-around">
        <div
          style={{
            backgroundColor: selectCode, // 선택한 색상으로 배경을 설정
            border: "1px solid #e9ecef",
          }}
          className="p-5 rounded-md text-center w-32 h-32 flex justify-center items-center"
        >
          {selectColor === "WHITE" ? (
            <div className="text-black text-lg font-bold">{selectColor}</div>
          ) : (
            <div className="text-white text-lg font-bold">{selectColor}</div>
          )}
        </div>
        <div className="ml-4 h-32 w-256 bg-zinc-200 rounded-md">
          <p className="p-3">{selectColorInfo.text}</p>
        </div>
      </div>
      {/* 선택한 색상과 잘 어울리는 색 추천과 스타일 예시 */}
      <div className="flex justify-between">
        {selectColorInfo.combination.map((combination, index) => (
          <div className="mt-9 bg-white rounded-md flex flex-col items-center mx-5 p-3">
            {selectColorInfo.code[index] === "#ffffff" ? (
              <div
                style={{
                  backgroundColor: selectColorInfo.code[index],
                  border: "1px solid #e9ecef",
                }}
                className="w-16 h-16 rounded-md"
              ></div>
            ) : (
              <div
                style={{ backgroundColor: selectColorInfo.code[index] }}
                className="w-16 h-16 rounded-md"
              ></div>
            )}
            <div>{combination}</div>
            <img
              src={selectColorInfo.img[index]}
              alt={`${combination} style`}
              style={{
                width: "200px", // 고정된 너비
                height: "300px", // 고정된 높이
                objectFit: "cover", // 이미지 비율을 유지하며 크기에 맞게 자르기
              }}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorRecommend;
