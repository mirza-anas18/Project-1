
import "./VisitUs.css";

const locations = [
  {
    id: "lonsdale",
    name: "Kababs at Lonsdale",
    address: "245 Lonsdale Street, Melbourne VIC 3000, Australia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=245%20Lonsdale%20Street%2C%20Melbourne%20VIC%203000%2C%20Australia",
    hours: [
      ["Monday", "Confirm with store"],
      ["Tuesday", "Confirm with store"],
      ["Wednesday", "Confirm with store"],
      ["Thursday", "Confirm with store"],
      ["Friday", "Confirm with store"],
      ["Saturday", "Confirm with store"],
      ["Sunday", "Confirm with store"],
    ],
  },
  {
    id: "hoddle",
    name: "Kebab On Hoddle",
    address: "230 Hoddle Street, Abbotsford VIC 3067, Australia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=230%20Hoddle%20Street%2C%20Abbotsford%20VIC%203067%2C%20Australia",
    hours: [
      ["Monday", "Confirm with store"],
      ["Tuesday", "Confirm with store"],
      ["Wednesday", "Confirm with store"],
      ["Thursday", "Confirm with store"],
      ["Friday", "Confirm with store"],
      ["Saturday", "Confirm with store"],
      ["Sunday", "Confirm with store"],
    ],
  },
];

function VisitUs() {
  return (
    <section className="VisitUs" id="VisitUs">
      <div className="visit-us__container">
        <header className="visit-us__heading">
          <span className="visit-us__eyebrow">
            FIND YOUR NEAREST SPOT
          </span>

          <h2>
            COME <span>VISIT US.</span>
          </h2>

          <p>
            Two locations. Fresh kebabs. The same love
            for good food. Come see us.
          </p>
        </header>

        <div className="visit-us__grid">
          {locations.map((location) => (
            <article
              className="visit-card"
              key={location.id}
            >
              <div className="visit-card__top">
                <span className="visit-card__label">
                  OUR LOCATION
                </span>

                <span
                  className="visit-card__icon"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <h3>{location.name}</h3>

              <div className="visit-card__address">
                <span aria-hidden="true">⌖</span>
                <p>{location.address}</p>
              </div>

              <div className="visit-card__hours">
                <h4>OPENING HOURS</h4>

                {location.hours.map(([day, time]) => (
                  <div
                    className="visit-card__day"
                    key={day}
                  >
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>

              <a
                className="visit-card__directions"
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to ${location.name}`}
              >
                <span>GET DIRECTIONS</span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
