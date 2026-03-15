import { assets } from "../assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
      {/* Left side */}
      <div className="relative">
        <img src={assets.hero2} className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col justify-center pl-10 text-white">
          <h1 className="text-4xl font-light">SHOP ANYTHING </h1>
          <p className="mt-3 max-w-md text-sm">
            We've got styles for cozy cabin moments. No freezing for fashion
            needed.
          </p>

          <Link to="/collection">
            <button className=" my-6 bg-white text-[#6E0F0F] px-6 py-2 w-fit ">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div>
        <img src={assets.hero1} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
