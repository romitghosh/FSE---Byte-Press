import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>BYTE Press</h2>
        <p>KEEP IN TOUCH</p>
        <p>BE THE FIRST TO TALK WITH US</p>
        <input type="email" placeholder="Enter Your Email" className="footer-input" />
        <div className="footer-socials">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
      <div className="footer-bottom">
        <p>TM & Copyright 2025 RPRR Company LLC. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
