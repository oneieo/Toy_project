import axios from "axios";

const API_KEY =
  "jyQKU0d66xtwUyTIzPxNlk45JO8ZH2MTcahVWQiRCF3EXchd5+H+/3oXQaN5mPZ0E7xwW7vkE1mYWJGBIOQrmA==";

const URL = `http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${encodeURIComponent(
  API_KEY
)}&numOfRows=1500&MobileOS=ETC&MobileApp=AppTest&_type=json`;

export const getVenueList = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log(data.response.body.items.item);
    console.log(data.response.body.items.item);
  } catch (error) {
    console.error(" 데이터 불러오기 실패! ", error);
  }
};
