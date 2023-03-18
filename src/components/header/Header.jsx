import React, { useState } from "react";
import logo_img from "../../assets/images/logo.svg";
import arrow_down from "../../assets/images/icon-arrow-down.svg";
import arrow_up from "../../assets/images/icon-arrow-up.svg";
import { Divide as Hamburger } from "hamburger-react";

import { features_object } from "../../constants";
import "./header.css";

function NavBar(logic) {
  const [FeaturesActive, setFeaturesActive] = useState(false);
  const [CompanyActive, setCompanyActive] = useState(false);

  return (
    <nav className={logic ? "app__nav app__nav--active" : "app__nav"}>
      <ul className="app__nav-menu">
        <li
          onClick={() => {
            setFeaturesActive(!FeaturesActive);
          }}
          className="app__nav-link app__nav-link--expandable"
        >
          <a href="#">
            <span>Features</span>
            <img
              src={FeaturesActive ? arrow_up : arrow_down}
              alt="helper icon"
            />
          </a>
          <ul
            className={
              FeaturesActive
                ? "app__dropdown-menu active"
                : "app__dropdown-menu"
            }
          >
            {features_object.map((item) => {
              return (
                <div key={item.text} className="app__dropdown-menu-item">
                  <img src={item.icon} alt="nav icon" />
                  <p className="app__dropdown-menu-text">{item.text}</p>
                </div>
              );
            })}
          </ul>
        </li>
        <li
          onClick={() => {
            setCompanyActive(!CompanyActive);
          }}
          className="app__nav-link app__nav-link--expandable"
        >
          <a href="#">
            <span>Company</span>
            <img
              src={CompanyActive ? arrow_down : arrow_up}
              alt="helper icon"
            />
          </a>
          <ul
            className={
              CompanyActive
                ? "app__dropdown-menu active app__dropdown-menu--company"
                : "app__dropdown-menu"
            }
          >
            <div className="app__dropdown-menu-item">
              <p className="app__dropdown-menu-tet">History</p>
            </div>
            <div className="app__dropdown-menu-item">
              <p className="app__dropdown-menu-tet">Our Team</p>
            </div>
            <div className="app__dropdown-menu-item">
              <p className="app__dropdown-menu-tet">Blog</p>
            </div>
          </ul>
        </li>
        <li className="app__nav-link">
          {" "}
          <a href="#"> Careers</a>
        </li>
        <li className="app__nav-link">
          {" "}
          <a href="#"> About</a>
        </li>
      </ul>
      <div className="app_join-links">
        <button onClick={() => {}} className="button button-link-style">
          Login
        </button>
        <button onClick={() => {}} className="button button--secondary">
          Register
        </button>
      </div>
    </nav>
  );
}

function Header() {
  console.log(features_object);
  const link = "#";
  const [Active, setActive] = useState(false);
  return (
    <div className="app__header">
      <div className="app__logo">
        <img className="app__logo-img" src={logo_img} alt="company logo" />
      </div>
      <div
        className="app__hamburger"
        onClick={() => {
          setActive(!Active);
        }}
      >
        <Hamburger />
      </div>
      {NavBar(Active)}
    </div>
  );
}

export default Header;
