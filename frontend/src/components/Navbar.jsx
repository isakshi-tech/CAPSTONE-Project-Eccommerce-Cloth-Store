import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* Top navbar */}
      <div className="top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 text-white">
        {/* Left - Menu Icon (Mobile Only) */}
        <div className="flex items-center gap-6 flex-1">
          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
            onClick={() => setVisible(true)}
          />

          <ul className="hidden  flex-start sm:flex gap-6 text-sm text-gray-700">
            <li>
              <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-[#6E0F0F] hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-[#6E0F0F] hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex flex-col items-center gap-1"
              >
                <p>Contact</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-[#6E0F0F] hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="flex flex-col items-center gap-1"
              >
                <p>Collection</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-[#6E0F0F] hidden" />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Center - Logo */}

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img className="w-36 object-contain" src={assets.logo} />
        </Link>

        {/* Right - Search, Profile, Cart */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-4 cursor-pointer" alt="" />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-[200px] py-3 px-5 bg-white text-red-500 rounded">
                <Link to="/login">
                  {" "}
                  <p className="text-sm font-light text-gray-600 hover:text-[#6E0F0F] transition-colors duration-200">
                    My Profile
                  </p>
                </Link>
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
        </div>
      </div>
      {/* Mobile Menu Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-100 ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
