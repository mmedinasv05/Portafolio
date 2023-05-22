import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import Error404 from "../Components/Error404";
import Footer from "../Components/Footer";

function NotFound() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [loader])

  return (
    <>
      <Header />
      {(loader) ? <Loader /> : <Error404 />}
      <Footer />
    </>
  )
}

export default NotFound;