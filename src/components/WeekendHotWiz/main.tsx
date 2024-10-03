import React from "react";
import { Link } from "react-router-dom";

const WeekendHotWiz: React.FC = () => {
  const topWiz = [1, 2, 3, 4, 5];
  return (
    <div className="rounded-md border-[1px] p-4">
      <div className="font-bold">
        <p>스타일이 고민이신가요?</p>
        <p>위즈에게 상담을 받아보세요!</p>
      </div>

      <div>
        {topWiz.map((item) => (
          <div className="my-3 flex items-center hover:bg-zinc-100 p-3 rounded-md">
            <img
              className="w-10 h-10 rounded-full"
              // 이미지 바꿔야됨
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="위즈 프로필 사진"
            />
            <div className="ml-3">
              <div>닉네임자리</div>
              <div className="text-sm">대전 거주·쇼핑 동행 가능</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-app-blue font-bold underline text-end text-sm">
        <Link to="/wiz">위즈 더보기</Link>
      </div>
    </div>
  );
};

export default WeekendHotWiz;
