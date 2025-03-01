// Projects.js
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
              title="Geisinger Health System"
              date="June 2023 - Present"
              role="Associate Developer"
              description="Developed dynamic user interfaces using React.js with Hooks, Redux, and Context API for state management. Integrated frontend with Spring Boot APIs, ensuring form validations, error handling, and responsiveness. Worked with AWS CloudWatch for monitoring and implemented FHIR standards for healthcare data exchange."
            />
          </Col>
        </Row>
        
        <Row className="project-row">
          <Col md={{ span: 6, offset: 6 }} className="project-card project-right">
            <ProjectCard
              title="Costco"
              date="December 2020 - August 2022"
              role="Java Developer"
              description="Developed e-commerce applications using Java, Spring Boot, and Microservices. Built RESTful APIs for order management, integrated React.js frontend with backend services, and implemented OAuth2 and JWT for user authentication. Utilized AWS S3, CloudWatch, and Kubernetes for deployment and monitoring."
            />
          </Col>
        </Row>
        
        <Row className="project-row">
          <Col md={6} className="project-card project-left">
            <ProjectCard
              title="Northern Trust"
              date="January 2019 - December 2020"
              role="Java Developer"
              description="Developed enterprise-grade financial applications using Java, Spring Boot, and Microservices. Integrated Kafka for real-time transaction processing and developed secure APIs with OAuth 2.0 and JWT. Deployed applications using Azure Kubernetes Service (AKS) and Azure DevOps for CI/CD automation."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
