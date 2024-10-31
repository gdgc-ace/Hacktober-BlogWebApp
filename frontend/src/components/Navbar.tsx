import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className={`${isScrolled ? 'bg-gray-400 shadow-lg transition-all' : 'bg-transparent'} flex justify-evenly items-center w-full p-4 fixed z-10`}>
        <div className="w-full text-left ml-16 p-1">
          <Link to="/">
            <img src="./logo-1.png" className="w-[60px]" alt="Logo" />
          </Link>
        </div>
        <div className="flex list-none items-center mx-16 text-2xl w-[30%] justify-around">
          <li>
            <Link to="/" className={`hover:text-gray-700 ${isHomePage ? 'text-white' : 'text-black'}`}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={`hover:text-gray-700 ${isHomePage ? 'text-white' : 'text-black'}`}>
              About
            </Link>
          </li>
          <li className={`bg-[#FEBB00] px-8 py-1 rounded-md ${isHomePage ? 'text-white' : 'text-white'}`}>
            <Link to="/join">JOIN</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;