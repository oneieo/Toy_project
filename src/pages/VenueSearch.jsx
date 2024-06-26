const VenueSearch = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex items-center w-[100px] mt-[15px] mr-[1250px] hover:cursor-pointer">
        <img src="public/chevron-left.png" className="w-[30px] h-[30px]" />
        <p>뒤로가기</p>
      </div>
      <div className="w-[1070px] flex items-center justify-between">
        <h2 className="text-3xl">공연장 찾기</h2>
        <input
          type="text"
          placeholder="위치 또는 공연장 이름으로 검색"
          className="w-[450px] h-[50px] indent-3 text-base focus:outline-0 rounded-xl border-spacing-1"
        />
        <p className="text-sky-500 cursor-pointer">전체 공연장 목록</p>
      </div>
      <h1 className="mt-[90px] mb-[90px] text-[45px]">
        서울특별시 근처 공연장
      </h1>
      <div className="w-[1300px] flex flex-wrap gap-[35px]">
        <div className="w-[400px] h-[450px] bg-slate-300 rounded-3xl">
          <img src="" className="w-[400px] h-[285px]" />
          <h3 className="ml-7 text-[23px]">고척스카이돔</h3>
          <p className="ml-7 text-[18px]">서울특별시 구로구 어쩌구저쩌구</p>
        </div>
        <div className="w-[400px] h-[450px] bg-slate-300 rounded-3xl">
          <img src="" className="w-[400px] h-[285px]" />
          <h3 className="ml-7 text-[23px]">고척스카이돔</h3>
          <p className="ml-7 text-[18px]">서울특별시 구로구 어쩌구저쩌구</p>
        </div>
        <div className="w-[400px] h-[450px] bg-slate-300 rounded-3xl">
          <img src="" className="w-[400px] h-[285px]" />
          <h3 className="ml-7 text-[23px]">고척스카이돔</h3>
          <p className="ml-7 text-[18px]">서울특별시 구로구 어쩌구저쩌구</p>
        </div>
      </div>
    </div>
  );
};

export default VenueSearch;
