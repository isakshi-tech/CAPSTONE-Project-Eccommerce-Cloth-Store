import React from "react";

const Title = ({ text1 }) => {
  return (
    <div className="flex flex-col items-center mb-1">
      <div className="flex items-center">
        {/* <p className="w-10 md:w-11 h-[2px] bg-[#6E0F0F]"></p> */}

        <span className="px-4 mb-4 merriweather-regular text-3xl text-[#6E0F0F]">
          {text1}
        </span>

        {/* <p className="w-10 md:w-11  h-[2px] bg-[#6E0F0F]"></p> */}
      </div>

      {/* <p className="text-gray-600 font-light text-base mb-10">{text2}</p>*/}
    </div>
  );
};

export default Title;
