import React from "react";

/* Numbered eyebrow + heading, shared by every section so the sequence stays
   consistent. `eyebrow` repeats the navbar label - that is the mapping between
   the nav and the page - which frees the heading below to say something. */
export default function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  centered = false,
}) {
  return (
    <div className={`section-head${centered ? " text-center" : ""}`}>
      <p className="section-eyebrow">
        <span className="section-eyebrow-num">{index}</span>
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
