import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";
import { useState } from "react";
import React from "react";

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const currency = "$";
  const deliveryFees = 100;
  const value = {
    currency,
    deliveryFees,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
