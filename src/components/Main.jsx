import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getVenueList } from "../api/venue.api";

const category = [
  {
    icon: "public/free-icon-campfire-10581695.png",
    categoryName: "전체",
  },
  {
    icon: "public/free-icon-camper-1254951.png",
    categoryName: "글램핑",
  },
  {
    icon: "public/free-icon-cabin-5569227.png",
    categoryName: "자연휴양림",
  },
  {
    icon: "public/free-icon-camping-1533276.png",
    categoryName: "키즈",
  },
  {
    icon: "public/free-icon-tent-8211779.png",
    categoryName: "반려동물",
  },
];

const Main = () => {
  // map으로 뿌려야하나 ??

  // const {
  //   data: venueList,
  //   isPending,
  //   isError,
  // } = useQuery({ queryKey: ["venueList"], queryFn: getVenueList });

  // if (isPending) {
  //   return <h2>로딩중입니다 ~</h2>;
  // }
  // if (isError) {
  //   return <h2>공연시설목록 데이터 조회 중 오류 발생!!! </h2>;
  // }

  // console.log(venueList);

  // useEffect(() => {
  //   const getData = async () => {
  //     await getVenueList();
  //   };
  //   getData();
  // }, []);

  return (
    <div className="w-[1920px] h-full">
      <h1 className="w-4/5 ml-80 mt-28 text-5xl font-semibold text-gray-900 leading-tight">
        캠핑장 정보를 확인하는 <br />
        가장 좋은 방법 !
      </h1>
      <div className="flex">
        <div className="flex ml-80 mt-28 gap-16">
          {category.map((item) => {
            return (
              <div
                key={item.categoryName}
                className="flex flex-col items-center cursor-pointer font-semibold text-gray-700"
              >
                <img src={item.icon} className="w-24" />
                <p className="text-xl">{item.categoryName}</p>
              </div>
            );
          })}
        </div>
        <div className="ml-80 font-semibold">
          <p className="text-lg">내 주변 캠핑장을 확인하고 싶다면?</p>
          <p className="text-sky-500 cursor-pointer">가까운 캠핑장 찾기</p>
        </div>
      </div>
      <div>
        <div className="flex ml-80 mt-20 items-end">
          <h2>공연중</h2>
          <p className="ml-8 text-lg font-semibold text-gray-400">
            다양한 장르의 공연들
          </p>
        </div>
        <div className="flex ml-72 gap-[30px]">
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px] hover:cursor-pointer"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px] hover:cursor-pointer"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px] hover:cursor-pointer"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
