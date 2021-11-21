import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';
import iconMe from './Image/icon-welcome-min.png'

export default function Welcome(){
    return(
        <>
            <main className="welcome-container">
                <img src={iconMe} className="icon-welcome" alt="I Love Code" loading="lazy"/>
                <section className="welcome-text">                   
                    <h1 className="welcome-title">Manu 
                        <br/>
                        Chavez.                
                    </h1>                                        
                    <p className="welcome-content">FRONTEND DEVELOPER JUNIOR.</p>
                </section>
            </main>
        </>
    )
}