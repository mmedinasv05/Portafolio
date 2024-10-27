import "../Components/CSS/ContactForm.css";
import "../Components/CSS/CustomeProperties.css";
import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import { useState } from "react";
import Loader from "../Components/Loader";

function Contact() {
  const [loading, SetLoading] = useState(true);

  setTimeout(() => {
    SetLoading(false);
  }, 1000);

  return (
    <>
      <Header />
      {loading ? <Loader /> : <ContactForm />}
      <Footer />
    </>
  );
}

export default Contact;
