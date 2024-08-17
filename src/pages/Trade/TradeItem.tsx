import React from "react";
import { useAllTradeItem } from "./tradeService";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

interface TradeItem {
  id: number;
  title: string;
  price: string;
  heart: number;
  user: string;
  location: string;
  img: string;
}

const TradeItem: React.FC = () => {
  //   모든 중고물품 리스트 받기
  const { data: allData, isLoading, isError, error } = useAllTradeItem();

  console.log(allData);

  const navigate = useNavigate();
  const { id } = useParams();

  const goToTradeDetail = (id: number) => {
    console.log(id);
    navigate(`/trade/${id}`);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {allData?.map((item: TradeItem) => (
        <div
          className="mx-7 my-5 hover:bg-zinc-200 px-3 py-3 rounded-2xl duration-200"
          onClick={() => goToTradeDetail(item.id)}
        >
          <img
            src={item.img}
            className="w-72 h-72 object-cover rounded-2xl shadow-md"
          />
          <p className="mt-2 text-lg w-72 overflow-ellipsis overflow-hidden whitespace-nowrap">
            {item.title}
          </p>
          <p className="font-bold my-1">{item.price}원</p>
          <p className="text-sm">{item.location}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <FaHeart className="mr-1 text-red-500" /> {item.heart}
            </div>

            <Link
              to={`/trade/${item.id}`}
              className="text-app-blue underline text-sm font-bold"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradeItem;
