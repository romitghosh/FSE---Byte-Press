import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>Byte Press</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
