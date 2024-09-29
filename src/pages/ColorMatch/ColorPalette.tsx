import React, { useState } from "react";
import { colors } from "./colors"; // colors 데이터가 있는 파일
import ColorRecommend from "./ColorRecommend";
import { Link } from "react-router-dom";

const ColorPalette: React.FC = () => {
  const [code, serCode] = useState(colors.code[0]); // 기본값을 첫 번째 색상으로 설정
  const [color, setColor] = useState(colors.text[0]);

  const colorInfo = (colorText: string): void => {
    const colorCode = colors.code[colors.text.indexOf(colorText)]; // 색 이름에 해당하는 색상 코드 찾기
    const color = colors.text[colors.text.indexOf(colorText)]; // 색 이름에 해당하는 색상 코드 찾기
    serCode(colorCode); // 색상 코드로 상태 업데이트
    setColor(color);
  };

  return (
    <div>
      <p className="text-lg font-bold mb-2">
        한 번의 클릭으로 완성되는 컬러 매치 마법!
      </p>
      <div className="shadow-md p-5 rounded-md flex justify-between bg-zinc-50">
        {colors.text.map((colorText, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-md cursor-pointer hover:-translate-y-2 transition transform duration-300 ease-in-out"
              style={{
                backgroundColor: colors.code[index], // 색상 코드 적용
                border: "1px solid #e9ecef",
              }}
              onClick={() => colorInfo(colorText)} // 클릭 시 색상 선택
            ></div>
            <p className="mt-1">{colorText}</p>
          </div>
        ))}
      </div>
      <p className="mt-2">
        이 10가지 색상으로 코디를 완벽하게! 더 많은 컬러는 위즈에게 물어보세요!
        <Link to="/wiz" className="ml-1 text-app-blue underline font-bold">
          위즈와 상담하기
        </Link>
      </p>
      {/* 선택한 색상에 따라 업데이트되는 ColorRecommend 컴포넌트 */}
      <ColorRecommend selectCode={code} selectColor={color} />
    </div>
  );
};

export default ColorPalette;
