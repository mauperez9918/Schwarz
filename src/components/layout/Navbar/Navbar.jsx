import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    let lastPath = location.pathname.split("/").pop()
    setCurrentPage(lastPath)
  })

  return (
    <>
      <header className={`${ currentPage === 'home' ?  '' : 'color-secundario'}`}>
        <div   className="navbar">
          <img
            className="logo"
            src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698600334/Schwarz/image_nfqmbr.png"
          />
          <ul>
            <li>
              <Link to="/" onClick={() => setCurrentPage('home')}>INICIO</Link>
            </li>
            <li>
              <Link to="/categorias" onClick={() => setCurrentPage('categories')}>CATEGORÍAS</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setCurrentPage('contact')}>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
