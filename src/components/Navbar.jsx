const Navbar = () => {
  return (
    <div>
      <header id="#home">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid g-0">
            <a className="navbar-brand" href="#">
              <img src="/src/logo/1.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Service">
                    service
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    contact
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <a href="#" className="d-inline-block quote-btn">
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
