import React, { useState } from "react";
import Reveal from "./Reveal";
import { FiChevronDown } from "react-icons/fi";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function Experience() {
  /* The most recent role starts open - collapsing everything hides the most
     important content on the page behind a click. */
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <section className="section experiencediv">
      <Reveal>
        <SectionHead
          index="01"
          eyebrow="Experience"
          title="Where I've worked"
        />

        <div className="timeline">
          {data.experience.map((exp, index) => {
            const isOpen = expandedIndex === index;
            const panelId = `experience-panel-${index}`;

            return (
              <article
                key={index}
                className={`card-base timeline-item${
                  exp.current ? " timeline-item--current" : ""
                }`}
              >
                <button
                  type="button"
                  className="experience-header"
                  onClick={() => toggleExpand(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="experience-main">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
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
                    <FiChevronDown
                      className={isOpen ? "rotated" : undefined}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                {/* Stays mounted so closing animates too. `inert` keeps the
                    collapsed content out of the tab order and the a11y tree,
                    since it is still technically rendered. */}
                <div
                  id={panelId}
                  className={`experience-panel${isOpen ? " open" : ""}`}
                >
                  <div inert={isOpen ? undefined : ""}>
                    <div className="experience-content">
                      {/* A real list. These were literal "•" characters in
                          the JSON hung off a negative text-indent, so nothing
                          but a sighted reader could tell it was a list. */}
                      <ul className="experience-bullets">
                        {exp.description
                          .split("\n")
                          .filter(Boolean)
                          .map((line, lineIndex) => (
                            <li key={lineIndex}>
                              {line.replace(/^[•\s]+/, "")}
                            </li>
                          ))}
                      </ul>

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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
