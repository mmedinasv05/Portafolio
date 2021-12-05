import '../Components/CSS/Header.css';
import '../Components/CSS/CustomeProperties.css';
import brand from './Image/brand-min.png'
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import cv from './Assets/Curriculum.pdf';

export default function Header(){
    return(
        <>        
            <header className="header-menu">
                <NavLink className="header-brand" activeClassName="active" to="/" rel="noferrer" title="MMEDNA">
                    <img src={brand} alt="Icon brand" className="header-brand"/>
                </NavLink>

                <nav className="nav-menu">
                    <NavLink to="/" className="nav-menu-link" title="Home">Home</NavLink>
                    <NavLink to="/acerca" className="nav-menu-link" title="About">About</NavLink>
                    <NavLink to="/proyectos" className="nav-menu-link" title="Portfolio">Portfolio</NavLink>
                    <a href={cv} download className="link-cv">
                        <FontAwesomeIcon icon={faDownload} className="icon-download"/> Curriculum</a>
                </nav>
            </header>
        </>
    );
}