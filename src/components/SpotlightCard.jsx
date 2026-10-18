
import { useState } from 'react';
import kebabImage from '../assets/kebab.jpeg';

function SpotlightCard() {
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'rotateX(0deg) rotateY(0deg)',
  });

  function handleMouseMove(e) {
    const card = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

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
        <img
          src={kebabImage}
          alt="Freshly prepared kebab wrap"
          className="kebab-image"
        />
      </div>
    </div>
  );
}

export default SpotlightCard;
