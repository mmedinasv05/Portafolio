import "./CSS/Error404.css";
import Image404 from "./Image/404.webp";

export default function Error404() {
  return (
    <main className="notfound-container">
      <img src={Image404} alt="Page not found" className="image-notfound" />
    </main>
  );
}
