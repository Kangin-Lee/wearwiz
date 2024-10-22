import React, { useState } from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const PostItem: React.FC = () => {
  const [bookMark, setBookMark] = useState(false);
  const bookMarkChange = () => {
    setBookMark(!bookMark);
  };
  return (
    <div className="py-8 px-4 border-t-2 hover:bg-zinc-100 duration-200 ease-in-out">
      <h1 className="text-xl font-bold text-zinc-700 hover:underline cursor-pointer">
        이거 어떻게 입는거에요?
      </h1>
      <p className="text-zinc-400 my-3">
        이거 저번에 샀는데 어떻게 코디해야 하는건가요?
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <p className="flex items-center mr-3">🤔 나도 궁금해요 7</p>
          <p className="flex items-center mr-3">
            <BiMessageSquareDots className="mr-1 text-lg " /> 4
          </p>
          <p className="flex items-center">
            <MdOutlineRemoveRedEye className="mr-1 text-lg" /> 1,656
          </p>
        </div>

        <div className="flex items-center">
          <p>옷잘입고싶어님</p>
          <p onClick={bookMarkChange}>
            {bookMark ? (
              <FaBookmark className="ml-1 text-lg text-main" />
            ) : (
              <FaRegBookmark className="ml-1 text-lg" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
