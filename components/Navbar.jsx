import { useState } from "react";
import "./Navbar.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import img1 from "/src/image/1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="home">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid g-0">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            src/logo/1.png
            <img src={img1} alt="Logo" />
          </a>

          {/* Toggle Button */}
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            {isOpen ? (
              <RiCloseCircleLine size={30} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`navbar-collapse ${isOpen ? "show" : "collapse"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Free Quote Button */}
            <div className="d-flex">
              <a href="#" className="d-inline-block quote-btn">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
