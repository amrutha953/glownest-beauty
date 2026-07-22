import React, { useEffect, useState } from "react";
import { FaLeaf, FaFlask, FaSpa } from "react-icons/fa";
import "./BeautyAcademy.css";

function BeautyAcademy() {

  const [students, setStudents] = useState(0);
  const [guides, setGuides] = useState(0);
  const [happy, setHappy] = useState(0);

  useEffect(() => {

    let s = 0;
    let g = 0;
    let h = 0;

    let direction = 1;

    const studentsTarget = 15;
    const guidesTarget = 120;
    const happyTarget = 98;

    let timeoutId;

    const animate = () => {

      if (direction === 1) {

        s = Math.min(s + 1, studentsTarget);
        g = Math.min(g + 4, guidesTarget);
        h = Math.min(h + 3, happyTarget);

        setStudents(s);
        setGuides(g);
        setHappy(h);

        if (
          s === studentsTarget &&
          g === guidesTarget &&
          h === happyTarget
        ) {
          timeoutId = setTimeout(() => {
            direction = -1;
            animate();
          }, 2000);

          return;
        }

      } else {

        s = Math.max(s - 1, 0);
        g = Math.max(g - 4, 0);
        h = Math.max(h - 3, 0);

        setStudents(s);
        setGuides(g);
        setHappy(h);

        if (
          s === 0 &&
          g === 0 &&
          h === 0
        ) {
          timeoutId = setTimeout(() => {
            direction = 1;
            animate();
          }, 2000);

          return;
        }

      }

      timeoutId = setTimeout(animate, 120);

    };

    animate();

    return () => clearTimeout(timeoutId);

  }, []);

  return (

    <section className="beauty-academy">

      <div className="academy-header">

        <span>LEARN • GLOW • TRANSFORM</span>

        <h2>GlowNest Beauty Academy</h2>

        <p>
          Master skincare knowledge, discover powerful ingredients,
          and create a routine designed for your skin.
        </p>

      </div>


      <div className="academy-main">

        <div className="academy-video">

          <div className="video-wrapper">

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="/videos/skincare-tutorial.mp4"
                type="video/mp4"
              />
            </video>

            <div className="video-label">
              Beauty Tips & Tutorials
            </div>

          </div>

        </div>


        <div className="academy-content">

          <h3>
            Learn Beauty The Right Way
          </h3>

          <p>
            Beauty is more than products. Understand your skin,
            choose the right ingredients and build a skincare
            routine that works for you.
          </p>

          <button>
            Start Learning
          </button>


          <div className="academy-stats">

            <div className="stat">
              <h2>{students}K+</h2>
              <p>Students</p>
            </div>

            <div className="stat">
              <h2>{guides}+</h2>
              <p>Beauty Guides</p>
            </div>

            <div className="stat">
              <h2>{happy}%</h2>
              <p>Happy Learners</p>
            </div>

          </div>

        </div>

      </div>


      <div className="academy-cards">

        <div className="academy-card">

          <div className="academy-icon">
            <FaLeaf />
          </div>

          <h3>Skincare Basics</h3>

          <p>
            Understand your skin type and create a simple
            daily routine.
          </p>

        </div>


        <div className="academy-card">

          <div className="academy-icon">
            <FaFlask />
          </div>

          <h3>Ingredient Guide</h3>

          <p>
            Learn how ingredients like Vitamin C,
            Retinol and Hyaluronic Acid work.
          </p>

        </div>


        <div className="academy-card">

          <div className="academy-icon">
            <FaSpa />
          </div>

          <h3>Expert Tips</h3>

          <p>
            Professional beauty advice for healthy
            and glowing skin.
          </p>

        </div>

      </div>

    </section>

  );

}

export default BeautyAcademy;