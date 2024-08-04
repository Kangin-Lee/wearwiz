/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class", // 다크 모드를 클래스 기반으로 설정
  theme: {
    container: {
      center: true, // 모든 container를 자동으로 중앙 정렬
      padding: "1rem", // 기본 padding 설정
      screens: {
        sm: "100%", // 작은 화면에서 최대 너비
        md: "100%", // 중간 화면에서 최대 너비
        lg: "1024px", // 큰 화면에서 최대 너비
        xl: "1280px", // 더 큰 화면에서 최대 너비
      },
    },
    extend: {
      fontFamily: {
        logo: ["Lexend", "sans-serif"],
        kr: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        main: "#E22380",
        "app-blue": "#1273e4",
      },
      backgroundImage: {
        home5: 'url("/src/assets/home/section5.jpg")',
        login: 'url("/src/assets/sign/login.jpg")',
        home1: 'url("/src/assets/home/section1.jpg")',
      },
      height: {
        "screen-80": "60vh",
        128: "32rem",
        256: "64rem",
      },
      width: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
