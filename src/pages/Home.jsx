import React from "react";
import HeroSlider from "../components/HeroSlider";
import BeautyStudio from "./BeautyStudio";
import BeautyAcademy from "./BeautyAcademy";
import WhyChooseGlowNest from "../components/WhyChooseGlowNest";

const Home = () => {
  return (
    <>
      {/* Existing Hero Banner */}
      <HeroSlider />

      {/* New section after banner */}
      <BeautyStudio />
      <BeautyAcademy/>
      <WhyChooseGlowNest />
    </>
  );
};

export default Home;