import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logoImg from "../assets/a.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logoImg} alt="Muratina Hub Logo" />
        <span>Muratina Hub</span>
      </Link>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/order" onClick={closeMenu}>My Order</NavLink>
        <NavLink to="/delivery" onClick={closeMenu}>Delivery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
