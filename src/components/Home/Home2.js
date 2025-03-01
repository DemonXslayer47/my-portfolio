// Home2.js
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
              I am a Senior Full Stack Java Developer with 5+ years of experience in designing, developing, and deploying enterprise-level web applications.
              <br />
              <br />
              I specialize in building microservices-based applications using <i><b className="purple">Java, Spring Boot, Microservices, React.js, and Angular.</b></i>
              <br />
              <br />
              My expertise includes <i><b className="purple">Spring Cloud, Spring Batch, RESTful APIs, AWS, Azure, Docker, Kubernetes</b></i> for highly scalable and secure applications.
              <br />
              <br />
              I have developed secure user authentication with <i><b className="purple">OAuth2, JWT, Spring Security</b></i> and implemented event-driven architectures using <i><b className="purple">Kafka and RabbitMQ</b></i>.
              <br />
              <br />
              With a strong foundation in <i><b className="purple">SQL and NoSQL databases</b></i> (MySQL, PostgreSQL, MongoDB), I ensure optimal performance and scalability.
              <br />
              <br />
              I am experienced in deploying applications on <i><b className="purple">AWS (EC2, RDS, Lambda), Azure (App Services, AKS), Docker, and Kubernetes</b></i> for modern cloud-based solutions.
              <br />
              <br />
              I am a strong advocate of <i><b className="purple">Agile methodologies</b></i>, continuous integration, and deployment, using tools like <i><b className="purple">Jenkins, GitHub Actions, Terraform</b></i>.
              <br />
              <br />
              Passionate about building robust software and fostering collaboration, I strive to achieve high-quality deliverables through efficient teamwork.
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
            {/* Add social links or any other elements here if needed */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
