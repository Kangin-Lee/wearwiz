import React from 'react'
import wiz from "../../assets/위즈사진대용.jpg";
import { FaStar } from "react-icons/fa";

const WizCard:React.FC = () => {
  return (
    <div className="style-card">
      <img src={wiz} />
      <div className="flex items-center">
        <p className="text-lg mr-1 font-bold dark:text-white">이거 닉넴임</p>
        <p className="text-sm text-app-blue font-bold">(상담가능)</p>
      </div>
      <div className="dark:text-white">대전 거주·쇼핑 동행 가능</div>
      <div className="flex items-center mt-1">
        <span className="w-14 flex items-center py-1 px-2 bg-yellow-400 font-bold rounded-md text-sm">
          <FaStar /> <p className="ml-1">9.8</p>
        </span>
        <p className="text-sm text-gray-400 ml-1">198명이 참여</p>
      </div>
      <div className="flex items-center justify-between">
        {/* 태그 */}
        <div className="flex text-sm mt-2">
          <p className="px-3 py-1 bg-gray-200 rounded-full mr-1">#스트릿</p>
          <p className="px-3 py-1 bg-gray-200 rounded-full mr-1">#캐주얼</p>
          <p className="px-3 py-1 bg-gray-200 rounded-full">#미니멀</p>
        </div>

        {/* 포트폴리오 */}
        <p className="text-sm text-app-blue underline font-bold">
          포트폴리오 보기
        </p>
      </div>
    </div>
  );
}

export default WizCard
