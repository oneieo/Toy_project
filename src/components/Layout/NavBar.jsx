const NavBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between">
      <img src="/public/showing.png" className="w-28 ml-64" />
      <div className="mr-64">
        <button className="border-none bg-transparent text-base">Home</button>
        <button className="border-none bg-transparent text-base">Nearby</button>
      </div>
    </div>
  );
};

export default NavBar;
