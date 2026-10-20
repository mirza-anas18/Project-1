
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Hands down one of the best kebab spots I’ve been to. The meat was super fresh and perfectly cooked, and the sauce was yummy with just the right amount on top. Generous portions, great value for money, and everything was made quickly without cutting corners. Staff were friendly and the place was clean.",
    food: 5,
    service: 5,
    atmosphere: 5,
  },
  {
    id: 2,
    rating: 5,
    text: "I recently tried this kebab shop and was pleasantly surprised. The meat was juicy and well-seasoned, with just the right balance of spices, and the bread was fresh and soft. The portion sizes were generous, making it great value for money. The staff were especially cooperative and nice, and service was quick and friendly even during a busy period. Overall, a solid spot for a satisfying, no-fuss meal—I’ll definitely be coming back.",
    food: 5,
    service: 5,
    atmosphere: 5,
  },
  {
    id: 3,
    rating: 4,
    text: "Your standard kebab spot. Pretty decent HSP. They do chicken, lamb, and falafels. Pretty decent.",
    food: 4,
    service: 5,
    atmosphere: 4,
    details: "Dine in · Dinner · $20–40",
    extra: "No wait · Vegetarian options available",
  },
];

function Stars({ rating }) {
  return (
    <div
      className="review-stars"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(rating)}
      <span>{"★".repeat(5 - rating)}</span>
    </div>
  );
}

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <header className="reviews-heading">
          <span className="reviews-eyebrow">
            THE WORD ON THE STREET
          </span>

          <h2>
            REAL FOOD. <span>REAL REVIEWS.</span>
          </h2>

          <p>
            Good kebabs speak for themselves. Here’s what
            customers have to say.
          </p>
        </header>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-top">
                <Stars rating={review.rating} />
                <span className="review-quote" aria-hidden="true">
                  “
                </span>
              </div>

              <p className="review-text">{review.text}</p>

              {review.details && (
                <p className="review-details">{review.details}</p>
              )}

              {review.extra && (
                <p className="review-extra">{review.extra}</p>
              )}

              <div className="review-breakdown">
                <span>Food <strong>{review.food}/5</strong></span>
                <span>Service <strong>{review.service}/5</strong></span>
                <span>
                  Atmosphere <strong>{review.atmosphere}/5</strong>
                </span>
              </div>

              <div className="review-card-footer">
                <span>GOOGLE CUSTOMER REVIEW</span>
                <span className="review-google-mark">G</span>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-cta">
          <p>Hungry for more opinions?</p>

          <a
            href="https://www.google.com/search?q=Kebabs+at+Lonsdale+Melbourne+reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ GOOGLE REVIEWS <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
