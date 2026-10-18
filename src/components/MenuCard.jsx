function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <img
        className="menu-card-image"
        src={item.image}
        alt={item.name}
      />

      <div className="menu-card-info">
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        <span className="menu-card-price">
          A${item.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}

export default MenuCard;