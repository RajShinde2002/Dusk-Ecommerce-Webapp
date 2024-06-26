import React from "react";
import Hero from "./Home/Hero";
import Trending from "./Home/Trending";

const Home = () => {
  return (
    <>
     {/* Displaying Hero Component */}
      <Hero />
     {/* Displaying Trending Component */}
      <Trending />
    </>
  );
};

export default Home;
