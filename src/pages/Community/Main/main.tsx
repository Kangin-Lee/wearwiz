import React from "react";
import UserInfo from "../../../components/UserInfo/main";
import WeekendHotWiz from "../../../components/WeekendHotWiz/main";
import { IoIosArrowForward } from "react-icons/io";
import WeeklyHotPostsPreview from "./WeeklyHotPostsPreview";
import OutfitCategories from "./OutfitCategories";
import ItemCategories from "./ItemCategories";
import Announcement from "./Announcement";

const Main: React.FC = () => {
  return (
    <div>
      <Announcement />
      <p className="flex items-center text-xl font-bold text-zinc-800 mb-3">
        실시간 전체 글 56,445개 <IoIosArrowForward />
      </p>
      <div className="grid grid-cols-[3fr_1fr] gap-4">
        {/* 커뮤니티 메인 페이지의 메인 */}
        <div className="">
          {/* 이번주 인기글 */}
          <WeeklyHotPostsPreview />

          {/* 코디별 커뮤니티 */}
          <OutfitCategories />

          {/* 아이템별 커뮤니티 */}
          <ItemCategories />
        </div>

        {/* 커뮤니티 메인 페이지의 사이드 메뉴 */}
        <div>
          {/* 로그인이 되어있다면 사용자 정보를 보여주고 로그인 안된 상태면 로그인 버튼 나옴 */}
          <div className="mb-4">
            <UserInfo />
          </div>

          {/* 이번주 인기있는 5명의 위즈 정보를 보여줌 */}
          <div>
            <WeekendHotWiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
