import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar-custom">
      <div className="logo-container">
        <span className="logo-title">
          BYTE <span className="logo-title-press">Press</span>
        </span>
      </div>
      <button
        className="menu-button"
        onClick={() => setMenuActive(!menuActive)}
      >
        ☰
      </button>
      <div className={`nav-links ${menuActive ? "active" : ""}`}>
        {isAuthenticated ? (
          <>
            <Link to="/all-news">All News</Link>
            <Link to="/top-headlines">Top Headlines</Link>
            <Link to="/country-news">Country News</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <button className="nav-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/"
              className={currentPath === "/" ? "nav-link-active" : ""}
            >
              Home
            </Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/auth" className="nav-btn">
              Login/Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
