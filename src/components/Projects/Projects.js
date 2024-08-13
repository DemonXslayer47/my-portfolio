import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Keeping the original name for consistency
import Particle from "../Particle";

function Projects() { // Keeping the original name for consistency
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
              title="Corteva, Iowa"
              date="August 2022 - Present"
              description="Sr. Java Full Stack Developer
              Led the development of a sophisticated digital solution utilizing Java, Spring Boot, and React to enhance the farming experience with real-time data insights and personalized notifications."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={{ span: 6, offset: 6 }} className="project-card project-right">
            <ProjectCard
              title="EmblemHealth, NYC"
              date="March 2021 - July 2022"
              description="Java Full Stack Developer
              Contributed to the development and enhancement of a robust health management system for EmblemHealth."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="Advance Auto Parts, NYC"
              date="January 2020 - February 2021"
              description="Full Stack Developer
              Developed an Auto parts Order Fulfillment System using Java, Spring Boot, MongoDB, Redis, Docker, Kubernetes, React, and Azure services."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={{ span: 6, offset: 6 }} className="project-card project-right">
            <ProjectCard
              title="TD Bank, TX"
              date="December 2017 - December 2019"
              description="Software Developer
              Contributed to banking solutions development using Java, J2EE, Spring MVC, Hibernate, Angular, NodeJS, SQL, and more."
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="BNP Paribas, India"
              date="August 2015 - November 2017"
              description="Junior Java Developer
              Contributed to banking solutions development, leveraging Java, Spring MVC, Hibernate, AngularJS, and NodeJS."
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
