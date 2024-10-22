import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import PostForm from "./PostForm";

const CreatePost: React.FC = () => {
  // 선택된 카테고리를 저장할 상태
  const [selectedCategory, setSelectedCategory] =
    useState<string>("카테고리 선택");

  // 선택한 카테고리를 처리하는 함수
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container font-kr py-10">
      <div className="flex items-center">
        <p className="text-3xl font-semibold w-32">카테고리</p>
        <SelectCategory />
      </div>
      <PostForm />
    </div>
  );
};

export default CreatePost;
