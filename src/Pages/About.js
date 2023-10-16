import { useState } from "react";
import Header from "../Components/Header";
import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

function About() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Aboutme />}
      <Footer />
    </>
  );
}

export default About;
