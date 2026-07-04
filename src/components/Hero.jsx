import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome to GlowNest Beauty 🌸</h1>
        <p>Your Beauty Journey Starts Here</p>

        <button className="shop-btn">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;