import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Components/CSS/ContactForm.css";
import "../Components/CSS/CustomeProperties.css";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <main className="contact-container">
      <section className="contact-form animate__animated animate__fadeInUp">
        <Form
          action="https://formsubmit.co/chavezofficial2015@gmail.com"
          method="POST"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Name"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="Email"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control
                name="subject"
                required
                type="text"
                placeholder="Subject"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                name="message"
                as="textarea"
                required
                rows={5}
                placeholder="Message"
              />
            </Form.Group>
          </Row>
          <Button className="btn-form mt-2" type="submit">
            Submit
          </Button>

          <input
            type="hidden"
            name="_next"
            value="https://mmedinasv05.github.io/Portafolio/#/Contacto"
          />
          <input type="hidden" name="_captcha" value="false" />
        </Form>
      </section>
    </main>
  );
}

export default ContactForm;
