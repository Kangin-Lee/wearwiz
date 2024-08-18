import React, { useEffect, useState } from "react";
import { useTradeDetailItem } from "./tradeDetailService";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import MoreTradeItem from "../../components/MoreTradeItem/main";
import Loading from "../../components/Loading/main";
import Error from "../../components/Error/main";

interface DetailItem {
  createDate: string;
  id: number;
  title: string;
  price: string;
  heart: number;
  user: string;
  location: string;
  img: string;
}

const TradeDetail: React.FC = () => {
  const [heart, setHeart] = useState(false);
  const { id } = useParams();
  const {
    data: detailItem,
    isLoading,
    isError,
    error,
  } = useTradeDetailItem(id!);

  const tradeItem: DetailItem = detailItem;

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Error error={error.message} />
      </div>
    );
  }

  const isHeart = () => {
    setHeart(!heart);
  };

  return (
    <div className="font-kr">
      <div className="container">
        <div className="my-20 flex justify-between">
          {/* 상품 이미지 구역 */}
          <div>
            <img
              src={tradeItem.img}
              className="w-128 h-128 object-cover rounded-2xl"
            />
          </div>

          {/* 상품 정보 구역 */}
          <div>
            <p className="text-2xl mb-2">{tradeItem.title}</p>
            <p className="text-4xl font-bold mb-5">{tradeItem.price}원</p>
            <div className="flex space-x-3 text-sm border-2 py-6 w-[700px] justify-center">
              <p className="flex flex-col items-center px-8 border-r-2">
                등록자
                <b>{tradeItem.user}</b>
              </p>
              <p className="flex flex-col items-center px-8 border-r-2">
                등록일자
                <b>{tradeItem.createDate}</b>
              </p>
              <p className="flex flex-col items-center px-8 border-r-2">
                거래 가능 지역
                <b>{tradeItem.location}</b>
              </p>
              <p className="flex flex-col items-center px-8">
                찜<b>{tradeItem.heart}</b>
              </p>
            </div>
            <div className=" my-10">
              <p className="font-bold">설명</p>
              <p className="w-[500px] text-zinc-400 text-sm">
                안녕하세요! 😊 특별한 날을 위해 샀지만, 이제는 맞지 않는 느낌이
                들어서요. 몇 번 입었지만 항상 칭찬을 받았고, 상태도 아주
                좋습니다. 새로운 주인을 만나서 더 자주 빛났으면 좋겠어요.
                사랑으로 잘 입어줄 분을 찾고 있습니다. 감사합니다! 💕
              </p>
            </div>
            <div className="flex items-center">
              <button
                className="flex items-center justify-center text-2xl mr-4 "
                onClick={isHeart}
              >
                {heart ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="hover:text-red-500" />
                )}
              </button>
              <button className="bg-main text-white w-64 h-12 rounded-sm hover:bg-pink-700 duration-200">
                채팅하기
              </button>
            </div>
          </div>
        </div>
        <MoreTradeItem id={tradeItem.id} />
      </div>
    </div>
  );
};

export default TradeDetail;
