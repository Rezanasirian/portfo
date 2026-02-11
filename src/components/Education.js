import React from "react";
import data from "../data/content.json";

export default function Education() {
  return (
    <div className="container-fluid educationdiv">
      <div className="text-center py-4">
        <h1>Education</h1>
      </div>

      <div className="education-list">
        {data.education?.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-main">
                <div className="education-title-section">
                  <div className="education-title-wrapper">
                    <i className="fas fa-graduation-cap education-icon"></i>
                    <h3 className="education-title">{item.degree}</h3>
                  </div>
                  <p className="education-duration">{item.duration}</p>
                </div>
                <p className="education-institution">
                  {item.institution} <span className="education-field">{item.field}</span>
                </p>
              </div>
            </div>
            {item.description && (
              <div className="education-content">
                <p className="education-description">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}