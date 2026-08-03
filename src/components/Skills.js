import React from "react";
import Reveal from "./Reveal";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function Skills() {
  return (
    <section className="section skillsdiv">
      <Reveal>
        <SectionHead
          index="03"
          eyebrow="Stack"
          title="What I work with"
        />

        <div className="stack-grid">
          {data.stack.map((group) => (
            <div key={group.group} className="card-base stack-group">
              <h3 className="stack-group-title">{group.group}</h3>
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
      </Reveal>
    </section>
  );
}
