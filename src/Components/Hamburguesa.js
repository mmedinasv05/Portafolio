import '../Components/CSS/Hamburguesa.css';
import '../Components/CSS/CustomeProperties.css';
import Brand from './Image/brand-min.png'
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import cv from './Assets/Curriculum.pdf';



export default function Hamburguesa() {

    function  menuHandle() {
        const containerMenu = document.querySelector(".menu-options"),
        iconMenu = document.querySelector(".icon-menu");

        containerMenu.classList.toggle("menu-active");
        iconMenu.classList.toggle("icon-menu-active");
    }

    return(
        <header className="menu-container">

            <NavLink className="menu-brand" to="/" rel="noferrer" title="MMEDNA">
                <img src={Brand} className="img-brand" alt="Brand" />
            </NavLink>

            <div className="menu-hamburguesa" onClick={menuHandle}>
                <span className="icon-menu"></span>
            </div>

            <nav className="menu-options">
                <NavLink to="/" title="Inicio" className="menu-links" activeClassName="active">Inicio</NavLink>
                <NavLink to="/acerca" title="Acerca" className="menu-links">Acerca</NavLink>
                <NavLink to="/portafolio" title="Portafolio" className="menu-links">Portafolio</NavLink>
                <a href={cv} download className="link-cv" title="Descargar Curriculum">
                    <FontAwesomeIcon icon={faDownload} className="icon-download" title="Descargar Curriculum"/> Curriculum
                </a>
                <p className="firm-text">
                    Hecho con ❤️ por Manuel Chavez.
                </p>
            </nav>
        </header>
    )
}