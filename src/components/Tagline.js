import React from "react";
import { Fade } from "react-awesome-reveal";

import data from "../data/content.json";

export default function Tagline() {
  const { name, role, tagline, status, email, cv_link, socials } = data.profile;

  return (
    <header className="taglinediv">
      <Fade direction="down" triggerOnce>
        {status && (
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true"></span>
            {status}
          </p>
        )}
        <h1>{name}</h1>
        <p className="hero-role">{role}</p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="hero-tagline">{tagline}</p>

        <div className="hero-actions">
          <a className="btn2" href={`mailto:${email}`}>
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            Contact me
          </a>
          <a
            className="btn1"
            href={cv_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
            Résumé
          </a>
          <a
            className="btn1"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            GitHub
          </a>
        </div>
      </Fade>
    </header>
  );
}
