import React from 'react'
import logo from "../../assets/logo/main-logo.png";
import { useForm } from "react-hook-form";
import { nameRegex, telRegex } from "../../common/regex";

interface InputData {
  email: string;
  password: string;
  passwordConfirm: string;
  tel: string;
  name: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm<InputData>({
    mode: "onSubmit",
    defaultValues: {},
  });

  const onSubmit = () => {
    console.log("");
  };

  // watch로 password 값을 실시간으로 감시
  const password = watch("password");

  console.log(password);

  return (
    <div className="z-0 bg-login h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center font-kr">
      <div className="z-10 w-96 bg-white backdrop-blur-sm rounded-2xl shadow-md py-5 px-10">
        <div className="flex justify-center items-center">
          <img width={70} src={logo} />
          <span className="ml-1 text-3xl font-logo dark:text-white">
            WearWiz
          </span>
        </div>

        {/* <p className="text-center text-2xl font-bold mt-6">로그인</p> */}

        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="flex flex-col w-full">
            {/* 이름 */}
            <label htmlFor="name" className="mt-4">
              이름
            </label>
            <input
              className="input "
              type="text"
              id="name"
              placeholder="이름을 입력하세요."
              {...register("name", {
                pattern: {
                  value: nameRegex,
                  message: "잘못된 이름 형식입니다.",
                },
              })}
            />
            {errors.name ? (
              <p className="text-red-600 text-sm text-end">
                {errors.name.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 이메일 형식입니다.
              </p>
            )}

            {/* 이메일 */}
            <label htmlFor="email">이메일</label>
            <div className="flex justify-between items-center">
              <input
                className="input "
                type="text"
                id="email"
                placeholder="이메일을 입력하세요."
                {...register("email", {
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "이메일을 잘못 입력하셨습니다.",
                  },
                })}
              />
              <button className="bg-main text-white text-sm px-2 rounded-lg h-9 shadow-md transition-all duration-300 ease-in-out transform hover:shadow-none hover:translate-y-1 hover:bg-pink-700">
                중복 확인
              </button>
            </div>
            {errors.email ? (
              <p className="text-red-600 text-sm text-end">
                {errors.email.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 이메일 형식입니다.
              </p>
            )}

            {/* 전화번호 */}
            <label htmlFor="tel">전화번호</label>
            <input
              className="input "
              type="tel"
              id="tel"
              placeholder="전화번호를 입력하세요."
              {...register("tel", {
                pattern: {
                  value: telRegex,
                  message: "잘못된 전화번호 형식입니다.",
                },
              })}
            />
            {errors.tel ? (
              <p className="text-red-600 text-sm text-end">
                {errors.tel.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 전화번호 형식입니다.
              </p>
            )}

            {/* 비밀번호 */}
            <label htmlFor="password">비밀번호</label>
            <input
              className="input"
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              {...register("password", {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "비밀번호를 잘못 입력하셨습니다.",
                },
              })}
            />
            {errors.password ? (
              <p className="text-red-600 text-sm text-end">
                {errors.password.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 비밀번호 형식입니다.
              </p>
            )}

            {/* 비밀번호 확인*/}
            <label htmlFor="password-confirm">비밀번호 확인</label>
            <input
              className="input"
              type="password"
              id="password-confirm"
              placeholder="비밀번호를 입력하세요."
              {...register("passwordConfirm", {
                validate: (value) =>
                  value === getValues("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.passwordConfirm ? (
              <p className="text-red-600 text-sm text-end">
                {errors.passwordConfirm.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 비밀번호 형식입니다.
              </p>
            )}
          </section>

          <button className="bg-main mt-1 text-white font-bold py-2 w-full rounded shadow-md transition-all duration-300 ease-in-out transform hover:shadow-none hover:translate-y-1 hover:bg-pink-700">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp
