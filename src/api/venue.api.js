import axios from "axios";

const URL =
  "https://cors-anywhere.herokuapp.com/http://www.kopis.or.kr/openApi/restful/prfplc?service=8abf6fcce1d04cbe8c1059979bed84c4&cpage=1&rows=5";

export const getVenueList = async () => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    console.log(data);
  } catch (error) {
    console.error("공연시설목록 데이터 불러오기 실패! ", error);
  }
};
