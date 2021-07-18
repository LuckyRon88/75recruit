import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import LogoImage from "../assets/images/logo-1-1.png";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);
const [realMobile, setRealMobile] = useState(false);
  const realToggle = () => {
    setRealMobile(!realMobile);

  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".side-menu__toggler, gg-menu")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <a href="/">
            <img src={LogoImage} width="129" alt="" />
          </a>
          <div onClick={realToggle} className="side-menu__toggler">
       <i className="gg-menu"></i>
          </div>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks />
        </div>
        <div className="main-nav__right">
          <Link href="/contactus">
          <a className={`thm-btn ${props.btnClass}`}>
            <span>I have questions about China</span>
          </a></Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
