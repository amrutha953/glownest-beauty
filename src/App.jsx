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
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Cancellation from "./pages/Cancellation";
import FAQ from "./pages/FAQ";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import StoreLocator from "./pages/StoreLocator";
import Authenticity from "./pages/Authenticity";
import Sustainability from "./pages/Sustainability";
import Press from "./pages/Press";
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
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/authenticity" element={<Authenticity />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </>
  );
}

export default App;