import React from "react";
import { Fade } from "react-awesome-reveal";

import ProjectCard from "./ProjectCard";
import SectionHead from "./SectionHead";
import data from "../data/content.json";

export default function Projects() {
  return (
    <section className="section projectsdiv">
      <Fade direction="up" triggerOnce fraction={0.15}>
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
      </Fade>
    </section>
  );
}
