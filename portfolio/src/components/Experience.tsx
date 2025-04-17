import React from "react";
import { Container } from "react-bootstrap";
import "../../ProjectBed.css";

const projects = ["nSpire AI", "S&P Global", "DevX", "..."];

const ProjectBed: React.FC = () => (
  <Container fluid className="project-bed-section" id="projects">
    <Container>
      <h1 className="project-heading">
        Project <span className="highlight">BED</span>
      </h1>
      <div className="project-bed-grid">
        {projects.map((name, idx) => (
          <div className="project-image-wrapper" key={idx}>
            <img src="../../images/gardenBed.png" alt={name} />
            <div className="overlay-text">{name}</div>
          </div>
        ))}
      </div>
    </Container>
  </Container>
);

export default ProjectBed;
