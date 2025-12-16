import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Refresh Your World</h1>
          <p className="hero-subtitle">
            Premium handcrafted drinks made with passion and flavor.
          </p>
          <button className="hero-btn">Explore Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
