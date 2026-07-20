import React from "react";
import HeroSlider from "../components/HeroSlider";
import BeautyStudio from "./BeautyStudio";

const Home = () => {
  return (
    <>
      {/* Existing Hero Banner */}
      <HeroSlider />

      {/* New section after banner */}
      <BeautyStudio />
    </>
  );
};

export default Home;