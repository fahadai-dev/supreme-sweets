import "./Gallery.css";
import sweet1 from "../assets/sweet1.jpg";
import sweet2 from "../assets/sweet2.jpg";
import sweet3 from "../assets/sweet3.jpg";

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Our Gallery</h2>

        <div className="gallery-grid">
          <img src={sweet1} alt="Sweet 1" />
          <img src={sweet2} alt="Sweet 2" />
          <img src={sweet3} alt="Sweet 3" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
