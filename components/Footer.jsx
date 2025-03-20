const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <div className="footer-1">
                <i className="fa fa-phone fa-2x"></i>
                <h5>CONTACT INFO</h5>
                <p>913-473-7000</p>
                <a href="mailto:sanhitadhar394@gmail.com">
                  contact@cakeshop.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center mb-4">
              <div className="footer-1">
                <img src="../image/1.png" className="mb-4" alt="Footer Logo" />

                <p className="mb-4">
                  There are many variations of <br />
                  passages of Lorem Ipsum available be the majority.
                </p>
                <div className="footer-icon">
                  <a href="#" className="mx-2">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="footer-1">
                <i className="fa fa-location-arrow fa-2x"></i>
                <h5>ADDRESS</h5>
                <p>913-473-7000</p>
                <a href="mailto:sanhitadhar394@gmail.com">
                  contact@cakeshop.com
                </a>
              </div>
            </div>
          </div>
          <div className="f-line"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright ©2022 All rights reserved | This template is made with
                by{" "}
                <a href="https://bastech.cordismariaeschools.com/">BasTech</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div id="back-top">
        <a href="#home">
          <div>
            <i className="fa fa-angle-double-up"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
