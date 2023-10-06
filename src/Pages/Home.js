import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <Welcome />}
      <Footer />
    </>
  );
}

export default Home;
