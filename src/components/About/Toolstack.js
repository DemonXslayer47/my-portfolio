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
  SiTableau, 
  SiTerraform,
  SiBitbucket,
  SiConfluence,
  SiTrello,
  SiAzuredevops, // Assuming this icon exists for Azure DevOps
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // AWS Icon from FontAwesome

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJira /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCircleci /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJenkins /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTerraform /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBitbucket /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiConfluence /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTrello /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAzuredevops /></Col>
    </Row>
  );
}

export default Toolstack;
