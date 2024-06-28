import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import ContactImage from "../../Assets/contact.svg";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row className="contact-content">
          <Col md={6} className="contact-form">
            <ContactForm />
          </Col>
          <Col md={6} className="contact-image">
            <img src={ContactImage} alt="Contact" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
