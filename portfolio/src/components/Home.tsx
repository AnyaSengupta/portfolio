import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import "../../Home.css";

const Home: React.FC = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const canvasRefSunset = useRef<HTMLCanvasElement>(null);

  const { scrollY } = useScroll();
  const [maxScroll, setMaxScroll] = useState(670);

  useEffect(() => {
    const updateMaxScroll = () => {
      const fullHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    window.addEventListener("load", updateMaxScroll);
    return () => {
      window.removeEventListener("resize", updateMaxScroll);
      window.removeEventListener("load", updateMaxScroll);
    };
  }, []);

  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 140; i++) {
      const img = new Image();
      img.src = `/images/sunsetAnimation/sunset${i}.png`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const render = useCallback(
    (index: number) => {
      const canvas = canvasRefSunset.current;
      const ctx = canvas?.getContext("2d");
      const img = images[index - 1];

      if (canvas && ctx && img?.complete) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollY, [1, maxScroll], [1, 140], {
    clamp: true,
  });

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Math.round(latest));
  });

  useEffect(() => {
    const img = images[0];
    if (img.complete) {
      render(1);
    } else {
      img.onload = () => render(1);
    }
  }, [images, render]);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Container fluid className="home-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={8} className="text-center">
            <div className="home-content">
              <div className="logo-container">
                <div className="sunset-logo">
                  <canvas ref={canvasRefSunset}></canvas>
                </div>
                <div className="name-container">
                  <h1 className="name-heading">
                    Anya <br></br>Sengupta
                  </h1>
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
