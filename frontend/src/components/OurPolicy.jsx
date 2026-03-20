import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-6 justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          className="w-16 m-auto mb-5 w-10 h-20"
          src={assets.exchange_icon}
          alt=""
        />
        <p className="font-semibold text-[#6E0F0F]">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5 w-10 h-20"
          src={assets.quality_icon}
          alt=""
        />
        <p className="font-semibold text-[#6E0F0F]">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy </p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5  w-10 h-20"
          src={assets.support_img}
          alt=""
        />
        <p className="font-semibold text-[#6E0F0F]">Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
