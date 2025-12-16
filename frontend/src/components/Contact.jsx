// src/components/Contact.jsx
import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-main-title">Talk to Us</h2>
      <p className="contact-main-sub">For deliveries, orders, bookings or issues — we respond fast.</p>

      <div className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="input-group">
            <label>Your Name</label>
            <input type="text" placeholder="e.g. John Mwangi" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="e.g. john@gmail.com" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" placeholder="+2547..." required />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea rows="4" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Message
          </button>

          {sent && <p className="sent-msg">Message Sent ✔</p>}
        </form>
      </div>
    </section>
  );
}
