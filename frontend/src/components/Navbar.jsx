import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between py-4 border-b">
      {/* sidebar menu for small screen */}

      <div className="flex flex-col text-gray-700">
        <div className="group relative">
          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-4 ">
            <div className="flex flex-col gap-2 w-[200px] py-3 px-5 bg-white/80 backdrop-blur-md text-black-500  shadow-md rounded border">
              <NavLink
                to="/"
                className="text-sm font-light   text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200 "
              >
                Home
              </NavLink>

              <NavLink
                to="/collection"
                className="text-sm font-light  text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200"
              >
                Collection
              </NavLink>

              <NavLink
                to="/about"
                className="text-sm font-light   text-gray-600chover:text-[#6E0F0F] transition-colors duration-200"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="text-sm font-light  text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex-1 flex sm:justify-center">
        <Link to="/">
          <img
            className="items-start align-items: flex-start w-36 "
            src={assets.logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-4 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-[200px] py-3 px-5 bg-white text-red-500 rounded">
              <p className="text-sm font-light text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200">
                My Profile
              </p>
              <p className="text-sm font-light text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200">
                Orders
              </p>
              <p className="text-sm font-light text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200">
                LogOut
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        {/* sm:hidden → hide when screen ≥ 640px
        show when screen < 640px */}
      </div>
    </div>
  );
};

export default Navbar;
