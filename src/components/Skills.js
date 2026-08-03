import React from "react";
import { Fade } from "react-awesome-reveal";

import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function Skills() {
  return (
    <section className="section skillsdiv">
      <Fade direction="up" triggerOnce fraction={0.15}>
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
      </Fade>
    </section>
  );
}
