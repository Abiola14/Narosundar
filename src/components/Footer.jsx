const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-1">
                <i className="fa fa-phone"></i>
                <h5>CONTACT INFO</h5>
                <p>913-473-7000</p>
                <a href="mailto:sanhitadhar394@gmail.com">
                  contact@cakeshop.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="footer-1">
                <img src="/src/image/footer-logo.png" className="mb-4" />
                <p className="mb-4">
                  There are many variations of <br />
                  passages of Lorem Ipsum available be the majority.
                </p>
                <div className="footer-icon">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-1">
                <i className="fa fa-location-arrow"></i>
                <h5>CONTACT INFO</h5>
                <p>913-473-7000</p>
                <a href="mailto:sanhitadhar394@gmail.com">
                  contact@cakeshop.com
                </a>
              </div>
            </div>
          </div>
          <div className="f-line"></div>
        </div>

        <div className="col-md-12 text-center">
          <p className="copyright">
            Copyright ©2022 All rights reserved | This template is made with by{" "}
            <a href="https://bastech.cordismariaeschools.com/">BasTech</a>
          </p>
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
