import React from "react";
import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMedal } from "react-icons/fa";

const SectionFive: React.FC = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="font-bold flex items-center justify-between">
          <p className="flex items-center text-lg dark:text-white">
            <FaCrown className="text-yellow-400 text-xl mr-1 " /> 이번주 BEST
            코디
          </p>
          <Link to="/wiz" className="text-app-blue underline text-sm">
            OOTD 보기
          </Link>
        </div>
        <div className="flex justify-between mt-5">
          {/* 카드 예시 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-zinc-700">
            <img
              className="w-full"
              src="https://image.msscdn.net/thumbnails/snap/images/2024/08/06/bed0312b91b74bffb6924cb3d523cb75.jpg?w=1000"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 dark:text-white">
                <FaMedal className="text-yellow-400" />
                닉네임뭐로함
              </div>
              <p className="text-gray-700 text-base dark:text-white">
                오늘 카페에서 이 옷 입고 여유롭게 한잔! 커피랑 잘 어울리지? 😊
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #카페
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #체크셔츠
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #날씨좋음
              </span>
            </div>
            <div className="text-right px-6 pb-4">
              <Link
                to="/ootd/id=123"
                className="text-app-blue underline text-sm font-bold"
              >
                자세히 보기
              </Link>
            </div>
          </div>

          {/* 카드 예시2 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-zinc-700">
            <img
              className="w-full"
              src="https://image.msscdn.net/thumbnails/snap/images/2024/08/05/5191788b076f479fa8312c7e8d49e31f.jpg?w=1000"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 dark:text-white">
                <FaMedal className="text-gray-400" />
                이게닉네임
              </div>
              <p className="text-gray-700 text-base dark:text-white">
                아무말아무말아무말아무말아무말아무말아무말아무말
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
            <div className="text-right px-6 pb-4">
              <Link
                to="/ootd/id=123"
                className="text-app-blue underline text-sm font-bold"
              >
                자세히 보기
              </Link>
            </div>
          </div>

          {/* 카드 예시3 */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-zinc-700">
            <img
              className="w-full"
              src="https://image.msscdn.net/thumbnails/snap/images/2024/08/06/20a33ad5fb3a4d90b2fce39ebffa1d46.jpg?w=1000"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 dark:text-white">
                <FaMedal className="text-yellow-700" />
                닉네임임
              </div>
              <p className="text-gray-700 text-base dark:text-white">
                아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
            <div className="text-right px-6 pb-4">
              <Link
                to="/ootd/id=123"
                className="text-app-blue underline text-sm font-bold"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
