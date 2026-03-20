import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    setBestSellers(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div>
        <Title text1={"Cult Favorites"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10">
        {BestSellers.map((product, index) => (
          <ProductItems
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
