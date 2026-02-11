import React from "react";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";

import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Education from "./components/Education";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Tagline />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>

      {/*<Element name="testimonials">*/}
      {/*  <Testimonials />*/}
      {/*</Element>*/}
      {/*<About />*/}
      <Element name="about">
      </Element>

      <About />
      <Element name="services">
        <Skills />
      </Element>
      <Element name="contact">
        <Connect />
      </Element>
    </div>
  );
}

export default App;
