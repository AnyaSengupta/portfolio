// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";
// // import Footer from "./components/Footer";
// // import Contact from "./components/Contact/Contact";

// const App: React.FC = () => {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <NavBar />
//         {/* <ScrollToTop /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/project" element={<Projects />} /> */}
//           <Route path="/About" element={<About />} />
//           {/* <Route path="/experience" element={<Experience />} /> */}
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Routes>

//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";

// const App: React.FC = () => {
//   const [load, updateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       updateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="App" id={load ? "no-scroll" : "scroll"}>
//       <NavBar />
//       <section id="home">
//         <Home />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//     </div>
//   );
// };

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectBed from "./components/Experience";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <ProjectBed />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
