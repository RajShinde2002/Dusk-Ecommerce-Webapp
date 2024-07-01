import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import Cart from "../@/components/Cart";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} className="w-[130px] h-[40px]" alt="Dusk Logo" />
        </Link>

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <X /> : <MenuIcon />}</button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center font-medium p-4 md:p-0 mt-4 md:mt-0 border-t md:border-0 md:bg-transparent md:space-x-8 md:dark:bg-transparent md:dark:border-0">
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FF3F01] group"
              >
                Home
                <div className="h-[2px] w-0 group-hover:w-full bg-[#FF3F01] transition-all duration-500"></div>
              </Link>
            </li>

            <li>
              <Link
                to={"/products"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FF3F01] group"
              >
                Products
                <div className="h-[2px] w-0 group-hover:w-full bg-[#FF3F01] transition-all duration-500"></div>
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FF3F01] group"
              >
                About
                <div className="h-[2px] w-0 group-hover:w-full bg-[#FF3F01] transition-all duration-500"></div>
              </Link>
            </li>
          </ul>
          <div className="md:mx-auto flex justify-center">
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
