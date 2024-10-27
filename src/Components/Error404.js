import "./CSS/Error404.css";
import Image404 from "./Image/404.png";

function Error404() {
  return (
    <main className="notfound__container">
      <img
        src={Image404}
        loading="lazy"
        alt="Page not found"
        className="notfound__image animate__animated animate__fadeIn"
      />
    </main>
  );
}

export default Error404;
