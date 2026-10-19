
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    emoji: '🌯',
    title: 'BUILD IT.',
    description: 'Choose your favourites. Make it yours.',
  },
  {
    number: '02',
    emoji: '🔥',
    title: 'WE GRILL IT.',
    description: 'Freshly grilled. Full of flavour.',
  },
  {
    number: '03',
    emoji: '♨️',
    title: 'SERVED HOT.',
    description: 'Get it delivered hot or walk in.',
  },
];

function HowItWorks() {
  return (
    <section
      className="how-it-works"
      id="how-it-works"
    >
      <div className="how-heading">
        <p className="how-eyebrow">
          THE KEBABX EXPERIENCE
        </p>

        <h2>
          ZERO <span>COMPROMISE.</span>
        </h2>
      </div>

      <div className="how-steps">
        {steps.map((step) => (
          <article
            className="how-step"
            key={step.number}
          >
            <div className="how-step-top">
              <span className="how-step-number">
                {step.number}
              </span>

              <span
                className="how-step-emoji"
                aria-hidden="true"
              >
                {step.emoji}
              </span>
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <p className="how-tagline">
        BUILT FRESH. GRILLED RIGHT. SERVED HOT.
      </p>
    </section>
  );
}

export default HowItWorks;
