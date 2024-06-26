import React, { useEffect } from "react";
import Logo from "../assets/logo.jpeg";
import Cart from "../@/components/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} className="w-[130px] h-[40px]" alt="Dusk Logo" />
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={'/'}
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#FF3F01] hover:translate-y-[-3px] transition-all"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/products"}
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#FF3F01] hover:translate-y-[-3px] transition-all"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#FF3F01] hover:translate-y-[-3px] transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
