import React, { useEffect } from "react";
import { useAllTradeItem } from "./tradeService";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/main";
import Error from "../../components/Error/main";
import { useDispatch } from "react-redux";

interface TradeItem {
  id: number;
  title: string;
  price: string;
  heart: number;
  user: string;
  location: string;
  img: string;
}

interface Area {
  selectedArea: string;
  selectedSubArea: string;
}

const TradeItem: React.FC<Area> = ({ selectedArea, selectedSubArea }) => {
  //   모든 중고물품 리스트 받기
  const { data: allData, isLoading, isError, error } = useAllTradeItem();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const goToTradeDetail = (id: number) => {
    console.log(id);
    navigate(`/trade/${id}`);
  };

  // 필터링 로직
  const filteredData = allData?.filter((item: TradeItem) => {
    const matchesArea = selectedArea
      ? item.location.includes(selectedArea)
      : true;
    const matchesSubArea = selectedSubArea
      ? item.location.includes(selectedSubArea)
      : true;
    return matchesArea && matchesSubArea;
  });

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

  return (
    <div className="flex flex-wrap justify-center items-center mt-10">
      {filteredData?.length === 0 ? (
        // 필터링된 데이터가 없을 경우 표시
        <div className="h-screen-80 font-bold flex flex-col justify-center items-center">
          <p className="text-7xl mb-3">😥</p>
          <p className="text-3xl my-2">
            해당 지역에서 거래되고 있는 아이템이 없습니다.
          </p>

          <p>다른 지역을 선택하거나 새롭게 등록된 아이템을 기다려보세요!</p>
        </div>
      ) : (
        filteredData.map((item: TradeItem) => (
          <div
            key={item.id} // key prop 추가
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
        ))
      )}
    </div>
  );
};

export default TradeItem;
