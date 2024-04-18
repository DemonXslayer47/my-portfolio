import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus,
} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver, // Assuming this icon exists for MSSQL
  SiAmazonaws, // Assuming this icon exists for AWS
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Existing Icons */}
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      {/* Added Icons - Adjust based on availability */}
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftsqlserver /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      {/* Placeholder for Web Development, MS Excel, MS PowerPoint - Use custom icons or text */}
      {/* Placeholder for SQL - If specific icon needed */}
      {/* Placeholder for Shell Script - Use custom icons or text */}
      {/* Add more placeholders or icons as needed */}
    </Row>
  );
}

export default Techstack;
