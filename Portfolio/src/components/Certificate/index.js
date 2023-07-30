import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "./Particle";
import certificate1 from "./Img/DataStructures.jpg";
import certificate2 from "./Img/AlgorithmicToolbox.jpg";
import certificate3 from "./Img/WebDev.jpg";
import certificate4 from "./Img/Incredia.jpeg";
import './index.scss'
import Loader from "react-loaders";


function Certificates() {

  const [view, setView] = useState(false);
  const [img, setImg] = useState(null);

  const handlClick = async (e) => {
    setView(true)
    setImg(e)
    console.log(e)
  }

  return (
    <>
      {view ?
        <div className="viewbox mx-auto w-50 h-75" onClick={() => { setView(false) }}>
          <img src={img} alt="" className="w-100 h-100" />
        </div>
        :
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading text-white">
              Coarse <strong style={{ color: "#c770f0" }}>Certificates </strong>
            </h1>
            <p className="text-center text-white fs-5" >
              Here are a few courses I've recently completed.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={6} className="project-card" onClick={() => handlClick(certificate1)} >
                <CertificateCard
                  imgPath={certificate1}
                  isBlog={false}
                  title="Data Structures"
                  description="This course helped me to develop a solid understanding of various data structures and their applications"
                  ghLink=""
                />
              </Col>

              <Col md={6} className="project-card" onClick={() => handlClick(certificate2)} >
                <CertificateCard
                  imgPath={certificate2}
                  isBlog={false}
                  title="Algorithmic ToolBox"
                  description="This course provided the  knowledge about various algorithms and their complexity analysis"
                  ghLink=""
                />
              </Col>

              <Col md={6} className="project-card" onClick={() => handlClick(certificate3)} >
                <CertificateCard
                  imgPath={certificate3}
                  isBlog={false}
                  title="HTML,CSS and Javascript for Web Developers"
                  description="The course helped me to establish strong foundation in the domain of frontend web development"
                  ghLink=""
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <h1 className="project-heading text-white">
              Achievement <strong style={{ color: "#c770f0" }}>Certificate</strong>
            </h1>
           
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={6} className="project-card" onClick={() => handlClick(certificate4)} >
                <CertificateCard
                  imgPath={certificate4}
                  isBlog={false}
                  title="Techtainment"
                  description="Basically a Tech event invovling aptitude and coding"
                  ghLink=""
                />
              </Col>
            </Row>
          </Container>
        </Container>
      }
      <Loader type="ball-pulse-sync" />
    </>
  );
}

export default Certificates;
