import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home: React.FC = () => {
  return (
    <Container fluid className="home-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={8} className="text-center">
            <div className="home-content">
              <div className="logo-container">
                <div className="floral-logo">
                  <svg className="flowers" viewBox="0 0 200 200"></svg>
                  <DotLottieReact
                    src="https://lottie.host/c6fdc9bb-1800-47bf-a2bd-b1f45b3bad1b/rdj7a0kQQn.lottie"
                    loop
                    autoplay
                  />
                </div>
                <div className="name-container">
                  <h1 className="name-heading">Anya</h1>
                  <h1 className="name-heading">Sengupta</h1>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
