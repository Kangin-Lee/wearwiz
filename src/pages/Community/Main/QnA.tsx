import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const QnA: React.FC = () => {
  return (
    <div className="bg-green-200 py-5 px-6 rounded-xl cursor-pointer">
      <p className="font-bold text-lg mb-6">자주 묻는 질문 (Q&A)</p>

      <div className="text-sm text-zinc-500">
        <p className="line-clamp-1 py-1">
          1. 스타일리스트 추천을 받으려면 어떻게 해야 하나요?
        </p>
        <p className="line-clamp-1 py-1">
          2. 중고 의류 거래는 어떻게 진행되나요?
        </p>
        <p className="line-clamp-1 py-1">
          3. 특정 지역에서 중고 거래가 가능한가요?
        </p>
        <p className="line-clamp-1 py-1">
          4. Wiz 스타일리스트는 어떻게 선정되나요?
        </p>
        <p className="line-clamp-1 py-1">
          5. 중고 의류 등록 시 어떤 정보를 기입해야 하나요?
        </p>
      </div>
      <p className="mt-3 text-zinc-500 flex items-center justify-end text-sm hover:underline cursor-pointer">
        더보기 <IoIosArrowForward />
      </p>
    </div>
  );
};

export default QnA;
