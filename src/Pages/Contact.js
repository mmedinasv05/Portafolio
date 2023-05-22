import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

function Contact() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [loader])

  return (
    <>
      <Header />
      {(loader) ? <Loader /> : <ContactForm />}
      <Footer />
    </>
  )
}

export default Contact;