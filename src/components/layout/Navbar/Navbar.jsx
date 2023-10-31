import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <img
            className="logo"
            src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698600334/Schwarz/image_nfqmbr.png"
          />
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Categorías</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
