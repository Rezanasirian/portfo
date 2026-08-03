import React from "react";
import { Fade } from "react-awesome-reveal";
import aboutImage from "../assets/About Section Image.webp";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function About() {
  const { about_text, name } = data.profile;

  return (
    <section className="section aboutdiv">
      <Fade direction="up" triggerOnce fraction={0.15}>
        <SectionHead index="04" eyebrow="About" title="How I got here" />

        <div className="about-grid">
          <div>
            <img
              src={aboutImage}
              alt={name}
              className="about-img"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            {about_text
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
