import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useAllTradeItem } from "../../pages/Trade/tradeService";

interface IdProps {
  id: number;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4.2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};

const MoreTradeItem: React.FC<IdProps> = ({ id }) => {
  const [randomItem, setRandomItem] = useState([]);
  const { data, isSuccess } = useAllTradeItem();

  useEffect(() => {
    if (data && isSuccess) {
      const shuffledItems = data.sort(() => 0.5 - Math.random());
      const selectedItems = shuffledItems.slice(0, 10);
      setRandomItem(selectedItems);
    }
  }, [data, isSuccess, randomItem]); // data나 isSuccess가 변경될 때만 실행

  console.log(randomItem);

  return (
    <div>
      <div className="container">
        <p>이 아이템은 어떤가요?</p>
        <Carousel responsive={responsive}>
          <div></div>
        </Carousel>
      </div>
    </div>
  );
};

export default MoreTradeItem;
