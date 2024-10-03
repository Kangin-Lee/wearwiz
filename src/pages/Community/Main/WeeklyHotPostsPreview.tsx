import React from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

//이번주 인기글 미리보기
const WeeklyHotPostsPreview: React.FC = () => {
  const hotPosts = [1, 2, 3, 4, 5];
  return (
    <div className="border-[1px] rounded-xl py-5 px-6">
      {/* 이번주 인기글 네비게이션 부분 */}
      <div className="flex justify-between">
        <p className="text-xl font-bold mb-2">
          <b className="text-main">HOT</b> 이번주 인기글 🔥
        </p>
      </div>

      {/* 이번주 인기글 리스트 */}
      {hotPosts.map((item) => (
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
  );
};

export default WeeklyHotPostsPreview;
