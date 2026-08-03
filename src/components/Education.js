import React from "react";
import Reveal from "./Reveal";
import { FaGraduationCap } from "react-icons/fa6";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function Education() {
  return (
    <section className="section educationdiv">
      <Reveal>
        <SectionHead index="05" eyebrow="Education" title="Where I studied" />

        <div className="timeline">
          {data.education.map((item) => (
            <article
              key={item.degree}
              className={`card-base timeline-item education-item${
                item.current ? " timeline-item--current" : ""
              }`}
            >
              <div className="education-title-section">
                <div className="education-title-wrapper">
                  <FaGraduationCap
                    className="education-icon"
                    aria-hidden="true"
                  />
                  <h3 className="education-title">{item.degree}</h3>
                </div>
                <p className="education-duration">{item.duration}</p>
              </div>

              <p className="education-institution">
                {item.institution}
                <span className="education-field">{item.field}</span>
              </p>

              {item.description && (
                <p className="education-description">{item.description}</p>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
