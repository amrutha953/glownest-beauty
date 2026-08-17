import React from "react";
import { Routes, Route } from "react-router-dom";

// =====================================================
// CUSTOMER LAYOUT
// =====================================================
import CustomerLayout from "./components/CustomerLayout";

// =====================================================
// MAIN PAGES
// =====================================================
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// =====================================================
// ADMIN PAGES
// =====================================================
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminCustomers from "./pages/AdminCustomers";

// =====================================================
// GENERAL PAGES
// =====================================================
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";

// =====================================================
// SHOP MAIN CATEGORIES
// =====================================================
import Skincare from "./pages/Skincare";
import Makeup from "./pages/Makeup";
import Haircare from "./pages/Haircare";
import Bodycare from "./pages/Bodycare";
import Serum from "./pages/Serum";
import Perfume from "./pages/Perfume";

// =====================================================
// HELP / INFORMATION
// =====================================================
import TrackOrder from "./pages/TrackOrder";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Cancellation from "./pages/Cancellation";
import FAQ from "./pages/FAQ";

// =====================================================
// ABOUT LINKS
// =====================================================
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import StoreLocator from "./pages/StoreLocator";
import Authenticity from "./pages/Authenticity";
import Sustainability from "./pages/Sustainability";
import Press from "./pages/Press";

// =====================================================
// CUSTOMER LINKS
// =====================================================
import CustomerCare from "./pages/CustomerCare";
import Support from "./pages/Support";
import GiftCards from "./pages/GiftCards";
import Coupons from "./pages/Coupons";
import BeautyTips from "./pages/BeautyTips";
import Membership from "./pages/Membership";
import Rewards from "./pages/Rewards";

// =====================================================
// POLICY
// =====================================================
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// =====================================================
// USER FEATURES
// =====================================================
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

// =====================================================
// PRODUCT DETAILS
// =====================================================
import ProductDetails from "./pages/ProductDetails";

// =====================================================
// SKIN TYPE
// =====================================================
import DrySkin from "./pages/DrySkin";
import OilySkin from "./pages/OilySkin";
import SensitiveSkin from "./pages/SensitiveSkin";
import CombinationSkin from "./pages/CombinationSkin";

// =====================================================
// BEAUTY ACADEMY
// =====================================================
import SkincareBasics from "./pages/SkincareBasics";
import IngredientGuide from "./pages/IngredientGuide";
import ExpertTips from "./pages/ExpertTips";
import WriteReview from "./pages/WriteReview";

// =====================================================
// SKINCARE PRODUCTS
// =====================================================
import Cleanser from "./pages/Cleanser";
import Moisturizer from "./pages/Moisturizer";
import FaceWash from "./pages/FaceWash";
import Sunscreen from "./pages/Sunscreen";
import FaceMask from "./pages/FaceMask";
import Toner from "./pages/Toner";

// =====================================================
// MAKEUP PRODUCTS
// =====================================================
import Foundation from "./pages/Foundation";
import Lipstick from "./pages/Lipstick";
import Mascara from "./pages/Mascara";
import Compact from "./pages/Compact";
import Concealer from "./pages/Concealer";
import Blush from "./pages/Blush";

// =====================================================
// HAIRCARE PRODUCTS
// =====================================================
import Shampoo from "./pages/Shampoo";
import Conditioner from "./pages/Conditioner";
import HairOil from "./pages/HairOil";
import HairSerum from "./pages/HairSerum";
import HairMask from "./pages/HairMask";
import HairSpray from "./pages/HairSpray";

// =====================================================
// BODYCARE PRODUCTS
// =====================================================
import BodyWash from "./pages/BodyWash";
import BodyLotion from "./pages/BodyLotion";
import BodyButter from "./pages/BodyButter";
import BodyScrub from "./pages/BodyScrub";
import HandCream from "./pages/HandCream";
import Soap from "./pages/Soap";

// =====================================================
// SERUM PRODUCTS
// =====================================================
import VitaminC from "./pages/VitaminC";
import Niacinamide from "./pages/Niacinamide";
import Retinol from "./pages/Retinol";
import HyaluronicAcid from "./pages/HyaluronicAcid";
import Brightening from "./pages/Brightening";
import AntiAging from "./pages/AntiAging";

// =====================================================
// PERFUME PRODUCTS
// =====================================================
import Women from "./pages/Women";
import Men from "./pages/Men";
import Luxury from "./pages/Luxury";
import Floral from "./pages/Floral";
import Woody from "./pages/Woody";
import Fresh from "./pages/Fresh";


function App() {
    return (
        <Routes>

            {/* =================================================
                ADMIN ROUTES
                IMPORTANT:
                These routes DO NOT use CustomerLayout.
                Therefore Navbar/Footer will not appear here.
            ================================================= */}

            <Route
                path="/admin/login"
                element={<AdminLogin />}
            />

            <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
            />

            <Route
                path="/admin/products"
                element={<AdminProducts />}
            />

            <Route
                path="/admin/orders"
                element={<AdminOrders />}
            />

            <Route
                path="/admin/customers"
                element={<AdminCustomers />}
            />


            {/* =================================================
                CUSTOMER ROUTES
                All customer pages use CustomerLayout.
            ================================================= */}

            <Route element={<CustomerLayout />}>

                {/* =============================================
                    HOME
                ============================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =============================================
                    AUTHENTICATION
                ============================================= */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />


                {/* =============================================
                    USER
                ============================================= */}

                <Route
                    path="/profile"
                    element={<Profile />}
                />

                <Route
                    path="/orders"
                    element={<MyOrders />}
                />

                <Route
                    path="/orders/:id"
                    element={<OrderDetails />}
                />


                {/* =============================================
                    MAIN PAGES
                ============================================= */}

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/offers"
                    element={<Offers />}
                />


                {/* =============================================
                    SHOP MAIN CATEGORIES
                ============================================= */}

                <Route
                    path="/shop/skincare"
                    element={<Skincare />}
                />

                <Route
                    path="/shop/makeup"
                    element={<Makeup />}
                />

                <Route
                    path="/shop/haircare"
                    element={<Haircare />}
                />

                <Route
                    path="/shop/bodycare"
                    element={<Bodycare />}
                />

                <Route
                    path="/serum"
                    element={<Serum />}
                />

                <Route
                    path="/shop/perfume"
                    element={<Perfume />}
                />


                {/* =============================================
                    HELP
                ============================================= */}

                <Route
                    path="/track-order"
                    element={<TrackOrder />}
                />

                <Route
                    path="/shipping-policy"
                    element={<ShippingPolicy />}
                />

                <Route
                    path="/return-policy"
                    element={<ReturnPolicy />}
                />

                <Route
                    path="/cancellation"
                    element={<Cancellation />}
                />

                <Route
                    path="/faq"
                    element={<FAQ />}
                />


                {/* =============================================
                    ABOUT LINKS
                ============================================= */}

                <Route
                    path="/our-story"
                    element={<OurStory />}
                />

                <Route
                    path="/careers"
                    element={<Careers />}
                />

                <Route
                    path="/store-locator"
                    element={<StoreLocator />}
                />

                <Route
                    path="/authenticity"
                    element={<Authenticity />}
                />

                <Route
                    path="/sustainability"
                    element={<Sustainability />}
                />

                <Route
                    path="/press"
                    element={<Press />}
                />


                {/* =============================================
                    CUSTOMER LINKS
                ============================================= */}

                <Route
                    path="/customer-care"
                    element={<CustomerCare />}
                />

                <Route
                    path="/support"
                    element={<Support />}
                />

                <Route
                    path="/gift-cards"
                    element={<GiftCards />}
                />

                <Route
                    path="/coupons"
                    element={<Coupons />}
                />

                <Route
                    path="/beauty-tips"
                    element={<BeautyTips />}
                />

                <Route
                    path="/membership"
                    element={<Membership />}
                />

                <Route
                    path="/rewards"
                    element={<Rewards />}
                />


                {/* =============================================
                    POLICY
                ============================================= */}

                <Route
                    path="/terms"
                    element={<Terms />}
                />

                <Route
                    path="/privacy"
                    element={<Privacy />}
                />


                {/* =============================================
                    USER FEATURES
                ============================================= */}

                <Route
                    path="/search"
                    element={<Search />}
                />

                <Route
                    path="/wishlist"
                    element={<Wishlist />}
                />

                <Route
                    path="/cart"
                    element={<Cart />}
                />


                {/* =============================================
                    PRODUCT DETAILS
                ============================================= */}

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />


                {/* =============================================
                    SKIN TYPES
                ============================================= */}

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


                {/* =============================================
                    BEAUTY ACADEMY
                ============================================= */}

                <Route
                    path="/academy/skincare-basics"
                    element={<SkincareBasics />}
                />

                <Route
                    path="/academy/ingredient-guide"
                    element={<IngredientGuide />}
                />

                <Route
                    path="/academy/expert-tips"
                    element={<ExpertTips />}
                />

                <Route
                    path="/write-review"
                    element={<WriteReview />}
                />


                {/* =============================================
                    SKINCARE PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/skincare/cleanser"
                    element={<Cleanser />}
                />

                <Route
                    path="/shop/skincare/moisturizer"
                    element={<Moisturizer />}
                />

                <Route
                    path="/shop/skincare/face-wash"
                    element={<FaceWash />}
                />

                <Route
                    path="/shop/skincare/sunscreen"
                    element={<Sunscreen />}
                />

                <Route
                    path="/shop/skincare/face-mask"
                    element={<FaceMask />}
                />

                <Route
                    path="/shop/skincare/toner"
                    element={<Toner />}
                />


                {/* =============================================
                    MAKEUP PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/makeup/foundation"
                    element={<Foundation />}
                />

                <Route
                    path="/shop/makeup/lipstick"
                    element={<Lipstick />}
                />

                <Route
                    path="/shop/makeup/mascara"
                    element={<Mascara />}
                />

                <Route
                    path="/shop/makeup/compact"
                    element={<Compact />}
                />

                <Route
                    path="/shop/makeup/concealer"
                    element={<Concealer />}
                />

                <Route
                    path="/shop/makeup/blush"
                    element={<Blush />}
                />


                {/* =============================================
                    HAIRCARE PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/haircare/shampoo"
                    element={<Shampoo />}
                />

                <Route
                    path="/shop/haircare/conditioner"
                    element={<Conditioner />}
                />

                <Route
                    path="/shop/haircare/hair-oil"
                    element={<HairOil />}
                />

                <Route
                    path="/shop/haircare/hair-serum"
                    element={<HairSerum />}
                />

                <Route
                    path="/shop/haircare/hair-mask"
                    element={<HairMask />}
                />

                <Route
                    path="/shop/haircare/hair-spray"
                    element={<HairSpray />}
                />


                {/* =============================================
                    BODYCARE PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/bodycare/body-wash"
                    element={<BodyWash />}
                />

                <Route
                    path="/shop/bodycare/body-lotion"
                    element={<BodyLotion />}
                />

                <Route
                    path="/shop/bodycare/body-butter"
                    element={<BodyButter />}
                />

                <Route
                    path="/shop/bodycare/body-scrub"
                    element={<BodyScrub />}
                />

                <Route
                    path="/shop/bodycare/hand-cream"
                    element={<HandCream />}
                />

                <Route
                    path="/shop/bodycare/soap"
                    element={<Soap />}
                />


                {/* =============================================
                    SERUM PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/serum/vitamin-c"
                    element={<VitaminC />}
                />

                <Route
                    path="/shop/serum/niacinamide"
                    element={<Niacinamide />}
                />

                <Route
                    path="/shop/serum/retinol"
                    element={<Retinol />}
                />

                <Route
                    path="/shop/serum/hyaluronic-acid"
                    element={<HyaluronicAcid />}
                />

                <Route
                    path="/shop/serum/brightening"
                    element={<Brightening />}
                />

                <Route
                    path="/shop/serum/anti-aging"
                    element={<AntiAging />}
                />


                {/* =============================================
                    PERFUME PRODUCTS
                ============================================= */}

                <Route
                    path="/shop/perfume/women"
                    element={<Women />}
                />

                <Route
                    path="/shop/perfume/men"
                    element={<Men />}
                />

                <Route
                    path="/shop/perfume/luxury"
                    element={<Luxury />}
                />

                <Route
                    path="/shop/perfume/floral"
                    element={<Floral />}
                />

                <Route
                    path="/shop/perfume/woody"
                    element={<Woody />}
                />

                <Route
                    path="/shop/perfume/fresh"
                    element={<Fresh />}
                />

            </Route>

        </Routes>
    );
}

export default App;