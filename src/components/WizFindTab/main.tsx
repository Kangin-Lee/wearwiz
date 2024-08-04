import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const WizFindTab: React.FC = () => {
  const [wizFind, setWizFind] = useState("wizFind");

  const handleFindClick = (menu: string) => {
    setWizFind(menu);
  };

  return (
    <div>
      <Tabs className="bg-white rounded-3xl shadow-md p-3">
        <TabList className="flex cursor-pointer font-bold border-b-2">
          <Tab
            onClick={() => handleFindClick("wizFind")}
            className={`outline-none py-2 px-2 ${
              wizFind === "wizFind"
                ? "border-b-4 border-main text-main"
                : "border-none"
            }`}
          >
            위즈 찾기
          </Tab>
          <Tab
            onClick={() => handleFindClick("detailFind")}
            className={`outline-none py-2 px-2 ${
              wizFind === "detailFind"
                ? "border-b-4 border-main text-main"
                : "border-none"
            }`}
          >
            상세 설정
          </Tab>
        </TabList>

        {/* 위즈 닉네임으로만 검색 */}
        <TabPanel className="py-5">
          <p>위즈 닉네임으로 찾기</p>
          <div className=" flex items-center justify-center">
            <input
              className="input w-full"
              placeholder="찾으시는 위즈의 이름을 입력해 주세요."
            />
            <button className="w-20 bg-app-blue text-white ml-3 py-1 px-4 text-lg rounded-md">
              검색
            </button>
          </div>
        </TabPanel>

        {/* 상세 조건을 걸어 위즈 검색 */}
        <TabPanel>
          <div className="flex items-center justify-center">
          <div>
            <p>성별</p>
            <input
              className="input w-full"
              placeholder="성별을 선택해 주세요."
            />
          </div>
          <div>
            <p>거주 지역</p>
            <input
              className="input w-full"
              placeholder="거주하는 지역을 선택해 주세요."
            />
          </div>
          <div>
            <p>대면·비대면 여부</p>
            <input
              className="input w-full"
              placeholder="대면·비대면 여부를 선택해 주세요."
            />
          </div>
          <div>
            <p>스타일</p>
            <input
              className="input w-full"
              placeholder="원하는 스타일을 선택해 주세요."
            />
          </div>
          <button className="w-20 bg-app-blue text-white ml-3 py-1 px-4 text-lg rounded-md">
            검색
          </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WizFindTab;
