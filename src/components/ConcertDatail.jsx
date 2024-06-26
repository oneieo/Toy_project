const ConcertDatail = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center w-[100px] mt-[15px] mr-[1250px] hover:cursor-pointer">
          <img src="public/chevron-left.png" className="w-[30px] h-[30px]" />
          <p>뒤로가기</p>
        </div>
        <h1 className="w-[1300px] ml-[80px] mt-[80px] text-[40px]">
          공연 정보
        </h1>
        <div className="w-[1150px] h-[610px] flex mt-[30px]">
          <img
            src=""
            alt="poster image"
            className="w-[400px] h-[600px] bg-slate-400"
          />
          <div className=" ml-[70px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[32px]">공연명</h2>
              <div className="flex items-center">
                <img
                  src="public/reservation_icon.png"
                  className="w-[20px] h-[20px] mr-3"
                />
                <p className="text-[18px] font-bold hover:cursor-pointer">
                  예매하기
                </p>
              </div>
            </div>
            <div className="ml-3 mb-[25px]">
              <p className="text-[18px] font-bold">장르: </p>
              <p className="text-[18px] font-bold">기간: </p>
              <p className="text-[18px] font-bold">기본 정보: </p>
              <p className="text-[18px] font-bold">제작진: </p>
              <p className="text-[18px] font-bold">출연진: </p>
              <p className="text-[18px] font-bold">공연상태: </p>
            </div>
            <div className="flex gap-[37px]">
              <img
                src=""
                alt="intro image1"
                className="w-[200px] h-[250px] bg-slate-400"
              />
              <img
                src=""
                alt="intro image2"
                className="w-[200px] h-[250px] bg-slate-400"
              />
              <img
                src=""
                alt="intro image3"
                className="w-[200px] h-[250px] bg-slate-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcertDatail;
