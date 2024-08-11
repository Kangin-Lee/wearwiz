import React from "react";
import logo from "../../assets/logo/main-logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import kakao from "../../assets/logo/kakao.png";
import google from "../../assets/logo/google.png";
import { emailRegex, passwordRegex } from "../../common/regex";

interface InputData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
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

  return (
    <div className="z-0 bg-login h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center font-kr">
      <div className="z-10 w-96 h-128 bg-white backdrop-blur-sm rounded-2xl shadow-md py-5 px-10">
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
            {/* 이메일 */}
            <label htmlFor="email" className="mt-4">
              이메일
            </label>
            <input
              className="input "
              type="text"
              id="email"
              placeholder="이메일을 입력하세요."
              {...register("email", {
                pattern: {
                  value: emailRegex,
                  message: "이메일을 잘못 입력하셨습니다.",
                },
              })}
            />
            {errors.email ? (
              <p className="text-red-600 text-sm text-end">
                {errors.email.message}
              </p>
            ) : (
              <p className="text-transparent text-sm">
                정상적인 이메일 형식입니다.
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
                  value: passwordRegex,
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
          </section>

          <button className="bg-main mt-1 text-white font-bold py-2 w-full rounded shadow-md transition-all duration-300 ease-in-out transform hover:shadow-none hover:translate-y-1 hover:bg-pink-700">
            로그인
          </button>
        </form>

        {/* 회원가입 */}
        <div className="flex justify-end text-sm mt-2">
          <p>아직 회원이 아니신가요?</p>
          <Link
            to="/signup"
            className="text-blue-600 underline hover:text-blue-800 duration-300 font-bold ml-1"
          >
            회원가입
          </Link>
        </div>

        {/* 간펀로그인 */}
        <div className="mt-8">
          <p className="text-center font-bold">간편 로그인</p>
          <div className="simple-login bg-[#ffe812] hover:bg-[#ffde00]">
            <img width={25} src={kakao} className="mr-1" />
            카카오로 시작하기
          </div>
          <div className="simple-login border-2 hover:bg-slate-200">
            <img width={25} src={google} className="mr-1" />
            구글로 시작하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
