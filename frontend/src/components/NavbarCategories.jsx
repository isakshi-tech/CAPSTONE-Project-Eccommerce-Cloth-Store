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
        <p className="text-[#6E0F0F]">Shop by Category</p>
        <Link to="/new-arrivals" className="hover:text-[#6E0F0F]">
          sarees
        </Link>
        <Link to="/cult-favorites" className="hover:text-[#6E0F0F]">
          Tops
        </Link>

        <Link to="/pants" className="hover:text-[#6E0F0F]">
          Jeans
        </Link>
        <Link to="/jackets" className="hover:text-[#6E0F0F]">
          Jackets
        </Link>

        <Link to="/skirts" className="hover:text-[#6E0F0F]">
          Skirts
        </Link>
        <Link to="/sweaters" className="hover:text-[#6E0F0F]">
          Sweaters
        </Link>
        <Link to="/gowns" className="hover:text-[#6E0F0F]">
          gowns
        </Link>
        <Link to="/shoes" className="hover:text-[#6E0F0F]">
          Shoes & Accessories
        </Link>
      </div>
    </div>
  );
};

export default NavbarCategories;
