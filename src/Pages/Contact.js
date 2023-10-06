import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <ContactForm />}
      <Footer />
    </>
  );
}

export default Contact;
