
import { useState } from 'react';

const images = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

function SpotlightCard({ activeItem }) {
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'rotateX(0deg) rotateY(0deg)',
  });

  const filename = activeItem?.image?.split('/').pop();

  const imagePath = Object.entries(images).find(([path]) =>
    path.endsWith(`/${filename}`)
  )?.[1];

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
        {imagePath ? (
          <img
            key={imagePath}
            src={imagePath}
            alt={activeItem?.title ?? 'KebabX featured food'}
            className="kebab-image"
          />
        ) : (
          <p>Hero image not found: {filename}</p>
        )}
      </div>
    </div>
  );
}

export default SpotlightCard;
