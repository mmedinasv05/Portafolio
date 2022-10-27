import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [loader])

  return (
    <>
      <Header />
      {(loader) ? <Loader /> : <Welcome />}
      <Footer />
    </>
  )
}