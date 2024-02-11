import Header from "../Components/Header";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Projects />}
      <Footer />
    </>
  );
}
