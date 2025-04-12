import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import CountryNews from "./components/CountryNews";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/top-headlines" element={<TopHeadlines />} />
        <Route path="/country-news" element={<CountryNews />} />
      </Routes>
    </Router>
  );
}

export default App;
