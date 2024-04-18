import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import Mechazone from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import waterBot from "../../Assets/Projects/suicide.png";
import bworks from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clinical Trials Office Database"
              description="SLU School of Medicine Clinical Trials Office - Developed and implemented a robust Clinical Trials Data Tracking System using React, MSSQL, Flask, and Jupyter Notebook."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mechazone}
              isBlog={false}
              title="MECHAZONE - Automotive Parts E-commerce Platform"
              description="Designed and developed MECHAZONE, an e-commerce platform for automotive enthusiasts using React, MSSQL, Flask, Jira, Circle CI, and Docker."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mechazone}
              isBlog={false}
              title="Monitoring App using AWS EKS, Docker, Python, HTML, CSS, and JS"
              description="This repository contains a simple monitoring application built with Python Flask. It provides a web interface to visualize system resource metrics such as CPU usage, RAM usage, disk usage, and GPU utilization. Prerequisites include Python 3.9 or later, Docker, AWS CLI, and an Amazon EKS cluster set up with nodes capable of running GPU workloads (if GPU monitoring is required)."
              ghLink="#" 
              demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SQL Data Exploration and Visualization"
              description="Analyzed a constantly changing COVID-19 dataset using SQL queries, MS Excel, MSSQL, and Tableau."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Predicting the Risk of Heart Disease using AI"
              description="Conducted research to predict the risk of heart disease using Python, Jupyter notebook, Neural Networks, Decision Tree, KNN, Logistic Regression."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WaterBot - Water Quality Prediction"
              description="WaterBot - Water Quality Monitoring - A data analytics and IoT project using Python, Jupyter notebook, CNN, RNN, LSTM."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waterBot}
              isBlog={false}
              title="Web application for BWorks community service program"
              description="Developed a robust online application for BWorks, streamlining provider registration and Email automation using Angular Framework, Flask, and MSSQL."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bworks}
              isBlog={false}
              title="Wordle Game using JAVA"
              description="Developed a captivating and interactive WORDLE game using Java, implementing the Model-View-Controller (MVC) architectural pattern."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
