import React, { useState } from "react";
import Header from "../components/Header";
import herocontactBg from "../assets/img/breadcrumb/breadcrumb-normal.jpg";
import NewsLetterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    "first_name": "",
    "last_name": "",
    "your_email": "",
    "phone_number": "",
    "your_message": "",
  });

  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    try {
      const response = await fetch(
        "http://localhost/servicelisting-react/wp-json/react-form/v1/submit/",
        {
          method: "POST",
          body: formBody,
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Message sent successfully!");
        setResponseMsg("Message sent successfully!");
        setFormData({
          "first_name": "",
          "last_name": "",
          "your_email": "",
          "phone_number": "",
          "your_message": "",
        });
      } else {
        console.error("Server error:", result);
        setResponseMsg("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMsg("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      {/* Breadcrumb Begin */}
      <div
        className="breadcrumb-area set-bg"
        style={{ backgroundImage: `url(${herocontactBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Contact Us</h2>
                <div className="breadcrumb__option">
                  <a href="#"><i className="fa fa-home"></i> Home</a>
                  <span>Contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43556031643!2d-118.69192431097179!3d34.020730495817475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1586670019340!5m2!1sen!2sbd"
                  height="550"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="contact__widget">
                <div className="contact__widget__address">
                  <h4>Contact Us</h4>
                  <ul>
                    <li><i className="fa fa-send"></i> 40 Baria Street 133/2 New York City</li>
                    <li><i className="fa fa-envelope"></i> hello@atheme.com</li>
                    <li><i className="fa fa-phone"></i> +88-111-555-666</li>
                  </ul>
                </div>
                <div className="contact__widget__time">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li><i className="fa fa-clock-o"></i> Mon - Fri: 6:30am - 07:45pm</li>
                    <li><i className="fa fa-clock-o"></i> Sat - Sun: 8:30am - 05:45pm</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData["first-name"]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData["last-name"]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      name="your_email"
                      placeholder="Your Email"
                      value={formData["your-email"]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={formData["phone-number"]}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <textarea
                  name="your_message"
                  placeholder="Message"
                  value={formData["your-message"]}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className="site-btn">SEND MESSAGE</button>
                {responseMsg && <p style={{ marginTop: "10px" }}>{responseMsg}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default Contact;
