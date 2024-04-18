import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// Import the SVG file
import AwsCloudSVG from "../../Assets/awscloud.svg"; // Adjust the path as necessary

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="row">
          {/* Image Column */}
          <div className="col-md-4">
            {/* Display the SVG image */}
            <img src={AwsCloudSVG} alt="AWS Cloud" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          
          {/* Text Column */}
          <div className="col-md-8">
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Sreehari Thota</span>
                from <span className="purple">Saint Louis, Missouri</span>
                <br />
                I am currently studying at Saint Louis University.
                <br />
                I am searching for jobs in fields like DevOps and Data Analytics.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Cooking
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Reading comics
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
                <li className="about-activity">
                  <ImPointRight /> Photography
                </li>
              </ul>
              <p style={{ color: "rgb(150 10 10)" }}>
                "Strive to build things that make a difference!"{" "}
              </p>
              <footer className="blockquote-footer">Sreehari Thota</footer>
            </blockquote>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
