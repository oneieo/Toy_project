const CampgroundDetail = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center w-[100px] mt-[15px] mr-[1250px] hover:cursor-pointer">
          <img src="/chevron-left.png" className="w-[30px] h-[30px]" />
          <p>뒤로가기</p>
        </div>
        <h1 className="w-[1300px] ml-[80px] mt-[80px] text-[40px]">
          캠핑장 정보
        </h1>
        <div className="w-[1150px] h-[610px] flex mt-[30px]">
          <img
            src=""
            alt="poster image"
            className="w-[400px] h-[600px] bg-slate-400"
          />
          <div className=" ml-[70px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[32px]">캠핑장명</h2>
              <div className="flex items-center">
                <img
                  src="/reservation_icon.png"
                  className="w-[20px] h-[20px] mr-3"
                />
                <p className="text-[18px] font-bold hover:cursor-pointer">
                  예약하기
                </p>
              </div>
            </div>
            <div className="ml-3 mb-[25px]">
              <p className="text-[18px] font-bold">주소: </p>
              <p className="text-[18px] font-bold">장소안내: </p>
              <p className="text-[18px] font-bold">옵션: </p>
              <p className="text-[18px] font-bold">구비시설: </p>
              <p className="text-[18px] font-bold">동물출입여부: </p>
              <p className="text-[18px] font-bold">소개: </p>
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

export default CampgroundDetail;
