import React, { useEffect, useState } from "react";

const loadingImages = [
  "/images/loading/loading1.gif",
  "/images/loading/loading2.gif",
  "/images/loading/loading3.gif",
  "/images/loading/loading4.gif",
];

const loadingText = [
  "스타일 변신 중...",
  "패션 마법을 준비 중...",
  "위즈가 옷장을 정리하는 중...",
  "스타일 완성 중...",
  "마법의 순간을 기다리세요...",
  "새로운 룩을 창조하는 중...",
  "위즈가 스타일링하는 중...",
  "패션 업그레이드 중...",
  "위즈의 매력을 기다려주세요...",
  "옷장 속 보물을 찾는 중...",
];

const getRandomLoadingImg = () => {
  const randomIndex = Math.floor(Math.random() * loadingImages.length);
  return loadingImages[randomIndex];
};

const getRandomLoadingText = () => {
  const randomText = Math.floor(Math.random() * loadingText.length);
  return loadingText[randomText];
};

const Loading: React.FC = () => {
  const [loadingImage, setLoadingImage] = useState("");
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    setLoadingImage(getRandomLoadingImg());
    setLoadingText(getRandomLoadingText());
  }, []);

  return (
    <div>
      <div className="container h-screen-80 flex flex-col justify-center items-center font-kr py-72">
        <img src={loadingImage} />
        <p className="font-bold text-3xl">{loadingText}</p>
      </div>
    </div>
  );
};

export default Loading;
