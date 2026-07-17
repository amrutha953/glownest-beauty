import React from "react";
import "./Press.css";

const pressReleases = [
  {
    title: "GlowNest Beauty Launches New Skincare Collection",
    date: "July 2026",
    description:
      "GlowNest introduced a premium skincare range featuring natural ingredients and dermatologist-tested formulas.",
  },
  {
    title: "GlowNest Expands Retail Presence",
    date: "June 2026",
    description:
      "New GlowNest stores have opened across major Indian cities to provide customers with an enhanced shopping experience.",
  },
  {
    title: "Commitment to Sustainable Beauty",
    date: "May 2026",
    description:
      "GlowNest announced new eco-friendly packaging initiatives and partnerships with responsible beauty brands.",
  },
];

const Press = () => {
  return (
    <div className="press-page">

      {/* Hero */}
      <section className="press-hero">
        <div className="press-overlay">
          <h1>Press & Media</h1>
          <p>Latest news, announcements, and media updates from GlowNest.</p>
        </div>
      </section>

      {/* Content */}
      <section className="press-container">

        <div className="press-intro">
          <h2>Latest News</h2>
          <p>
            Stay updated with GlowNest Beauty's latest announcements,
            achievements, product launches, and company news.
          </p>
        </div>

        <div className="press-grid">
          {pressReleases.map((item, index) => (
            <div className="press-card" key={index}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="media-contact">
          <h2>Media Contact</h2>

          <p>
            For interviews, partnerships, or press inquiries, please contact
            our media relations team.
          </p>

          <a href="mailto:media@glownestbeauty.com">
            media@glownestbeauty.com
          </a>

        </div>

      </section>

    </div>
  );
};

export default Press;