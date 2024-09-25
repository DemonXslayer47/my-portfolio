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
              I am a highly skilled Senior Full-Stack Developer with over 8 years of experience 
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
                <b className="purple"> JavaScript, TypeScript, Python, and modern frameworks like React.js, Angular, Flask, Django, and FastAPI. </b>
              </i>
              <br />
              <br />
              I'm well-versed in
              <i>
                <b className="purple"> Java/J2EE technologies</b>
              </i>
              and have implemented Microservices Architecture using
              <i>
                <b className="purple"> Spring Boot, Spring Cloud, and Python-based microservices frameworks. </b>
              </i>
              <br />
              <br />
              My experience spans API development in both Java and Python ecosystems, Secure Coding Practices, and extensive work with
              <i>
                <b className="purple"> both Relational and NoSQL Databases. </b>
              </i>
              <br />
              <br />
              I have expertise in deploying and managing applications on
              <i>
                <b className="purple"> AWS and Azure platforms</b>
              </i>
              , containerization using Docker, and orchestration with Kubernetes for both Java and Python applications.
              <br />
              <br />
              I am proficient in developing high-performance web applications using
              <i>
                <b className="purple"> Python frameworks like Flask for lightweight solutions, Django for full-featured apps, and FastAPI for building fast, modern APIs. </b>
              </i>
              <br />
              <br />
              I am a strong advocate of Agile and Scrum methodologies and excel in continuous integration and deployment pipelines using
              <i>
                <b className="purple"> Jenkins, GitLab CI/CD, and Terraform</b>
              </i>
              for both Java and Python projects.
              <br />
              <br />
              My commitment to delivering high-quality software is matched by my excellent communication and teamwork skills, fostering a collaborative environment to achieve project goals efficiently across multiple technology stacks.
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