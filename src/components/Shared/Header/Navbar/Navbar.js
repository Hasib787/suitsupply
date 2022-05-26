import { React, useCallback, useEffect, useRef, useState } from "react";
import "./Navbar.style.css";
import logo from "../../../../assets/logos/suitsupply-logo.svg";
const Navbar = () => {
  let navbarRef = useRef(null);

  const [position, setPosition] = useState(window.scrollY);
  const [navbarHide, setNavbarHide] = useState(true);

  //Navbar show and hide on scroll function
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (position > window.scrollY) {
        setNavbarHide(true);
        navbarRef.current.className = "header_nav";
      } else if (position < window.scrollY) {
        setNavbarHide(false);
        navbarRef.current.className = "navbar_hidden header_nav";
      }
      setPosition(window.scrollY);
    },
    [position]
  );

  useEffect(() => {
    setPosition(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <div ref={navbarRef} className="header_nav ">
        <div>
          <i
            style={{ fontSize: 22, cursor: "pointer" }}
            className="fas fa-bars"
          ></i>
        </div>
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex ">
          <a
            className="nav_link"
            href="https://suitsupply.com/en-bd/login?rurl=1"
            target="_blank"
            rel="noreferrer"
          >
            <span className="me-3">
              <i className="far fa-user"></i>
            </span>
          </a>
          <a
            className="nav_link"
            href="https://suitsupply.com/en-bd/wishlist"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="far fa-bookmark"></i>
            </span>
          </a>
          <a
            className="nav_link"
            href="https://suitsupply.com/en-bd/cart"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ms-3">
              <i className="fas fa-shopping-bag"></i>
            </span>
          </a>
        </div>
      </div>
      {navbarHide && <div style={{ height: "55px" }}></div>}
    </>
  );
};

export default Navbar;
