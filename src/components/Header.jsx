import React from 'react';
import logo from '../assets/img/Logo.png';


const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/listing">Listing</a></li>
                  <li><a href="#">Categories</a></li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="/about">About</a></li>
                      <li><a href="/listing-details">Listing Details</a></li>
                      <li><a href="/blog-details">Blog Details</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </nav>
              <div className="header__menu__right">
                <a href="#" className="primary-btn">
                  <i className="fa fa-plus"></i> Add Listing
                </a>
                <a href="#" className="login-btn">
                  <i className="fa fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
