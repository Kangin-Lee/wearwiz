import React, { useEffect, useState } from "react";
import { loadingText } from "./loadingText";
import { loadingImages } from "./loadingImages";

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
