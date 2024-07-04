import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2>데이터 조회 중 에러가 발생했습니다.</h2>
      <h3 className="font-semibold text-gray-400" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </h3>
      <img src="/spinner.gif" />
    </div>
  );
};

export default Error;
