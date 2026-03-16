import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="mb-5 text-center">
      <div className="betania-patmos-in-regular text-3xl font-bold mb-2">
        {text1}
      </div>
      <p className="text-gray-600 text-base">{text2}</p>
    </div>
  );
};

export default Title;
