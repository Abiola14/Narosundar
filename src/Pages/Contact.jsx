import { FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
const ContactPage = () => {
  return (
    <div>
      {/* Contact Header Section */}
      <div
        className="container-fluid  text-white py-5 d-flex align-items-center navbar"
        style={{ minHeight: "300px" }}
      >
        <div className="container">
          <h1
            className="fw-bold mb-3 "
            style={{ color: "white", fontSize: "50px" }}
          >
            Contact
          </h1>
        </div>
      </div>
      <div className="container mt-5">
        {/* Map Address */}
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373531550442!3d-37.816279742021374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57797a52377d3b1!2sButtonwood%2C%20California!5e0!3m2!1sen!2sng!4v1648660157884!5m2!1sen!2sng"
            className="w-100 rounded"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Section */}
        <h2 className="mb-4 fw-bold mt-5">
          <strong>Get in Touch</strong>
        </h2>
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card p-4 border-0 shadow-sm">
              <form>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Enter Message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                  />
                </div>
                <button type="submit" className="btn btn-danger px-4 py-2">
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-4">
            <div className="card p-4 border-0 shadow-sm">
              <div className="d-flex align-items-start mb-3">
                <FaHome className=" me-3 fs-4 text-danger" />
                <div>
                  <strong>Buttonwood, California.</strong>
                  <p className="mb-0 text-muted">Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <MdPhoneIphone className=" me-3 fs-4 text-danger" />
                <div>
                  <strong>+1 253 565 2365</strong>
                  <p className="mb-0 text-muted">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <MdOutgoingMail className=" me-3 fs-4 text-danger" />
                <div>
                  <strong>support@colorlib.com</strong>
                  <p className="mb-0 text-muted">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
