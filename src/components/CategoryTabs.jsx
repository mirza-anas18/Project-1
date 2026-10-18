
function CategoryTabs({
  items,
  activeTabId,
  setActiveTabId,
}) {
  return (
    <div className="hero-tabs" id="menu">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={
            activeTabId === item.id
              ? 'hero-tab-btn active'
              : 'hero-tab-btn'
          }
          onClick={() => setActiveTabId(item.id)}
        >
          {item.tabLabel}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;