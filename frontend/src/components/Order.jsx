// src/components/Order.jsx
import React, { useState } from "react";
import "../styles/order.css";

export default function Order() {
  const [selected, setSelected] = useState(null);

  const orders = [
    {
      id: "NK-20331",
      item: "Muratina Signature Brew",
      steps: ["Order Received", "Preparing", "Out for Delivery", "Delivered"],
      currentStep: 2,
      eta: "8 mins",
      location: "Ruiru, Kamakis"
    },
    {
      id: "NK-20332",
      item: "Nektar Calabash XL",
      steps: ["Order Received", "Preparing", "Out for Delivery", "Delivered"],
      currentStep: 1,
      eta: "15 mins",
      location: "Kiambu Road"
    },
    {
      id: "NK-20333",
      item: "Hookah – Double Apple",
      steps: ["Order Received", "Preparing", "Out for Delivery", "Delivered"],
      currentStep: 3,
      eta: "Completed",
      location: "Kahawa Sukari"
    }
  ];

  const toggleSelect = (id) =>
    setSelected(selected === id ? null : id);

  return (
    <section className="order-section">
      <h2 className="order-title">Track Your Orders</h2>

      <div className="order-list">
        {orders.map((order) => (
          <div
            className={`order-card ${selected === order.id ? "expanded" : ""}`}
            key={order.id}
            onClick={() => toggleSelect(order.id)}
          >
            {/* Top Row */}
            <div className="order-top">
              <div>
                <h3 className="order-id">{order.id}</h3>
                <p className="order-item">{order.item}</p>
              </div>

              <div className="order-eta-box">
                <span className="eta-label">ETA</span>
                <span className="order-eta">{order.eta}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width:
                    ((order.currentStep + 1) / order.steps.length) * 100 + "%"
                }}
              ></div>
            </div>

            {/* Steps Timeline */}
            <div className="steps">
              {order.steps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${
                    index <= order.currentStep ? "active-step" : ""
                  }`}
                >
                  <div className="dot"></div>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Expanded Content */}
            {selected === order.id && (
              <div className="order-expanded">
                <p className="order-location">
                  📍 Current Location: <strong>{order.location}</strong>
                </p>

                <div className="map-placeholder">
                  <p>Map Loading…</p>
                </div>

                <button className="contact-driver">
                  Contact Rider
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
