import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../NavBar.css";

const NavBar: React.FC = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll();

  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= 60; i++) {
      const img = new Image();
      img.src = `../../images/compassLogo/compass${i}.png`;
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  const render = useCallback(
    (index: number) => {
      if (images[index - 1]) {
        ref.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 60]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    render(1);
  }, [render]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-logo">
          <div className="compass-logo">
            <canvas width={1500} height={1000} ref={ref} />
          </div>
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Item>
            <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
              HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
              ABOUT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#experience" onClick={() => updateExpanded(false)}>
              WORK EXPERIENCE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#excursion" onClick={() => updateExpanded(false)}>
              EXCURSIONS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
              CONTACT
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
