import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";
import React from "react";

const ShopContextProvider = (props) => {
  const currency = "₹";
  const deliveryFees = 100;
  const value = {
    currency,
    deliveryFees,
    products,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
