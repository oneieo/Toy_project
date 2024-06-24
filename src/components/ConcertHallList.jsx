const category = ["전체", "국립", "공공", "민간", "기타"];

const ConcertHallList = () => {
  // 클릭한 카테고리만 컬러 진하게
  return (
    <>
      <div className="flex ml-80 mt-[68px] items-end">
        <h1 className=" mr-[84px]">공연시설목록</h1>
        <div className="flex gap-[70px]">
          {category.map((item) => {
            return <h2 key={item}>{item}</h2>;
          })}
        </div>
      </div>
    </>
  );
};

export default ConcertHallList;
