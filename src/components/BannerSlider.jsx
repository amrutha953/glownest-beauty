import { useEffect, useState } from "react";
import "../styles/BannerSlider.css";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">

      {/* LEFT ARROW */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* TRACK */}
      <div
        className="track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt={`banner-${i}`} />
          </div>
        ))}
      </div>

    </div>
  );
}