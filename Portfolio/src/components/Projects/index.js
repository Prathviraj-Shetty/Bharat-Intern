import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import bloodb from "./Img/bloodbproject.png";
import bus from "./Img/busproject.png";
import gym from "./Img/gymproject.png";
import mba from "./Img/mbaproject.png";
import './index.scss'
import Loader from "react-loaders";


function Projects() {
  return (
    <>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-white">
          My Recent <strong style={{color:"#c770f0"}}>Works </strong>
        </h1>
        <p className="text-center text-white fs-5" >
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}  className="project-card">
            <ProjectCard
              imgPath={bloodb}
              isBlog={false}
              title="BloodB"
              description="BloodB is a comprehensive digital platform designed to optimize the process of blood donation, storage, and distribution. It facilitates efficient inventory management, ensuring the availability of different blood types for emergencies. The system securely stores donor information, including medical history and contact details, simplifying donor management. "
              ghLink="https://github.com/Prathviraj-Shetty/BloodHost.git"
              demoLink="https://blood-b.onrender.com"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="The-Gym"
              description="The Gym Project is a holistic fitness management system designed to cater to the needs of gym owners, trainers, and members alike. This comprehensive digital platform offers an array of features, including member registration, class scheduling,trainer management,search nearest gym branch, and personalized training programs."
              ghLink="https://github.com/Prathviraj-Shetty/GymHost.git"
              demoLink="https://gymfrontend-prathviraj-shetty.vercel.app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Dream Bus"
              description="A user-friendly online platform that simplifies the process of reserving bus tickets for travelers. With a wide range of bus operators and routes, users can easily search for available buses, view seat availability, and book tickets in real-time. The system securely manages user profiles, payment transactions, and ticket confirmations, ensuring a seamless booking experience."
              ghLink="https://github.com/Prathviraj-Shetty/GymHost.git"
              demoLink="https://gymfrontend-prathviraj-shetty.vercel.app"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={mba}
              isBlog={false}
              title="PLACEMENT-JKSHIM"
              description="A realtime project build for managing the placement related aspects of JKSHIM,Nitte."
              ghLink="https://github.com/PLACEMENT-JKSHIM/Placement-Portal-Backend.git"
              demoLink="https://placement-dev.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
    <Loader type="ball-pulse-sync" />
    </>
  );
}

export default Projects;
