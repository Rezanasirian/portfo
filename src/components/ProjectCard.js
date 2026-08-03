import React from "react";
import { FiExternalLink } from "react-icons/fi";

/* The frame's address bar shows where the project actually lives. Falls back
   to nothing rather than throwing if a url is ever relative or malformed. */
function hostnameOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export default function ProjectCard({
  title,
  year,
  problem,
  approach,
  result,
  url,
  tech,
  img,
}) {
  return (
    <article className="card-base projectcard">
      <div className="project-grid">
        <div>
          <div className="experience-title-section">
            <h3 className="project-title">{title}</h3>
            {year && <p className="experience-duration">{year}</p>}
          </div>

          {/* Labelled rather than run-in bold, so the three parts of the story
              can be scanned without being read. */}
          <dl className="project-dl">
            {problem && (
              <>
                <dt>Problem</dt>
                <dd>{problem}</dd>
              </>
            )}
            {approach && (
              <>
                <dt>Approach</dt>
                <dd>{approach}</dd>
              </>
            )}
            {result && (
              <>
                <dt>Result</dt>
                <dd>{result}</dd>
              </>
            )}
          </dl>

          {tech && (
            <div className="project-meta">
              {tech.map((item) => (
                <span key={item} className="stack-chip">
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Still the only link in the card - CSS stretches its hit area over
              the whole card, so there is one tab stop rather than three. */}
          <a
            className="btn1 project-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" />
            View project
          </a>
        </div>

        <div className="project-media">
          <div className="project-frame">
            <div className="project-frame-bar" aria-hidden="true">
              <span className="project-frame-dot"></span>
              <span className="project-frame-dot"></span>
              <span className="project-frame-dot"></span>
              <span className="project-frame-url">{hostnameOf(url)}</span>
            </div>
            <img
              src={img}
              alt={`Screenshot of ${title}`}
              className="project-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
