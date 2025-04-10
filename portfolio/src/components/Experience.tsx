// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "../../ProjectBed.css";

// interface ExperienceProps {
//   name: string;
// }

// const Experience: React.FC<ExperienceProps> = ({ name }) => {
//   return (
//     <Col md={6} className="project-box-col">
//       <div className="project-box">
//         <div className="watering-can">{/* SVG or image of watering can */}</div>
//         <div className="plant-bed">
//           <h3>{name}</h3>
//         </div>
//       </div>
//     </Col>
//   );
// };

// const ProjectBed: React.FC = () => {
//   return (
//     <Container fluid className="project-bed-section" id="projects">
//       <Container>
//         <h1 className="project-heading">
//           Project <span className="highlight">BED</span>
//         </h1>
//         <Row>
//           <Experience name="nSpire AI" />
//           <Experience name="S&P Global" />
//         </Row>
//         <Row>
//           <Experience name="DevX" />
//           <Experience name="..." />
//         </Row>
//       </Container>
//     </Container>
//   );
// };

// export default ProjectBed;

import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../ProjectBed.css";

const ProjectBed: React.FC = () => {
  return (
    <Container fluid className="project-bed-section" id="projects">
      <Container>
        <h1 className="project-heading">
          Project <span className="highlight">BED</span>
        </h1>
        <Row className="project-images-row">
          <div className="project-image-wrapper">
            <img src="../../images/gardenBed.png" alt="nSpire AI" />
            <div className="overlay-text">nSpire AI</div>
          </div>

          <div className="project-image-wrapper">
            <img src="../../images/gardenBed.png" alt="S&P Global" />
            <div className="overlay-text">S&P Global</div>
          </div>

          <div className="project-image-wrapper">
            <img src="../../images/gardenBed.png" alt="DevX" />
            <div className="overlay-text">DevX</div>
          </div>

          <div className="project-image-wrapper">
            <img src="/../../images/gardenBed.png" alt="..." />
            <div className="overlay-text">...</div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectBed;
