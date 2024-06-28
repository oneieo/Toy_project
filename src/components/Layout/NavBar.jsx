const NavBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between">
      <img src="/public/camphour.png" className="w-[200px] ml-64" />
      <div className="mr-64">
        <button className="border-none bg-transparent text-base cursor-pointer mr-9">
          Home
        </button>
        <button className="border-none bg-transparent text-base cursor-pointer">
          Nearby
        </button>
      </div>
    </div>
  );
};

export default NavBar;
