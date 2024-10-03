import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ItemCategories: React.FC = () => {
  const outfit = [1, 2, 3, 4, 5];
  const category = [
    "전체",
    "상의",
    "하의",
    "아우터",
    "신발",
    "악세서리",
    "기타",
  ];

  const [selectItemCategory, setSelectItemCategory] = useState(category[0]);

  const selectCategory = (category: string) => {
    setSelectItemCategory(category);
  };

  return (
    <div>
      <p className="text-xl font-bold text-zinc-800 mb-4 mt-8">
        아이템별 커뮤니티
      </p>

      <div className="flex justify-between mb-4">
        {category.map((category) => (
          <button
            key={category}
            className={`${
              selectItemCategory === category
                ? "text-main border-main"
                : "text-zinc-500 hover:text-main hover:border-main"
            } w-28 py-3 border-[1px] rounded-lg`}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="border-[1px] rounded-xl py-5 px-6">
        {/* 아이템별 네비게이션 부분 */}
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-2">{selectItemCategory}</p>
          <p className="text-zinc-500 flex items-center text-sm">
            더보기 <IoIosArrowForward />
          </p>
        </div>

        {/* 아이템별 리스트 */}
        {outfit.map((item) => (
          <div className="flex justify-between items-center my-5">
            <p className="hover:underline cursor-pointer text-zinc-700">
              이거 어떻게 입어야돼요???
            </p>
            <div className=" text-zinc-500 flex items-center">
              <div className="flex items-center mr-3">
                <BiMessageSquareDots className="mr-1 text-lg" /> 4
              </div>
              <div className="flex items-center">
                <MdOutlineRemoveRedEye className="mr-1 text-lg" /> 1,656
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategories;
