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
        <Row className="align-items-center">
          <Col md={6}>
            <ContactForm />
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <img src={ContactImage} alt="Contact" /> 
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
