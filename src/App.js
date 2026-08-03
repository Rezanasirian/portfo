import React from "react";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Education from "./components/Education";

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
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="stack">
          <Skills />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="contact">
          <Connect />
        </Element>
      </main>
    </div>
  );
}

export default App;
