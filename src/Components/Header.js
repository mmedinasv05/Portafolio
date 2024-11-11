import "../Components/CSS/Header.css";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { dataMenu } from "./Assets/data";
import Brand from "./Image/brand1-min.webp";

export default function Header() {
  const $btnMenu = useRef(),
    $boxMenu = useRef();

  function handleMenu() {
    $boxMenu.current.classList.toggle("menu-active");
    $btnMenu.current.classList.toggle("icon-menu-active");
  }

  document.addEventListener("scroll", () => {
    const $headerMenu = document.querySelector(".header-section");
    if (document.documentElement.scrollTop > 0) {
      $headerMenu.classList.add("header-sticky");
    } else {
      $headerMenu.classList.remove("header-sticky");
    }
  });

  return (
    <header className="header-section container__section">
      <NavLink className="header-brand" to="/" rel="noferrer" title="MMEDNA">
        <img
          src={Brand}
          className="brand-image"
          alt="Logo mmedina"
          title="Logo mmedina"
        />
      </NavLink>

      <section className="menu-hamburguesa" onClick={handleMenu}>
        <span className="icon-menu" ref={$btnMenu}></span>
      </section>

      <nav className="header-menu" ref={$boxMenu}>
        {dataMenu.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              title={link.title}
              className="menu-links"
            >
              {link.title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
