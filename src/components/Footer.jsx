
import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              KABABS <span>AT LONSDALE</span>
            </a>

            <p className="footer-tagline">
              Made fresh. Served with love.
            </p>

            <p className="footer-description">
              Big flavour, fresh ingredients and kebabs made
              to satisfy. Your next favourite meal starts here.
            </p>
          </div>

          <div className="footer-links">
            <h3>EXPLORE</h3>
            <a href="#top">Home</a>
            <a href="#menu">Our Menu</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div className="footer-locations">
            <h3>FIND US</h3>
            <a href="#visit-us">Kababs at Lonsdale</a>
            <a href="#visit-us">Kebab On Hoddle</a>
            <a href="#VisitUs" className="footer-directions">
              Visit Our Locations <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Kababs at Lonsdale
          </p>

          <a href="#top" className="footer-back-to-top">
            BACK TO TOP <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
