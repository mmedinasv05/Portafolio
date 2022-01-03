import '../Components/CSS/Projects.css';
import '../Components/CSS/CustomeProperties.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3, faJs, faGithub, faReact} from '@fortawesome/free-brands-svg-icons';
import {faMobileAlt, faGlobe} from '@fortawesome/free-solid-svg-icons';
import Project1 from '../Components/Image/1-min.png';
import Project2 from '../Components/Image/2-min.png';
import Project3 from '../Components/Image/3-min.png';
import Project4 from '../Components/Image/4-min.png';
import Project5 from '../Components/Image/5-min.png';
import Project6 from '../Components/Image/6-min.png';

export default function Projects(){
    return(
        <>
            <main className="projects-container">

                <section className="title-project">
                    <h2 className="title-h2">
                        Portafolio.
                    </h2>
                    <p>
                        En el 2019 comencé a realizar proyectos a nivel personal para poder ir reforzando mis 
                        conocimientos y así poco a poco poder ir mejorando mis hábilidades y también poder ganar experiencia a través de 
                        nuevos retos.
                    </p>
                </section>
                <section className="projects">
                    {/* Fun Weather. */}
                    <figure className="project">
                        <img src={Project1} alt="Project Fun Weather" className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Fun Weather.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faHtml5} className="icon-tecnology"/>
                                    HTML
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faCss3} className="icon-tecnology"/>
                                    CSS
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faJs} className="icon-tecnology"/>
                                    Javascript
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Weather-App/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Weather-App" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>

                    {/* Story. */}
                    <figure className="project">
                        <img src={Project2} alt="Project Story" className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Story HTML.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faHtml5} className="icon-tecnology"/>
                                    HTML
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faCss3} className="icon-tecnology"/>
                                    CSS
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faJs} className="icon-tecnology"/>
                                    Javascript
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Story-HTML/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Story-HTML" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>

                    {/* Commerce. */}
                    <figure className="project">
                        <img src={Project3} alt="Project Commerce" className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Commerce.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faHtml5} className="icon-tecnology"/>
                                    HTML
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faCss3} className="icon-tecnology"/>
                                    CSS
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faJs} className="icon-tecnology"/>
                                    Javascript
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Landing-Page-Ecommerce-App/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Landing-Page-Ecommerce-App" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>

                    {/* Bitlab Academy. */}
                    <figure className="project">
                        <img src={Project4} alt="Project Bitlab Academy" className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Bitlab Academy.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faHtml5} className="icon-tecnology"/>
                                    HTML
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faCss3} className="icon-tecnology"/>
                                    CSS
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faJs} className="icon-tecnology"/>
                                    Javascript
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Lading-Page-Bitlab/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Lading-Page-Bitlab" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>

                    {/* Amazon Lite. */}
                    <figure className="project">
                        <img src={Project5} alt="Project Amazon Lite." className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Amazon Lite.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faHtml5} className="icon-tecnology"/>
                                    HTML
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faCss3} className="icon-tecnology"/>
                                    CSS
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faJs} className="icon-tecnology"/>
                                    Javascript
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Landing-page-Amazon/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Landing-page-Amazon" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>

                    {/* Portafolio. */}
                    <figure className="project">
                        <img src={Project6} alt="Project Portafolio." className="project-image" loading="lazy"/>
                        <figcaption className="project-content">
                            <h3 className="project-title">Portafolio.</h3>
                            <section className="project-box-tecnology">
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faReact} className="icon-tecnology"/>
                                    React
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faReact} className="icon-tecnology"/>
                                    React-router
                                </span>
                                <span className="tecnology">
                                    <FontAwesomeIcon icon={faMobileAlt} className="icon-tecnology"/>
                                    Responsive Design
                                </span>
                            </section>
                            <nav className="project-box-option">
                                <a href="https://mmedinasv05.github.io/Portafolio/" title="Ver Pagina" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-tecnology"/>
                                    Ver Pagina</a>
                                <a href="https://github.com/mmedinasv05/Portafolio" title="Ver Codigo" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="icon-tecnology"/>
                                    Ver Codigo
                                </a>
                            </nav>
                        </figcaption>
                    </figure>
                </section>
            </main>
        </>
    )
}