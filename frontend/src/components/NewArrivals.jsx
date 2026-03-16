import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const NewArrivals = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="my-10">
      <Title text1={"NEW ARRIVALS"} text2={"Check out our latest arrivals!"} />
    </div>
  );
};

export default NewArrivals;
