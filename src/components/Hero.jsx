
import SpotlightCard from './SpotlightCard';

function Hero({ activeItem }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">
            {activeItem.eyebrow}
          </span>

          <h1 className="hero-title">
            {activeItem.title}
          </h1>

          <p className="hero-desc">
            {activeItem.description}
          </p>

          <div className="allergen-badge">
            Allergens: {activeItem.allergens}
          </div>

          <div className="hero-price">
            {activeItem.price}
          </div>

          <div className="hero-actions">
            <a href="#locations" className="btn btn-orange">
              Find a shop
            </a>

            <a href="#locations" className="btn btn-dark">
              Order on Uber Eats
            </a>
          </div>
        </div>

        <SpotlightCard activeItem={activeItem} />
      </div>
    </section>
  );
}

export default Hero;
