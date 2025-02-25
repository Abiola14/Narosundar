import img1 from "/src/logo/right-arrow.svg";
import img2 from "/src/image/pic-12.png";
import img10 from "/src/image/pic-13.png";
import img11 from "/src/logo/services1.svg";
import img12 from "/src/logo/services2.svg";
import img13 from "/src/logo/services3.svg";
import img14 from "/src/image/customer.png";
import img15 from "/src/image/customer-1.png";
import img16 from "/src/image/customer-2.png";

const About = () => {
  return (
    <>
      <div
        className="container-fluid text-white py-5 d-flex align-items-center navbar"
        style={{ minHeight: "300px" }}
      >
        <div className="container text-center">
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: "50px", color: "white" }}
          >
            About
          </h1>
        </div>
      </div>

      <section className="container" id="about">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="a-item d-flex">
              <span className="d-inline-block me-4">
                <img src={img1} alt="Icon" />
              </span>
              <span className="d-inline-block a-dece">
                Be the majority have suffered alteration in some form, by
                injected humour.
              </span>
            </div>

            <div className="a-item d-flex">
              <span className="d-inline-block me-4">
                <img src={img1} alt="Icon" />
              </span>
              <span className="d-inline-block a-dece">
                Psum available be the majority have suffered alteration in some
                form, by injected humour.
              </span>
            </div>

            <div className="a-item d-flex">
              <span className="d-inline-block me-4">
                <img src={img1} alt="Icon" />
              </span>
              <span className="d-inline-block a-dece">
                Available be the majority have suffered alteration in some form,
                by injected humour.
              </span>
            </div>

            <div className="a-item d-flex">
              <span className="d-inline-block me-4">
                <img src={img1} alt="Icon" />
              </span>
              <span className="d-inline-block a-dece">
                Humour available be the majority have suffered alteration in
                some form, by injected.
              </span>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <img src={img2} className="img-fluid" alt="About Image" />
          </div>

          <div className="col-md-4 my-4">
            <div className="line ms-5"></div>
            <h2 className="ms-5">ABOUT OUR STORY</h2>
            <p className="ms-5">
              There are many variations of passages of Lorem Ipsum available be
              the majority have suffered alteration in some form, by injected
              humour or randomised words.
            </p>
            <a href="#" className="book-btn transparent ms-5">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="s-content">
                <div className="line"></div>
                <h2 className="title">ALL WE DO FOR YOU</h2>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        For Hair
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="p-list">
                          <ol className="list-unstyled">
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">
                                  Special Beard Treatment
                                </div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Color your Beard</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Wax your Beard</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Another Service</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        For Beard
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="p-list">
                          <ol className="list-unstyled">
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">
                                  Special Beard Treatment
                                </div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Color your Beard</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Wax your Beard</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start mb-2">
                              <div className="me-auto">
                                <div className="fw-bold">Another Service</div>
                              </div>
                              <span className="p-amount">
                                From <span>$40</span>
                              </span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 mb-4">
              <img src={img10} className="img-fluid" alt="Service" />
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section */}
      <section id="s-category">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="sc-item">
                <img
                  src={img11}
                  className="mb-4 img-fluid"
                  alt="Stylish Hair Cut"
                />
                <h3>
                  <a href="">Stylish hair cut</a>
                </h3>
                <p>
                  Available be the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="sc-item">
                <img
                  src={img12}
                  className="mb-4 img-fluid"
                  alt="Cut & Hair Style"
                />
                <h3>
                  <a href="">Cut & Hair Style</a>
                </h3>
                <p>
                  Available be the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="sc-item">
                <img
                  src={img13}
                  className="mb-4 img-fluid"
                  alt="Color & Hair Wash"
                />
                <h3>
                  <a href="">Color & Hair Wash</a>
                </h3>
                <p>
                  Available be the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div className="container">
          <div className="customer">
            <div className="row text-center mb-4">
              <div className="line m-auto mb-4"></div>
              <h2 className="title">CUSTOMERS SAY ABOUT US</h2>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="t-item">
                  <div className="review-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="msg">
                    &quot;Consectetur adipiscing elit, sed do eiusmod tempor
                    dunt ulter labore et dolore magna.
                  </p>
                  <div>
                    <img src={img14} alt="Customer 1" />
                    <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="t-item">
                  <div className="review-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="msg">
                    &quot;Consectetur adipiscing elit, sed do eiusmod tempor
                    dunt ulter labore et dolore magna.
                  </p>
                  <div>
                    <img src={img15} alt="Customer 2" />
                    <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="t-item">
                  <div className="review-star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="msg">
                    &quot;Consectetur adipiscing elit, sed do eiusmod tempor
                    dunt ulter labore et dolore magna.
                  </p>
                  <div>
                    <img src={img16} alt="Customer 3" />
                    <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
