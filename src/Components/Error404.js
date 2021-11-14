import './CSS/Error404.css';
import './CSS/CustomeProperties.css';
import NotFound from './Image/not-found2-min.png'

export default function Error404(){
    return(
        <>
            <main className="notfound-container">
                <img src={NotFound} alt="img Not Found" className="notfound-image"/>
            </main>
        </>
    )
}