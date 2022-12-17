import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/images/logo.jpg";
import Banner from "../assets/images/baner.jpg";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerToggler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Błyskawica" onClick={() => setIsOpen(false)} />
          </Link>
        </div>
        <div className="navbar__banner">
          <img src={Banner} alt="Błyskawica" />
        </div>
        <ul className={`${isOpen ? "show__mobileMenu" : ""} navbar__links`}>
          <NavLink
            to="/aktualnosci"
            onClick={() => setIsOpen(false)}
            className="navbar__item"
            activeClassName="active"
          >
            Aktualności
          </NavLink>
          <NavLink
            to="/publicystyka"
            onClick={() => setIsOpen(false)}
            className="navbar__item"
            activeClassName="active"
          >
            Publicystyka
          </NavLink>
          <NavLink
            to="/czytelnia"
            onClick={() => setIsOpen(false)}
            className="navbar__item"
            activeClassName="active"
          >
            Czytelnia
          </NavLink>
          <NavLink
            to="/kultura"
            onClick={() => setIsOpen(false)}
            className="navbar__item"
            activeClassName="active"
          >
            Kultura
          </NavLink>
        </ul>
        <div className="hamburger" onClick={hamburgerToggler}>
          {!isOpen ? (
            <HiOutlineBarsArrowDown className="hamburger__btn" />
          ) : (
            <HiOutlineBarsArrowUp className="hamburger__btn" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
