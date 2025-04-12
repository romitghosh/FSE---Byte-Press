import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <img
          src="/src/assets/BytePress.png"
          alt="Byte Press Logo"
          height="40"
        />
        <h1>Byte Press</h1>
      </div>
      <div>
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
            <Link to="/auth">Login / Register</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
