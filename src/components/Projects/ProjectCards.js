// ProjectCards.js
import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="purple">{props.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          <span className="purple">{props.role}</span>
          <br />
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;