import './CSS/Loader.css';
import './CSS/CustomeProperties.css';


export default function Loader() {
  return (
    <section className="loading" id='loader'>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </section>
  )
}