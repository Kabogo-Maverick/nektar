import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoImg from "../assets/a.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" onClick={() => setOpen(false)} className="logo-link">
          <img src={logoImg} alt="Logo" className="nav-logo-img" />
          <span className="nav-logo-text">Muratina Hub</span>
        </Link>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/order" onClick={() => setOpen(false)}>My Order</Link>
        <Link to="/delivery" onClick={() => setOpen(false)}>Delivery</Link>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}
