// import React, { useState, useEffect } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import "../../NavBar.css";

// const NavBar: React.FC = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   useEffect(() => {
//     const scrollHandler = () => {
//       if (window.scrollY >= 20) {
//         updateNavbar(true);
//       } else {
//         updateNavbar(false);
//       }
//     };

//     window.addEventListener("scroll", scrollHandler);
//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, []);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="#home" className="navbar-logo">
//           {/* Daisy flower logo */}
//           <div className="daisy-logo">
//             {/* SVG or image of daisy flowers */}
//           </div>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => updateExpanded(!expand)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
//                 Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
//                 About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 href="#experience"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Experience
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
//                 Contact
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

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
      img.src = `../../images/navbarFlowerAnimation/ezgif-frame-0${i}.jpg`;
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
        <Nav className="nav-links-left">
          <Nav.Item>
            <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Brand href="#home" className="navbar-logo">
          <div className="daisy-logo">
            <canvas ref={ref} />
          </div>
        </Navbar.Brand>

        <Nav className="nav-links-right">
          <Nav.Item>
            <Nav.Link href="#experience" onClick={() => updateExpanded(false)}>
              Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
