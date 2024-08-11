import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer">
      <div className="container py-10 text-white flex flex-col justify-between">
        <div className="font-logo text-4xl">WearWiz</div>
        <div className="flex justify-between my-7">
          <div className="flex flex-col">
            <span>주식회사 웨어위즈 | 대표자명: 이강인 | 개인정보</span>
            <span>
              사업자등록번호: 000-00-000000 | 이메일: kangin@wearwiz.co.kr
            </span>
            <span>주소: 대전광역시 유성구 과학로 125-48 위즈빌딩</span>
          </div>
          <div className="flex flex-col">
            <span>이용약관 | 법적고지</span>
            <span>개인정보처리방침</span>
            <span>이메일무단수집거부</span>
            <span>FAQ</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <span className="footer-brands">
                <a href="https://www.instagram.com/">
                  <BsInstagram />
                </a>
              </span>
              <span className="footer-brands">
                <a href="https://www.naver.com/">
                  <SiNaver />
                </a>
              </span>
              <span className="footer-brands">
                <a href="https://x.com/">
                  <BsTwitterX />
                </a>
              </span>
              <span className="footer-brands">
                <a href="https://www.facebook.com/">
                  <FaFacebookSquare />
                </a>
              </span>
            </div>
            <span className="text-end mt-2">
              <b className="font-logo">WearWiz:</b> <br />
              Your personal stylist for
              <br />
              magical fashion transformations
            </span>
          </div>
        </div>
        <div>Copyright 2024. WearWiz all right reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
