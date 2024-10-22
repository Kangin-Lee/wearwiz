import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import PostItem from "../PostItem";
import Filter from "../../../components/Filter/main";

const OutfitCommunity: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // 'outfit'이라는 쿼리 파라미터 값 가져오기
  const category = queryParams.get("outfit");
  return (
    <div className="container font-kr">
      <div className="my-10">
        <div className="flex items-end ">
          <h1 className="text-3xl border-r-gray-500 font-bold text-zinc-800">
            코디별 커뮤니티
          </h1>
          <h5 className="text-lg ml-1 text-zinc-400 font-semibold">
            {category}방
          </h5>
        </div>
        <p className="text-sm text-zinc-400 mt-3">
          현재까지 등록된 {category} 게시글입니다.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-zinc-700">게시글 5,358건</p>
        <div className="border-2 flex items-center py-2 px-3">
          <input
            placeholder="궁금한 이야기를 검색해보세요!"
            className="outline-none w-72"
          />
          <IoIosSearch />
        </div>
      </div>

      {/* 필터링 및 게시글 작성 부분 */}
      <div className="flex justify-between items-center my-6">
        <Filter />
        <Link
          to="/community/create"
          className="bg-main px-16 py-4 rounded-sm text-white font-bold"
        >
          게시글 작성
        </Link>
      </div>

      {/* 글 리스트 부분 */}
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default OutfitCommunity;
