import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Welcome />}
      <Footer />
    </>
  );
}
