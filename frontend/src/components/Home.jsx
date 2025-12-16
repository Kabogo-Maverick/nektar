import React from "react";
import "../styles/home.css";
import muratinaImg from "../assets/a.jpeg";

export default function Home() {
  const packs = [
    { qty: "1L", price: 150 },
    { qty: "3L", price: 450 },
    { qty: "5L", price: 750 },
    { qty: "10L", price: 1500 },
    { qty: "15L", price: 2250 },
    { qty: "20L", price: 3000 },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${muratinaImg})` }}>
        <div className="hero-darken" />
        <div className="hero-content">
          <span className="hero-tag">Authentic • Fresh • Kenyan</span>
          <h1 className="hero-title">
            Muratina <span className="highlight">Deluxe</span>
          </h1>
          <p className="hero-desc">
            Hand-crafted the traditional way — bold flavor, smooth finish, and delivered right to your door.
          </p>

          <button className="hero-btn">Order Now</button>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section">
        <h2 className="menu-title">Choose Your Pack</h2>

        <div className="pack-grid">
          {packs.map((p, i) => (
            <div className="pack-card" key={i}>
              <div className="card-img-wrap">
                <img src={muratinaImg} alt={p.qty} className="card-img" />
                <span className="card-price">KES {p.price}</span>
              </div>

              <div className="card-info">
                <h3>{p.qty}</h3>
                <p>Pure, original, naturally brewed Muratina.</p>
                <button className="card-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="more-btn-wrap">
          <button className="more-btn">Load More</button>
        </div>
      </section>
    </div>
  );
}
