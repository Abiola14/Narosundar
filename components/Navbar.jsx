import { useState } from "react";
import "./Navbar.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import img1 from "/src/image/1.png"; // Keeping this as you originally wrote it
import { Link } from "react-router-dom"; // Import Link from React Router

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
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
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
