import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        
        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="Realtor, Phoenix, Arizona"
              date="August 2022 - Present"
              description="Java Full Stack Developer
              Developed the Integrated Property Management System, a platform that streamlines real estate operations using Angular, Java 11, Spring Boot, and AWS services."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={{ span: 6, offset: 6 }} className="project-card project-right">
            <ProjectCard
              title="Yahoo Inc, Atlanta"
              date="April 2021 - October 2022"
              description="Java Full Stack Developer
              Worked on the Yahoo Sports Platform Revamp project, modernizing and enhancing the user experience across Yahoo Sports' digital platforms using React, Spring Boot, and AWS."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="First Citizens BancShares, Raleigh NC"
              date="November 2019 - April 2021"
              description="Java Full Stack Developer
              Developed the Community Association Banking System (CABS) to enhance financial management capabilities of community associations using Angular, Java, Spring Boot, and Azure."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={{ span: 6, offset: 6 }} className="project-card project-right">
            <ProjectCard
              title="Ambient Clinical Analytics, Rochester MN"
              date="August 2018 - November 2019"
              description="Java Full Stack Developer
              Led the development of the Integrated Care Management Platform (ICMP), a comprehensive healthcare solution using Angular 13, Java 17, Spring Boot, and AWS."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="TechTree IT systems Pvt Ltd., Bangalore, India"
              date="June 2017 - August 2018"
              description="Java Full Stack Developer
              Designed and implemented the Inventory Management System (IMS) for a retail chain using Java, Spring MVC, and AWS services."
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;