import { useState } from 'react';
import HERO_ITEMS from './Data/Menu.json';
import './components/Menu.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import VisitUs from './components/VisitUs';
import Reviews from "./components/Reviews";
import Footer from './components/Footer';
import OrderOnline from './components/OrderOnline';

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
        <OrderOnline />
          <HowItWorks />
          <VisitUs />
          <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;