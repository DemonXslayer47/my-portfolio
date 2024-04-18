import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DevSVG from "../../Assets/dev.svg"; // Ensure path is correct
import CoderSVG from "../../Assets/coder.svg"; // Import the new SVG

function Home() {
  return (
    <Container fluid className="about-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <Row>
              <Col md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Place the coder SVG here, ensuring it's aligned with the Type component */}
                <img src={CoderSVG} alt="Coder" style={{ maxWidth: "100%", height: "auto" }} />
              </Col>
              <Col md={8} style={{ textAlign: "left" }}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> <span className="purple">SREEHARI THOTA</span> </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            {/* Existing Dev SVG */}
            <img src={DevSVG} alt="Dev" style={{ maxWidth: "100%", height: "auto" }} />
          </Col>
        </Row>
      </Container>
      <Home2 />
    </Container>
  );
}

export default Home;
