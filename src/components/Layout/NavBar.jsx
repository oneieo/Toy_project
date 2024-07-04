import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between">
      <img src="/camphour.png" className="w-[200px] ml-64" />
      <div className="mr-64">
        <Link to="/">
          <button className="border-none bg-transparent text-base cursor-pointer mr-9">
            Home
          </button>
        </Link>
        <Link to="/">
          <button className="border-none bg-transparent text-base cursor-pointer">
            Nearby
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
