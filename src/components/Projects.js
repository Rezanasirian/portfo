import React from "react";
import Reveal from "./Reveal";

import ProjectCard from "./ProjectCard";
import SectionHead from "./SectionHead";
import data from "../data/content";

export default function Projects() {
  return (
    <section className="section projectsdiv">
      <Reveal>
        <SectionHead
          index="02"
          eyebrow="Projects"
          title="Things I've shipped"
        />

        <div className="project-list">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              img={require(`../assets/${project.img}`)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
