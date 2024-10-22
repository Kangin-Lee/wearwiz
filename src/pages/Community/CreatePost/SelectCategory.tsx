import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const outfit = ["캐주얼", "미니멀", "스트릿", "시티보이", "고프코어", "기타"];
const item = ["상의", "하의", "아우터", "신발", "악세서리", "기타"];

const SelectCategory: React.FC = () => {
  // 선택된 카테고리를 저장할 상태
  const [selectedCategory, setSelectedCategory] = useState<string>("카테고리");

  // 선택한 카테고리를 처리하는 함수
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  let [selectedOutfit, setSelectedOutfit] = useState(outfit[0]);
  let [selectedItem, setSelectedItem] = useState(item[0]);
  return (
    <div className="container font-kr flex items-center">
      <div className="flex">
        <Menu as="div" className="relative w-28 text-left mr-4">
          <div>
            <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {selectedCategory}
              <RiArrowDropDownLine
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => handleCategorySelect("코디별")}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full text-left px-4 py-2 text-sm`}
                  >
                    코디별
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => handleCategorySelect("아이템별")}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full text-left px-4 py-2 text-sm`}
                  >
                    아이템별
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>

      {selectedCategory === "코디별" ? (
        <RadioGroup
          value={selectedOutfit}
          onChange={setSelectedOutfit}
          aria-label="Server size"
          className="flex"
        >
          {outfit.map((outfit) => (
            <Field key={outfit} className="flex items-center gap-2 mr-4">
              <Radio
                value={outfit}
                className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
              >
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
              </Radio>
              <Label>{outfit}</Label>
            </Field>
          ))}
        </RadioGroup>
      ) : (
        ""
      )}

      {selectedCategory === "아이템별" ? (
        <RadioGroup
          value={selectedItem}
          onChange={setSelectedItem}
          aria-label="Server size"
          className="flex"
        >
          {item.map((item) => (
            <Field key={item} className="flex items-center gap-2 mr-4">
              <Radio
                value={item}
                className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
              >
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
              </Radio>
              <Label>{item}</Label>
            </Field>
          ))}
        </RadioGroup>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectCategory;
