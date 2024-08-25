import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useAllTradeItem } from "../../pages/Trade/tradeService";
import { useNavigate } from "react-router-dom";

interface IdProps {
  id: number;
}

interface MoreItem {
  id: number;
  title: string;
  price: string;
  heart: number;
  createDate: string;
  user: string;
  location: string;
  img: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6.7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};

const MoreTradeItem: React.FC<IdProps> = ({ id }) => {
  const { data } = useAllTradeItem();
  const navigate = useNavigate();

  const getRandomItems = (data: MoreItem[], num: number): MoreItem[] => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // 데이터가 충분할 경우 랜덤 선택
  const randomItems = data && data.length >= 10 ? getRandomItems(data, 10) : [];

  const goToTradeItem = (id: number) => {
    navigate(`/trade/${id}`);
  };

  return (
    <div>
      <div className="container mb-16">
        <p className="font-bold text-2xl mb-3">이 아이템은 어떤가요?</p>

        <div>
          {randomItems.length > 0 ? (
            <div>
              <Carousel responsive={responsive}>
                {randomItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => goToTradeItem(item.id)}
                    className="cursor-pointer"
                  >
                    <img
                      src={item.img}
                      className="w-56 h-56 rounded-2xl object-cover mb-2"
                      alt="다른 상품 이미지"
                    />
                    <p
                      key={item.id}
                      className="overflow-ellipsis overflow-hidden whitespace-nowrap w-56 text-lg"
                    >
                      {item.title}
                    </p>
                    <div className="flex items-center">
                      <p className="font-bold text-xl mr-2">{item.price}원</p>
                      <p className="text-sm text-zinc-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            <p>데이터가 충분하지 않습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreTradeItem;
