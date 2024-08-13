import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) { // Keeping the original name for consistency
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="purple">{props.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
