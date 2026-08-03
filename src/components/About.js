import React from "react";
import aboutImage from "../assets/About Section Image.webp";

import data from "../data/content.json";

export default function About() {
  const { about_text, name } = data.profile;

  return (
    <section className="section aboutdiv">
      <div className="section-head">
        <h1>About</h1>
      </div>

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
    </section>
  );
}
