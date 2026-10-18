
const images = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

function MenuCard({ item }) {
  if (!item) return null;

  const filename = item.image?.split('/').pop();

  const imagePath = Object.entries(images).find(([path]) =>
    path.endsWith(`/${filename}`)
  )?.[1];

  return (
    <article className="menu-card">
      {imagePath && (
        <img
          className="menu-card-image"
          src={imagePath}
          alt={item.name}
        />
      )}

      <div className="menu-card-info">
        <h3>{item.name}</h3>

        {item.description && <p>{item.description}</p>}

        <span className="menu-card-price">
          A${Number(item.price).toFixed(2)}
        </span>
      </div>
    </article>
  );
}

export default MenuCard;
