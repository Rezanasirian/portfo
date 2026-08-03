import React from "react";
import data from "../data/content.json";

export default function Skills() {
  return (
    <section className="section skillsdiv">
      <div className="section-head">
        <h1>Tech Stack</h1>
      </div>

      <div className="stack-grid">
        {data.stack.map((group) => (
          <div key={group.group} className="card-base stack-group">
            <h2 className="stack-group-title">{group.group}</h2>
            <div className="stack-chips">
              {group.items.map((item) => (
                <span key={item} className="stack-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
