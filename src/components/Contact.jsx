import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>

        <div className="contact-links">
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href="tel:+8801712345678">Call Now</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
