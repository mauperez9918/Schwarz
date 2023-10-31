import { Link } from "react-router-dom";
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
              <Link to="/">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/categorias">CATEGORÍAS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
