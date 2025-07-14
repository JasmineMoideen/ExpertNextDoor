import React from "react";
import footerLogo from "../assets/img/footer-logo.png"; // Adjust path if different

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-lg-3 col-md-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="/">
                  <img src={footerLogo} alt="Logo" />
                </a>
              </div>
              <p>
                Challenging the way things have always been done can lead to
                creative new options that reward you.
              </p>
            </div>
          </div>

          {/* Contact info and social links */}
          <div className="col-lg-4 offset-lg-1 col-md-6">
            <div className="footer__address">
              <ul>
                <li>
                  <span>Call Us:</span>
                  <p>(+12) 345-678-910</p>
                </li>
                <li>
                  <span>Email:</span>
                  <p>info.colorlib@gmail.com</p>
                </li>
                <li>
                  <span>Fax:</span>
                  <p>(+12) 345-678-910</p>
                </li>
                <li>
                  <span>Connect Us:</span>
                  <div className="footer__social">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer navigation links */}
          <div className="col-lg-3 offset-lg-1 col-md-6">
            <div className="footer__widget">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Advantages</a>
                </li>
                <li>
                  <a href="#">Direo App</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  &copy; {currentYear} All rights reserved | This template is
                  made with <i className="fa fa-heart" aria-hidden="true"/> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
              <div className="footer__copyright__links">
                <a href="#">Terms</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
