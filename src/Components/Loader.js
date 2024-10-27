import "./CSS/Loader.css";
import "./CSS/CustomeProperties.css";

export default function Loader() {
  return (
    <section className="loader__container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
