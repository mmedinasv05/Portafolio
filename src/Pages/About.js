import Header from "../Components/Header";
import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

export default function About() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Aboutme />}
      <Footer />
    </>
  );
}
