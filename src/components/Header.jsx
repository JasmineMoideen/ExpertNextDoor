import React, { useEffect, useState }from "react";
import axios from "axios";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://expertnext.demoserver.work/wp-json/custom/v1/menu/primary`) // or REACT_APP_URL if using CRA
      .then((res) => {
        setMenuItems(res.data); // depends on plugin response structure
      })
      .catch((err) => {
        console.error("Failed to load menu:", err);
      });
  }, []);
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
                  {menuItems.map((item) => (
                    <li key={item.ID}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header__menu__right">
                <a
                  href="https://expertnext.demoserver.work/wp-login.php"
                  className="primary-btn"
                >
                  <i className="fa fa-plus"></i> Login
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
