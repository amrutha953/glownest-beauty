import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

const banners = [
  {
    image: "/images/hero.jpg",
    title: "Glow Beyond Beauty",
    subtitle: "Discover skincare and beauty essentials designed to make you shine every day.",
  },
  {
    image: "/images/banner2.jpg",
    title: "Healthy Skin Starts Here",
    subtitle: "Nourish your skin with premium ingredients for a natural glow.",
  },
  {
    image: "/images/banner3.jpg",
    title: "Beauty That Speaks for You",
    subtitle: "Luxury makeup collections for every mood and every occasion.",
  },
  {
    image: "/images/banner4.jpg",
    title: "Feel Beautiful. Feel Confident.",
    subtitle: "Explore perfumes, body care, and beauty products you'll love.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="hero-slider">
      <img
        src={banners[current].image}
        alt={banners[current].title}
        className="hero-image"
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Banner Content */}
      <div className="hero-content">
        <h1>{banners[current].title}</h1>
        <p>{banners[current].subtitle}</p>

        <button className="shop-btn">
          Shop Now
        </button>
      </div>

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;