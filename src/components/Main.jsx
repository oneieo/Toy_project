const category = [
  {
    icon: "public/free-icon-stage-5618679.png",
    categoryName: "전체",
  },
  {
    icon: "public/free-icon-theater-4799473.png",
    categoryName: "국립",
  },
  {
    icon: "public/free-icon-theater-3544180.png",
    categoryName: "공공",
  },
  {
    icon: "public/free-icon-spotlight-5618376.png",
    categoryName: "민간",
  },
  {
    icon: "public/free-icon-magic-show-8381493.png",
    categoryName: "기타",
  },
];

const Main = () => {
  // map으로 뿌려야하나 ??

  return (
    <div className="w-full h-full">
      <h1 className="w-4/5 ml-80 mt-28 text-5xl font-semibold text-gray-900 leading-tight">
        공연장 정보를 확인하는 <br />
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
          <p className="text-lg">내 주변 공연장을 확인하고 싶다면?</p>
          <p className="text-sky-500 cursor-pointer">가까운 공연장 찾기</p>
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
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px]"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px]"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px]"
          />
          <img
            src=""
            className="w-[400px] h-[500px] bg-slate-300 border-none rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
