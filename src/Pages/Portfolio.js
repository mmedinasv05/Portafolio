import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { useState } from "react";

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
