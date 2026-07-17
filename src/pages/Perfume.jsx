import React from "react";
import "./Perfume.css";

const Perfume = () => {
  return (
    <div className="perfume-page">


      {/* Hero Section */}

      <section className="perfume-hero">

        <div className="perfume-content">

          <h1>GlowNest Perfumes</h1>

          <p>
            Discover captivating fragrances that express
            your personality and create unforgettable moments.
          </p>

          <button>
            Shop Perfumes
          </button>

        </div>

      </section>




      {/* Introduction */}

      <section className="perfume-intro">

        <h2>Luxury Fragrances For Every Mood</h2>

        <p>
          From fresh floral notes to rich elegant scents,
          GlowNest perfumes are designed to make you feel
          confident, beautiful and unique.
        </p>

      </section>





      {/* Perfume Benefits */}

      <section className="perfume-benefits">

        <h2>Why Choose GlowNest Perfume?</h2>


        <div className="perfume-cards">


          <div className="perfume-box">

            <h3>🌸 Long Lasting Fragrance</h3>

            <p>
              Enjoy beautiful scents that stay fresh
              throughout the day.
            </p>

          </div>



          <div className="perfume-box">

            <h3>✨ Premium Ingredients</h3>

            <p>
              Crafted with high-quality fragrance notes
              for a luxurious experience.
            </p>

          </div>




          <div className="perfume-box">

            <h3>💖 Perfect For Every Occasion</h3>

            <p>
              Find fragrances for daily wear,
              parties and special moments.
            </p>

          </div>


        </div>

      </section>
            {/* Perfume Categories Guide */}

      <section className="perfume-types">

        <h2>Perfume Categories Guide</h2>

        <div className="perfume-type-cards">

          <div className="type-card">

            <h3>🌸 Floral Perfume</h3>

            <p>
              Soft and elegant floral fragrances with
              beautiful notes of rose, jasmine and flowers.
            </p>

          </div>


          <div className="type-card">

            <h3>🍊 Fresh Perfume</h3>

            <p>
              Refreshing citrus and aquatic scents
              perfect for everyday use.
            </p>

          </div>


          <div className="type-card">

            <h3>🌙 Oriental Perfume</h3>

            <p>
              Rich and warm fragrances with luxurious
              spicy and sweet notes.
            </p>

          </div>


          <div className="type-card">

            <h3>🌿 Woody Perfume</h3>

            <p>
              Elegant woody aromas that create a
              sophisticated personality.
            </p>

          </div>

        </div>

      </section>




      {/* Fragrance Notes */}

      <section className="fragrance-notes">

        <h2>Understanding Fragrance Notes</h2>


        <div className="notes-container">


          <div className="note-box">

            <h3>✨ Top Notes</h3>

            <p>
              The first impression of perfume with
              fresh and light scents.
            </p>

          </div>



          <div className="note-box">

            <h3>💖 Heart Notes</h3>

            <p>
              The main character of the fragrance
              that appears after a few minutes.
            </p>

          </div>



          <div className="note-box">

            <h3>🌟 Base Notes</h3>

            <p>
              Long-lasting deep scents that remain
              for hours.
            </p>

          </div>


        </div>

      </section>





      {/* How To Choose Perfume */}

      <section className="choose-perfume">

        <h2>How To Choose Your Perfect Perfume?</h2>


        <div className="choose-steps">


          <div>

            <span>1</span>

            <h3>Know Your Style</h3>

            <p>
              Choose fragrances that match your
              personality.
            </p>

          </div>



          <div>

            <span>2</span>

            <h3>Choose Occasion</h3>

            <p>
              Select daily, party or special
              occasion perfumes.
            </p>

          </div>



          <div>

            <span>3</span>

            <h3>Test The Scent</h3>

            <p>
              Try fragrance notes before selecting.
            </p>

          </div>


        </div>

      </section>





      {/* Customer Reviews */}

      <section className="perfume-reviews">

        <h2>Customer Reviews</h2>


        <div className="review-cards">


          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Amazing fragrance and lasts all day!"
            </p>

            <h4>- Ananya</h4>

          </div>



          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Beautiful premium perfume collection."
            </p>

            <h4>- Priya</h4>

          </div>



          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "My favourite fragrance from GlowNest."
            </p>

            <h4>- Sneha</h4>

          </div>


        </div>

      </section>





      {/* CTA */}

      <section className="perfume-cta">

        <h2>
          Find Your Signature Fragrance
        </h2>


        <p>
          Explore GlowNest perfumes and discover
          a scent that represents you.
        </p>


        <button>
          Explore Perfumes
        </button>


      </section>
    </div>
  );
};


export default Perfume;