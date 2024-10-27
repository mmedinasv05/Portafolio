import "../Components/CSS/Projects.css";
import "../Components/CSS/CustomeProperties.css";
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

function Portfolio() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Projects />}
      <Footer />
    </>
  );
}

export default Portfolio;
