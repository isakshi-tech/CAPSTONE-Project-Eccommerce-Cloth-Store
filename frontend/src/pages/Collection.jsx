import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItems";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState("price");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((a) => a !== e.target.value)); //this is called Functional State Update in react
      //(prev)=> this is called updater function.
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((a) => a !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = async () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? " rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Tops"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Tops{" "}
            </p>
            {/* onChange={(e) => toggleCategory(e)}  AND   onChange={toggleCategory} both are same, but if 
            you want to pass extra data use the first one*/}
            {/* mistake:
            onChange={toggleCategory()}
             */}
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Jeans"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Jeans{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Gowns"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Gowns{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Skirts"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Skirts{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Sweaters"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Sweaters{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Sarees"}
                onChange={toggleCategory}
                type="checkbox"
              />{" "}
              Sarees{" "}
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Casual"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Casual{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Topwear{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Bottomwear{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Winterwear{" "}
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"Partywear"}
                onChange={toggleSubCategory}
                type="checkbox"
              />{" "}
              Partywear{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL COLLECTIONS"} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-1"
            name=""
            id=""
          >
            <option value="price">Sort by: Price</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

// ---NOTES---
// When you write onChange={toggleCategory()},
// the function is executed immediately during the component’s render instead of waiting for a user action.
// Since it runs without an event, e becomes undefined, which causes an error when trying to access e.target.value. Additionally, because the function is already executed, nothing is left to handle the actual change event,
// so clicking the checkbox does nothing.
//  The correct approach is onChange={toggleCategory}, which passes the function reference to React; React then calls it at the right time and automatically provides the event object.
