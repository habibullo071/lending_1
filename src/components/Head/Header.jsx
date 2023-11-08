import React, { useState } from "react";
import "./Header.scss";

import logo from "../../img/logo.svg";
import header from '../../img/header.png';
import hamburger from '../../img/hamburgerBtn.svg'

function Header() {
  const [open, setOpen] = useState(false)
  
  function hamburgerOpen(){
    setOpen(open === false ? true : false)
  }

  return (
    <div className="head" id="1">
      <div className="container">
        <div className="head__top">
          <a href="*"><img src={logo} alt="logo" /></a>
          <div className="hamburger">
            <button onClick={hamburgerOpen}><img src={hamburger} alt="hamburger" /></button>
          </div>
          <div className="links">
            <a href="#1">Home</a>
            <a href="#2">About me</a>
            <a href="#3">Portfolio</a>
            <a href="#4">Contact</a>
          </div>
        </div>
        <div className="hamburger-links" style={open === true ? {display: "flex"} : {display: "none"}}>
            <a href="*">Home</a>
            <a href="*">About me</a>
            <a href="*">Portfolio</a>
            <a href="*">Contact</a>
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
