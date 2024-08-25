import React from "react";
import { TbCameraPlus } from "react-icons/tb";

const TradeRegister: React.FC = () => {
  return (
    <div>
      <div className="container my-20 font-kr">
        {/*상품이미지 구역---------------------------- */}
        <p className="font-bold mb-1">상품 이미지</p>
        <div className="flex items-center w-full mb-7">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <TbCameraPlus className="text-4xl mb-3 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">클릭하여 업로드</span>하거나
                드래그 앤 드롭
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG 또는 GIF (최대 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        {/*상품명 구역---------------------------- */}
        <div>
          <div className="flex flex-col">
            <label htmlFor="itemName" className="font-bold mb-1">
              상품명
            </label>
            <input
              type="text"
              id="itemName"
              placeholder="상품명을 입력해주세요."
              className="input w-96 mb-7"
            />
          </div>

          {/*상품가격 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemPrice" className="font-bold mb-1">
              판매가격
            </label>
            <input
              type="number"
              min={0}
              id="itemPrice"
              placeholder="판매가격을 입력해주세요. (단위: 원)"
              className="input w-96 mb-7"
            />
          </div>

          {/*상품설명 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemInfo" className="font-bold mb-1">
              설명
            </label>
            <textarea
              placeholder="이 아이템에 대한 설명을 작성해주세요."
              className="input resize-none h-56 mb-7"
            />
          </div>

          <p>상품상태 (중고/새상품)</p>
          <p>거래 방법</p>
          <p>지역</p>
        </div>
      </div>
    </div>
  );
};

export default TradeRegister;
