import "./Hero.css";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <header className="hero">
      <div className="overlay">
        <h1>Supreme Sweets</h1>
        <p>Fresh & Delicious Foods Every Day</p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noreferrer"
            className="btn whatsapp"
          >
            Order on WhatsApp
          </a>

          <a href="tel:+8801712345678" className="btn call">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
