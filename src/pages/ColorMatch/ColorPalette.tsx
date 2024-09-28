import React from "react";

const ColorPalette: React.FC = () => {
  return (
    <div>
      <p className="text-lg font-bold mb-2">
        한 번의 클릭으로 완성되는 컬러 매치 마법!
      </p>
      <div className="shadow-md p-5 rounded-md flex justify-between">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-black rounded-md"></div>
          <p className="mt-1">BLACK</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
