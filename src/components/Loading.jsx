const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center ">
      <h2 className="mb-10">잠시만 기다려주세요.</h2>
      <img src="/spinner.gif" />
    </div>
  );
};

export default Loading;
