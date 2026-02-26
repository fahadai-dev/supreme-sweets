import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2>Supreme Sweets</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Sweets</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
