import React from "react";
import data from "../data/content.json";

export default function Education() {
  return (
    <section className="section educationdiv">
      <div className="section-head">
        <h1>Education</h1>
      </div>

      {data.education.map((item) => (
        <article
          key={item.degree}
          className="card-base timeline-item education-item"
        >
          <div className="education-title-section">
            <div className="education-title-wrapper">
              <i
                className="fas fa-graduation-cap education-icon"
                aria-hidden="true"
              ></i>
              <h2 className="education-title">{item.degree}</h2>
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
    </section>
  );
}
