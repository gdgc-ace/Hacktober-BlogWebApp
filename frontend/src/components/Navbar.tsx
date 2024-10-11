const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-evenly w-full p-2 border-b-2">
          <div className="w-full text-left ml-16 p-1">
            <p className="text-4xl font-bold">GDGC</p>
          </div>
          <div className="flex list-none items-center mx-16 font-semibold text-md w-[30%] justify-around">
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li className="bg-[#2B8C44] px-4 py-2 rounded-md text-white">
                <a href="">JOIN</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar