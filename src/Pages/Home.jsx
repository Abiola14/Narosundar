const Home = () => {
  return (
    <>
      <section id="banner">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-md-3 offset-2">
              <div className="b-content">
                <div>
                  <img src="/src/logo/scissors.svg" />
                  <h1>
                    WE&apos;RE THE <br />
                    LAST OF <br />
                    BREED.
                  </h1>
                  <p>Achive your dream style</p>
                  <a href="#" className="book-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-1">
              <div className="banner-img">
                <img src="/src/image/pic-4.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About contact */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="a-item d-flex">
                <span href="#" className="d-inline-block me-4">
                  <img src="/src/logo/right-arrow.svg" />
                </span>
                <span className="d-inline-block a-dece">
                  {" "}
                  Be the majority have suffered alteration in some form, by
                  injected humour.
                </span>
              </div>

              <div className="a-item d-flex">
                <span href="#" className="d-inline-block me-4">
                  <img src="/src/logo/right-arrow.svg" />
                </span>
                <span className="d-inline-block a-dece">
                  Psum available be the majority have suffered alteration in
                  some form, by injected humour.
                </span>
              </div>

              <div className="a-item d-flex">
                <span href="#" className="d-inline-block me-4">
                  <img src="/src/logo/right-arrow.svg" />
                </span>
                <span className="d-inline-block a-dece">
                  Available be the majority have suffered alteration in some
                  form, by injected humour.
                </span>
              </div>

              <div className="a-item d-flex">
                <span href="#" className="d-inline-block me-4">
                  <img src="/src/logo/right-arrow.svg" />
                </span>
                <span className="d-inline-block a-dece">
                  Humour available be the majority have suffered alteration in
                  some form, by injected.
                </span>
              </div>
            </div>
            <div className="col-md-4 mx-5">
              <img src="/src/image/pic-12.png" className="img-fluid" />
            </div>
            <div className="col-md-3 my-4">
              <div className="line"></div>
              <h2>ABOUT OUR STORY</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                be the majority have suffered alteration in some form, by
                injected humour or randomised words.
              </p>
              <a href="" className="book-btn transparent">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <div>
        <section id="price">
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-md-7">
                <div className="p-user-img">
                  <img src="/src/image/pic-00.png" className="img-fluid" />
                  <img src="/src/image/pic-2.png" className="img-fluid" />
                  <img src="/src/image/pic-3.png" className="img-fluid" />
                  <img src="/src/image/pic-5.png" className="img-fluid" />
                  <img src="/src/image/pic-6.png" className="img-fluid" />
                  <img src="/src/image/pic-7.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3 ms-4">
                <div className="p-content ms-4">
                  <div className="line"></div>
                  <h2>OUR TOP PRICES</h2>
                  <div className="p-list">
                    <ol className="list-group">
                      <li className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Special Beard Treatment</div>
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
                          <div className="fw-bold">Wax your Beard</div>
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
        </section>
        {/* 2nd Section */}
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
                                  <div className="fw-bold">
                                    Color your Beard
                                  </div>
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
                                  <div className="fw-bold">Wax your Beard</div>
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
                          For Bread
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
                                  <div className="fw-bold">
                                    Color your Beard
                                  </div>
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
                                  <div className="fw-bold">Wax your Beard</div>
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
                  <img src="/src/image/pic-13.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3rd Section */}
        <section id="s-category">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="sc-item">
                  <img src="/src/logo/services1.svg" className="mb-4" />
                  <h3>
                    <a href="">Stylish hair cut</a>
                  </h3>
                  <p>
                    Available be the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="sc-item">
                  <img src="/src/logo/services2.svg" className="mb-4" />
                  <h3>
                    <a href="">Cut & Hair Style</a>
                  </h3>
                  <p>
                    Available be the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="sc-item">
                  <img src="/src/logo/services3.svg" className="mb-4" />
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

        {/* 4th Section */}
        <section id="img-slider">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-0.png" />
              </div>
            </div>
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-1.png" />
              </div>
            </div>
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-2.png" />
              </div>
            </div>
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-3.png" />
              </div>
            </div>
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-4.png" />
              </div>
            </div>
            <div className="item">
              <div className="sl-item">
                <img src="/src/image/p-0.png" />
              </div>
            </div>
          </div>
        </section>
        {/* {5th Section} */}

        <section id="testimonial">
          <div className="container">
            <div className="customer">
              <div className="row text-center mb-4">
                <div className="line m-auto mb-4"></div>
                <h2 className="title">CUSTOMERS SAY ABOUT US</h2>
              </div>
              <div className="row">
                <div className="col-md-4 c-border">
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
                      <img src="/src/image/customer.png" />
                      <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 c-border">
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
                      <img src="/src/image/customer-1.png" />
                      <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 c-border">
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
                      <img src="/src/image/customer-2.png" />
                      <h6 className="d-inline-block ms-3">Wilma Mumduya</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
