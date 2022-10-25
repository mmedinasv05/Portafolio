import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";

export default function About() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [loader])

  return (
    <>
      <Header />
      {(loader) ? <Loader /> : <Aboutme />}
      <Footer />
    </>
  )
}