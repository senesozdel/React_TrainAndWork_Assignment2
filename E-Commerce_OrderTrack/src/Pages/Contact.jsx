import { Link } from "react-router-dom";
function Contact() {
  const onHandleSubmit = () => {
    alert("İletişime geçtiğiniz için teşekkür ederiz");
  };
  return (
    <>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Contact Us</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          <div className="box-layout-map-area section-space"></div>
          <div className="contact-icon-text-area section-space"></div>
          <div className="contact-form-content-area section-space--contact-form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-form-content-wrapper">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="contact-form-wrapper">
                          <form id="contact-form" action="">
                            <div className="row">
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="First Name *"
                                  name="customerName"
                                  id="customername"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <input
                                  type="text"
                                  placeholder="Email *"
                                  name="customerEmail"
                                  id="customerEmail"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-4">
                                <input
                                  type="text"
                                  placeholder="Subject"
                                  name="contactSubject"
                                  id="contactSubject"
                                />
                              </div>
                              <div className="col-lg-12">
                                <textarea
                                  cols={30}
                                  rows={10}
                                  placeholder="Message *"
                                  name="contactMessage"
                                  id="contactMessage"
                                  required=""
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-lg-12">
                                <button
                                  type="submit"
                                  id="submit"
                                  className="theme-button"
                                  onClick={() => onHandleSubmit()}
                                >
                                  {" "}
                                  SEND A MESSAGE
                                </button>
                              </div>
                            </div>
                          </form>
                          <p className="form-messege" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="contact-form-content">
                          <p>
                            Please view our FAQ to find answers to your
                            questions or send us an email for general questions!
                            Due to unexpected volumes, it is taking us a little
                            longer than we would like to respond to emails. Our
                            current email response time is 3 business days.
                          </p>
                          <ul className="social-links">
                            <li>
                              <a href="http://www.facebook.com/">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.plus.google.com/">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.linkedin.com/">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.twitter.com/">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Contact;
