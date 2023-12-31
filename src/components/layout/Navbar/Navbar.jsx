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
            <li>
              <Link to="/cart" onClick={() => setCurrentPage("categories")}>
                <div className="cart-elipse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                  >
                    <path
                      d="M10.3485 18.8636C10.3485 19.2382 10.2374 19.6044 10.0293 19.9158C9.82119 20.2273 9.52539 20.4701 9.17932 20.6134C8.83325 20.7568 8.45244 20.7943 8.08505 20.7212C7.71766 20.6481 7.3802 20.4677 7.11532 20.2028C6.85045 19.938 6.67007 19.6005 6.59699 19.2331C6.52392 18.8657 6.56142 18.4849 6.70477 18.1389C6.84812 17.7928 7.09087 17.497 7.40233 17.2889C7.71378 17.0808 8.07996 16.9697 8.45454 16.9697C8.95685 16.9697 9.43858 17.1692 9.79376 17.5244C10.1489 17.8796 10.3485 18.3613 10.3485 18.8636ZM18.303 16.9697C17.9284 16.9697 17.5623 17.0808 17.2508 17.2889C16.9394 17.497 16.6966 17.7928 16.5533 18.1389C16.4099 18.4849 16.3724 18.8657 16.4455 19.2331C16.5186 19.6005 16.6989 19.938 16.9638 20.2028C17.2287 20.4677 17.5661 20.6481 17.9335 20.7212C18.3009 20.7943 18.6817 20.7568 19.0278 20.6134C19.3739 20.4701 19.6697 20.2273 19.8778 19.9158C20.0859 19.6044 20.197 19.2382 20.197 18.8636C20.197 18.3613 19.9974 17.8796 19.6422 17.5244C19.2871 17.1692 18.8053 16.9697 18.303 16.9697ZM23.1771 5.56155L20.5928 13.9612C20.4278 14.5044 20.0921 14.9799 19.6354 15.3172C19.1787 15.6544 18.6255 15.8354 18.0578 15.8333H8.732C8.15616 15.8315 7.59642 15.643 7.13667 15.2963C6.67691 14.9496 6.34189 14.4632 6.18181 13.91L2.94412 2.57575H2.01515C1.71377 2.57575 1.42473 2.45603 1.21162 2.24292C0.998508 2.02981 0.878784 1.74077 0.878784 1.43939C0.878784 1.13801 0.998508 0.848967 1.21162 0.635858C1.42473 0.422748 1.71377 0.303024 2.01515 0.303024H3.22916C3.64047 0.304295 4.04028 0.438898 4.36861 0.68664C4.69694 0.934382 4.93609 1.28191 5.05019 1.67708L5.74053 4.0909H22.0909C22.2687 4.09089 22.4441 4.13262 22.6029 4.21273C22.7617 4.29284 22.8994 4.4091 23.0051 4.55215C23.1107 4.69521 23.1813 4.86106 23.2112 5.03638C23.2411 5.21169 23.2294 5.39157 23.1771 5.56155ZM20.5521 6.36363H6.3892L8.36742 13.286C8.39007 13.3652 8.43791 13.4348 8.5037 13.4844C8.56949 13.5339 8.64964 13.5607 8.732 13.5606H18.0578C18.1388 13.5608 18.2178 13.5349 18.2831 13.4868C18.3484 13.4388 18.3965 13.371 18.4205 13.2936L20.5521 6.36363Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
