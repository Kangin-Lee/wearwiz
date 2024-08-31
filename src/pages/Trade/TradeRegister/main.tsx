import React from "react";
import { TbCameraPlus } from "react-icons/tb";
import AreaSelect from "../../../components/AreaSelect/main";

const TradeRegister: React.FC = () => {
  return (
    <div>
      <div className="container my-20 font-kr">
        {/*상품이미지 구역---------------------------- */}
        <p className="font-bold mb-1">상품 이미지</p>
        <div className="flex items-center w-full mb-7">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <TbCameraPlus className="text-4xl mb-3 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">클릭하여 업로드</span>하거나
                드래그 앤 드롭
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG 또는 GIF (최대 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        {/*상품명 구역---------------------------- */}
        <div>
          <div className="flex flex-col">
            <label htmlFor="itemName" className="font-bold mb-1">
              상품명
            </label>
            <input
              type="text"
              id="itemName"
              placeholder="상품명을 입력해주세요."
              className="input w-96 mb-7"
            />
          </div>

          {/*상품가격 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemPrice" className="font-bold mb-1">
              판매가격
            </label>
            <input
              type="number"
              min={0}
              id="itemPrice"
              placeholder="판매가격을 입력해주세요. (단위: 원)"
              className="input w-96 mb-7"
            />
          </div>

          {/*상품설명 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemInfo" className="font-bold mb-1">
              설명
            </label>
            <textarea
              placeholder="이 아이템에 대한 설명을 작성해주세요."
              className="input resize-none h-56 mb-7"
            />
          </div>

          {/*상품상태 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemInfo" className="font-bold mb-1">
              상품 상태
            </label>
            <div className="mb-7">
              <ul className="flex flex-col sm:flex-row">
                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="brand-new"
                        name="hs-horizontal-list-group-item-radio"
                        type="radio"
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        checked
                      />
                    </div>
                    <label
                      htmlFor="brand-new"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                    >
                      새상품
                    </label>
                  </div>
                </li>

                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="old-item"
                        name="hs-horizontal-list-group-item-radio"
                        type="radio"
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="old-item"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                    >
                      중고
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/*거래방법 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="itemInfo" className="font-bold mb-1">
              거래 방법
            </label>
            <div className="mb-7">
              <ul className="flex flex-col sm:flex-row">
                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="parcel-service"
                        name="hs-horizontal-list-group-item-radio2"
                        type="radio"
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        checked
                      />
                    </div>
                    <label
                      htmlFor="parcel-service"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                    >
                      택배
                    </label>
                  </div>
                </li>

                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="direct-transaction"
                        name="hs-horizontal-list-group-item-radio2"
                        type="radio"
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="direct-transaction"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"
                    >
                      직거래
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/*지역 구역---------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="area" className="font-bold mb-1">
              지역
            </label>
            <div>
              <AreaSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeRegister;
