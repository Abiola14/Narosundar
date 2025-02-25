import img4 from "/src/image/pic-00.png";
import img5 from "/src/image/pic-2.png";
import img6 from "/src/image/pic-3.png";
import img7 from "/src/image/pic-5.png";
import img8 from "/src/image/pic-6.png";
import img9 from "/src/image/pic-7.png";
import img10 from "/src/image/pic-13.png";
import img11 from "/src/logo/services1.svg";
import img12 from "/src/logo/services2.svg";
import img13 from "/src/logo/services3.svg";
import img14 from "/src/image/customer.png";
import img15 from "/src/image/customer-1.png";
import img16 from "/src/image/customer-2.png";

const Service = () => {
  return (
    <div>
      <div
        className="container-fluid text-white py-5 d-flex align-items-center navbar"
        style={{ minHeight: "300px" }}
      >
        <div className="container">
          <h1
            className="fw-bold mb-3 text-center"
            style={{ fontSize: "50px", color: "white" }}
          >
            Services
          </h1>
        </div>
      </div>
      {/* section 1 */}
      <section id="price">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="p-user-img">
                <img src={img4} className="img-fluid" alt="Service 1" />
                <img src={img5} className="img-fluid" alt="Service 2" />
                <img src={img6} className="img-fluid" alt="Service 3" />
                <img src={img7} className="img-fluid" alt="Service 4" />
                <img src={img8} className="img-fluid" alt="Service 5" />
                <img src={img9} className="img-fluid" alt="Service 6" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-content ms-4">
                <div className="line ms-5"></div>
                <h2 className="text-center">OUR TOP PRICES</h2>
                <div className="p-list">
                  <ol className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="me-auto">
                        <div className="fw-bold">Special Beard Treatment</div>
                      </div>
                      <span className="p-amount">
                        From <span>$40</span>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="me-auto">
                        <div className="fw-bold">Color your Beard</div>
                      </div>
                      <span className="p-amount">
                        From <span>$40</span>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="me-auto">
                        <div className="fw-bold">Wax your Beard</div>
                      </div>
                      <span className="p-amount">
                        From <span>$40</span>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
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
      </section>
      {/* section 2 */}
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
                          <ol className="list-group">
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  Special Beard Treatment
                                </div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Color your Beard</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Wax your Beard</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Another Service</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
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
                          <ol className="list-group">
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                  Special Beard Treatment
                                </div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Color your Beard</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Wax your Beard</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Another Service</div>
                              </div>
                              <span className="p-amount">
                                From<span>$40</span>
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
            <div className="col-md-5">
              <div>
                <img src={img10} className="img-fluid" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s-category">
        <div className="container">
          <div className="row text-center">
            {[
              { img: img11, title: "Stylish hair cut" },
              { img: img12, title: "Cut & Hair Style" },
              { img: img13, title: "Color & Hair Wash" },
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="sc-item">
                  <img src={item.img} className="mb-4" alt={item.title} />
                  <h3>
                    <a href="#">{item.title}</a>
                  </h3>
                  <p>
                    Available be the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            ))}
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
              {[img14, img15, img16].map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="t-item">
                    <div className="review-star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                    <p className="msg">
                      &quot;Consectetur adipiscing elit, sed do eiusmod tempor
                      dunt ulter labore et dolore magna.
                    </p>
                    <div>
                      <img src={image} alt={`customer-${index}`} />
                      <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
