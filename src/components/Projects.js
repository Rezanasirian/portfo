import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/content.json";

export default function Projects() {
  return (
    <section className="section projectsdiv">
      <div className="section-head">
        <h1>Projects</h1>
      </div>

      <div className="project-list">
        {data.projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            img={require(`../assets/${project.img}`)}
          />
        ))}
      </div>
    </section>
  );
}
