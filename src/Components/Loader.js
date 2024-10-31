import "./CSS/Loader.css";
import "./CSS/CustomeProperties.css";

export default function Loader() {
  return (
    <section className="loader__container container__section">
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
