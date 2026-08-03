import React from "react";
import { FiMail, FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

import data from "../data/content.json";

export default function Tagline() {
  const { name, role, tagline, status, email, cv_link, socials, stats } =
    data.profile;

  /* No reveal animation here on purpose. The hero is above the fold, so
     fading it in only delays the first thing a visitor came to read - and it
     kept the animation library in the initial bundle. */
  return (
    <header className="taglinediv">
      <div className="hero-inner">
        {status && (
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true"></span>
            {status}
          </p>
        )}
        <h1>{name}</h1>
        <p className="hero-role">{role}</p>

        <p className="hero-tagline">{tagline}</p>

        <div className="hero-actions">
          <a className="btn2" href={`mailto:${email}`}>
            <FiMail aria-hidden="true" />
            Contact me
          </a>
          <a
            className="btn1"
            href={cv_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFileText aria-hidden="true" />
            Résumé
          </a>
          <a
            className="btn1"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>

        {/* Something checkable above the fold. Every figure here is derived
            from the experience and projects further down the page. */}
        {stats && (
          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="hero-stat-value">{stat.value}</dt>
                <dd className="hero-stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>
  );
}
