import '../Components/CSS/Footer.css';
import '../Components/CSS/CustomeProperties.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin, faGithub,} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return(
        <>
            <footer className="footer-container">
                <section className="footer-content">
                    <p className="footer-description">2021 Manuel Chavez, Rights Reserved.</p>
                </section>
                <section className="footer-social-media">
                    <a href="https://www.instagram.com/__manuelchavez/" target="_blank" rel="noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="footer-icon-social-media instagram"/>
                    </a>
                    <a href="mailto:chavezofficial2015@gmail.com" target="_blank" rel="noreferrer" title="Gmail">
                        <FontAwesomeIcon icon={faEnvelope} className="footer-icon-social-media email"/>
                    </a>
                    <a href="https://www.linkedin.com/in/manuel-chavez-ab0b711ab/" target="_blank" rel="noreferrer" title="Linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className="footer-icon-social-media linkedin"/>
                    </a>
                    <a href="https://github.com/mmedinasv05" target="_blank" rel="noreferrer" title="Github">
                        <FontAwesomeIcon icon={faGithub} className="footer-icon-social-media github"/>
                    </a>                                                
                </section>
            </footer>
        </>
    )
}