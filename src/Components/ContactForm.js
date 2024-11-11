import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const $formInput = document.querySelectorAll("form [required]");
    const $btnSubmit = document.querySelector(".form__button");

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      $formInput.forEach((inputs) => {
        inputs.classList.add("form__invalid");
      });
    }

    if (form.checkValidity() === true) {
      $btnSubmit.textContent = "Enviando mensaje...";
    }

    setValidated(true);
  };

  return (
    <main className="contact__container container__section">
      <section className="contact__form animate__animated animate__fadeIn">
        <Form
          className="form"
          action="https://formsubmit.co/mmedinasv.dev@gmail.com"
          method="POST"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                name="name"
                type="text"
                required
                placeholder="Nombre"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="Correo"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control
                name="subject"
                type="text"
                required
                placeholder="Asunto"
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
                placeholder="Mensaje"
              />
            </Form.Group>
          </Row>
          <Button className="form__button mt-2" type="submit">
            Enviar mensaje
          </Button>

          <input
            type="hidden"
            name="_next"
            value="https://mmedinasv05.github.io/Portafolio/#/contacto"
          />
          <input type="hidden" name="_captcha" value="false" />
        </Form>
      </section>
    </main>
  );
}

export default ContactForm;
