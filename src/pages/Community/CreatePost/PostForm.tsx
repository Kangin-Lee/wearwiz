import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface InputData {
  title: string;
  contents: string;
  image?: FileList; // 파일은 필수가 아니므로 optional
}

const PostForm: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputData>({
    mode: "onSubmit",
    defaultValues: {},
  });

  const onSubmit = () => {
    console.log("");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // 이미지 미리보기 설정
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          className="p-2 border-2 rounded-md outline-none"
          placeholder="제목을 입력해 주세요."
          {...register("title", {
            required: "제목을 입력해 주세요.",
            minLength: {
              value: 2,
              message: "제목은 최소 2자 이상이어야 합니다.",
            },
          })}
        />

        {errors.title ? (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        ) : (
          <p className="text-white text-sm">정상적인 제목입니다</p>
        )}

        <textarea
          className="p-2 mt-4 border-2 rounded-md outline-none resize-none h-96"
          placeholder="내용을 입력해 주세요."
          {...register("contents", {
            required: "내용을 입력해 주세요.",
            minLength: {
              value: 10,
              message: "내용은 최소 10자 이상이어야 합니다.",
            },
            maxLength: {
              value: 5000,
              message: "내용을 5000자 이하로 작성해 주세요.",
            },
          })}
        />
        {errors.contents ? (
          <p className="text-red-500 text-sm">{errors.contents.message}</p>
        ) : (
          <p className="text-white text-sm">정상적인 내용입니다</p>
        )}

        <div className="my-4">
          <input
            className="border-2 w-full"
            type="file"
            accept="image/*"
            {...register("image")} // 파일 필수 조건 제거
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="미리보기"
            className="my-4"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}

        <button className=" bg-main mt-1 w-full text-white font-bold py-2 rounded shadow-md transition-all duration-300 ease-in-out transform hover:shadow-none hover:translate-y-1 hover:bg-pink-700">
          로그인
        </button>
      </form>
    </div>
  );
};

export default PostForm;
