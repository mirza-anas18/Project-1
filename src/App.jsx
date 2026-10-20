import { useState } from 'react';
import HERO_ITEMS from './Data/Menu.json';
import './Menu.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import VisitUs from './components/VisitUs';

function App() {
  const [activeTabId, setActiveTabId] = useState('Kebabs');

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
          <HowItWorks />
          <VisitUs />
      </main>
    </div>
  );
}

export default App;