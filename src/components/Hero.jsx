
import SpotlightCard from './SpotlightCard';

function Hero({ activeItem }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
        <span className="eyebrow">
              YOUR LOCAL KEBAB DESTINATION
            </span>

            <h1 className="hero-title">
              BIG FLAVOUR.
              <br />
              EVERY CRAVING.
            </h1>

            <p className="hero-desc">
              From kebabs and loaded HSPs to crispy chips
              and refreshing drinks, explore the menu at
              Kababs at Lonsdale and find something for
              your next meal.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="btn btn-orange">
                Explore the Menu <span aria-hidden="true">→</span>
              </a>

              <a href="#VisitUs" className="btn btn-dark">
                Find a Shop
              </a>
            </div>
          </div>

        <SpotlightCard activeItem={activeItem} />
      </div>
    </section>
  );
}

export default Hero;