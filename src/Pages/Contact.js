import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <ContactForm />}
      <Footer />
    </>
  );
}
