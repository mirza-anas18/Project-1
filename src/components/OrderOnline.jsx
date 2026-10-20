
import './OrderOnline.css';

function OrderOnline() {
  return (
    <section id="order-online" className="order-online">
      <div className="order-online-content">
        <span className="order-online-eyebrow">
          CRAVING SOMETHING DELICIOUS?
        </span>

        <h2 className="order-online-title">
          YOUR NEXT MEAL.
          <br />
          JUST A CLICK AWAY.
        </h2>

        <p className="order-online-desc">
          Order your favourites from Kababs On Lonsdale
          through your preferred delivery platform.
        </p>

        <div className="order-online-buttons">
          <a
            href="https://www.ubereats.com/au/store/kebabs-at-lonsdale/-3gYzMfXWu-gdbwR8u5C_w"
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn uber-eats-btn"
          >
            Order with Uber Eats <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.doordash.com/store/kebabs-at-lonsdale-melbourne-31664165/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn doordash-btn"
          >
            Order with DoorDash <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="order-online-note">
          Ordering and delivery are handled by our delivery partners.
        </p>
      </div>
    </section>
  );
}

export default OrderOnline;
