import { useState } from 'react';
import HERO_ITEMS from './data/menu.json';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import Menu from './components/Menu';

function App() {
  const [activeTabId, setActiveTabId] = useState('wraps');

  const activeItem =
    HERO_ITEMS.find((item) => item.id === activeTabId) ||
    HERO_ITEMS[0];

  return (
    <div>
      <Navbar />

      <main className="container">
        <Hero activeItem={activeItem} />

        <CategoryTabs
          items={HERO_ITEMS}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
         <Menu />
      </main>
    </div>
  );
}

export default App;
