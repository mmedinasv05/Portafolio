import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

function Portfolio() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [loader])

  return (
    <>
      <Header />
      {(loader) ? <Loader /> : <Projects />}
      <Footer />
    </>
  )
}

export default Portfolio;