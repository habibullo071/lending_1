import React from "react";
import "./Header.scss";

import logo from "../../img/logo.svg";
import header from '../../img/header.png';

function Header() {
  return (
    <div className="head">
      <div className="container">
        <div className="head__top">
          <a href="*"><img src={logo} alt="logo" /></a>
          <div className="links">
            <a href="*">Home</a>
            <a href="*">About me</a>
            <a href="*">Portfolio</a>
            <a href="*">Contact</a>
          </div>
        </div>
        <div className="head__bottom">
          <div className="left">
            <b>HELLO</b>
            <h2>I`M NAME OF COMPANY</h2>
            <p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
            <button className="btn">CONTACT ME</button>
          </div>
          <div className="right">
            <img src={header} alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
