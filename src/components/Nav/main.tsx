import React from "react";
import mainLogo from "../../assets/logo/main-logo.png";
import DarkMode from "../DarkMode/main";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const activeStyle = {
    color: "#E22380",
  };
  return (
    <div className="sticky top-0 z-30 shadow-md dark:bg-zinc-800 bg-white">
      <nav className="container flex justify-between py-5 ">
        {/* 로고 */}
        <Link to="/">
          <section className="flex items-center">
            <img width={100} src={mainLogo} />
            <span className="ml-1 text-5xl font-logo dark:text-white">
              WearWiz
            </span>
          </section>
        </Link>

        {/* 메뉴 및 다크모드 로그인/로그아웃 */}
        <section className="flex items-center font-kr">
          <ul className=" text-lg flex space-x-4 font-bold dark:text-white">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="px-2 py-1 hover:text-main cursor-pointer"
            >
              홈
            </NavLink>
            <li className="px-2 py-1 hover:text-main cursor-pointer">위즈</li>
            <NavLink
              to="/trade"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="px-2 py-1 hover:text-main cursor-pointer"
            >
              중고거래
            </NavLink>
            <li className="px-2 py-1 hover:text-main cursor-pointer">
              커뮤니티
            </li>
            <li className="px-2 py-1 hover:text-main cursor-pointer">OOTD</li>
            <li className="px-2 py-1 hover:text-main cursor-pointer">찜</li>
          </ul>
          <DarkMode />

          <button
            className="px-3 py-1 bg-main rounded-md text-white font-bold hover:bg-pink-700 duration-300"
            onClick={goToLogin}
          >
            로그인
          </button>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
