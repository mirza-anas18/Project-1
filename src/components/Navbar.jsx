
function Navbar() {
  return (
    <header className="container">
      <nav className="navbar">
        <a href="#" className="logo">
          KABABX
        </a>

        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>

        <a href="#locations" className="btn btn-orange">
          Find a shop
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
