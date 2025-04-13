import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <img src="/src/assets/Logo.png" alt="Byte Press Logo" height="60" />
        <h1>Byte Press</h1>
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
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/auth">Login/Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
