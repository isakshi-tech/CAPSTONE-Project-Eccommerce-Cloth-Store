import React from "react";
import NewArrivals from "../components/NewArrivals";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
