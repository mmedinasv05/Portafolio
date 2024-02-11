import Header from "../Components/Header";
import Error404 from "../Components/Error404";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

export default function NotFound() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Error404 />}
      <Footer />
    </>
  );
}
