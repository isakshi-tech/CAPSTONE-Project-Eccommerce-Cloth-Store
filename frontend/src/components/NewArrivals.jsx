import React, { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const NewArrivals = () => {
  const { products } = useContext(ShopContext);
  const [newArrivals, setNewArrivals] = React.useState([]);
  useEffect(() => {
    setNewArrivals(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div>
        <Title
          text1={"New Arrivals"}
          text2={"Check out our latest arrivals!"}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {newArrivals.map((product, index) => (
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

export default NewArrivals;
