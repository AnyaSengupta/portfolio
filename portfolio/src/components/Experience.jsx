import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as YUKA from "yuka";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { bottom } from "@popperjs/core";

// Timeline data
const experiences = [
  {
    title: "Research Intern – Earth & Environmental Science",
    org: "Stanford Doerr School of Sustainability",
    time: "Jun 2021 – Aug 2021 · 3 mos",
    location: "Palo Alto, CA",
    description: [
      "Researched extinction risk in marine phyla during the Paleozoic era using machine learning and logistic regression.",
      "Analyzed biological/ecological traits across geological periods using R and Stanford’s Earth Body Size dataset.",
      "Co-authored a formal report and presented findings to Stanford faculty and at the AGU (American Geophysical Union) Conference.",
      "Highlighted how data science can illuminate patterns in evolutionary history and sustainability.",
    ],
    image: "/images/stanford.png",
  },
  {
    title: "Research Intern – Astrophysics & Machine Learning",
    org: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    time: "Jun 2022 – Aug 2022 · 3 mos",
    location: "Cambridge, MA",
    description: [
      "Utilized TensorFlow and Keras to train deep learning models on over 70,000 black hole images from the Event Horizon Telescope.",
      "Built a highly accurate model to predict black hole spin and other astrophysical parameters with a 0.01 MSE.",
      "Overcame data processing challenges through mentorship and technical research.",
      "Gained insight into the interdisciplinary power of computer science in solving frontier problems in astrophysics.",
    ],
    image: "/images/harvard.png",
  },
  {
    title: "Software Engineer Intern (AI/ML)",
    org: "nSpire AI · Internship",
    time: "Jun 2024 – Aug 2024 · 3 mos",
    location: "Remote",
    description: [
      "Designed and built a live AI-powered interview tool using Python, NLP, and LLMs to assist recruiters in evaluating candidates.",
      "Developed a full-stack front-end using HTML, CSS, JavaScript, and ReactJS for seamless interactivity.",
      "Integrated a custom grading system to align candidate performance with job requirements, identifying 30% more relevant matches.",
      "Successfully pitched the tool to the CEO, CTO, and engineering leadership, leading to approval for product integration.",
    ],
    image: "/images/nspireai.png",
  },
  {
    title: "B.S. in Computer Science (Expected 2027)",
    org: "University of California, Los Angeles (UCLA)",
    time: "Sep 2023 – Jun 2027",
    location: "Los Angeles, CA",
    description: [
      "Pursuing a rigorous curriculum focused on computer science, artificial intelligence, and software engineering.",
      "Involved in multiple technical organizations and research initiatives that explore the intersection of computing and real-world impact.",
      "Passionate about leveraging technology to address social challenges through community-driven innovation.",
    ],
    image: "/images/ucla.png",
  },
  {
    title: "Developer Intern",
    org: "UCLA DevX · Internship",
    time: "Feb 2025 – Present · 4 mos",
    location: "Los Angeles, CA",
    description: [
      "Collaborating with cross-functional teams to develop scalable solutions that address student and campus needs.",
      "Gaining hands-on experience with full-stack development and user-centered design principles.",
      "Contributing to open-source projects with a focus on social good, innovation, and accessibility.",
    ],
    image: "/images/devx.png",
  },
];

const BG = "#F8EDE3";

export default function JeepManualPathTimeline() {
  const containerRef = useRef(null);

  // --- MANUAL YUKA PATH: Edit these points to match your layout visually! ---
  // X: left/right offset, Y: vertical (keep 0), Z: depth (increases as you go down)
  // You can tweak these values to make the jeep wrap around your cards as you wish
  const pathPoints = [
    new YUKA.Vector3(-6, 7, 5),
    new YUKA.Vector3(0, 7, 8),
    new YUKA.Vector3(6, 7, 4),
    new YUKA.Vector3(6, 3.0, 8),
    new YUKA.Vector3(-6, 3.0, 5),
    new YUKA.Vector3(-6, -1, 8),
    new YUKA.Vector3(6, -1, 4),
    new YUKA.Vector3(6, -6, 8),
    new YUKA.Vector3(-6, -6, 8),
    new YUKA.Vector3(-6, -9.5, 4),
    new YUKA.Vector3(6, -9.5, 2),
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Three.js setup ---
    const width = window.innerWidth -100;
    const height = Math.max(window.innerHeight + 800);
    const scene = new THREE.Scene();
    scene.background = null;

    // Orthographic camera for 2D mapping
    const aspect = width / height;
    const frustumSize = 20;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent

    // Remove old canvas if any
    const prev = document.getElementById("jeep-canvas");
    if (prev) prev.remove();
    renderer.domElement.id = "jeep-canvas";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.zIndex = 10;
    renderer.domElement.style.width = `${width}px`;
    renderer.domElement.style.height = `${height}px`;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.8));
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 10, 10);
    scene.add(light);

    // --- Build YUKA path ---
    const yukaPath = new YUKA.Path();
    pathPoints.forEach((pt) => yukaPath.add(pt.clone()));
    yukaPath.loop = false;

    // --- YUKA Vehicle setup ---
    const vehicle = new YUKA.Vehicle();
    vehicle.position.copy(yukaPath.current());
    vehicle.maxSpeed = 2;
    vehicle.steering.add(new YUKA.FollowPathBehavior(yukaPath, 0.5));
    vehicle.steering.add(new YUKA.OnPathBehavior(yukaPath));
    const entityManager = new YUKA.EntityManager();
    entityManager.add(vehicle);

    // --- Load Jeep Model ---
    const loader = new GLTFLoader();
    loader.load(
      "/images/models/jeep.glb",
      (glb) => {
        const jeep = glb.scene;

        // Normalize jeep size: fit to 1x1x1 box
        const bbox = new THREE.Box3().setFromObject(jeep);
        const size = new THREE.Vector3();
        bbox.getSize(size);
        const center = new THREE.Vector3();
        bbox.getCenter(center);
        jeep.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetDim = 1; // 1 unit wide
        const scale = targetDim / maxDim;
        jeep.scale.setScalar(scale);
        vehicle.scale = new YUKA.Vector3(0.15, 0.15, 0.15);
        jeep.matrixAutoUpdate = false;
        scene.add(jeep);
        vehicle.setRenderComponent(jeep, (entity, renderComponent) => {
          renderComponent.matrix.copy(entity.worldMatrix);
        });
      },
    );

    // --- Animate ---
    const yukaTime = new YUKA.Time();
    function animate() {
      const delta = yukaTime.update().getDelta();
      entityManager.update(delta);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // --- Cleanup ---
    return () => {
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // --- Render cards as a vertical, centered timeline with auto-sizing ---
  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: BG,
        position: "relative",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 80,
        paddingBottom: 0,
      }}
    >
      <h1 className="experience-heading" style={{ 
  fontSize: 36, 
  fontWeight: 700, 
  textAlign: 'center', 
  margin: '40px 0 32px 0', 
  color: '#222', 
  paddingBottom: 30,
}}>
  The Journey
</h1>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          id={`exp-card-${idx}`}
          style={{
            background: BG,
            borderRadius: 18,
            boxShadow: "0 4px 24px #0002",
            padding: "1.5rem 2rem",
            margin: idx === experiences.length - 1 ? "0 auto" : `0 auto 120px auto`,
            position: "relative",
            zIndex: 3,
            display: "flex",
            alignItems: "flex-start",
            width: "min(65%)",
            // maxWidth: "80%",
            minWidth: 320,
            wordBreak: "break-word",
          }}
        >
          <img
            src={exp.image}
            alt=""
            style={{
              width: 90,
              height: 90,
              objectFit: "cover",
              borderRadius: 8,
              marginRight: 20,
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontWeight: "bold",
                color: "#8A2D3B",
                marginBottom: 2,
              }}
            >
              {exp.org}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 17,
                marginBottom: 2,
              }}
            >
              {exp.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#888",
                marginBottom: 2,
              }}
            >
              {exp.time} · {exp.location}
            </div>
            <ul
              style={{
                fontSize: 13,
                margin: 0,
                paddingLeft: 18,
              }}
            >
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
