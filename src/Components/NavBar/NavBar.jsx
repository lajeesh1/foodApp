import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navmenu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contactus")}
          className={menu === "contactus" ? "active" : ""}
        >
          Contact us
        </li>
        <li
          onClick={() => setMenu("mobileapp")}
          className={menu === "mobileapp" ? "active" : ""}
        >
          Mobile-App
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot">
            <p>2</p>
          </div>
        </div>
        <button>Sign-in</button>
      </div>
    </div>
  );
};

export default NavBar;
