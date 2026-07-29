import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

import { FaHeart } from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


const products = [

  {
    id:1,
    name:"Vitamin C Face Serum",
    price:699,

    image:"/images/vitamin-c-face-serum.jpg",

    images:[
      "/images/vitamin-c-face-serum.jpg",
      "/images/vitamin-c-face-serum-1.jpg",
      "/images/vitamin-c-face-serum-2.jpg",
      "/images/vitamin-c-face-serum-3.jpg"
    ],

    description:
    "Brightening Vitamin C Face Serum enriched with antioxidants to reduce pigmentation, hydrate the skin, and provide a natural radiant glow."
  },


  {
  id:2,
  name:"Daily Face Cleanser",
  price:399,

  image:"/images/daily-face-cleanser.jpg",

  images:[
    "/images/daily-face-cleanser.jpg",
    "/images/daily-face-cleanser-1.jpg",
    "/images/daily-face-cleanser-2.jpg",
    "/images/daily-face-cleanser-3.jpg"
  ],

  description:
  "Gentle cleanser that removes dirt and excess oil without drying the skin."
},


  {
  id:3,
  name:"Hydrating Moisturizer",
  price:549,

  image:"/images/hydrating moisturizer.jpg",

  images:[
    "/images/hydrating moisturizer.jpg",
    "/images/hydrating moisturizer-1.jpg",
    "/images/hydrating moisturizer-2.jpg",
    "/images/hydrating moisturizer-3.jpg"
  ],

  description:
  "Lightweight moisturizer for soft, healthy and hydrated skin."
},


  {
  id:4,
  name:"SPF 50 Sunscreen",
  price:599,

  image:"/images/spf 50 sunscreen.jpg",

  images:[
    "/images/spf 50 sunscreen.jpg",
    "/images/spf 50 sunscreen-1.jpg",
    "/images/spf 50 sunscreen-2.jpg",
    "/images/spf 50 sunscreen-3.jpg"
  ],

  description:
  "Broad spectrum SPF 50 sunscreen for everyday UV protection."
},

{
  id:101,
  name:"Matte Lipstick",
  price:499,

  image:"/images/matte-lipstick.jpg",

  images:[
    "/images/matte-lipstick.jpg",
    "/images/matte-lipstick-1.jpg",
    "/images/matte-lipstick-2.jpg",
    "/images/matte-lipstick-3.jpg"
  ],

  description:
  "A long-lasting matte lipstick with rich color payoff and a comfortable matte finish."
},
{
  id:102,
  name:"Liquid Foundation",
  price:899,

  image:"/images/liquid-foundation.jpg",

  images:[
    "/images/liquid-foundation.jpg",
    "/images/liquid-foundation-1.jpg",
    "/images/liquid-foundation-2.jpg",
    "/images/liquid-foundation-3.jpg"
  ],

  description:
  "Lightweight liquid foundation that provides full coverage with a smooth natural finish."
},

{
  id:103,
  name:"Waterproof Mascara",
  price:699,

  image:"/images/waterproof-mascara.jpg",

  images:[
    "/images/waterproof-mascara.jpg",
    "/images/waterproof-mascara-1.jpg",
    "/images/waterproof-mascara-2.jpg",
    "/images/waterproof-mascara-3.jpg"
  ],

  description:
  "Smudge-proof waterproof mascara that adds volume, length, and definition for all-day wear."
},

{
  id:104,
  name:"Eyeshadow Palette",
  price:999,

  image:"/images/eyeshadow-palette.jpg",

  images:[
    "/images/eyeshadow-palette.jpg",
    "/images/eyeshadow-palette-1.jpg",
    "/images/eyeshadow-palette-2.jpg",
    "/images/eyeshadow-palette-3.jpg"
  ],

  description:
  "Highly pigmented eyeshadow palette with vibrant matte and shimmer shades for every occasion."
},

{
  id: 201,
  name: "Nourishing Shampoo",
  price: 599,

  image: "/images/nourishing-shampoo.jpg",

  images: [
    "/images/nourishing-shampoo.jpg",
    "/images/nourishing-shampoo-1.jpg",
    "/images/nourishing-shampoo-2.jpg",
    "/images/nourishing-shampoo-3.jpg"
  ],

  description:
    "A nourishing shampoo that gently cleanses the scalp while strengthening and adding shine to your hair."
},

{
  id: 202,
  name: "Repair Conditioner",
  price: 649,

  image: "/images/repair-conditioner.jpg",

  images: [
    "/images/repair-conditioner.jpg",
    "/images/repair-conditioner-1.jpg",
    "/images/repair-conditioner-2.jpg",
    "/images/repair-conditioner-3.jpg"
  ],

  description:
    "A rich conditioner that deeply nourishes dry and damaged hair, leaving it smooth and manageable."
},

{
  id: 203,
  name: "Hair Serum",
  price: 799,

  image: "/images/hair-serum.jpg",

  images: [
    "/images/hair-serum.jpg",
    "/images/hair-serum-1.jpg",
    "/images/hair-serum-2.jpg",
    "/images/hair-serum-3.jpg"
  ],

  description:
    "Lightweight hair serum that controls frizz, adds shine, and protects hair from daily damage."
},

{
  id: 204,
  name: "Hair Mask",
  price: 899,

  image: "/images/hair-mask.jpg",

  images: [
    "/images/hair-mask.jpg",
    "/images/hair-mask-1.jpg",
    "/images/hair-mask-2.jpg",
    "/images/hair-mask-3.jpg"
  ],

  description:
    "An intensive hair mask that repairs damaged strands and restores softness and moisture."
},

{
  id: 301,
  name: "Body Lotion",
  price: 499,

  image: "/images/body-lotion.jpg",

  images: [
    "/images/body-lotion.jpg",
    "/images/body-lotion-1.jpg",
    "/images/body-lotion-2.jpg",
    "/images/body-lotion-3.jpg"
  ],

  description:
    "A deeply nourishing body lotion that provides long-lasting hydration, leaving your skin soft, smooth, and healthy."
},

{
  id: 302,
  name: "Body Wash",
  price: 399,

  image: "/images/body-wash.jpg",

  images: [
    "/images/body-wash.jpg",
    "/images/body-wash-1.jpg",
    "/images/body-wash-2.jpg",
    "/images/body-wash-3.jpg"
  ],

  description:
    "A gentle body wash that cleanses, refreshes, and moisturizes the skin while maintaining its natural softness."
},

{
  id: 303,
  name: "Body Scrub",
  price: 599,

  image: "/images/body-scrub.jpg",

  images: [
    "/images/body-scrub.jpg",
    "/images/body-scrub-1.jpg",
    "/images/body-scrub-2.jpg",
    "/images/body-scrub-3.jpg"
  ],

  description:
    "An exfoliating body scrub that removes dead skin cells, smooths rough areas, and reveals naturally glowing skin."
},

{
  id: 304,
  name: "Hand Cream",
  price: 349,

  image: "/images/hand-cream.jpg",

  images: [
    "/images/hand-cream.jpg",
    "/images/hand-cream-1.jpg",
    "/images/hand-cream-2.jpg",
    "/images/hand-cream-3.jpg"
  ],

  description:
    "A rich hand cream that deeply moisturizes dry hands, keeping them soft, nourished, and protected throughout the day."
},

{
  id: 401,
  name: "Vitamin C Serum",
  price: 699,

  image: "/images/vitamin-c-face-serum.jpg",

  images: [
    "/images/vitamin-c-face-serum.jpg",
    "/images/vitamin-c-face-serum-1.jpg",
    "/images/vitamin-c-face-serum-2.jpg",
    "/images/vitamin-c-face-serum-3.jpg"
  ],

  description:
    "A powerful Vitamin C serum that brightens the skin, reduces dark spots, and provides antioxidant protection for a healthy glow."
},

{
  id: 402,
  name: "Hyaluronic Acid Serum",
  price: 799,

  image: "/images/hyaluronic-serum.jpg",

  images: [
    "/images/hyaluronic-serum.jpg",
    "/images/hyaluronic-serum-1.jpg",
    "/images/hyaluronic-serum-2.jpg",
    "/images/hyaluronic-serum-3.jpg"
  ],

  description:
    "A deeply hydrating serum enriched with Hyaluronic Acid to lock in moisture and leave your skin soft, plump, and refreshed."
},

{
  id: 403,
  name: "Niacinamide Serum",
  price: 749,

  image: "/images/niacinamide-serum.jpg",

  images: [
    "/images/niacinamide-glow-serum.jpg",
    "/images/niacinamide-glow-serum-1.jpg",
    "/images/niacinamide-glow-serum-2.jpg",
    "/images/niacinamide-glow-serum-3.jpg"
  ],

  description:
    "A lightweight Niacinamide serum that helps reduce pores, control excess oil, and improve overall skin texture."
},

{
  id: 404,
  name: "Retinol Serum",
  price: 899,

  image: "/images/retinol-serum.jpg",

  images: [
    "/images/retinol-serum.jpg",
    "/images/retinol-serum-1.jpg",
    "/images/retinol-serum-2.jpg",
    "/images/retinol-serum-3.jpg"
  ],

  description:
    "An advanced Retinol serum that supports skin renewal, smooths fine lines, and promotes a youthful-looking complexion."
},

{
  id: 501,
  name: "Luxury Rose Eau De Parfum",
  price: 1299,

  image: "/images/luxury-rose-perfume.jpg",

  images: [
    "/images/luxury-rose-perfume.jpg",
    "/images/luxury-rose-perfume-1.jpg",
    "/images/luxury-rose-perfume-2.jpg",
    "/images/luxury-rose-perfume-3.jpg"
  ],

  description:
    "A luxurious rose fragrance with elegant floral notes and a long-lasting scent, perfect for everyday wear and special occasions."
},

{
  id: 502,
  name: "Midnight Oud Perfume",
  price: 1499,

  image: "/images/midnight-oud-perfume.jpg",

  images: [
    "/images/midnight-oud-perfume.jpg",
    "/images/midnight-oud-perfume-1.jpg",
    "/images/midnight-oud-perfume-2.jpg",
    "/images/midnight-oud-perfume-3.jpg"
  ],

  description:
    "A rich oud fragrance with warm woody notes that delivers an elegant, bold, and long-lasting aroma."
},

{
  id: 503,
  name: "Floral Bloom Perfume",
  price: 1199,

  image: "/images/floral-bloom-perfume.jpg",

  images: [
    "/images/floral-bloom-perfume.jpg",
    "/images/floral-bloom-perfume-1.jpg",
    "/images/floral-bloom-perfume-2.jpg",
    "/images/floral-bloom-perfume-3.jpg"
  ],

  description:
    "A refreshing floral perfume featuring delicate flower notes that create a soft, feminine, and refreshing fragrance."
},

{
  id: 504,
  name: "Royal Musk Perfume",
  price: 1599,

  image: "/images/royal-musk-perfume.jpg",

  images: [
    "/images/royal-musk-perfume.jpg",
    "/images/royal-musk-perfume-1.jpg",
    "/images/royal-musk-perfume-2.jpg",
    "/images/royal-musk-perfume-3.jpg"
  ],

  description:
    "A premium musk perfume with smooth oriental notes that provides a sophisticated and luxurious fragrance throughout the day."
},

{
  id: 601,
  brand: "Cetaphil",
  name: "Gentle Skin Cleanser",
  price: 399,

  image: "/images/products/cetaphil-cleanser.jpg",

  images: [
    "/images/products/cetaphil-cleanser.jpg"
  ],

  description:
    "A dermatologist-recommended cleanser that gently removes dirt, oil, and makeup without drying the skin."
},

{
  id: 602,
  brand: "CeraVe",
  name: "Hydrating Facial Cleanser",
  price: 799,

  image: "/images/products/cerave-cleanser.jpg",

  images: [
    "/images/products/cerave-cleanser.jpg"
  ],

  description:
    "Hydrating cleanser enriched with ceramides and hyaluronic acid to restore the skin barrier."
},

{
  id: 603,
  brand: "Simple",
  name: "Refreshing Face Wash",
  price: 349,

  image: "/images/products/simple-cleanser.jpg",

  images: [
    "/images/products/simple-cleanser.jpg"
  ],

  description:
    "A soap-free face wash that gently cleanses while keeping your skin soft, fresh, and hydrated."
},

{
  id: 604,
  brand: "Minimalist",
  name: "Oat Gentle Cleanser",
  price: 499,

  image: "/images/products/minimalist-cleanser.jpg",

  images: [
    "/images/products/minimalist-cleanser.jpg"
  ],

  description:
    "A gentle oat cleanser specially formulated for sensitive skin."
},

{
  id: 605,
  brand: "Dot & Key",
  name: "Barrier Repair Cleanser",
  price: 445,

  image: "/images/products/dotkey-cleanser.jpg",

  images: [
    "/images/products/dotkey-cleanser.jpg"
  ],

  description:
    "A nourishing cleanser that repairs the skin barrier while removing impurities."
},

{
  id: 606,
  brand: "Plum",
  name: "Green Tea Cleanser",
  price: 375,

  image: "/images/products/plum-cleanser.jpg",

  images: [
    "/images/products/plum-cleanser.jpg"
  ],

  description:
    "A refreshing Green Tea cleanser that controls excess oil and helps prevent acne."
},

{
  id: 701,
  name: "CeraVe Moisturizing Cream",
  price: 899,

  image: "/images/products/cerave-moisturizer.jpg",

  images: [
    "/images/products/cerave-moisturizer.jpg",
  
  ],

  description:
    "A dermatologist-developed moisturizer enriched with ceramides and hyaluronic acid to restore the skin barrier and provide long-lasting hydration."
},

{
  id: 702,
  name: "Cetaphil Moisturizing Lotion",
  price: 699,

  image: "/images/products/cetaphil-moisturizer.jpg",

  images: [
    "/images/products/cetaphil-moisturizer.jpg",
,
  ],

  description:
    "A lightweight daily moisturizer that keeps skin soft, hydrated, and healthy without feeling greasy."
},

{
  id: 703,
  name: "Minimalist Ceramide Moisturizer",
  price: 599,

  image: "/images/products/minimalist-moisturizer.jpg",

  images: [
    "/images/products/minimalist-moisturizer.jpg",
    
  ],

  description:
    "A ceramide-rich moisturizer that repairs the skin barrier while providing deep nourishment and hydration."
},

{
  id: 704,
  name: "Dot & Key Hydrating Moisturizer",
  price: 549,

  image: "/images/products/dotkey-moisturizer.jpg",

  images: [
    "/images/products/dotkey-moisturizer.jpg",
    
    
  ],

  description:
    "A refreshing gel moisturizer infused with hydrating ingredients for soft, glowing, and healthy-looking skin."
},

{
  id: 705,
  name: "Plum Green Tea Moisturizer",
  price: 499,

  image: "/images/products/plum-moisturizer.jpg",

  images: [
    "/images/products/plum-moisturizer.jpg",
    
  ],

  description:
    "Green tea moisturizer specially designed for oily and combination skin to provide hydration while controlling excess oil."
},

{
  id: 706,
  name: "Simple Hydrating Light Moisturizer",
  price: 449,

  image: "/images/products/simple-moisturizer.jpg",

  images: [
    "/images/products/simple-moisturizer.jpg",
    
  ],

  description:
    "A gentle, lightweight moisturizer with skin-loving ingredients that hydrates sensitive skin without irritation."
},

{
  id: 801,
  name: "Cetaphil Gentle Foaming Face Wash",
  price: 499,
  image: "/images/products/cetaphil-facewash.jpg",
  images: [
    "/images/products/cetaphil-facewash.jpg"
  ],
  description:
    "A gentle foaming face wash that effectively removes dirt, oil, and impurities while maintaining the skin's natural moisture barrier."
},

{
  id: 802,
  name: "Simple Refreshing Face Wash",
  price: 399,
  image: "/images/products/simple-facewash.jpg",
  images: [
    "/images/products/simple-facewash.jpg"
  ],
  description:
    "Soap-free face wash enriched with skin-loving ingredients to leave your skin clean, fresh, and hydrated."
},

{
  id: 803,
  name: "Minimalist Aquaporin Face Wash",
  price: 549,
  image: "/images/products/minimalist-facewash.jpg",
  images: [
    "/images/products/minimalist-facewash.jpg"
  ],
  description:
    "Hydrating face wash that gently cleanses the skin while improving moisture retention."
},

{
  id: 804,
  name: "Dot & Key Cica Face Wash",
  price: 445,
  image: "/images/products/dotkey-facewash.jpg",
  images: [
    "/images/products/dotkey-facewash.jpg"
  ],
  description:
    "A soothing face wash infused with Cica to calm sensitive skin and gently remove impurities."
},

{
  id: 805,
  name: "Plum Green Tea Face Wash",
  price: 375,
  image: "/images/products/plum-facewash.jpg",
  images: [
    "/images/products/plum-facewash.jpg"
  ],
  description:
    "Green Tea face wash specially formulated for oily and acne-prone skin to reduce excess oil and refresh the skin."
},

{
  id: 806,
  name: "CeraVe Foaming Facial Cleanser",
  price: 899,
  image: "/images/products/cerave-facewash.jpg",
  images: [
    "/images/products/cerave-facewash.jpg"
  ],
  description:
    "Foaming facial cleanser enriched with ceramides and niacinamide for deep cleansing without disrupting the skin barrier."
},

{
id:901,
name:"La Roche-Posay Anthelios SPF 50+",
price:1499,

image:"/images/products/laroche-sunscreen.jpg",

images:[
"/images/products/laroche-sunscreen.jpg"
],

description:
"An ultra-lightweight sunscreen with SPF 50+ that provides broad-spectrum UVA and UVB protection without leaving a white cast."
},

{
id:902,
name:"Minimalist SPF 50 Sunscreen",
price:499,

image:"/images/products/minimalist-sunscreen.jpg",

images:[
"/images/products/minimalist-sunscreen.jpg"
],

description:
"A lightweight SPF 50 sunscreen enriched with multi-vitamins to protect the skin from harmful UV rays while keeping it hydrated."
},

{
id:903,
name:"Dot & Key Watermelon Cooling Sunscreen",
price:595,

image:"/images/products/dotkey-sunscreen.jpg",

images:[
"/images/products/dotkey-sunscreen.jpg"
],

description:
"A refreshing watermelon sunscreen that cools the skin while providing SPF 50 PA+++ sun protection."
},

{
id:904,
name:"Aqualogica Glow+ Dewy Sunscreen",
price:499,

image:"/images/products/aqualogica-sunscreen.jpg",

images:[
"/images/products/aqualogica-sunscreen.jpg"
],

description:
"A dewy finish sunscreen enriched with papaya and vitamin C for glowing, protected skin."
},

{
id:905,
name:"Dr. Sheth's Ceramide & Vitamin C Sunscreen",
price:549,

image:"/images/products/drsheth-sunscreen.jpg",

images:[
"/images/products/drsheth-sunscreen.jpg"
],

description:
"A dermatologist-developed sunscreen with ceramides and vitamin C that strengthens the skin barrier while protecting against UV damage."
},

{
id:906,
name:"Neutrogena Ultra Sheer Dry Touch SPF 50+",
price:699,

image:"/images/products/neutrogena-sunscreen.jpg",

images:[
"/images/products/neutrogena-sunscreen.jpg"
],

description:
"A fast-absorbing dry-touch sunscreen offering SPF 50+ protection with a lightweight, non-greasy finish."
},

{
id:1001,
name:"Mamaearth Ubtan Face Mask",
price:499,

image:"/images/products/mamaearth-face-mask.jpg",

images:[
"/images/products/mamaearth-face-mask.jpg"
],

description:
"An Ubtan face mask enriched with turmeric and saffron that deeply cleanses, brightens, and improves skin texture."
},

{
id:1002,
name:"Dot & Key Hydrating Clay Mask",
price:695,

image:"/images/products/dotkey-face-mask.jpg",

images:[
"/images/products/dotkey-face-mask.jpg"
],

description:
"A hydrating clay mask that removes impurities while maintaining the skin's natural moisture balance."
},

{
id:1003,
name:"Plum Green Tea Clear Face Mask",
price:575,

image:"/images/products/plum-face-mask.jpg",

images:[
"/images/products/plum-face-mask.jpg"
],

description:
"A green tea face mask specially formulated for oily and acne-prone skin to absorb excess oil and reduce breakouts."
},

{
id:1004,
name:"The Face Shop Real Nature Sheet Mask",
price:199,

image:"/images/products/faceshop-sheet-mask.jpg",

images:[
"/images/products/faceshop-sheet-mask.jpg"
],

description:
"A nourishing sheet mask infused with natural extracts to hydrate, refresh, and brighten the skin."
},

{
id:1005,
name:"Innisfree Volcanic Pore Clay Mask",
price:899,

image:"/images/products/innisfree-face-mask.jpg",

images:[
"/images/products/innisfree-face-mask.jpg"
],

description:
"A volcanic clay mask that deeply cleanses pores, removes excess sebum, and leaves skin smooth and refreshed."
},

{
id:1006,
name:"Minimalist PHA Face Mask",
price:599,

image:"/images/products/minimalist-face-mask.jpg",

images:[
"/images/products/minimalist-face-mask.jpg"
],

description:
"A gentle exfoliating face mask with PHA that smooths skin texture, removes dead skin cells, and enhances radiance."
},

{
  id: 1001,
  name: "Minimalist PHA 3% Toner",
  price: 499,

  image: "/images/products/minimalist-toner.jpg",

  images: [
    "/images/products/minimalist-toner.jpg",
    
  ],

  description:
    "A gentle exfoliating toner with 3% PHA that removes dead skin cells, smooths skin texture, and provides deep hydration."
},

{
  id: 1002,
  name: "Plum Green Tea Alcohol-Free Toner",
  price: 399,

  image: "/images/products/plum-toner.jpg",

  images: [
    "/images/products/plum-toner.jpg",
    
  ],

  description:
    "Alcohol-free Green Tea toner that controls oil, tightens pores, and refreshes acne-prone skin."
},

{
  id: 1003,
  name: "Dot & Key Cica Calming Toner",
  price: 545,

  image: "/images/products/dotkey-toner.jpg",

  images: [
    "/images/products/dotkey-toner.jpg",
    
  ],

  description:
    "A soothing toner enriched with Cica to calm irritated skin, reduce redness, and strengthen the skin barrier."
},

{
  id: 1004,
  name: "Simple Kind To Skin Soothing Toner",
  price: 425,

  image: "/images/products/simple-toner.jpg",

  images: [
    "/images/products/simple-toner.jpg",
    
  ],

  description:
    "A gentle toner specially designed for sensitive skin that hydrates, refreshes, and balances the skin."
},

{
  id: 1005,
  name: "L'Oréal Paris Revitalift Crystal Toner",
  price: 699,

  image: "/images/products/loreal-toner.jpg",

  images: [
    "/images/products/loreal-toner.jpg",
    
  ],

  description:
    "A brightening crystal toner that gently exfoliates, improves skin texture, and gives radiant glowing skin."
},

{
  id: 1006,
  name: "COSRX AHA/BHA Clarifying Toner",
  price: 999,

  image: "/images/products/cosrx-toner.jpg",

  images: [
    "/images/products/cosrx-toner.jpg",
    
  ],

  description:
    "A Korean skincare toner containing AHA and BHA that gently exfoliates, unclogs pores, and leaves skin clear and smooth."
},

// ================= MAKEUP PRODUCTS =================


// ================= LIPSTICK PRODUCTS =================


{
id:11001,

brand:"M.A.C",

name:"Matte Lipstick",

price:1999,

image:"/images/products/mac-lipstick.jpg",

images:[
"/images/products/mac-lipstick.jpg"
],

description:
"Premium matte lipstick with intense color payoff, smooth application and long-lasting comfortable finish."

},



{
id:11002,

brand:"Maybelline",

name:"Super Stay Matte Ink",

price:699,

image:"/images/products/maybelline-lipstick.jpg",

images:[
"/images/products/maybelline-lipstick.jpg"
],

description:
"A highly pigmented liquid matte lipstick with long-lasting transfer resistant color."

},



{
id:11003,

brand:"Lakme",

name:"9to5 Primer + Matte Lipstick",

price:499,

image:"/images/products/lakme-lipstick.jpg",

images:[
"/images/products/lakme-lipstick.jpg"
],

description:
"A lightweight matte lipstick enriched with primer technology for smooth and comfortable wear."

},



{
id:11004,

brand:"Nykaa",

name:"So Matte Lipstick",

price:399,

image:"/images/products/nykaa-lipstick.jpg",

images:[
"/images/products/nykaa-lipstick.jpg"
],

description:
"Soft matte lipstick with rich pigmentation and a smooth velvet finish."

},



{
id:11005,

brand:"Swiss Beauty",

name:"Non Transfer Lipstick",

price:349,

image:"/images/products/swiss-lipstick.jpg",

images:[
"/images/products/swiss-lipstick.jpg"
],

description:
"Affordable non-transfer lipstick with intense color and comfortable matte texture."

},



{
id:11006,

brand:"L'Oréal",

name:"Color Riche Lipstick",

price:899,

image:"/images/products/loreal-lipstick.jpg",

images:[
"/images/products/loreal-lipstick.jpg"
],

description:
"Luxurious lipstick enriched with moisturizing ingredients for rich color and smooth lips."

},



// ================= FOUNDATION PRODUCTS =================


{
id:11011,

brand:"Maybelline",

name:"Fit Me Foundation",

price:699,

image:"/images/products/fitme-foundation.jpg",

images:[
"/images/products/fitme-foundation.jpg"
],

description:
"Maybelline Fit Me Foundation provides natural matte coverage, blends easily, and gives a smooth flawless finish for everyday makeup."

},



{
id:11012,

brand:"L'Oréal",

name:"Infallible Foundation",

price:899,

image:"/images/products/loreal-foundation.jpg",

images:[
"/images/products/loreal-foundation.jpg"
],

description:
"L'Oréal Infallible Foundation offers long-lasting full coverage with a lightweight texture and natural finish."

},



{
id:11013,

brand:"Lakme",

name:"9to5 Foundation",

price:599,

image:"/images/products/lakme-foundation.jpg",

images:[
"/images/products/lakme-foundation.jpg"
],

description:
"Lakme 9to5 Foundation gives smooth medium coverage with a comfortable matte finish suitable for daily wear."

},



{
id:11014,

brand:"Swiss Beauty",

name:"HD Foundation",

price:499,

image:"/images/products/swiss-foundation.jpg",

images:[
"/images/products/swiss-foundation.jpg"
],

description:
"Swiss Beauty HD Foundation provides lightweight coverage with a smooth HD finish for a flawless makeup look."

},



{
id:11015,

brand:"M.A.C",

name:"Studio Fix Fluid",

price:2999,

image:"/images/products/mac-foundation.jpg",

images:[
"/images/products/mac-foundation.jpg"
],

description:
"M.A.C Studio Fix Fluid Foundation delivers professional coverage, controls shine, and creates a smooth matte finish."

},



{
id:11016,

brand:"Kay Beauty",

name:"Hydrating Foundation",

price:1200,

image:"/images/products/kay-foundation.jpg",

images:[
"/images/products/kay-foundation.jpg"
],

description:
"Kay Beauty Hydrating Foundation provides buildable coverage with a natural radiant finish while keeping skin hydrated."
},



// ================= MASCARA PRODUCTS =================


{
id:11031,

brand:"Maybelline",

name:"Sky High Mascara",

price:799,

image:"/images/products/maybelline-mascara.jpg",

images:[
"/images/products/maybelline-mascara.jpg"
],

description:
"Maybelline Sky High Mascara gives extreme length, volume, and lifted lashes with a lightweight waterproof formula."

},


{
id:11032,

brand:"L'Oréal",

name:"Lash Paradise Mascara",

price:899,

image:"/images/products/loreal-mascara.jpg",

images:[
"/images/products/loreal-mascara.jpg"
],

description:
"L'Oréal Lash Paradise Mascara creates dramatic volume and intense black lashes with smooth application."

},


{
id:11033,

brand:"Lakme",

name:"Eyeconic Curl Mascara",

price:499,

image:"/images/products/lakme-mascara.jpg",

images:[
"/images/products/lakme-mascara.jpg"
],

description:
"Lakme Eyeconic Curl Mascara enhances lashes with a curling effect and long-lasting definition."

},


{
id:11034,

brand:"Swiss Beauty",

name:"Volume Mascara",

price:399,

image:"/images/products/swiss-mascara.jpg",

images:[
"/images/products/swiss-mascara.jpg"
],

description:
"Swiss Beauty Volume Mascara adds thickness and definition to lashes for an everyday makeup look."

},


{
id:11035,

brand:"M.A.C",

name:"Magic Extension Mascara",

price:2299,

image:"/images/products/mac-mascara.jpg",

images:[
"/images/products/mac-mascara.jpg"
],

description:
"M.A.C Magic Extension Mascara delivers bold, extended lashes with a professional makeup finish."

},


{
id:11036,

brand:"Faces Canada",

name:"Magneteyes Mascara",

price:599,

image:"/images/products/faces-mascara.jpg",

images:[
"/images/products/faces-mascara.jpg"
],

description:
"Faces Canada Magneteyes Mascara provides rich volume, length, and smudge-resistant wear."
},



// ================= COMPACT PRODUCTS =================


{
id:11041,

brand:"Maybelline",

name:"Fit Me Compact Powder",

price:299,

image:"/images/products/maybelline-compact.jpg",

images:[
"/images/products/maybelline-compact.jpg"
],

description:
"Maybelline Fit Me Compact Powder controls shine and gives a smooth matte finish for everyday makeup."
},



{
id:11042,

brand:"Lakme",

name:"Radiance Compact Powder",

price:250,

image:"/images/products/lakme-compact.jpg",

images:[
"/images/products/lakme-compact.jpg"
],

description:
"Lakme Radiance Compact Powder gives a natural bright look with lightweight coverage."
},



{
id:11043,

brand:"Swiss Beauty",

name:"HD Compact Powder",

price:399,

image:"/images/products/hd-compact.jpg",

images:[
"/images/products/hd-compact.jpg"
],

description:
"Swiss Beauty HD Compact Powder provides a flawless finish with oil control."
},



{
id:11044,

brand:"M.A.C",

name:"Studio Fix Compact",

price:3200,

image:"/images/products/mac-compact.jpg",

images:[
"/images/products/mac-compact.jpg"
],

description:
"M.A.C Studio Fix Compact provides professional coverage with a smooth matte finish."
},



{
id:11045,

brand:"Faces Canada",

name:"Weightless Matte Compact",

price:599,

image:"/images/products/faces-compact.jpg",

images:[
"/images/products/faces-compact.jpg"
],

description:
"Lightweight matte compact powder that keeps makeup fresh throughout the day."
},



{
id:11046,

brand:"Nykaa",

name:"All Day Matte Compact",

price:499,

image:"/images/products/nykaa-compact.jpg",

images:[
"/images/products/nykaa-compact.jpg"
],

description:
"Nykaa compact powder gives a smooth matte look and controls excess oil."
},



// ================= CONCEALER PRODUCTS =================


{
id:11051,

brand:"Maybelline",

name:"Instant Age Rewind Concealer",

price:699,

image:"/images/products/maybelline-concealer.jpg",

images:[
"/images/products/maybelline-concealer.jpg"
],

description:
"Maybelline Instant Age Rewind Concealer provides high coverage to hide dark circles, blemishes, and imperfections while giving a smooth natural finish."

},


{
id:11052,

brand:"L'Oréal",

name:"Infallible Concealer",

price:899,

image:"/images/products/loreal-concealer.jpg",

images:[
"/images/products/loreal-concealer.jpg"
],

description:
"L'Oréal Infallible Concealer offers full coverage with a lightweight texture, long-lasting wear, and a flawless matte finish."

},


{
id:11053,

brand:"Swiss Beauty",

name:"Full Coverage Concealer",

price:499,

image:"/images/products/swiss-concealer.jpg",

images:[
"/images/products/swiss-concealer.jpg"
],

description:
"Swiss Beauty Full Coverage Concealer blends easily to cover dark circles, spots, and uneven skin tone for a smooth makeup look."

},


{
id:11054,

brand:"Lakme",

name:"Absolute Concealer",

price:599,

image:"/images/products/lakme-concealer.jpg",

images:[
"/images/products/lakme-concealer.jpg"
],

description:
"Lakme Absolute Concealer provides lightweight coverage with a natural finish and helps create a flawless base for makeup."

},



// ================= BLUSH PRODUCTS =================

{
id:11061,

brand:"Rare Beauty",

name:"Soft Pinch Liquid Blush",

price:1999,

image:"/images/products/pink-blush.jpg",

images:[
"/images/products/pink-blush.jpg"
],

description:
"Highly pigmented liquid blush that blends beautifully to give a natural rosy glow."
},


{
id:11062,

brand:"Lakme",

name:"Absolute Blush",

price:650,

image:"/images/products/peach-blush.jpg",

images:[
"/images/products/peach-blush.jpg"
],

description:
"Soft powder blush that gives a fresh and natural flush of colour."
},


{
id:11063,

brand:"Maybelline",

name:"Fit Me Blush",

price:599,

image:"/images/products/matte-blush.jpg",

images:[
"/images/products/matte-blush.jpg"
],

description:
"Lightweight blush with buildable colour for a smooth matte finish."
},


{
id:11064,

brand:"Nykaa",

name:"Matte To Last Blush",

price:799,

image:"/images/products/liquid-blush.jpg",

images:[
"/images/products/liquid-blush.jpg"
],

description:
"Long-lasting blush that provides a beautiful natural cheek tint."
},

// ================= SHAMPOO PRODUCTS =================

{
  id: 12001,

  brand: "L'Oréal Paris",

  name: "Total Repair 5 Shampoo",

  price: 499,

  image: "/images/products/loreal-shampoo.jpg",

  images: [
    "/images/products/loreal-shampoo.jpg",
  ],

  description:
    "L'Oréal Paris Total Repair 5 Shampoo helps repair damaged hair, reduces hair fall due to breakage, smoothens rough hair, and leaves it soft, shiny, and healthy.",
},

{
  id: 12002,

  brand: "Dove",

  name: "Daily Shine Shampoo",

  price: 399,

  image: "/images/products/dove-shampoo.jpg",

  images: [
    "/images/products/dove-shampoo.jpg",
  ],

  description:
    "Dove Daily Shine Shampoo gently cleanses your hair while nourishing it from root to tip, leaving it soft, smooth, and naturally shiny.",
},

{
  id: 12003,

  brand: "Tresemmé",

  name: "Keratin Smooth Shampoo",

  price: 699,

  image: "/images/products/tresemme-shampoo.jpg",

  images: [
    "/images/products/tresemme-shampoo.jpg",
  ],

  description:
    "Tresemmé Keratin Smooth Shampoo is infused with keratin and argan oil to control frizz, improve manageability, and provide silky smooth hair.",
},

{
  id: 12004,

  brand: "Mamaearth",

  name: "Onion Shampoo",

  price: 549,

  image: "/images/products/mamaearth-shampoo.jpg",

  images: [
    "/images/products/mamaearth-shampoo.jpg",
  ],

  description:
    "Mamaearth Onion Shampoo is enriched with onion oil and plant keratin to strengthen hair, reduce hair fall, and promote healthy hair growth.",
},

//================ CONDITIONER PRODUCTS ================

{
id:12011,

brand:"Dove",

name:"Intense Repair Conditioner",

price:399,

image:"/images/products/dove-conditioner.jpg",

images:[
"/images/products/dove-conditioner.jpg"
],

description:
"Dove Intense Repair Conditioner nourishes damaged hair, reduces breakage, and leaves your hair soft, smooth, and manageable."
},

{
id:12012,

brand:"L'Oréal Paris",

name:"Dream Lengths Conditioner",

price:499,

image:"/images/products/loreal-conditioner.jpg",

images:[
"/images/products/loreal-conditioner.jpg"
],

description:
"L'Oréal Paris Dream Lengths Conditioner helps repair damaged hair, reduces split ends, and provides silky smooth long hair."
},

{
id:12013,

brand:"Tresemmé",

name:"Keratin Smooth Conditioner",

price:699,

image:"/images/products/tresemme-conditioner.jpg",

images:[
"/images/products/tresemme-conditioner.jpg"
],

description:
"Tresemmé Keratin Smooth Conditioner controls frizz and makes hair smooth, shiny, and easy to style."
},

{
id:12014,

brand:"Mamaearth",

name:"Onion Conditioner",

price:549,

image:"/images/products/mamaearth-conditioner.jpg",

images:[
"/images/products/mamaearth-conditioner.jpg"
],

description:
"Mamaearth Onion Conditioner strengthens hair roots, reduces hair fall, and deeply nourishes every strand."
},

//================ HAIR OIL PRODUCTS ================

{
id:12021,

brand:"Indulekha",

name:"Bringha Hair Oil",

price:399,

image:"/images/products/indulekha-hair-oil.jpg",

images:[
"/images/products/indulekha-hair-oil.jpg"
],

description:
"Indulekha Bringha Hair Oil helps reduce hair fall, nourishes the scalp, and promotes healthy hair growth."
},

{
id:12022,

brand:"Mamaearth",

name:"Onion Hair Oil",

price:499,

image:"/images/products/mamaearth-hair-oil.jpg",

images:[
"/images/products/mamaearth-hair-oil.jpg"
],

description:
"Mamaearth Onion Hair Oil strengthens hair roots, reduces hair fall, and improves hair texture with natural oils."
},

{
id:12023,

brand:"Parachute",

name:"Advanced Coconut Hair Oil",

price:299,

image:"/images/products/parachute-hair-oil.jpg",

images:[
"/images/products/parachute-hair-oil.jpg"
],

description:
"Parachute Advanced Coconut Hair Oil deeply nourishes hair, prevents dryness, and keeps hair soft and healthy."
},

{
id:12024,

brand:"WOW Skin Science",

name:"Onion Black Seed Hair Oil",

price:699,

image:"/images/products/wow-hair-oil.jpg",

images:[
"/images/products/wow-hair-oil.jpg"
],

description:
"WOW Skin Science Onion Black Seed Hair Oil is enriched with onion and black seed extracts to support stronger and healthier hair."
},

//================ HAIR SERUM PRODUCTS ================

{
id:12031,

brand:"L'Oréal Paris",

name:"Extraordinary Oil Hair Serum",

price:599,

image:"/images/products/loreal-hair-serum.jpg",

images:[
"/images/products/loreal-hair-serum.jpg"
],

description:
"L'Oréal Paris Extraordinary Oil Hair Serum nourishes dry hair, reduces frizz, and provides long-lasting shine."
},

{
id:12032,

brand:"Livon",

name:"Anti-Frizz Hair Serum",

price:299,

image:"/images/products/livon-hair-serum.jpg",

images:[
"/images/products/livon-hair-serum.jpg"
],

description:
"Livon Anti-Frizz Hair Serum instantly smooths rough hair and controls frizz while adding a silky finish."
},

{
id:12033,

brand:"Streax",

name:"Professional Hair Serum",

price:399,

image:"/images/products/streax-hair-serum.jpg",

images:[
"/images/products/streax-hair-serum.jpg"
],

description:
"Streax Professional Hair Serum provides salon-like smoothness, protects against dryness, and enhances shine."
},

{
id:12034,

brand:"Mamaearth",

name:"Onion Hair Serum",

price:499,

image:"/images/products/mamaearth-hair-serum.jpg",

images:[
"/images/products/mamaearth-hair-serum.jpg"
],

description:
"Mamaearth Onion Hair Serum helps reduce frizz, nourishes hair, and promotes healthier-looking strands."
},

//================ HAIR MASK PRODUCTS ================

{
id:12041,

brand:"L'Oréal Paris",

name:"Total Repair 5 Hair Mask",

price:699,

image:"/images/products/loreal-hair-mask.jpg",

images:[
"/images/products/loreal-hair-mask.jpg"
],

description:
"L'Oréal Paris Total Repair 5 Hair Mask deeply repairs damaged hair, making it smooth, soft, and healthy."
},

{
id:12042,

brand:"Mamaearth",

name:"Argan Hair Mask",

price:599,

image:"/images/products/mamaearth-hair-mask.jpg",

images:[
"/images/products/mamaearth-hair-mask.jpg"
],

description:
"Mamaearth Argan Hair Mask deeply nourishes dry and damaged hair while improving softness and shine."
},

{
id:12043,

brand:"Tresemmé",

name:"Keratin Smooth Hair Mask",

price:799,

image:"/images/products/tresemme-hair-mask.jpg",

images:[
"/images/products/tresemme-hair-mask.jpg"
],

description:
"Tresemmé Keratin Smooth Hair Mask controls frizz and provides salon-like smoothness with every use."
},

{
id:12044,

brand:"Dove",

name:"Intense Repair Hair Mask",

price:649,

image:"/images/products/dove-hair-mask.jpg",

images:[
"/images/products/dove-hair-mask.jpg"
],

description:
"Dove Intense Repair Hair Mask restores damaged hair and leaves it nourished, silky, and manageable."
},

//================ HAIR SPRAY PRODUCTS ================

{
id:12051,

brand:"Tresemmé",

name:"Completely Invisible Hair Spray",

price:699,

image:"/images/products/tresemme-hair-spray.jpg",

images:[
"/images/products/tresemme-hair-spray.jpg"
],

description:
"Tresemmé Completely Invisible Hair Spray provides flexible all-day hold without leaving visible residue."
},

{
id:12052,

brand:"L'Oréal Paris",

name:"Elnett Satin Hair Spray",

price:899,

image:"/images/products/loreal-hair-spray.jpg",

images:[
"/images/products/loreal-hair-spray.jpg"
],

description:
"L'Oréal Paris Elnett Satin Hair Spray delivers a strong, long-lasting hold while keeping hair soft and natural-looking."
},

{
id:12053,

brand:"Schwarzkopf",

name:"Taft Power Hair Spray",

price:799,

image:"/images/products/schwarzkopf-hair-spray.jpg",

images:[
"/images/products/schwarzkopf-hair-spray.jpg"
],

description:
"Schwarzkopf Taft Power Hair Spray offers extra-strong hold, humidity resistance, and long-lasting styling control."
},

{
id:12054,

brand:"BBlunt",

name:"Hot Shot Hair Spray",

price:650,

image:"/images/products/bblunt-hair-spray.jpg",

images:[
"/images/products/bblunt-hair-spray.jpg"
],

description:
"BBlunt Hot Shot Hair Spray locks your hairstyle in place while maintaining natural movement and shine."
},

// ================= BODY WASH PRODUCTS =================

{
  id: 13001,
  brand: "Dove",
  name: "Deeply Nourishing Body Wash",
  category: "Body Wash",
  price: 399,
  description:
    "Dove Deeply Nourishing Body Wash gently cleanses while nourishing your skin with MicroMoisture technology for soft, smooth and healthy-looking skin.",
  image: "/images/products/dove-body-wash.jpg",
  images: [
    "/images/products/dove-body-wash.jpg",
    
  ],
},

{
  id: 13002,
  brand: "Nivea",
  name: "Creme Soft Body Wash",
  category: "Body Wash",
  price: 349,
  description:
    "Nivea Creme Soft Body Wash with Almond Oil provides deep nourishment, gentle cleansing and long-lasting freshness for everyday use.",
  image: "/images/products/nivea-body-wash.jpg",
  images: [
    "/images/products/nivea-body-wash.jpg",
    
  ],
},

{
  id: 13003,
  brand: "Palmolive",
  name: "Aroma Morning Tonic Body Wash",
  category: "Body Wash",
  price: 299,
  description:
    "Palmolive Aroma Morning Tonic Body Wash is enriched with natural botanical extracts that leave your skin refreshed and energized.",
  image: "/images/products/palmolive-body-wash.jpg",
  images: [
    "/images/products/palmolive-body-wash.jpg",
    
  ],
},

{
  id: 13004,
  brand: "Fiama",
  name: "Blackcurrant Body Wash",
  category: "Body Wash",
  price: 275,
  description:
    "Fiama Blackcurrant Body Wash creates a rich creamy lather that deeply cleanses while keeping your skin moisturized and fresh.",
  image: "/images/products/fiama-body-wash.jpg",
  images: [
    "/images/products/fiama-body-wash.jpg",
    
  ],
},

{
  id: 13101,
  brand: "Nivea",
  name: "Cocoa Nourish Body Lotion",
  category: "Bodycare",
  price: 399,
  description:
    "Nivea Cocoa Nourish Body Lotion is enriched with cocoa butter and Vitamin E to provide 48-hour deep moisture, leaving your skin soft, smooth, and healthy.",
  image: "/images/products/nivea-body-lotion.jpg",
  images: [
    "/images/products/nivea-body-lotion.jpg",
    
  ],
},

{
  id: 13102,
  brand: "Vaseline",
  name: "Intensive Care Deep Moisture Lotion",
  category: "Bodycare",
  price: 349,
  description:
    "Vaseline Intensive Care Deep Moisture Lotion deeply hydrates dry skin and helps restore its natural moisture barrier for long-lasting softness.",
  image: "/images/products/vaseline-body-lotion.jpg",
  images: [
    "/images/products/vaseline-body-lotion.jpg",
    
  ],
},

{
  id: 13103,
  brand: "Dove",
  name: "Deeply Nourishing Body Lotion",
  category: "Bodycare",
  price: 425,
  description:
    "Dove Deeply Nourishing Body Lotion provides deep nourishment with its lightweight formula, keeping skin moisturized and silky smooth all day.",
  image: "/images/products/dove-body-lotion.jpg",
  images: [
    "/images/products/dove-body-lotion.jpg",
    
  ],
},

{
  id: 13104,
  brand: "Cetaphil",
  name: "Moisturizing Body Lotion",
  category: "Bodycare",
  price: 799,
  description:
    "Cetaphil Moisturizing Body Lotion is dermatologist recommended and specially formulated for dry and sensitive skin, providing long-lasting hydration without irritation.",
  image: "/images/products/cetaphil-body-lotion.jpg",
  images: [
    "/images/products/cetaphil-body-lotion.jpg",
    
  ],
},

{
  id: 13201,
  brand: "The Body Shop",
  name: "Shea Body Butter",
  category: "Bodycare",
  price: 999,
  description:
    "Rich shea butter formula that deeply nourishes dry skin and provides up to 96 hours of moisture.",
  image: "/images/products/shea-body-butter.jpg",
  images: [
    "/images/products/shea-body-butter.jpg",
    
  ],
},

{
  id: 13202,
  brand: "Plum",
  name: "Vanilla Body Butter",
  category: "Bodycare",
  price: 649,
  description:
    "Creamy vanilla body butter enriched with shea butter to soften and smooth dry skin.",
  image: "/images/products/plum-body-butter.jpg",
  images: [
    "/images/products/plum-body-butter.jpg",
    
  ],
},

{
  id: 13203,
  brand: "MCaffeine",
  name: "Coffee Body Butter",
  category: "Bodycare",
  price: 599,
  description:
    "Coffee-infused body butter that hydrates deeply while improving skin texture and softness.",
  image: "/images/products/mcaffeine-body-butter.jpg",
  images: [
    "/images/products/mcaffeine-body-butter.jpg",
    
  ],
},

{
  id: 13204,
  brand: "WOW Skin Science",
  name: "Cocoa Body Butter",
  category: "Bodycare",
  price: 549,
  description:
    "Cocoa butter enriched formula that locks in moisture and leaves skin soft, smooth, and nourished.",
  image: "/images/products/wow-body-butter.jpg",
  images: [
    "/images/products/wow-body-butter.jpg",
    
  ],
},

{
  id:13301,
  brand:"MCaffeine",
  name:"Coffee Body Scrub",
  category:"Bodycare",
  price:449,
  description:"Coffee body scrub gently exfoliates dead skin, removes tan, and leaves your skin soft and glowing.",
  image:"/images/products/mcaffeine-body-scrub.jpg",
  images:[
    "/images/products/mcaffeine-body-scrub.jpg",
    
  ],
},

{
  id:13302,
  brand:"Plum",
  name:"BodyLovin Sugar Scrub",
  category:"Bodycare",
  price:599,
  description:"Plum sugar scrub exfoliates rough skin and provides long-lasting hydration with natural oils.",
  image:"/images/products/plum-body-scrub.jpg",
  images:[
    "/images/products/plum-body-scrub.jpg",
    
  ],
},

{
  id:13303,
  brand:"Dove",
  name:"Exfoliating Body Polish",
  category:"Bodycare",
  price:499,
  description:"Dove body polish gently buffs away dull skin while deeply moisturizing for a silky finish.",
  image:"/images/products/dove-body-scrub.jpg",
  images:[
    "/images/products/dove-body-scrub.jpg",
    
  ],
},

{
  id:13304,
  brand:"The Body Shop",
  name:"British Rose Body Scrub",
  category:"Bodycare",
  price:999,
  description:"A luxurious rose-infused body scrub that smooths, refreshes, and brightens your skin.",
  image:"/images/products/bodyshop-body-scrub.jpg",
  images:[
    "/images/products/bodyshop-body-scrub.jpg",
    
  ],
},

{
  id: 13401,
  brand: "Neutrogena",
  name: "Norwegian Formula Hand Cream",
  category: "Bodycare",
  price: 299,
  description: "A concentrated hand cream that provides instant relief and long-lasting hydration for dry hands.",
  image: "/images/products/neutrogena-hand-cream.jpg",
  images: [
    "/images/products/neutrogena-hand-cream.jpg",
    
  ],
},

{
  id: 13402,
  brand: "The Body Shop",
  name: "Shea Hand Cream",
  category: "Bodycare",
  price: 595,
  description: "Enriched with shea butter to deeply nourish and soften rough, dry hands.",
  image: "/images/products/bodyshop-hand-cream.jpg",
  images: [
    "/images/products/bodyshop-hand-cream.jpg",
    
  ],
},

{
  id: 13403,
  brand: "Nivea",
  name: "Soft Hand Cream",
  category: "Bodycare",
  price: 249,
  description: "A lightweight hand cream that moisturizes and keeps hands soft without feeling greasy.",
  image: "/images/products/nivea-hand-cream.jpg",
  images: [
    "/images/products/nivea-hand-cream.jpg",
    
  ],
},

{
  id: 13404,
  brand: "Vaseline",
  name: "Healthy Hands Cream",
  category: "Bodycare",
  price: 199,
  description: "Daily moisturizing hand cream that helps repair dry skin and protects against moisture loss.",
  image: "/images/products/vaseline-hand-cream.jpg",
  images: [
    "/images/products/vaseline-hand-cream.jpg",
    
  ],
},

{
  id:13601,
  brand:"Dove",
  name:"Beauty Bathing Bar",
  price:"₹299",
  images:[
    "/images/products/dove-soap.jpg",
    
  ],
  description:"Dove Beauty Bathing Bar gently cleanses while moisturizing your skin for a soft and smooth feel.",
},

{
  id:13602,
  brand:"Pears",
  name:"Pure & Gentle Soap",
  price:"₹199",
  images:[
    "/images/products/pears-soap.jpg",
    
  ],
  description:"Pears Pure & Gentle Soap is enriched with glycerin to keep your skin hydrated and healthy.",
},

{
  id:13603,
  brand:"Medimix",
  name:"Ayurvedic Classic Soap",
  price:"₹149",
  images:[
    "/images/products/medimix-soap.jpg",
    
  ],
  description:"Medimix Ayurvedic Soap is made with natural herbs that help protect and nourish your skin.",
},

{
  id:13604,
  brand:"Dettol",
  name:"Original Bath Soap",
  price:"₹179",
  images:[
    "/images/products/dettol-soap.jpg",
    
  ],
  description:"Dettol Original Soap provides trusted germ protection while keeping your skin fresh and clean.",
},

];



export default function ProductDetails(){


  const {id}=useParams();

  const navigate=useNavigate();


  const {addToCart}=useContext(CartContext);

  const {addToWishlist}=useContext(WishlistContext);



  const product=products.find(
    item=>item.id===Number(id)
  );



  const [selectedImage,setSelectedImage]=useState(
    product?.images ? product.images[0] : product?.image
  );


  const [isWishlisted,setIsWishlisted]=useState(false);


  const [showToast,setShowToast]=useState(false);




  if(!product){

    return(

      <h2 style={{textAlign:"center"}}>

        Product Not Found

      </h2>

    );

  }



  const images=product.images || [product.image];





  const previousImage=()=>{


    const current=images.indexOf(selectedImage);


    const previous=
    (current-1+images.length)%images.length;


    setSelectedImage(images[previous]);

  };





  const nextImage=()=>{


    const current=images.indexOf(selectedImage);


    const next=
    (current+1)%images.length;


    setSelectedImage(images[next]);

  };






  const handleWishlist=()=>{


    addToWishlist(product);


    setIsWishlisted(!isWishlisted);



    setShowToast(true);



    setTimeout(()=>{

      setShowToast(false);

    },2000);


  };






return(


<div className="product-details-page">



<div className="product-details-card">






{/* IMAGE SECTION */}


<div className="image-section">



<div className="product-image">



{
images.length>1 &&

<button

className="arrow left-arrow"

onClick={previousImage}

>

❮

</button>

}




<img

src={selectedImage}

alt={product.name}

/>





{
images.length>1 &&

<button

className="arrow right-arrow"

onClick={nextImage}

>

❯

</button>

}



</div>





{/* THUMBNAILS */}



<div className="thumbnail-container">


{

images.map((img,index)=>(


<img

key={index}

src={img}

alt="thumbnail"


className={

selectedImage===img

?

"thumbnail active-thumb"

:

"thumbnail"

}


onClick={()=>setSelectedImage(img)}


/>


))

}



</div>



</div>









{/* PRODUCT INFORMATION */}



<div className="product-info">



<h1>

{product.name}

</h1>




<p className="price">

₹{product.price}

</p>




<p className="rating">

⭐⭐⭐⭐⭐ (4.8/5)

</p>




<p className="description">

{product.description}

</p>





<div className="product-buttons">



<button

className="cart-btn"

onClick={()=>addToCart(product)}

>

Add to Cart

</button>






<button

className={

`wishlist-action ${
isWishlisted ? "active": ""
}`

}


onClick={handleWishlist}

>


<FaHeart/>


{

isWishlisted

?

"Added"

:

"Wishlist"

}


</button>






<button

className="buy-now-btn"

onClick={()=>{


addToCart(product);


navigate("/cart");


}}

>

Buy Now

</button>



</div>



</div>




</div>






{

showToast &&

<div className="wishlist-toast">

Added to Wishlist ❤️

</div>

}



</div>



);


}