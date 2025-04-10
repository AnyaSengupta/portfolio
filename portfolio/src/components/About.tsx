import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../About.css";

const About: React.FC = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="about-heading">
              About <span className="highlight">ME!</span>
            </h1>
          </Col>
        </Row>
        <Row className="about-content-row">
          <Col md={7}>
            <div className="about-text">
              <p>
                I am a second-year Linguistics and Computer Science major at
                UCLA. I am further developing my industry experience and
                technical skills both within and beyond coursework, with the
                goal of making a lasting impact. Outside of coursework,
              </p>
              <p>
                I am an DevX Web Developer Intern and have software engineering
                experience at nSpire AI and S&P Global.
              </p>
              <p>
                Outside of this, I enjoy playing sports like basketball and
                being outdoors through camping and hiking.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div className="profile-image-container">
              <img
                src="../../images/headshot.jpeg"
                alt="Anya Sengupta"
                className="profile-image"
              />
              <div className="cactus-decoration">{/* add image*/}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
