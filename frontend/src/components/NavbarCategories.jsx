import { Link } from "react-router-dom";
import React from "react";

const NavbarCategories = () => {
  return (
    <div>
      <div
        className="
        flex flex-col
     items-center


        sm:flex-row
        sm:justify-center
        
        gap-4 sm:gap-8
        px-4 py-3
        text-[13px]
        tracking-wide
        text-gray-600
        
      "
      >
        <Link className="hover:text-black">New Arrivals</Link>
        <Link className="hover:text-black">Cult Favorites</Link>

        <Link className="hover:text-black">Pants</Link>
        <Link className="hover:text-black">Jackets</Link>

        <Link className="hover:text-black">Skirts</Link>
        <Link className="hover:text-black">Sweaters</Link>
        <Link className="hover:text-black">gowns</Link>
        <Link className="hover:text-black">Shoes & Accessories</Link>
      </div>
    </div>
  );
};

export default NavbarCategories;
