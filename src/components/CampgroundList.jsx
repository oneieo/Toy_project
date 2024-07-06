import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getVenueListLength, getVenueListPerPage } from "../api/venue.api";
import Loading from "./Loading";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const category = ["전체", "키즈", "반려동물", "카라반", "자연휴양림"];
const ITEMS_PER_PAGE = 8;

const CampgroundList = () => {
  // 클릭한 카테고리만 컬러 진하게
  const [clickedKeyword, setClickedKeyword] = useState("전체");
  const [totalPages, setTotalPages] = useState(3);
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();

  const {
    data: venueListPerPage,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["venueList", pageNo],
    queryFn: async () => getVenueListPerPage(ITEMS_PER_PAGE, pageNo),
  });

  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    if (venueListPerPage) {
      setSelectedCategory(venueListPerPage);
    }
  }, [venueListPerPage]);

  const { data: venueListLength } = useQuery({
    queryKey: ["venueListLength"],
    queryFn: () => getVenueListLength(100),
  });

  useEffect(() => {
    if (venueListLength !== undefined) {
      setTotalPages(Math.ceil(venueListLength / ITEMS_PER_PAGE));
    }
  }, [venueListLength]);

  console.log("length2", venueListLength);
  console.log("pageLength", totalPages);

  // 페이지당 항목 수 , 총 데이터 개수(state로 ...? 맨날 가져와서 set해주거나 그대로 가져와서 .length로 쓰기?),
  // 전체 페이지 수(요것도 state...), 페이지 번호(클릭함에 따라 바뀌므로 state)
  // 전체 페이지 수 = Math.ceil( 총 데이터 개수 / 페이지당 항목 수  )

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  const handleClickKeyword = (item) => {
    setClickedKeyword(item);
    if (item === "전체") {
      setSelectedCategory(venueListPerPage);
    }

    if (item === "키즈") {
      const isKidFriendly = (data) => {
        const keyword = ["놀이터", "트렘폴린", "물놀이장"];
        return keyword.some((keyword) => data.includes(keyword));
      };
      setSelectedCategory(
        venueListPerPage.filter((data) => isKidFriendly(data.sbrsCl))
      );
    }

    if (item === "반려동물") {
      const isAnimalFriendly = (data) => {
        const keyword = ["가능", "가능(소형견)"];
        return keyword.some((keyword) => data.includes(keyword));
      };
      setSelectedCategory(
        venueListPerPage.filter((data) => isAnimalFriendly(data.animalCmgCl))
      );
    }

    if (item === "카라반") {
      const isCaravan = (data) => {
        const keyword = ["카라반", "캐러밴"];
        return keyword.some((keyword) => data.includes(keyword));
      };
      setSelectedCategory(
        venueListPerPage.filter(
          (data) => isCaravan(data.induty) || isCaravan(data.facltNm)
        )
      );
    }

    if (item === "자연휴양림") {
      const isForestFriendly = (data) => {
        const keyword = ["자연휴양림", "휴양림"];
        return keyword.some((keyword) => data.includes(keyword));
      };
      setSelectedCategory(
        venueListPerPage.filter((data) => isForestFriendly(data.facltNm))
      );
    }
  };

  console.log(selectedCategory);

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
                    clickedKeyword === item ? "text-green-600" : "text-gray-400"
                  }`}
                  onClick={() => handleClickKeyword(item)}
                >
                  {item}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="ml-80 mt-[35px]">
          {/* 시설목록 뿌려주기 - 페이지네이션... */}
          {selectedCategory.length > 0
            ? selectedCategory.map((venue) => (
                <div
                  key={venue.contentId}
                  className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4 hover:cursor-pointer"
                  onClick={() => navigate(`/venue-detail/${venue.contentId}`)}
                >
                  <div className="flex items-center">
                    <h2 className="ml-10">{venue.facltNm}</h2>
                    <p className="ml-5 w-[500px] h-[45px] flex items-center text-[19px]">
                      {venue.resveCl === "" ? "상세페이지 참고" : venue.resveCl}
                    </p>
                  </div>
                  <p className="mr-10 text-[18px]">{venue.addr1}</p>
                </div>
              ))
            : venueListPerPage.map((venue) => (
                <div
                  key={venue.contentId}
                  className="flex items-center justify-between gap-7 w-[1300px] h-[80px] bg-slate-300 mb-4 hover:cursor-pointer"
                  onClick={() => navigate(`/venue-detail/${venue.contentId}`)}
                >
                  <div className="flex items-center">
                    <h2 className="ml-10">{venue.facltNm}</h2>
                    <p className="ml-5 w-[500px] h-[45px] flex items-center text-[19px]">
                      {venue.resveCl === "" ? "상세페이지 참고" : venue.resveCl}
                    </p>
                  </div>
                  <p className="mr-10 text-[18px]">{venue.addr1}</p>
                </div>
              ))}
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/chevron-left.png"
            className="hover:cursor-pointer"
            onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
            disabled={pageNo === 1}
          />

          {[...Array(totalPages)].map((_, index) => {
            return (
              <button key={index + 1} onClick={() => setPageNo(index + 1)}>
                {index + 1}
              </button>
            );
          })}
          <img
            src="/chevron-right.png"
            className="hover:cursor-pointer"
            onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))}
            disabled={pageNo === totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default CampgroundList;
