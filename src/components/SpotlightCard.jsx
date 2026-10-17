
import { useState } from 'react';

function SpotlightCard({ activeItem }) {
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'rotateX(0deg) rotateY(0deg)',
  });

  function handleMouseMove(e) {
    const card = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
    });
  }

  return (
    <div className="spotlight-stage">
      <div
        className="spotlight-card"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="food-photo-box">
          <div className="food-emoji-3d">
            {activeItem.icon}
          </div>

          <span className="food-photo-label">
            FOOD PHOTO COMING SOON
          </span>
        </div>

        <div className="spotlight-footer">
          <div>
            <h3>{activeItem.cardTitle}</h3>
            <p>{activeItem.shortDesc}</p>
          </div>

          <span className="spotlight-price">
            {activeItem.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SpotlightCard;
