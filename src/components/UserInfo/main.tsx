import React from "react";
import { Link } from "react-router-dom";

const UserInfo: React.FC = () => {
  return (
    <div className="rounded-xl flex flex-col justify-center items-center py-10 border-[1px]">
      <p className="mb-6">로그인 이후 이용가능합니다.</p>
      <button className="bg-main text-white text-center py-3 w-2/3 rounded-sm">
        <Link to="/login">로그인 하기</Link>
      </button>
    </div>
  );
};

export default UserInfo;
