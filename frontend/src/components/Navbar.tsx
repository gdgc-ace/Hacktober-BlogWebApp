import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
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
    <nav className={`fixed w-full z-10 p-4 ${isScrolled ? 'bg-gray-800 shadow-lg transition-all' : 'bg-transparent'}`}>
      <div className="flex justify-evenly items-center text-white">
        <div className="w-full text-left ml-16 p-1">
          <Link to="/"> 
            <img src="./logo-1.png" className="w-[60px]" alt="Logo" />
          </Link>
        </div>
        <div className="flex list-none items-center mx-16 text-2xl w-[30%] justify-around">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li className="bg-[#FEBB00] px-8 py-1 rounded-md text-white">
            <Link to="/login">JOIN</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;