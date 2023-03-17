import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Brand from "./Image/brand1-min.jpg";
import "../Components/CSS/Header.css";
import "../Components/CSS/CustomeProperties.css";
//import Curriculum from "./Curriculum";

const iconMenu = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/About",
    title: "About"
  },
  {
    path: "/Projects",
    title: "Projects"
  },
  {
    path: "/Contact",
    title: "Contact"
  }
];

export default function Header() {
  const $btnMenu = useRef(),
    $boxMenu = useRef();

  function handleMenu() {
    $boxMenu.current.classList.toggle("menu-active");
    $btnMenu.current.classList.toggle("icon-menu-active");
  }

  window.addEventListener("scroll", () => {
    const headerMenu = document.querySelector(".header-section");
    if (document.documentElement.scrollTop > 0) {
      headerMenu.classList.add("header-sticky");
    } else {
      headerMenu.classList.remove("header-sticky");
    }
  })

  return (
    <header className="header-section">

      <NavLink className="header-brand" to="/" rel="noferrer" title="MMEDNA">
        <img src={Brand} className="brand-image" alt="Logo mmedina" title="Logo mmedina" />
      </NavLink>

      <div className="menu-hamburguesa" onClick={handleMenu}>
        <span className="icon-menu" ref={$btnMenu}></span>
      </div>


      <nav className="header-menu" ref={$boxMenu}>
        {iconMenu.map((link, index) => {
          return <NavLink key={index} to={link.path} title={link.title} className="menu-links">{link.title}</NavLink>
        })}
        {/* <Curriculum /> */}
      </nav>
    </header>
  );
}
