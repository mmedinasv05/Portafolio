import '../Components/CSS/Header.css';
import '../Components/CSS/CustomeProperties.css';
import brand from './Image/brand-min.png'
import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <>        
            <header className="header-menu">
                <NavLink className="header-brand" activeClassName="active" to="/" rel="noferrer" title="MMEDNA">
                    <img src={brand} alt="Icon brand" className="header-brand"/>
                </NavLink>

                <nav className="nav-menu">
                    <NavLink to="/" className="nav-menu-link" title="Inicio">Inicio</NavLink>
                    <NavLink to="/acerca" className="nav-menu-link" title="Acerca">Acerca</NavLink>
                    <NavLink to="/proyectos" className="nav-menu-link" title="proyectos">Proyectos</NavLink>
                </nav>
            </header>
        </>
    );
}