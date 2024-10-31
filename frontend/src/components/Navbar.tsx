import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); 
  const isBlogDetailsPage = location.pathname.includes("/blog/");

  return (
    <>
      <nav>
        <div className="flex justify-evenly items-center w-full p-10 fixed z-10 "> 
          <div className="w-full text-left ml-16 p-1">
            <Link to="/"> 
              <img src="./logo-1.png" className="w-[60px]" alt="Logo" />
            </Link>
          </div>
          <div className="flex list-none items-center mx-16 text-2xl w-[30%] justify-around">
            <li>
              <Link to="/about" className={`hover:text-gray-700 ${isBlogDetailsPage ? 'text-black' : 'text-white'}`}>About</Link>
            </li>
            <li>
              <Link to="/blog" className={`hover:text-gray-700 ${isBlogDetailsPage ? 'text-black' : 'text-white'}`}>Blog</Link>
            </li>
            <li className={`bg-[#FEBB00] px-8 py-1 rounded-md ${isBlogDetailsPage ? 'text-white' : 'text-black'}`}>
              <Link to="/join">JOIN</Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
