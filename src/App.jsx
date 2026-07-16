import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import Shop from "./pages/Shop";
import Skincare from "./pages/Skincare";
import Makeup from "./pages/Makeup";
import Haircare from "./pages/Haircare";
import Bodycare from "./pages/Bodycare";
import Serum from "./pages/Serum";
import Perfume from "./pages/Perfume";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Footer />
            </>
          }
        />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/shop" element={<Shop />} />

        {/* Shop Categories */}
        <Route path="/shop/skincare" element={<Skincare />} />
        <Route path="/shop/makeup" element={<Makeup />} />
        <Route path="/shop/haircare" element={<Haircare />} />
        <Route path="/shop/bodycare" element={<Bodycare />} />
        <Route path="/shop/serum" element={<Serum />} />
        <Route path="/shop/perfume" element={<Perfume />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </>
  );
}

export default App;