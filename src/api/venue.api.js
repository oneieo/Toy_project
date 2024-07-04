import axios from "axios";

const API_KEY =
  "jyQKU0d66xtwUyTIzPxNlk45JO8ZH2MTcahVWQiRCF3EXchd5+H+/3oXQaN5mPZ0E7xwW7vkE1mYWJGBIOQrmA==";

const URL = `http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${encodeURIComponent(
  API_KEY
)}`;

export const getVenueList = async (rows) => {
  const { data } = await axios.get(
    `${URL}&numOfRows=${rows}&MobileOS=ETC&MobileApp=AppTest&_type=json`
  );
  return data.response.body.items.item.length;
};

export const getVenueListPerPage = async (rows, pageNo) => {
  try {
    const { data } = await axios.get(
      `${URL}&numOfRows=${rows}&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json`
    );
    return data.response.body.items.item;
  } catch (error) {
    console.error(" 데이터 불러오기 실패! ", error);
  }
};
