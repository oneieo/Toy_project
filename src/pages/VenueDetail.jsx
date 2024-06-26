const VenueDetail = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center w-[100px] mt-[15px] mr-[1250px] hover:cursor-pointer">
          <img src="public/chevron-left.png" className="w-[30px] h-[30px]" />
          <p>뒤로가기</p>
        </div>
        <h1 className="w-[1300px] ml-[80px] mt-[70px] text-[40px]">
          공연장 정보
        </h1>
        <div className="w-[1080px] h-[760px] mt-[20px]">
          <div className=" flex justify-between">
            <div className="flex items-center">
              <h2 className="text-[32px]">공연시설명</h2>
              <h3 className="text-[25px] ml-[30px] text-slate-500">시설특성</h3>
            </div>
            <div className="flex items-center">
              <img
                src="public/reservation_icon.png"
                className="w-[20px] h-[20px] mr-3"
              />
              <p className="text-[18px] mr-7 font-bold hover:cursor-pointer">
                홈페이지 방문하기
              </p>
            </div>
          </div>
          <div className="flex mt-[10px]">
            <img
              src=""
              className="w-[400px] h-[300px]  mt-[14px] bg-slate-400"
            />
            <div className="flex flex-col ml-[40px]">
              <div>
                <p className="text-[23px] font-bold">개관연도: </p>
                <p className="text-[23px] font-bold">객석수: </p>
                <p className="text-[23px] font-bold">주소: </p>
              </div>
              <div className="flex gap-[7px]">
                <div className="w-[200px] h-[140px] flex flex-col items-center justify-center bg-slate-400">
                  <p>공연장명</p>
                  <p>좌석규모</p>
                </div>
                <div className="w-[200px] h-[140px] flex flex-col items-center justify-center bg-slate-400">
                  <p>공연장명</p>
                  <p>좌석규모</p>
                </div>
                <div className="w-[200px] h-[140px] flex flex-col items-center justify-center bg-slate-400">
                  <p>공연장명</p>
                  <p>좌석규모</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <h2 className="text-[32px] mb-[40px]">진행중 · 진행예정인 공연</h2>
            <div className=" flex gap-[85px]">
              <img src="" className="w-[200px] h-[250px] bg-slate-400" />
              <img src="" className="w-[200px] h-[250px] bg-slate-400" />
              <img src="" className="w-[200px] h-[250px] bg-slate-400" />
              <img src="" className="w-[200px] h-[250px] bg-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueDetail;
