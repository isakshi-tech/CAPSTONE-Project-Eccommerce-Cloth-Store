import { assets } from "../assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className=" flex flex-col  sm:flex-row w-full">
      {/* Left side */}
      <div className="relative">
        <img src={assets.hero2} className="w-full object-cover" />

        <div className="absolute inset-0 flex flex-col justify-end pl-10 text-[#E1D0B3]">
          <h1 className="text-4xl climate-crisis-regular font-light">
            Shop Anything
          </h1>
          <p className="mt-3  max-w-md text-sm">
            We've got styles for cozy cabin moments. No freezing for fashion
            needed.
          </p>

          <Link to="/collection">
            <button className=" my-6 climate-crisis-regular bg-[#E1D0B3] text-[#6E0F0F] px-6 py-2 w-fit ">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="max-sm:mt-3 sm:ml-0 overflow-hidden ">
        <img src={assets.hero1} className="w-full object-cover" />
      </div>
    </div>
  );
};

export default hero;
