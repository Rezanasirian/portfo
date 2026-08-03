import React from "react";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Education from "./components/Education";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Element name="home">
          <Tagline />
        </Element>
        <Element name="experience" className="band">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="stack" className="band">
          <Skills />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="education" className="band">
          <Education />
        </Element>
        <Element name="contact">
          <Connect />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
