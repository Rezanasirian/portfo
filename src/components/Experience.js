import React, { useState } from "react";
import data from "../data/content.json";

export default function Experience() {
  /* The most recent role starts open — collapsing everything hides the most
     important content on the page behind a click. */
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <section className="section experiencediv">
      <div className="section-head">
        <h1>Experience</h1>
      </div>

      {data.experience.map((exp, index) => {
        const isOpen = expandedIndex === index;
        const panelId = `experience-panel-${index}`;

        return (
          <article key={index} className="card-base timeline-item">
            <button
              type="button"
              className="experience-header"
              onClick={() => toggleExpand(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <div className="experience-main">
                <div className="experience-title-section">
                  <h2 className="experience-title">{exp.title}</h2>
                  <p className="experience-duration">{exp.duration}</p>
                </div>
                <p className="experience-company">
                  {exp.company}
                  {exp.company_note && (
                    <span className="experience-company-note">
                      {exp.company_note}
                    </span>
                  )}
                </p>
              </div>
              <span className="expand-icon">
                <i
                  className={`fas fa-chevron-down ${isOpen ? "rotated" : ""}`}
                  aria-hidden="true"
                ></i>
              </span>
            </button>

            {isOpen && (
              <div id={panelId} className="experience-content">
                {exp.description
                  .split("\n")
                  .filter(Boolean)
                  .map((line, lineIndex) => (
                    <p key={lineIndex} className="experience-description">
                      {line}
                    </p>
                  ))}

                {exp.tags && (
                  <div className="experience-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="experience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
