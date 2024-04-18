import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiJira,
  SiCircleci,
  SiJenkins,
  SiDocker,
  SiLinux,
  SiTableau, // Assuming this icon exists
} from "react-icons/si";
// Import other icons if available or use placeholders

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Existing Icons */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      {/* Added Icons - Adjust based on availability */}
      <Col xs={4} md={2} className="tech-icons"><SiJira /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCircleci /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJenkins /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
      {/* Placeholder for Communication and Team Management, Time Management, Critical Thinking - Use custom icons or text */}
      {/* Add more placeholders or icons as needed */}
    </Row>
  );
}

export default Toolstack;