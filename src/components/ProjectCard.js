import React from "react";

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
            <h2 className="project-title">{title}</h2>
            {year && <p className="experience-duration">{year}</p>}
          </div>

          {problem && (
            <p className="project-content">
              <strong>Problem. </strong>
              {problem}
            </p>
          )}
          {approach && (
            <p className="project-content" style={{ marginTop: "0.75rem" }}>
              <strong>Approach. </strong>
              {approach}
            </p>
          )}
          {result && (
            <p className="project-content" style={{ marginTop: "0.75rem" }}>
              <strong>Result. </strong>
              {result}
            </p>
          )}

          {tech && (
            <div className="project-meta">
              {tech.map((item) => (
                <span key={item} className="stack-chip">
                  {item}
                </span>
              ))}
            </div>
          )}

          <a
            className="btn1"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-solid fa-up-right-from-square"
              aria-hidden="true"
            ></i>
            View project
          </a>
        </div>

        <div>
          <img
            src={img}
            alt={`Screenshot of ${title}`}
            className="project-img"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  );
}
