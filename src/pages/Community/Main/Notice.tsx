import React from "react";
import 확성기 from "../../../assets/community/notice.png";

const Notice: React.FC = () => {
  return (
    <div className="bg-blue-200 py-5 px-6 rounded-xl relative cursor-pointer">
      <p className="font-bold text-lg">📢 공지</p>
      <p className="text-sm font-bold text-zinc-600 my-5">
        [커뮤니티 이용 규칙]
      </p>

      <div className="text-sm text-zinc-500">
        <p className="line-clamp-1">
          1. 패션은 개성! 서로의 스타일을 존중해주세요
        </p>
        <p>2. 패션 정보는 정확하게!</p>
        <p>3. 사진을 올릴 때는 저작권에 유의해주세요.</p>
        <p>4. 비판 대신 건설적인 피드백을 남겨주세요.</p>
        <p>5. 개인정보와 사적인 내용은 공유하지 마세요.</p>
        <p>6. 스팸, 광고성 글은 금지!</p>
        <p>7. 패션과 관련 없는 글은 자제해주세요.</p>
      </div>
      <img
        className="absolute right-5 bottom-0 opacity-70"
        width={200}
        src={확성기}
      />
    </div>
  );
};

export default Notice;
