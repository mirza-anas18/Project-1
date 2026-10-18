 import { useState } from 'react';
import LONSDALE_MENU from '../Data/LonsdaleMenu.json';
import MenuCard from './MenuCard';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(
      LONSDALE_MENU.items.map((item) => item.category)
    ),
  ];

  const filteredItems =
    activeCategory === 'All'
      ? LONSDALE_MENU.items
      : LONSDALE_MENU.items.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="menu-section" id="full-menu">
      <div className="menu-heading">
        <p className="menu-eyebrow">MADE FRESH, SERVED WITH LOVE</p>
        <h2>Explore Our Menu</h2>
        <p>Find your favourites at Kebabs At Lonsdale.</p>
      </div>

      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? 'menu-category active'
                : 'menu-category'
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Menu;