import { useState } from "react";

const category = ["전체", "키즈", "반려동물", "카라반", "자연휴양림"];

const CampgroundList = () => {
  // 클릭한 카테고리만 컬러 진하게
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [venueList, setVenueList] = useState([]);

  const handleClickCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <>
      <div>
        <div className="flex ml-80 mt-[50px] items-center">
          <h1 className=" mr-[84px]">캠핑시설목록</h1>
          <div className="flex gap-[70px]">
            {category.map((item) => {
              return (
                <h2
                  key={item}
                  className={`hover:cursor-pointer ${
                    selectedCategory === item
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleClickCategory(item)}
                >
                  {item}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="ml-80 mt-[35px]">
          {/* 시설목록 뿌려주기 - 페이지네이션... */}
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4 hover:cursor-pointer">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4">
            <div className="flex items-center">
              <h2 className="ml-10">공연시설명</h2>
              <p className="ml-5">공연장명, 공연장명, 공연장명</p>
            </div>
            <p className="mr-10">주소(-구까지만)</p>
          </div>
          <div className="ml-[500px]">
            <img
              src="public/chevron-left.png"
              className="hover:cursor-pointer"
            />
            <img
              src="public/chevron-right.png"
              className="ml-[200px] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CampgroundList;
