import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profilepic.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a highly skilled Senior Java Full-Stack Developer with over 8 years of experience 
              in crafting scalable and secure enterprise and web applications across diverse domains.
              <br />
              <br />I have expertise in building responsive and dynamic user interfaces using
              <i>
                <b className="purple"> HTML5, CSS3, Bootstrap, and SASS.</b>
              </i>
              <br />
              <br />
              My skill set includes proficiency in
              <i>
                <b className="purple"> JavaScript, TypeScript, and modern frameworks like React.js and Angular. </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple"> Java/J2EE technologies</b>
              </i>
              and have implemented Microservices Architecture using
              <i>
                <b className="purple"> Spring Boot and Spring Cloud </b>
              </i>
              to transition from monolithic to microservices-based systems.
              <br />
              <br />
              My experience also spans API development, Secure Coding Practices, and extensive work with
              <i>
                <b className="purple"> both Relational and NoSQL Databases. </b>
              </i>
              Additionally, I have expertise in deploying and managing applications on
              <i>
                <b className="purple"> AWS and Azure platforms</b>
              </i>
              , containerization using Docker, and orchestration with Kubernetes.
              <br />
              <br />
              I am a strong advocate of Agile and Scrum methodologies and excel in continuous integration and deployment pipelines using
              <i>
                <b className="purple"> Jenkins and Terraform.</b>
              </i>
              <br />
              <br />
              My commitment to delivering high-quality software is matched by my excellent communication and teamwork skills, fostering a collaborative environment to achieve project goals efficiently.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
