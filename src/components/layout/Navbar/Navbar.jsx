import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    let lastPath = location.pathname.split("/").pop();
    if (lastPath == "home" || lastPath == "") {
      setCurrentPage("home");
    }
  });

  return (
    <>
      <header className={`${currentPage === "home" ? "" : "second-navbar"}`}>
        <div className="navbar">
          <img
            className="logo"
            src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698600334/Schwarz/image_nfqmbr.png"
          />
          <ul>
            <li>
              <Link to="/" onClick={() => setCurrentPage("home")}>
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                onClick={() => setCurrentPage("categories")}
              >
                CATEGORÍAS
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
