import "../styles/Card.css"; // Import the Card styles
import "../styles/Home.css"; // Import the Home styles
import model from "../assets/model.png";

function Home() {
  return (
    <div className="home-landing-container">
      <nav className="home-nav-placeholder" />
      <section className="welcome-section">
        <div className="welcome-left">
          <h1 className="welcome-title">Welcome to</h1>
          <h1 className="bytepress-title">
            BYTE <span>Press</span>
          </h1>
          <p className="welcome-desc">
            News aggregation done right. Minimal, meaningful, and
            machine-driven.
            <br />
            Byte Press – Where every byte counts, and every headline matters.
            <br />
            Lightning-fast news. Curated by code. Powered by purpose.
            <br />
            From chaos to clarity — your smart news companion.
            <br />
            All the news you need, in one byte-sized feed.
          </p>
          <div className="made-by">
            Made by <span className="author-btn">Romit</span>{" "}
            <span className="author-btn">Rohit</span>{" "}
            <span className="author-btn">Pulkit</span>{" "}
            <span className="author-btn">Rajveer</span>
          </div>
        </div>
        <div className="welcome-right">
          <img src={model} alt="Model" className="welcome-img" />
          <div className="welcome-quote">"Get the News, Anywhere, Anytime"</div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <img
            src="/src/assets/Logo.png"
            alt="Exciting News"
            className="feature-img"
          />
          <div className="feature-title">Get Exciting News!</div>
        </div>
        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios-filled/100/6c63ff/service.png"
            alt="24/7 News"
            className="feature-img"
          />
          <div className="feature-title">24/7 News!</div>
        </div>
        <div className="feature-card">
          <img
            src="https://img.icons8.com/ios-filled/100/6c63ff/globe--v1.png"
            alt="Around the World"
            className="feature-img"
          />
          <div className="feature-title">Around the World!</div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-box">
          <p>
            <b>
              We collect news from a variety of websites, blogs, and other
              sources.
            </b>
          </p>
          <p>
            Content is organized into categories like politics, sports,
            technology, or entertainment.
          </p>
          <p>
            We offer personalized news feeds based on user interests and
            preferences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
