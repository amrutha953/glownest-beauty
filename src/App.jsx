import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
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
import CustomerCare from "./pages/CustomerCare";
import Support from "./pages/Support";
import GiftCards from "./pages/GiftCards";
import Coupons from "./pages/Coupons";
import BeautyTips from "./pages/BeautyTips";
import Membership from "./pages/Membership";
import Rewards from "./pages/Rewards";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import DrySkin from "./pages/DrySkin";
import OilySkin from "./pages/OilySkin";
import SensitiveSkin from "./pages/SensitiveSkin";
import CombinationSkin from "./pages/CombinationSkin";
import SkincareBasics from "./pages/SkincareBasics";


function App() {

  return (
    <>

      <Navbar />


      <Routes>

        {/* HOME */}
        <Route 
          path="/" 
          element={<Home />} 
        />


        {/* MAIN PAGES */}
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/offers" element={<Offers />} />

        <Route path="/shop" element={<Shop />} />


        {/* SHOP CATEGORIES */}

        <Route path="/shop/skincare" element={<Skincare />} />

        <Route path="/shop/makeup" element={<Makeup />} />

        <Route path="/shop/haircare" element={<Haircare />} />

        <Route path="/shop/bodycare" element={<Bodycare />} />

        <Route path="/serum" element={<Serum />} />

        <Route path="/shop/perfume" element={<Perfume />} />


        {/* HELP PAGES */}

        <Route path="/track-order" element={<TrackOrder />} />

        <Route path="/shipping-policy" element={<ShippingPolicy />} />

        <Route path="/return-policy" element={<ReturnPolicy />} />

        <Route path="/cancellation" element={<Cancellation />} />

        <Route path="/faq" element={<FAQ />} />


        {/* ABOUT LINKS */}

        <Route path="/our-story" element={<OurStory />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/store-locator" element={<StoreLocator />} />

        <Route path="/authenticity" element={<Authenticity />} />

        <Route path="/sustainability" element={<Sustainability />} />

        <Route path="/press" element={<Press />} />


        {/* CUSTOMER */}

        <Route path="/customer-care" element={<CustomerCare />} />

        <Route path="/support" element={<Support />} />

        <Route path="/gift-cards" element={<GiftCards />} />

        <Route path="/coupons" element={<Coupons />} />

        <Route path="/beauty-tips" element={<BeautyTips />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/rewards" element={<Rewards />} />


        {/* POLICY */}

        <Route path="/terms" element={<Terms />} />

        <Route path="/privacy" element={<Privacy />} />


        {/* USER PAGES */}

        <Route path="/search" element={<Search />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />


        {/* PRODUCT */}

        <Route 
          path="/product/:id" 
          element={<ProductDetails />} 
        />
        <Route
          path="/dry-skin"
          element={<DrySkin />}
        />

        <Route
          path="/oily-skin"
          element={<OilySkin />}
        />
        <Route
          path="/sensitive-skin"
          element={<SensitiveSkin />}
        />
        <Route
          path="/combination-skin"
          element={<CombinationSkin />}
        />
        <Route
          path="/academy/skincare-basics"
          element={<SkincareBasics />}
        />


      </Routes>


      <Footer />


    </>
  );
}


export default App;